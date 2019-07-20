import React,{Component} from "react"
import {Text, View, Animated, Easing, ToastAndroid, BackHandler} from "react-native"
import {FaNum, Regular, WIDTH} from "../../Data";
import {Navigation} from "react-native-navigation";
import axios from "axios"
import QuestionScore from "../../Components/QuestionScore";
import RegularButton from "../../Components/RegularButton";

const wrongColor = "#c2272d";
const correctColor = "#4ab74a";
const numberOfRetries = 3;
export default class AnsweringPhase extends Component{
    constructor(props) {
        super(props);
        this.intervalId=null;
        this.progress= new Animated.Value(0);
        this.state = {
            elapsedTime:10,
            option1: {
                backgroundColor:"#d6d4df",
                color:"#000"
            },
            option2: {
                backgroundColor:"#d6d4df",
                color:"#000"
            },
            option3: {
                backgroundColor:"#d6d4df",
                color:"#000"
            },
            option4: {
                backgroundColor:"#d6d4df",
                color:"#000"
            },
            stars:"normal",
            disableButtons:false,
            progressBarColor:"#21c701"
        };
        this.onSelectOption = this.onSelectOption.bind(this);
        this.handleOptions = this.handleOptions.bind(this);
        this.sendAnswer = this.sendAnswer.bind(this);
        this.handleTheEnd = this.handleTheEnd.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    progressBar(){
        this.progress.setValue(0);
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
                this.setState({
                    elapsedTime:0,
                    disableButtons:true
                    })
                this.handleTheEnd();
                ToastAndroid.show("سوال بدون پاسخ ماند",ToastAndroid.LONG)
            }else {
                if (elapsedTime > 5)
                {
                    this.setState({
                        elapsedTime: elapsedTime,
                        progressBarColor: "#21c701"
                    });
                }else if(elapsedTime<=5&&elapsedTime>=3)
                {
                    this.setState({
                        elapsedTime:elapsedTime,
                        progressBarColor:"#f8931f"
                    });
                }else if(elapsedTime<3)
                {
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
        this.props.updateMainPage()
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
    }
    handleBack()
    {
        return true
    }
    onSelectOption(index)
    {
        //stops the timer and animation
        clearInterval(this.intervalId);
        this.setState({
            disableButtons:true
        });
        this.progress.stopAnimation();

        //sending the request
        this.sendAnswer(index,numberOfRetries)
    }
    sendAnswer(index,n)
    {
        const {token,data:{question_id}} = this.props;
        axios.defaults.timeout = 1.5*1000;
        axios.get("http://193.176.243.56/api/send_answer",{
            params:{
                answer:index,
                question_id:question_id,
            },
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }}).then(response =>{
            console.log(response);
            const { data :{status,correct_answer}} = response;
            switch (status) {
                //timeout - it's late
                case "117":
                    ToastAndroid.show("پاسخ شما دیر ارسال شد",ToastAndroid.LONG);
                    //take action
                    break;
                //correct answer
                case "118":
                    //take action
                    this.handleOptions(index,correct_answer);
                    break;
                //wrong answer
                case "119":
                    //take action
                    this.handleOptions(index,correct_answer);
                    break;
            }
        }).catch(error =>{
            if(n===0)
            {
                ToastAndroid.show("مشکل در ارسال پاسخ",ToastAndroid.LONG)
            }
            else
            {
                this.sendAnswer(index,n-1);
            }
        })
    }
    handleOptions(userAnswer,correctAnswer)
    {
        userAnswer = parseInt(userAnswer);
        switch (correctAnswer) {
            case 1:
                this.setState({
                    option1: {
                        backgroundColor:correctColor,
                        color:"#fff"
                    },
                });
                break;
            case 2:
                this.setState({
                    option2: {
                        backgroundColor:correctColor,
                        color:"#fff"
                    },
                });
                break;
            case 3:
                this.setState({
                    option3: {
                        backgroundColor:correctColor,
                        color:"#fff"
                    },
                });
                break;
            case 4:
                this.setState({
                    option4: {
                        backgroundColor:correctColor,
                        color:"#fff"
                    },
                });
                break;
        }
        if(userAnswer!==correctAnswer)
        {
            switch (userAnswer) {
                case 1:
                    this.setState({
                        option1: {
                            backgroundColor:wrongColor,
                            color:"#fff",
                        },
                        stars:"wrong"
                    });
                    break;
                case 2:
                    this.setState({
                        option2: {
                            backgroundColor:wrongColor,
                            color:"#fff",
                        },
                        stars:"wrong"
                    });
                    break;
                case 3:
                    this.setState({
                        option3: {
                            backgroundColor:wrongColor,
                            color:"#fff",
                        },
                        stars:"wrong"
                    });
                    break;
                case 4:
                    this.setState({
                        option4: {
                            backgroundColor:wrongColor,
                            color:"#fff",
                        },
                        stars:"wrong"
                    });
                    break;
            }
        }
        else
        {
            this.setState({
                stars :"correct"
            })
        }
        this.handleTheEnd()
    }
    render()
    {
        const progress = this.progress.interpolate({
            inputRange: [0, 1],
            outputRange: ['100%', '0%']
        })
        const {data :{ text ,option1,option2,option3,option4,level}} = this.props;
        let stars;
        switch (level) {
            case "A" :
                stars =3;
                break;
            case "B" :
                stars =2;
                break;
            case "C" :
                stars =1;
                break;
        }
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
                               <QuestionScore type={this.state.stars} score={stars}/>
                            </View>
                            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                                <Text style={{fontFamily:Regular,color:"#fff",fontSize:16,textAlign:"center",textAlignVertical:"center",flex:1}}>
                                    {text}
                                </Text>
                            </View>
                            <View style={{flex:4,alignItems:"center"}}>
                                <RegularButton dis={this.state.disableButtons} onPress={() => this.onSelectOption("1") } textStyle={{color:this.state.option1.color}} title={option1} style={{backgroundColor:this.state.option1.backgroundColor,width:"80%",marginTop:"5%"}}/>
                                <RegularButton dis={this.state.disableButtons} onPress={() => this.onSelectOption("2") } textStyle={{color:this.state.option2.color}} title={option2} style={{backgroundColor:this.state.option2.backgroundColor,width:"80%",marginTop:"5%"}}/>
                                <RegularButton dis={this.state.disableButtons} onPress={() => this.onSelectOption("3") } textStyle={{color:this.state.option3.color}} title={option3} style={{backgroundColor:this.state.option3.backgroundColor,width:"80%",marginTop:"5%"}}/>
                                <RegularButton dis={this.state.disableButtons} onPress={() => this.onSelectOption("4") } textStyle={{color:this.state.option4.color}} title={option4} style={{backgroundColor:this.state.option4.backgroundColor,width:"80%",marginTop:"5%"}}/>
                            </View>
                        </View>
                    </View>
                </View>
        )
    }
    handleTheEnd()
    {
        if(this.props.data.current_question_number<10)
        {
            setTimeout(
                ()=>{
                    Navigation.pop("AnsweringPhase").then(
                        ()=>{
                            Navigation.push("competitionStack",{
                                component:{
                                    id:"PreparationPhase",
                                    name:"PreparationPhase",
                                    options:{
                                        topBar:{
                                            visible:false
                                        },
                                        layout:{
                                            orientation:['portrait']
                                        },
                                        bottomTabs: { visible: false, drawBehind: true, animate: true }
                                    },
                                    passProps :{
                                        token :this.props.token,
                                        updateMainPage:this.props.updateMainPage,
                                        phoneNumber:this.props.phoneNumber,
                                    }
                                }
                            })
                        }
                    )
                }
                ,2000)
        }
        else
        {
            setTimeout(
                ()=>{
                    Navigation.pop("AnsweringPhase").then(
                        ()=>{
                            Navigation.push("competitionStack",{
                                component:{
                                    id:"ScorePhase",
                                    name:"ScorePhase",
                                    options:{
                                        topBar:{
                                            visible:false
                                        },
                                        layout:{
                                            orientation:['portrait']
                                        },
                                        bottomTabs: { visible: false, drawBehind: true, animate: true }
                                    },
                                    passProps :{
                                        phoneNumber:this.props.phoneNumber,
                                        token :this.props.token,
                                    }
                                }
                            });
                        }
                    )
                }
                ,2000)
        }
    }
    componentWillUnmount()
    {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    }
}

