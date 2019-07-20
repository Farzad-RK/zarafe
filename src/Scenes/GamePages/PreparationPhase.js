import React,{Component} from "react"
import {View, ToastAndroid, Text, Image, ImageBackground, TouchableOpacity, BackHandler} from "react-native"
import StartButton from "../../../assets/img/startButton.png"
import RegularButton from "../../Components/RegularButton"
import Camera from "../../../assets/img/camera.png"
import {FaNum, HEIGHT, Regular} from "../../Data"
import {Navigation} from "react-native-navigation";
import {getPersianNumber} from "../../Helper";
import axios from "axios"

export default class PreparationPhase extends Component {

    constructor(props)
    {
        super(props)
        this.onPressStart = this.onPressStart.bind(this);
        this.getVideo = this.getVideo.bind(this);
        this.handleBack = this.handleBack.bind(this)
        this.getVideo();
        this.state= {
            data:null
        }
        this.dataBackup = null
    }
    handleBack()
    {
        Navigation.popTo("Competition")
        return true
    }
    componentDidMount()
    {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
    }
    getVideo (){
        axios.defaults.timeout = 5*1000;
        axios({
            method: "GET",
            url:"http://193.176.243.56/api/get_video",
            headers: {
                "Authorization":this.props.token,
                "Content-Type": "application/json"
            }
        }).then( response => {
            const {data} = response;
            this.dataBackup = data;
            this.setState({
                data:data
            })
        }).catch( error =>{
           ToastAndroid.show("مشکل در دسترسی به سرور")
           Navigation.popTo("Competition")
        })
    }
    onPressStart()
    {
        if(this.state.data!==null)
        {
            Navigation.pop("PreparationPhase").then(
                ()=>{
                    Navigation.push("competitionStack",{
                        component:{
                            id:"PrestartPhase",
                            name:"PrestartPhase",
                            options:{
                                topBar:{
                                    visible:false
                                },
                                layout:{
                                    orientation:['portrait']
                                },
                                bottomTabs: { visible: false, drawBehind: true, animate: true }
                            },
                            passProps : {
                                token:this.props.token,
                                phoneNumber:this.props.phoneNumber,
                                updateMainPage:this.props.updateMainPage,
                                data:this.dataBackup
                            }
                        }
                    })
                }
            )
        }
    }
    onPressCancel = () =>{
        Navigation.popTo("Competition")
    };
    render()
    {
        let currentQuestion ="";
        let current_question_number = 0;
        if(this.state.data!==null)
        {
            current_question_number = this.state.data.current_question_number;
            currentQuestion = "سوال " + getPersianNumber((current_question_number+1));
        }
        return(
            <View style={{flex:1}}>
                <View style={{
                    flex:1,
                    alignItems:"center",
                    justifyContent:"center",
                    backgroundColor:"#373866"}}>
                    <Text style={{
                        textAlign:"center",
                        fontFamily:Regular,
                        color:"#fff",
                        fontSize:18,
                        textAlignVertical:"center"}}>
                        {currentQuestion}
                    </Text>
                </View>
                <View style={{flex:10,backgroundColor:"#2b2d5d"}}>
                    <View style={{flex:2}}>
                        <View style={{flex:1,alignItems:"center",justifyContent:"flex-end"}}>
                            <Text style={{fontFamily:FaNum,fontSize:22,color:"#fff"}}>
                                {current_question_number+1+"/10"}
                            </Text>
                        </View>
                        <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
                            <Text style={{textAlign:"center",textAlignVertical:"center",fontFamily:Regular,fontSize:22,color:"#fff"}}>
                               آماده هستید؟
                            </Text>
                        </View>
                    </View>
                    <View style={{flex:4}}>
                        <TouchableOpacity onPress={this.onPressStart} style={{flex:1.9}}>
                            <ImageBackground
                                resizeMode="cover"
                                source={StartButton}
                                style={{flex:1,width:undefined,justifyContent:"center",height:undefined,alignItems:"center"}}>
                                <Text style={{fontFamily:Regular,marginBottom:HEIGHT/50,fontSize:22,color:"#fbfffc"}}>
                                    بزن بریم
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <View style={{flex:4}}>
                            <View style={{flex:1.4,justifyContent:"flex-end",alignItems:"center"}}>
                                <RegularButton title={"انصراف"} onPress={this.onPressCancel} style={{backgroundColor:"#c2272d"}}/>
                            </View>
                            <View style={{flex:3}}>
                                <Image source={Camera} resizeMode="stretch" style={{flex:1,width:undefined,height:undefined}}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    componentWillUnmount()
    {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    }
}