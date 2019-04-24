import React,{Component} from "react"
import {View, Text, StyleSheet, Image, KeyboardAvoidingView, Keyboard, Animated} from "react-native"
import {Regular} from "../../Data"
import bottomImage from "../../../assets/img/auth-bottom.png"
import TopLine from "../../../assets/img/top-line.svg"
import InputField from "../../Components/InputField"
import RegularButton from "../../Components/RegularButton";
import { Navigation } from 'react-native-navigation'

export default class Authentication extends Component {

    constructor(props){
        super(props)
    }
    onPress(){
       Navigation.popTo('sms')
    }
    render(){
        const offset =80
        return(
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style ={styles.title}>زرافه</Text>
                    <TopLine style={styles.topLine} width={'80%'} height={1} />
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>ورود</Text>
                    </View>
                    <InputField label={"شماره تماس"}  keyboardType={"phone-pad"}/>
                    <KeyboardAvoidingView style={styles.buttonContainer} keyboardVerticalOffset={offset} behavior="padding" enabled>
                        <RegularButton onPress={this.onPress} title={"مرحله بعد"}  />
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.bottomContainer}>
                  <Image style={styles.bottomImage} source={bottomImage}/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:"#2B2D5C",
        flex:1
    },
    titleContainer:{
          flex:0.7,
          justifyContent:'center',
          alignItems:'center'
    },
    title:{
          justifyContent:'center',
          textAlign:'center',
          color:'#aab7bf',
          fontFamily:Regular,
          fontSize:18
    },
    topLine:{
        marginTop:10,
    },
    formContainer :{
        alignItems:'center',
        flex:6,
    },
    headingContainer: {
        borderWidth:1,
        marginTop:15,
        marginBottom:20
    },
    heading: {
        textAlign:'center',
        fontFamily:Regular,
        color:'#fff',
        fontSize:34,
    },
    buttonContainer: {
        flex:1,
        marginBottom:'10%',
        justifyContent: 'flex-end',
    },
    bottomContainer: {
        flex:1,
        zIndex:1,
        justifyContent: 'flex-end',
    },
    bottomImage:{
        flex:1,
        height:'100%',
        width: '100%',
        resizeMode: 'stretch',
    },
})