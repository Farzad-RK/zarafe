import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,Text} from 'react-native'
import {Regular} from "../Data";
export default class RegularButton extends Component {
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.dis){
            return(
                <TouchableOpacity disabled={true} style={[styles.button,this.props.style]} onPress={this.props.onPress}>
                    <Text style={[styles.title,this.props.textStyle]}>{this.props.title}</Text>
                </TouchableOpacity>
            )
        }else {
            return(
                <TouchableOpacity style={[styles.button,this.props.style]} onPress={this.props.onPress}>
                    <Text style={[styles.title,this.props.textStyle]}>{this.props.title}</Text>
                </TouchableOpacity>
            )
        }
    }
}
const styles = StyleSheet.create({
    button :{
        width:150,
        height:50,
        justifyContent: 'center',
        backgroundColor:'#2f3164',
        borderRadius:50,
        borderWidth:1,
        borderColor:'#272854',
        shadowColor: '#20224b',
        shadowOffset: { width:20, height:20 },
        shadowOpacity:0.8,
        shadowRadius:50,
        elevation:5
    },
    title:{
        color:'#fffffb',
        fontFamily:Regular,
        fontSize:14,
        textAlign:'center'
    }
})