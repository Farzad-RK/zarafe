import React,{Component} from "react"
import {View,Text} from "react-native"
export default class News extends  Component {

    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Text>"News"</Text>
            </View>
        )
    }
}