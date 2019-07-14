import React,{Component} from "react"
import {View,Text,FlatList} from "react-native"
import TopBar from "../../Components/TopBar";
import LeaderBoardRow from "../../Components/LeaderBoardRow";
import {WIDTH} from "../../Data";
export default class LeaderBoard extends  Component
{

    constructor(props)
    {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this.state =
        {
            data:[{score:100,phoneNumber:"09397449800",username:"test_user",rank:4},{score:100,phoneNumber:"09397449800",username:"test_user",rank:1}]
        };
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
            />
        )
    }
    render()
    {
        return(
            <View style={{flex:1,backgroundColor:"#2b2d5d"}}>
                <TopBar/>
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
                    <LeaderBoardRow/>
                </View>
            </View>
        )
    }
}