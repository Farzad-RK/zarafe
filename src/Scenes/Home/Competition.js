import React,{Component} from "react"
import {View,Image,DeviceEventEmitter,ImageBackground,Text,TouchableOpacity,ToastAndroid} from "react-native"
import TopBar from "../../Components/TopBar"
import UserRow from "../../Components/UserRow"
import { FaNum, HEIGHT, Regular, WIDTH} from "../../Data"
import Reward from  "../../../assets/img/reward.png"
import Guide from "../../../assets/img/guide.png"
import History from "../../../assets/img/history.png"
import Coins from "../../../assets/img/coins.png"
import RewardBackground from "../../../assets/img/reward-background.png"
import Glitters from "../../../assets/img/glitters.png"
import { Navigation } from 'react-native-navigation'
import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage';
import {hideError, hideSpinner, showError, showSpinner} from "../../Navigation";
import credentials from "../../testCredentials"

export default class Competition extends  Component {

    constructor(props){
        super(props)
        this.onPressStart = this.onPressStart.bind(this)
        Navigation.events().bindComponent(this);
        this.state = {
            answeredQuestions :0,
            phoneNumber:"",
            token:"",
            getAnsweredRetryCount:0
        };
        this.getData();
        this.getAnsweredQuestions();
    }
    componentDidMount()
    {

    }
    //this function is passed through the game pages to get updated
    getAnsweredQuestions = () => {
        axios.defaults.timeout = 5*1000;
        axios({
            method: "GET",
            url: "http://193.176.243.56/api/results",
            headers: {
                "Authorization": credentials["token"],
                "Content-Type": "application/json"
            }
        }).then(response => {
            const { data : {answered_questions,total_score} } = response;
            this.setState({
                answeredQuestions :answered_questions,
            })
        }).catch( error => {
            const {getAnsweredRetryCount} = this.state;
            console.log(getAnsweredRetryCount);
            if(getAnsweredRetryCount+1<3){
                this.setState({getAnsweredRetryCount :getAnsweredRetryCount+1},
                    ()=>{
                    this.getAnsweredQuestions()
                })
            }else {
                this.setState({getAnsweredRetryCount:0},
                    ()=>{
                   // showError("noConnection");
                  //  setTimeout( ()=> hideError(),3500);
                  ToastAndroid.show("مشکل در دسترسی به اینترنت",ToastAndroid.LONG)
                })
            }
        })
    };
    getData = async () => {
        try
        {
            const token = await AsyncStorage.getItem('@token');
            const  phoneNumber = await AsyncStorage.getItem('@phoneNumber');
            this.setState({
                token:token,
                phoneNumber:phoneNumber
            })
        }
        catch(e)
        {
            // error reading value
        }
    };
    progressBar(){
        let percentage = (this.state.answeredQuestions*10)+"%";
        if(percentage==="100%")
        {
            return(
                <View style={{position:"absolute",borderRadius:15,backgroundColor:"#36b601",width:percentage,height:"100%"}}>
                </View>
            )
        }
        else
        {
            return(
                <View style={{position:"absolute",borderTopLeftRadius:15,borderBottomLeftRadius:15,backgroundColor:"#36b601",width:percentage,height:"100%"}}>
                </View>
            )
        }
    }
    onPressStart(){
        //Prepare questions api
        showSpinner();
        axios.defaults.timeout = 5*1000;
        axios({
            method: "GET",
            url:"http://193.176.243.56/api/prepare_questions",
            headers: {
                "Authorization":this.state.token,
                "Content-Type": "application/json"
            }
        }).then( response => {
            const {data : {status}} = response;
            switch (status) {
                //user answered all his/her questions
                case "111" :
                    hideSpinner();
                    Navigation.push("competitionStack",{
                        component:{
                            id:"ScorePhase",
                            name:"ScorePhase",
                            options:{
                                topBar:{
                                    visible:false
                                },
                                layout:{
                                    orientation:['portrait']
                                },
                                bottomTabs: { visible: false, drawBehind: true, animate: true }
                            },
                            passProps :{
                                token :credentials["token"],
                                phoneNumber:credentials["phoneNumber"]
                            }
                        }
                    });
                    break;
                //questions already assigned
                case "112":
                    hideSpinner();
                    Navigation.push("competitionStack",{
                        component:{
                            id:"BackgroundScreen",
                            name:"BackgroundScreen",
                            options:{
                                topBar:{
                                    visible:false
                                },
                                layout:{
                                    orientation:['portrait']
                                },
                                bottomTabs: { visible: false, drawBehind: true, animate: true }
                            }
                        }
                    }).then(
                        ()=>{
                            Navigation.push("competitionStack",{
                                component:{
                                    id:"PreparationPhase",
                                    name:"PreparationPhase",
                                    options:{
                                        topBar:{
                                            visible:false
                                        },
                                        layout:{
                                            orientation:['portrait']
                                        },
                                        bottomTabs: { visible: false, drawBehind: true, animate: true }
                                    },
                                    passProps :{
                                        token :credentials["token"],
                                        updateMainPage:this.getAnsweredQuestions,
                                        phoneNumber:credentials["phoneNumber"]
                                    }
                                }
                            })
                        }
                    )
                    break;
                //‫‪‫ all 10 questions are ready
                case "200" :
                    hideSpinner()
                    Navigation.push("competitionStack",{
                        component:{
                            id:"BackgroundScreen",
                            name:"BackgroundScreen",
                            options:{
                                topBar:{
                                    visible:false
                                },
                                layout:{
                                    orientation:['portrait']
                                },
                                bottomTabs: { visible: false, drawBehind: true, animate: true }
                            }
                        }
                    }).then(
                        ()=>{
                            Navigation.push("competitionStack",{
                                component:{
                                    id:"PreparationPhase",
                                    name:"PreparationPhase",
                                    options:{
                                        topBar:{
                                            visible:false
                                        },
                                        layout:{
                                            orientation:['portrait']
                                        },
                                        bottomTabs: { visible: false, drawBehind: true, animate: true }
                                    },
                                    passProps :{
                                        token :credentials["token"],
                                        updateMainPage:this.getAnsweredQuestions,
                                        phoneNumber:credentials["phoneNumber"]
                                    }
                                }
                            })
                        }
                    )
                    break
            }
        }).catch( error =>{
            hideSpinner();
            // ToastAndroid.show("مشکل در دسترسی به اینترنت" ,ToastAndroid.LONG)
            // showError("noConnection");
            // setTimeout( ()=> hideError(),3500);
        })
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:"#2b2d5d"}}>
                {/*<TopBar totalScore={this.state.totalScore} />*/}
                <View  style={{height:HEIGHT/10,width:'100%'}}/>
                <UserRow  name={"نام و نام خانوادگی"} phoneNumber={this.state.phoneNumber}/>
                <View style={{flexDirection:"row",width:"90%",marginTop:WIDTH/18,height:HEIGHT/18,alignSelf:"center"}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
                        <TouchableOpacity style={{justifyContent:'center',alignItems:"center",flexDirection:'row',backgroundColor:"#454672",width:"80%",height:"80%",borderRadius:10}}>
                            <Text style={{height:"80%",color:"#fff",marginRight:WIDTH/80,fontSize:11,fontFamily:Regular,textAlignVertical:"center"}}>
                                تاریخچه
                            </Text>
                            <Image style={{height:"70%",width:"20%",resizeMode:"contain"}} source={History}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
                        <TouchableOpacity style={{justifyContent:'center',alignItems:"center",flexDirection:'row',backgroundColor:"#454672",width:"80%",height:"80%",borderRadius:10}}>
                            <Text style={{height:"80%",color:"#fff",marginRight:WIDTH/80,fontSize:11,fontFamily:Regular,textAlignVertical:"center"}}>
                                جایزه
                            </Text>
                            <Image style={{height:"70%",width:"20%",resizeMode:"contain"}} source={Reward}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
                        <TouchableOpacity style={{justifyContent:'center',alignItems:"center",flexDirection:'row',backgroundColor:"#454672",width:"80%",height:"80%",borderRadius:10}}>
                            <Text style={{height:"80%",color:"#fff",marginRight:WIDTH/80,fontSize:11,fontFamily:Regular,textAlignVertical:"center"}}>
                                راهنما
                            </Text>
                            <Image style={{height:"70%",width:"20%",resizeMode:"contain"}} source={Guide}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:"100%",marginTop:WIDTH/14,height:HEIGHT/3,backgroundColor:"#1f203f" }}>
                    <ImageBackground
                        source={Glitters}
                        resizeMode="contain"
                        style={{width:"100%",height:"100%",}}>
                        <Image
                            source={RewardBackground}
                            resizeMode="stretch"
                            style={{position:"absolute",left:-(WIDTH/10),width:"50%",height:"100%"}}
                        />
                        <Image
                            source={Coins}
                            resizeMode="contain"
                            style={{
                                width:"100%",
                                height:"20%",
                                position:"absolute",
                                bottom:-(WIDTH/35)}}/>
                        <View style={{right:0,width:"70%",height:"80%",position:"absolute"}}>
                            <Text style={{flex:1,color:"#fff",fontSize:16,fontFamily:Regular,textAlign:"center",textAlignVertical:"center"}}>
                                جایزه های این هفته
                                <Text style={{color:"#fefe06"}}>
                                    {" زرافه"}
                                </Text>
                            </Text>
                            <Text style={{flex:1,color:"#fff",fontSize:16,fontFamily:Regular,textAlign:"center",textAlignVertical:"center"}}>
                             نفر اول :
                                <Text>
                                    {" ۲۰ میلیون تومان"}
                                </Text>
                            </Text>
                            <Text style={{flex:1,color:"#fff",fontSize:16,fontFamily:Regular,textAlign:"center",textAlignVertical:"center"}}>
                                نفر دوم :
                                <Text>
                                    {" ۱۵ میلیون تومان"}
                                </Text>
                            </Text>
                            <Text style={{flex:1,color:"#fff",fontSize:16,fontFamily:Regular,textAlign:"center",textAlignVertical:"center"}}>
                                 نفر سوم :
                                <Text>
                                    {" ۱۰ میلیون تومان"}
                                </Text>
                            </Text>
                        </View>
                        </ImageBackground>
                        </View>
                        <View style={{alignItems:"center",justifyContent:"center",width:"100%",height:HEIGHT/4.75}}>
                            <TouchableOpacity onPress={this.onPressStart} style={{backgroundColor:"#454672",borderRadius:15,width:"80%",height:"50%"}}>
                                {this.progressBar()}
                                <View style={{alignSelf:"center",width:"25%",height:"100%"}}>
                                    <Text style={{flex:1.2,color:"#fff",textAlignVertical:"center",textAlign:"center",fontSize:18,fontFamily:Regular}}>
                                        شروع
                                    </Text>
                                    <Text style={{flex:0.8,color:"#fff",textAlignVertical:"center",textAlign:"center",fontSize:14,fontFamily:FaNum}}>
                                        {this.state.answeredQuestions+"/10"}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
            </View>
        )
    }
}