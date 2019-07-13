import React,{Component} from "react"
import {View,TouchableOpacity,Text,Image,Switch} from "react-native"
import {HEIGHT, Regular, WIDTH} from "../../Data";
import {Navigation} from "react-native-navigation"
import BackArrow from "../../../assets/img/back-arrow.png"
import Notification from "../../../assets/img/notification.png"
import Clock from "../../../assets/img/clock.png"
import Theme from "../../../assets/img/theme.png"
import About from "../../../assets/img/about.png"
import Contact from "../../../assets/img/Contact.png"
import Logout from "../../../assets/img/logout.png"


export default class Settings extends Component {
    constructor(props){
        super(props);
        this.state = {
            notification:false,
            theme:false
        };
        this.switchHandler = this.switchHandler.bind(this)
    }
    onPressBack = () => {
        Navigation.pop("Settings");
    };
    switchHandler(id ,value){
        switch (id) {
            case "notification":
                this.setState({
                    notification:value
                });
                break;
            case "theme":
                this.setState({
                    theme:value
                });
                break;
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{
                    flexDirection:"row",
                    backgroundColor:"#373866",
                    height:HEIGHT/10}}>
                    <View style={{flex:3,alignItems:"center",justifyContent:"center"}}>
                        <Text style={{color:"#fff",marginLeft:WIDTH/4,fontFamily:Regular,fontSize:20}}>تنظیمات</Text>
                    </View>
                    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity onPress={this.onPressBack} style={{width:"50%",height:"50%"}}>
                        <Image
                            resizeMode="contain"
                            source={BackArrow}
                            style={{flex:1,width:undefined,height:undefined}}
                        />
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignItems:"center",backgroundColor:"#2b2d5d",width:"100%",height:HEIGHT-(HEIGHT/10)}}>
                    <View style={{alignItems:"center",backgroundColor:"#373866",width:"80%",borderRadius:15,height:"75%",marginTop:HEIGHT/11}}>
                        {/*  notification    */}
                        <View style={{width:"100%",marginTop:WIDTH/40,paddingRight:WIDTH/18,borderColor:"#5e6184",borderBottomWidth:1,height:"16%",flexDirection:"row"}}>
                            <View style={{flex:3,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                                <Switch value={this.state.notification}
                                        trackColor={{true:"#4a4c5b",false:"#626588"}}
                                        thumbColor={(this.state.notification ?'#ffff01':'#aaabad')}
                                        style={{ transform: [{ scaleX: 1}, { scaleY:1 }] }}
                                        onValueChange={value => this.switchHandler("notification",value)} />
                                <Text style={{color:"#ffffff",textAlign:"right",marginLeft:WIDTH/5,fontFamily:Regular}}>هشدار</Text>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                <View style={{backgroundColor:"#626588",width:WIDTH/10,borderRadius:4,height:WIDTH/10,transform:[{rotate:"45deg"}]}}>
                                </View>
                                <Image resizeMode="contain" source={Notification} style={{position:"absolute",width:WIDTH/20,height:WIDTH/20}}/>
                            </View>
                        </View>
                        {/*  change notification time   */}
                        <View style={{width:"100%",paddingRight:WIDTH/18,borderColor:"#5e6184",borderBottomWidth:1,height:"16%",flexDirection:"row"}}>
                            <View style={{flex:3,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                                <Text style={{color:"#ffffff",marginLeft:WIDTH/5,fontFamily:Regular}}>تغییر زمان هشدار</Text>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                <View style={{backgroundColor:"#626588",width:WIDTH/10,borderRadius:4,height:WIDTH/10,transform:[{rotate:"45deg"}]}}>
                                </View>
                                <Image resizeMode="contain" source={Clock} style={{position:"absolute",width:WIDTH/20,height:WIDTH/20}}/>
                            </View>
                        </View>
                        {/*  change theme   */}
                        <View style={{width:"100%",paddingRight:WIDTH/18,borderColor:"#5e6184",borderBottomWidth:1,height:"16%",flexDirection:"row"}}>
                            <View style={{flex:3,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                                <Switch value={this.state.theme}
                                        trackColor={{true:"#4a4c5b",false:"#626588"}}
                                        thumbColor={(this.state.theme ?'#ffff01':'#aaabad')}
                                        style={{ transform: [{ scaleX: 1}, { scaleY:1 }] }}
                                        onValueChange={value => this.switchHandler("theme",value)} />
                                <Text style={{color:"#ffffff",marginLeft:WIDTH/5,fontFamily:Regular}}>تم تاریک</Text>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                <View style={{backgroundColor:"#626588",width:WIDTH/10,borderRadius:4,height:WIDTH/10,transform:[{rotate:"45deg"}]}}>
                                </View>
                                <Image resizeMode="contain" source={Theme} style={{position:"absolute",width:WIDTH/20,height:WIDTH/20}}/>
                            </View>
                        </View>
                        {/*  about us  */}
                        <View style={{width:"100%",paddingRight:WIDTH/18,borderColor:"#5e6184",borderBottomWidth:1,height:"16%",flexDirection:"row"}}>
                            <View style={{flex:3,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                                <Text style={{color:"#ffffff",marginLeft:WIDTH/5,fontFamily:Regular}}>{"درباره ی ما        "}</Text>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                <View style={{backgroundColor:"#626588",width:WIDTH/10,borderRadius:4,height:WIDTH/10,transform:[{rotate:"45deg"}]}}>
                                </View>
                                <Image resizeMode="contain" source={About} style={{position:"absolute",width:WIDTH/20,height:WIDTH/20}}/>
                            </View>
                        </View>
                        {/*  contact with us  */}
                        <View style={{width:"100%",paddingRight:WIDTH/18,borderColor:"#5e6184",borderBottomWidth:1,height:"16%",flexDirection:"row"}}>
                            <View style={{flex:3,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                                <Text style={{color:"#ffffff",marginLeft:WIDTH/5,fontFamily:Regular}}>{"ارتباط با ما        "}</Text>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                <View style={{backgroundColor:"#626588",width:WIDTH/10,borderRadius:4,height:WIDTH/10,transform:[{rotate:"45deg"}]}}>
                                </View>
                                <Image source={Contact} resizeMode="contain" style={{position:"absolute",width:WIDTH/20,height:WIDTH/20}}/>
                            </View>
                        </View>
                        {/*  logout */}
                        <View style={{width:"100%",paddingRight:WIDTH/18,borderColor:"#5e6184",height:"16%",flexDirection:"row"}}>
                            <View style={{flex:3,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                                <Text style={{color:"#ffffff",marginLeft:WIDTH/5,fontFamily:Regular}}>{"ارتباط با ما        "}</Text>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                <View style={{backgroundColor:"#626588",width:WIDTH/10,borderRadius:4,height:WIDTH/10,transform:[{rotate:"45deg"}]}}>
                                </View>
                                <Image source={Logout} resizeMode="contain" style={{position:"absolute",width:WIDTH/20,height:WIDTH/20}}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}