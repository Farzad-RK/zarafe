import React,{Component} from "react"
import {View,ToastAndroid,Text,Image,ImageBackground,TouchableOpacity} from "react-native"
import StartButton from "../../../assets/img/startButton.png"
import RegularButton from "../../Components/RegularButton"
import Camera from "../../../assets/img/camera.png"
import {FaNum, FaNumBold, HEIGHT, Regular} from "../../Data"
import {Navigation} from "react-native-navigation";
import {getPersianNumber} from "../../Helper";

export default class PreparationPhase extends Component {

    constructor(props)
    {
        super(props)
        this.onPressStart = this.onPressStart.bind(this)

    }
    componentDidMount()
    {

    }
    onPressStart()
    {
        // Navigation.pop("PreparationPhase")
        Navigation.push("competitionStack",{
            component:{
                id:"PrestartPhase",
                name:"PrestartPhase",
                options:{
                    layout:{
                        orientation:['portrait']
                    },
                    bottomTabs: { visible: false, drawBehind: true, animate: true }
                },
                passProps : {
                    token:this.props.token,
                    phoneNumber:this.props.phoneNumber,
                    data:this.props.data
                }
            }
        })
    }
    onPressCancel = () =>{
        Navigation.popTo("Competition")
    };
    render()
    {   const { data : { current_question_number } } = this.props;
        const currentQuestion = "سوال " + getPersianNumber((current_question_number+1));
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
}