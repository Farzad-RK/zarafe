import React,{Component} from "react"
import {View,Image,Text} from "react-native"
import {FaNum, HEIGHT, WIDTH} from "../Data";
import star from "../../assets/img/Star.png"
import timer from "../../assets/img/Timer.png";

export default class TopBar extends  Component {

    constructor(props) {
        super(props);

    }

    render(){
        return(
            <View style={{
                flexDirection:"row",
                backgroundColor:"#373866",
                height:HEIGHT/10}}>
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'flex-end'}}>
                    <Text style={{
                        backgroundColor:"#23224e",
                        borderRadius:16,
                        height:"35%",
                        fontSize:13,
                        color:"#fff",
                        fontFamily:FaNum,
                        paddingLeft:5,
                        textAlignVertical:'center',
                        marginRight:WIDTH/25,
                        width:"65%"}}>
                        25000
                    </Text>
                    <Image
                        source={star}
                        style={{
                        position:'absolute',
                        zIndex:50,
                        height:"70%",
                        width:"35%"}}>
                    </Image>
                </View>
                <View style={{flex:1}}/>
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    marginRight:WIDTH/14,
                    alignItems:'flex-end'}}>
                    <Text style={{
                        backgroundColor:"#23224e",
                        borderRadius:16,
                        height:"35%",
                        fontSize:13,
                        color:"#fff",
                        fontFamily:FaNum,
                        textAlign:'center',
                        textAlignVertical:'center',
                        marginRight:WIDTH/25,
                        width:"65%"}}>
                        24:00
                    </Text>
                    <Image
                        source={timer}
                        style={{
                            position:'absolute',
                            zIndex:50,
                            height:"70%",
                            width:"35%"}}>
                    </Image>
                </View>
            </View>
        )
    }
}