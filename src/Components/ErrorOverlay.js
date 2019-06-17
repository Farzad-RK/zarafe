import React,{Component} from 'react'
import {View, Text} from 'react-native'
import {HEIGHT, Regular, WIDTH} from "../Data";
import AlertIcon from  "../../assets/img/alert.svg"
export default class ErrorOverlay extends Component {

    constructor(props){
        super(props)
    }
    render(){
        let message;
        switch (this.props.type) {
            case "invalidInput":
                message = "اطلاعات وارد شده درست نیست.";
                break;
            case "noConnection":
                message = "دسترسی به اینترنت وجود ندارد.";
                break
        }
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
                    <AlertIcon width={WIDTH/10} height={WIDTH/10}/>
                    <Text style={{
                        fontSize:(HEIGHT/100)*2,
                        marginTop:WIDTH/15,
                        color:'#000',
                        fontFamily:Regular,
                    }}>
                        {message}
                    </Text>
                </View>
            </View>
        )
    }
}