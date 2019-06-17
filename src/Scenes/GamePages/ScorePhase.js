import React,{Component}from "react"
import {View,Image,Text} from "react-native"
import ResultBackground from "../../../assets/img/result-background.png"
import {HEIGHT, Regular, WIDTH} from "../../Data";
import ScoreOlive from "../../../assets/img/score-olive.png"
import MotiveMessage from "../../../assets/img/score-motive-message.png"
import RegularButton from "../../Components/RegularButton";
import {Navigation} from "react-native-navigation";
import ThreeStar from "../../../assets/img/three-star.png"
export default class ScorePhase extends Component{
    constructor(props) {
        super(props);
    }
    onPress = () =>{
        Navigation.popToRoot("ScorePhase")
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:"#2b2d5d",}}>
                <Image resizeMode="stretch" source={ResultBackground} style={{flex:1,opacity:0.2,width:undefined,height:undefined}}/>
                <View style={{alignItems:"center",alignSelf:"center",marginTop:HEIGHT/8,position:"absolute",width:"100%",height:"65%"}}>
                   <Image source={MotiveMessage} resizeMode="stretch" style={{top:-HEIGHT/35,position:"absolute",width:"100%",height:"20%"}}/>
                    <Text style={{position:"absolute",top:HEIGHT/35,fontFamily:Regular,color:"#fff",fontSize:22}}>
                        عالیه ادامه بده
                    </Text>
                   <View style={{alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255, 255, 255, 0.05)",width:"80%",height:"100%"}}>
                        <View style={{width:"100%",height:"70%"}}>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                                <Text style={{fontFamily:Regular,marginRight:WIDTH/40,fontSize:22,color:"#ffc871"}}>
                                    ۲۰+ امتیاز
                                </Text>
                                <Image resizeMode="stretch" source={ThreeStar} style={{width:"20%",height:"50%"}}/>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{fontFamily:Regular,fontSize:18,color:"#fff"}}>
                                    جواب های درست :
                                    <Text>
                                        {" ۲/۱۰"}
                                    </Text>
                                </Text>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{fontFamily:Regular,fontSize:18,color:"#fff"}}>
                                    امتیاز کل :
                                    <Text>
                                        {" ۲۰۰"}
                                    </Text>
                                </Text>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{fontFamily:Regular,fontSize:18,color:"#fff"}}>
                                    رتبه شما :
                                    <Text>
                                        {" ۱"}
                                    </Text>
                                </Text>
                            </View>
                        </View>
                   </View>
                    <RegularButton onPress={this.onPress} title="صفحه اصلی" style={{width:"35%",height:"11%",zIndex:99999,position:"absolute",top:0.54*HEIGHT,backgroundColor:"#4ab74a"}} />
                    <Image source={ScoreOlive} resizeMode="stretch" style={{top:0.48*HEIGHT,zIndex:0,position:"absolute",width:"90%",height:"20%"}}/>
                </View>
            </View>
        )
    }

}