import React,{Component} from "react"
import {Text, View,Easing,BackHandler} from "react-native"
import {FaNum, Regular, WIDTH} from "../../Data";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {getPersianNumber} from "../../Helper";
import {Navigation} from "react-native-navigation";

export default  class PrestartPhase extends Component{
    constructor(props) {
        super(props);
        this.timerDuration = 3000;
        this.intervalId=null;
        this.state = {
            elapsedTime:3,
        };
        this.handleBack = this.handleBack.bind(this)

    }
    handleBack()
    {
        return true
    }
    componentDidMount()
    {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
        this.intervalId = setInterval(()=>{
            let elapsedTime=this.state.elapsedTime-1;
            if(elapsedTime===0){
                clearInterval(this.intervalId)
                // Navigation.pop("PrestartPhase")
                Navigation.push("competitionStack",{
                    component:{
                        id:"VideoScene",
                        name:"VideoScene",
                        options:{
                            layout:{
                                orientation:['portrait','landscape']
                            },
                            bottomTabs: { visible: false, drawBehind: true, animate: true }
                        },
                        passProps : {
                            token:this.props.token,
                            phoneNumber:this.props.phoneNumber,
                            data:this.props.data
                        }
                    }
                })
                //start the game
            }else{
                this.setState({
                    elapsedTime:elapsedTime
                })
            }

        },1000)
    }
    render()
    {
        const { data : { current_question_number } } = this.props;
        const currentQuestion = "سوال " + getPersianNumber((current_question_number+1));
        return (
         <View style={{flex:1}}>
             <View style={{
                 flex:1,
                 alignItems:"center",
                 justifyContent:"center",
                 backgroundColor:"#373866"}}>
                 <Text style={{
                     textAlign:"center",
                     fontFamily:Regular,
                     color:"#fff",
                     fontSize:18,
                     textAlignVertical:"center"}}>
                     {currentQuestion}
                 </Text>
             </View>
             <View style={{flex:9,alignItems:"center",justifyContent:"center",backgroundColor:"#2b2d5d"}}>
                 <AnimatedCircularProgress
                     size={WIDTH/2}
                     width={WIDTH/200}
                     easing={Easing.linear}
                     fill={100}
                     duration={this.timerDuration}
                     tintColor="#00ff04"
                     backgroundColor="#7e807f" >
                     {
                         ()=>(
                         <Text style={{
                             fontSize: 32,
                             color: "#fff",
                             fontFamily: FaNum,
                             textAlign: "center",
                             justifyContent: "center"
                         }}>
                             {this.state.elapsedTime}
                         </Text>)
                     }
                 </AnimatedCircularProgress>
             </View>
         </View>
        );
    }
    componentWillUnmount()
    {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    }
}