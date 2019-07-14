import React,{Component} from "react"
import {View,Text,ImageBackground} from "react-native"
import {FaNum, FaNumBold, HEIGHT, Regular, WIDTH} from "../Data"
import Svg, {ClipPath, Defs, Path, Image, Use} from "react-native-svg"
import bronzeMedal from "../../assets/img/bronze-medal.png"
import goldMedal from "../../assets/img/gold-medal.png"
import silverMedal from "../../assets/img/silver-medal.png"
import normalMedal from "../../assets/img/normal-medal.png"
const path= "M9.5,49.7L49.4,9.7c4.6-4.6,12-4.6,16.6,0L106,49.7c4.6,4.6,4.6,12,0,16.6L66,106.3c-4.6,4.6-12,4.6-16.6,0\n" +
    "\tL9.5,66.3C4.9,61.7,4.9,54.3,9.5,49.7z";

export default class UserRow extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{
                width:"80%",
                elevation:10,
                marginRight:WIDTH/28,
                borderRadius:16,
                marginTop:WIDTH/15,
                backgroundColor:"#373866",
                alignSelf:"center",
                flexDirection:"row",
                height:HEIGHT/10}}>
            <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
                <View style={{width:"100%",height:"90%"}}>
                    <ImageBackground resizeMode="contain" source={normalMedal} style={{flex:1}}>
                        <View
                            style={{width:'100%',height:WIDTH/20,marginTop:WIDTH/8.5}}>
                        <Text style={{fontFamily:FaNumBold,fontSize:12,color:"#ffffff",flex:1,textAlign:'center'}}>
                            100
                        </Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
            <View style={{flex:2}}>
                <Text style={{textAlign:'center',flex:1,color:"#fff",textAlignVertical:"center",fontFamily:Regular}}>
                    {this.props.name}
                </Text>
                <Text style={{textAlign:'center',flex:1,color:"#c7c6ce",textAlignVertical:"center",fontFamily:FaNum}}>
                    {this.props.phoneNumber}
                </Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:'120%',marginLeft:WIDTH/10,height:'120%'}}>
                <Svg viewBox="0 0 115 115" style={{flex:1}}>
                     <Defs>
                         <Path
                             id="border"
                             stroke="#f1e543"
                             strokeWidth="6"
                             d={path}
                            />
                <ClipPath id="clip">
                    <Path
                        stroke="red"
                        strokeWidth="3"
                        d={path} />
                </ClipPath>
                </Defs>
                    <Image
                        style={{backgroundColor:"#fff"}}
                        width='100%'
                        height='100%'
                        preserveAspectRatio='xMidYMid slice'
                        href={{uri:"http://www.culpepperandassociates.com/wp-content/uploads/2014/08/dummy-avatar.png"}}
                        clipPath="url(#clip)"
                    />
                    <Use fill="none" rx="15" href="#border"/>
                </Svg>
                 </View>
            </View>
            </View>
        )
    }
}
