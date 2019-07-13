import React,{Component} from "react"
import {Text, View,Easing} from "react-native"
import {FaNum, Regular, WIDTH} from "../../Data";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
export default  class PrestartPhase extends Component{
    constructor(props) {
        super(props);
        this.timerDuration = 3000;
        this.intervalId=null;
        this.state = {
            elapsedTime:3
        };
    }
    componentDidMount(){
        this.intervalId = setInterval(()=>{
            let elapsedTime=this.state.elapsedTime-1
            if(elapsedTime===0){
                clearInterval(this.intervalId)
                //start the game
            }else{
                this.setState({
                    elapsedTime:elapsedTime
                })
            }

        },1000)
    }
    render() {
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
                     سوال اول
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

}