import React,{Component} from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'
import {Bold, FaNum, Regular} from "../Data";

export default class InputField extends Component {

    constructor(props) {
        super(props);
        TextInput.defaultProps.selectionColor = "#e8e9eb"
    }
    onTextChanged = (text)=>{
        this.props.onPhoneNumberChanged(text)
    }
    render(){
        if(this.props.label==null){
            return(
                <View style={[styles.container,{height:45}]}>
                    <View style={[styles.inputContainer]}>
                        <TextInput style={styles.input}
                                   onChangeText={this.onTextChanged}
                                   keyboardType={this.props.keyboardType}
                                   placeholder={this.props.placeholder}
                                   placeholderTextColor={'#666666'}/>
                    </View>
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>{this.props.label}</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                               onChangeText={this.onTextChanged}
                               keyboardType={this.props.keyboardType}
                               placeholder={this.props.placeholder}
                               placeholderTextColor={'#666666'}/>
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:100,
        paddingLeft:10,
        paddingRight:10,
    },
    labelContainer: {
        flex:1,
    },
    label:{
        padding:10,
        flex:1,
        marginRight:'12%',
        textAlign:'right',
        color:'#e8e9eb',
        fontFamily:Regular,
        fontSize:16
    },
    inputContainer: {
       flex:1,
       alignItems: 'center',
    },
    input: {
        paddingLeft:20,
        paddingRight:20,
        borderWidth:2,
        flex:1,
        width:'80%',
        color:'#e8e9eb',
        textAlign:'center',
        fontFamily:FaNum,
        fontSize:16,
        borderColor:'#222149',
        borderRadius:10,
        backgroundColor:'#23234F',
        shadowColor: '#20224b',
        shadowOffset: { width:0, height:0 },
        shadowOpacity:0.8,
        shadowRadius:10,
        elevation:1
    }
})