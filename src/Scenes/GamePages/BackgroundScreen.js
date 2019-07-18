import React,{Component} from "react"
import {View} from "react-native"

export default class BackgroundScreen extends  Component{

    constructor(props) {
        super(props);

    }
    render()
    {
        return(
            <View style={{flex:1,backgroundColor:"#2b2d5d"}}>

            </View>
        )
    }

}