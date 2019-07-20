import React,{Component} from "react"
import {View,FlatList,ToastAndroid} from "react-native"
import TopBar from "../../Components/TopBar";
import LeaderBoardRow from "../../Components/LeaderBoardRow";
import {HEIGHT, WIDTH} from "../../Data";
import {observer} from "mobx-react"
import axios from  "axios"

@observer
export default class LeaderBoard extends  Component
{

    constructor(props)
    {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this.getLeaderBoard = this.getLeaderBoard.bind(this);
        this.state =
        {
            data:[],
            retryAttempt:0
        };
        this.getLeaderBoard()
    }
    _keyExtractor = (item, index) => index.toString();
    renderItem({item})
    {
        return(
            <LeaderBoardRow
                score = {item.score}
                rank = {item.rank}
                phoneNumber = {item.phoneNumber}
                username = {item.username}
                avatar={item.avatar}
            />
        )
    }
    getLeaderBoard()
    {
        axios.defaults.timeout = 5 * 1000;
        axios({
            method: "GET",
            url: "http://193.176.243.56/api/leaderboard",
            headers: {
                "Authorization": this.props.store.token,
                "Content-Type": "application/json"
            }
        })
            .then(
                response => {
                    const {data} = response;
                    const filteredData = [];
                    data.forEach(
                        (element,index) =>
                        {
                            const {score ,user:{avatar,phone_number,username}} = element;
                            filteredData.push({
                                    score:score,
                                    rank:index+1,
                                    username:username,
                                    avatar:avatar,
                                    phoneNumber:phone_number})
                        })
                    this.setState({data:filteredData})
                })
            .catch(
                error => {
                  if(this.state.retryAttempt<=3)
                  {
                      const {retryAttempt} = this.state
                      this.setState({retryAttempt:retryAttempt+1})
                      this.getLeaderBoard()
                  }
                  else
                  {
                      ToastAndroid.show("مشکل در دسترسی به اینترنت",ToastAndroid.LONG)
                  }
                });
    }
    render()
    {
        const {store : {totalScore ,phoneNumber,rank }} = this.props;

        return(
            <View style={{flex:1,backgroundColor:"#2b2d5d"}}>
                {/*<TopBar/>*/}
                <View  style={{height:HEIGHT/10,width:'100%'}}/>
                <View style={{width:"100%",height:"70%"}}>
                    <FlatList
                        contentContainerStyle={{paddingBottom:"10%"}}
                        keyExtractor={this._keyExtractor}
                        data={this.state.data}
                        showsVerticalScrollIndicator={true}
                        scrollEnabled={true}
                        renderItem={this.renderItem}
                        />
                </View>
                <View style={{width:"100%",borderTopWidth:1,borderColor:"#9296af",height:"20%"}}>
                    <LeaderBoardRow score={totalScore} phoneNumber={phoneNumber} rank={rank}/>
                </View>
            </View>
        )
    }
}