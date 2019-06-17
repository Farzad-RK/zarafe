import React,{Component} from 'react'
import {View, Text, Animated, Easing, AsyncStorage} from 'react-native'
import {HEIGHT, Regular, WIDTH} from "../Data";
import LoadingIcon from "../../assets/img/loading.svg"

export default class SpinnerOverlay extends Component {

    constructor(props){
        super(props)
        this.spinValue = new Animated.Value(0)
    }
    componentDidMount(){
        this.spin()
    }
    spin(){
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
    render(){
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return(

            <View style={{
                flex:1,
                borderWidth:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'rgba(0,0,0,0.5)'
            }}>
                <View style={{
                    width:WIDTH/1.8,
                    borderRadius:10,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#dedede',
                    height:HEIGHT/3
                }}>
                    <Animated.View
                        style={{
                            width:WIDTH/10,
                            height:WIDTH/10,
                            transform: [{rotate: spin}] }}
                    >
                        <LoadingIcon width={WIDTH/10} height={WIDTH/10}/>
                    </Animated.View>
                    <Text style={{
                          fontSize:(HEIGHT/100)*2,
                          marginTop:WIDTH/15,
                          color:'#000',
                          fontFamily:Regular,
                    }}>
                        لطفا شکیبا باشید
                    </Text>
                </View>
            </View>
        )
    }
}