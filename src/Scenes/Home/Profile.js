import React,{Component} from "react"
import {View,Text,TouchableOpacity,TextInput} from "react-native"
import Settings from "../../../assets/img/settings.svg"
import AvatarCover from "../../../assets/img/avatar-cover.svg"
import TopBar from "../../Components/TopBar";
import {FaNum, HEIGHT, Regular, WIDTH} from "../../Data";
import {ClipPath, Defs, Image, Path, Use} from "react-native-svg";
import Svg from "react-native-svg";
import {Navigation} from "react-native-navigation";
const path= "M9.5,49.7L49.4,9.7c4.6-4.6,12-4.6,16.6,0L106,49.7c4.6,4.6,4.6,12,0,16.6L66,106.3c-4.6,4.6-12,4.6-16.6,0\n" +
    "\tL9.5,66.3C4.9,61.7,4.9,54.3,9.5,49.7z";

export default class Profile extends  Component {

    constructor(props){
        super(props)
    }
    onPressSettings = ()=>{
        Navigation.push("profileStack",{
            component:{
                id:"Settings",
                name:"Settings",
                options:{
                    bottomTabs: { visible: false, drawBehind: true, animate: true },
                    layout: {
                        orientation: ['portrait']
                    }
                }
            }
        })
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:"#2b2d5d"}}>
                {/*<TopBar/>*/}
                <View  style={{height:HEIGHT/10,width:'100%'}}/>
                <View style={{flex:1.8,alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity onPress={this.onPressSettings} style={{flexDirection:"row",width:"80%",justifyContent:"center",alignItems:"center",height:"60%",backgroundColor:"#454672",borderRadius:16}}>
                        <Text style={{fontFamily:Regular,fontSize:16,color:"#ffffff"}}>{"  تنظیمات"}</Text>
                        <Settings width={"10%"} height={"50%"}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:9,alignItems:"center",justifyContent:"center"}}>
                    <View style={{backgroundColor:"#373866",width:"80%",marginTop:HEIGHT/40,height:"90%",borderRadius:16}}>
                        <View style={{position:"absolute",width:WIDTH/5,alignSelf:"center",height:WIDTH/5,top:-(WIDTH/10)}}>
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
                            <TouchableOpacity  style={{position:"absolute",zIndex:999,backgroundColor:"rgba(47, 49, 49, 0.45)",alignItems:"center",justifyContent:"center",borderRadius:45,top:"25%",alignSelf:"center",width:"50%",height:"50%"}}>
                                <AvatarCover syle={{zIndex:0}} width={"60%"} height={"60%"}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:"100%",height:"90%",marginTop:HEIGHT/18}}>
                            <View style={{flex:1,justifyContent:"center"}}>
                                <Text style={{alignSelf:"flex-end",fontFamily:Regular,color:"#ffffff",fontSize:12,marginBottom:HEIGHT/100,marginRight:WIDTH/11}}>نام کاربری</Text>
                                <TextInput style={{textAlign:"center",textAlignVertical:"center",padding:0,fontFamily:Regular,alignSelf:"center",color:"#fff",width:"85%",height:"50%",borderRadius:10,backgroundColor:"#24234f"}}/>
                            </View>
                            <View style={{flex:1,justifyContent:"center"}}>
                                <Text style={{alignSelf:"flex-end",fontFamily:Regular,color:"#ffffff",fontSize:12,marginBottom:HEIGHT/100,marginRight:WIDTH/11}}>نام </Text>
                                <TextInput style={{color:"#fff",textAlign:"center",textAlignVertical:"center",padding:0,fontFamily:Regular,alignSelf:"center",width:"85%",height:"50%",borderRadius:10,backgroundColor:"#24234f"}}/>
                            </View>
                            <View style={{flex:1,justifyContent:"center"}}>
                                <Text style={{alignSelf:"flex-end",fontFamily:Regular,color:"#ffffff",fontSize:12,marginBottom:HEIGHT/100,marginRight:WIDTH/11}}>نام خانوادگی</Text>
                                <TextInput style={{color:"#fff",textAlign:"center",textAlignVertical:"center",padding:0,fontFamily:Regular,alignSelf:"center",width:"85%",height:"50%",borderRadius:10,backgroundColor:"#24234f"}}/>
                            </View>
                            <View style={{flex:1,justifyContent:"center"}}>
                                <Text style={{alignSelf:"flex-end",fontFamily:Regular,color:"#ffffff",fontSize:12,marginBottom:HEIGHT/100,marginRight:WIDTH/11}}>شماره تماس</Text>
                                <TextInput keyboardType="phone-pad" style={{textAlign:"center",textAlignVertical:"center",padding:0,fontFamily:FaNum,color:"#fff",alignSelf:"center",width:"85%",height:"50%",borderRadius:10,backgroundColor:"#24234f"}}/>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                <TouchableOpacity style={{justifyContent:"center",textAlign:"center",borderRadius:10,backgroundColor:"#36b601",elevation:5,width:"40%",height:"50%"}}>
                                    <Text style={{textAlign:"center",color:"#fff",fontFamily:Regular}}>ذخیره</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}