import React,{Component} from "react"
import {Text, View,Animated,Easing} from "react-native"
import {FaNum, Regular, WIDTH} from "../../Data";
import QuestionScore from "../../Components/QuestionScore";
import RegularButton from "../../Components/RegularButton";
export default class AnsweringPhase extends Component{
    constructor(props) {
        super(props);
        this.intervalId=null
        this.progress= new Animated.Value(0)
        this.state = {
            elapsedTime:10,
            progressBarColor:"#21c701"
        }
    }
    progressBar(){
        this.progress.setValue(0)
        Animated.timing(
            this.progress,
            {
                toValue: 1,
                loop:false,
                duration: 10000,
                iterations:0,
                easing: Easing.linear
            }
        ).start();
        this.intervalId = setInterval(()=>{
            let elapsedTime=this.state.elapsedTime-1
            if(elapsedTime===0){
                clearInterval(this.intervalId)
                //start the game
            }else {
                if (elapsedTime > 5){
                    this.setState({
                        elapsedTime: elapsedTime,
                        progressBarColor: "#21c701"
                    });
                }else if(elapsedTime<=5&&elapsedTime>=3){
                    this.setState({
                        elapsedTime:elapsedTime,
                        progressBarColor:"#f8931f"
                    });
                }else if(elapsedTime<3){
                    this.setState({
                        elapsedTime:elapsedTime,
                        progressBarColor:"#c2272d"
                    });
                }
            }

        },1000)
    }
    componentDidMount(){
        this.progressBar()
    }
    render(){
        const progress = this.progress.interpolate({
            inputRange: [0, 1],
            outputRange: ['100%', '0%']
        })
        return(
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
                            {"زمان : "}
                        </Text>
                        <Text style={{
                            left:WIDTH/2.5,
                            textAlign:"center",
                            fontFamily:FaNum,
                            position:"absolute",
                            color:"#fff",
                            fontSize:18,
                            textAlignVertical:"center"}}>
                            {   (10 - parseInt(this.progress._value*10))}
                        </Text>
                    </View>
                    <View style={{flex:9}}>
                        <View style={{flex:1,backgroundColor:"#393b3a"}}>
                            <Animated.View style={{backgroundColor:this.state.progressBarColor, width:progress,height:"100%"}}>
                            </Animated.View>
                        </View>
                        <View style={{flex:19,backgroundColor:"#2b2d5d"}}>
                            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                               <QuestionScore type="normal" score="3"/>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{fontFamily:Regular,color:"#fff",fontSize:16,textAlign:"center",textAlignVertical:"center",flex:1}}>
                                   این یک سوال است؟
                                </Text>
                            </View>
                            <View style={{flex:4,alignItems:"center"}}>
                                <RegularButton textStyle={{color:"#000"}} title="جواب" style={{backgroundColor:"#d6d4df",width:"80%",marginTop:"5%"}}/>
                                <RegularButton textStyle={{color:"#000"}} title="جواب" style={{backgroundColor:"#d6d4df",width:"80%",marginTop:"5%"}}/>
                                <RegularButton textStyle={{color:"#000"}} title="جواب" style={{backgroundColor:"#d6d4df",width:"80%",marginTop:"5%"}}/>
                                <RegularButton textStyle={{color:"#000"}} title="جواب" style={{backgroundColor:"#d6d4df",width:"80%",marginTop:"5%"}}/>
                            </View>
                        </View>
                    </View>
                </View>
        )
    }
}

