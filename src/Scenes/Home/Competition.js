import React,{Component} from "react"
import {View,Image,ImageBackground,Text,TouchableOpacity} from "react-native"
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
import AsyncStorage from '@react-native-community/async-storage';
export default class Competition extends  Component {

    constructor(props){
        super(props)
        this.onPressStart = this.onPressStart.bind(this)
        this.state = {
            answeredQuestions :4,
            phoneNumber:"",
            token:""
        }
        this.getData()
    }
    getData = async () => {
        try {
            const token = await AsyncStorage.getItem('@token');
            const  phoneNumber = await AsyncStorage.getItem('@phoneNumber');
            this.setState({
                token:token,
                phoneNumber:phoneNumber
            })
        } catch(e) {
            // error reading value
        }
    }
    progressBar(){
        let percentage = (this.state.answeredQuestions*10)+"%";
        return(
            <View style={{position:"absolute",borderTopLeftRadius:15,borderBottomLeftRadius:15,backgroundColor:"#36b601",width:percentage,height:"100%"}}>
            </View>
        )
    }
    onPressStart(){
        Navigation.push("competitionStack",{
            component:{
                id:"ScorePhase",
                name:"ScorePhase",
                options:{
                    layout:{
                        orientation:['portrait']
                    }
                }
            }
        })
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:"#2b2d5d"}}>
                <TopBar/>
                <UserRow name={"نام و نام خانوادگی"} phoneNumber={this.state.phoneNumber}/>
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
                                        4/10
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
            </View>
        )
    }
}