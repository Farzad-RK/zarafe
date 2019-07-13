import React,{Component} from "react"
import {View,Text} from "react-native"
import TopBar from "../../Components/TopBar";
import LeaderBoardRow from "../../Components/LeaderBoardRow";
export default class LeaderBoard extends  Component {

    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:"#2b2d5d"}}>
                <TopBar/>
                <View style={{width:"100%",height:"70%",borderWidth:1}}>

                </View>
                <View style={{width:"100%",borderWidth:1,height:"20%"}}>
                    <LeaderBoardRow/>
                </View>
            </View>
        )
    }
}