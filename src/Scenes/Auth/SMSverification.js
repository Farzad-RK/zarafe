import React,{Component} from "react"
import {View,
        Text,
        StyleSheet,
        Image,
        TextInput,
        TouchableOpacity,
        Animated,
        KeyboardAvoidingView,
        Keyboard
        } from "react-native"
import {FaNum, Regular, Ultra} from "../../Data"
import bottomImage from "../../../assets/img/auth-bottom.png"
import TopLine from "../../../assets/img/top-line.svg"
import RegularButton from "../../Components/RegularButton";
import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage';
import {Navigation} from "react-native-navigation";
import {goToHome, hideError, hideSpinner, showError, showSpinner} from "../../Navigation";

const storeCredentials = async (response) =>{
    try {
        await  AsyncStorage.setItem('@phoneNumber',this.props.phoneNumber);
        await  AsyncStorage.setItem('@token',response.data.access_token);
    } catch (e) {
        // saving error
    }
}
export default class SMSverification extends Component {

    constructor(props){
        super(props)
        this.onChangeText =this.onChangeText.bind(this)
        this.keyboardWillShow = this.keyboardWillShow.bind(this)
        this.keyboardWillHide = this.keyboardWillHide.bind(this)
        this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.onSendSmsCode = this.onSendSmsCode.bind(this);
        this.onResendCode = this.onResendCode.bind(this);
        this.returnOpacity = new Animated.Value(1)
        this.state = {
            smsCode:["","","","","",""],
            remainedTime : 90,
            dis:true,
        }
    }
     returnToAuth (){
       Navigation.pop('SMSverification')
    }
    keyboardWillShow  () {
        Animated.timing(this.returnOpacity, {
            duration: 200,
            toValue: 0,
        }).start();
    }
    keyboardWillHide ()  {
        Animated.timing(this.returnOpacity, {
            duration: 200,
            toValue: 1.0,
        }).start();
    }
    getRef(index){
        switch (index) {
            case 1:
                return this.firstInput;
            case 2:
                return this.secondInput;
            case 3:
                return this.thirdInput;
            case 4:
                return this.fourthInput;
            case 5:
                return this.fifthInput;
        }
    }
    handleKeyPress({ nativeEvent: { key: keyValue } },index){
        if (keyValue === 'Backspace'&&index!==1) {
            const previousRef = this.getRef(index-1);
            previousRef.focus()
        }
    }
    onChangeText(event,index){
        let code =this.state.smsCode;
        code[index-1] = event.nativeEvent.text;
        this.setState({
            smsCode:code
        })
        if(event.nativeEvent.text.length>0&&index!==5)
        {
            const nextRef = this.getRef(index+1);
            nextRef.focus()
        }
    }
    onResendCode(){
        this.setState({
            remainedTime : 90,
            dis:true,
        })
        showSpinner();
        axios.defaults.timeout = 5*1000;
        axios({
            method: "POST",
            url:"http://193.176.243.56/api/send_otp",
            headers: {
                "Content-Type": "application/json"
            },
            data:JSON.stringify({
                phone_number:this.props.phoneNumber
            })
        }).then( response => {
            hideSpinner()
        }).catch( error =>{
            hideSpinner();
            showError("noConnection");
            setTimeout( ()=> hideError(),2000)
        })
    }
    onSendSmsCode(){
        let code = "";
        this.state.smsCode.forEach( e =>{
            code = code+e
        });
        showSpinner()
        axios({
            method: "POST",
            url:"http://193.176.243.56/api/auth/signup",
            headers: {
                "Content-Type": "application/json"
            },
            data:JSON.stringify({
                phone_number:this.props.phoneNumber,
                token:code
            })
        }).then( response => {
            hideSpinner()
            console.log(response)
            storeCredentials(response).then(
                ()=>{
                    goToHome(3)
                }
            ).catch( e =>{

            } )

        }).catch( error =>{
                hideSpinner()
                showError("invalidInput")
                setTimeout( ()=> hideError(),2000)
            })
    }
    componentDidMount(){
        this.setTimer();
    }
    setTimer (){
        this.timer = setInterval(()=>{
            const currentTime = this.state.remainedTime-1
            this.setState({
                remainedTime : currentTime,
            })
            if(currentTime===0){
                this.setState({
                    dis:false
                })
                clearInterval(this.timer)
            }

        },1000)
    }
    componentWillUnmount(){
        this.keyboardWillHideSub.remove();
        this.keyboardWillShowSub.remove();
        this.returnOpacity.removeAllListeners();
        clearInterval(this.timer);
    }
    render(){
        const displayTime = Math.floor(this.state.remainedTime/60)+":"+(this.state.remainedTime%60)
        return(
            <View style={styles.mainContainer}>
                <Animated.View  style={styles.titleContainer}>
                    <Text style ={styles.title}>زرافه</Text>
                    <TopLine style={styles.topLine} width={'80%'} height={1} />
                </Animated.View>
                <View style={styles.formContainer}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}>ورود</Text>
                    </View>
                    <View style={styles.timeAndDescContainer}>
                        <Text style={styles.timer}>{displayTime}</Text>
                        <Text style={styles.description}>کد به شماره شما شد. </Text>
                    </View>
                    <View style={styles.inputContainer}>

                         <View style={styles.squareContainer}>
                             <TextInput
                                 onKeyPress={ e => this.handleKeyPress(e,1) }
                                 onChange={e => this.onChangeText(e,1)}
                                 ref={ x => this.firstInput =x }
                                 blurOnSubmit={false}
                                 style={styles.squareInput}
                                 maxLength={1}
                                 keyboardType={"number-pad"}/>
                         </View>
                        <View style={styles.squareContainer}>
                             <TextInput
                                 onKeyPress={ e => this.handleKeyPress(e,2) }
                                 onChange={e => this.onChangeText(e,2)}
                                 ref={ x => this.secondInput =x }
                                 style={styles.squareInput}
                                 blurOnSubmit={false}
                                 maxLength={1}
                                 keyboardType={"number-pad"}/>
                         </View>
                        <View style={styles.squareContainer}>
                             <TextInput
                                 onKeyPress={ e => this.handleKeyPress(e,3) }
                                 onChange={e => this.onChangeText(e,3)}
                                 ref={ x => this.thirdInput =x }
                                 style={styles.squareInput}
                                 maxLength={1}
                                 keyboardType={"number-pad"}/>
                         </View>
                        <View style={styles.squareContainer}>
                             <TextInput
                                 onKeyPress={ e => this.handleKeyPress(e,4) }
                                 onChange={e => this.onChangeText(e,4)}
                                 ref={ x => this.fourthInput =x }
                                 style={styles.squareInput}
                                 maxLength={1}
                                 keyboardType={"number-pad"}/>
                         </View>
                        <View style={styles.squareContainer}>
                             <TextInput
                                 onKeyPress={ e => this.handleKeyPress(e,5) }
                                 onChange={e => this.onChangeText(e,5)}
                                 ref={ x => this.fifthInput =x }
                                 style={styles.squareInput}
                                 maxLength={1}
                                 keyboardType={"number-pad"}/>
                         </View>
                    </View>
                    <Animated.View style={{opacity:this.returnOpacity}}>
                        <TouchableOpacity onPress={this.returnToAuth}>
                            <View style={styles.changePhoneNumberContainer}>
                                <Text style={styles.changePhoneNumber2}> شماره تماس</Text>
                                <Text style={styles.changePhoneNumber1}>تغییر </Text>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                <KeyboardAvoidingView style={styles.buttonsContainer} keyboardVerticalOffset={55} behavior="padding" enabled>
                    <RegularButton onPress={this.onResendCode} dis={this.state.dis} title={"ارسال دوباره کد"} style={{backgroundColor:'#6c2a50'}}/>
                    <RegularButton onPress={this.onSendSmsCode} title={"مرحله بعد"} />
                </KeyboardAvoidingView>
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
        height:40,
        justifyContent:'center',
        alignItems:'center',
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
        flex:6,
    },
    headingContainer: {
        height:60,
        marginTop:15,
        marginBottom:20,
    },
    heading: {
        textAlign:'center',
        fontFamily:Regular,
        color:'#fff',
        fontSize:34,
    },
    timeAndDescContainer :{

    },
    timer:{
        textAlign:'center',
        fontFamily:FaNum,
        color:'#fff',
        fontSize:18,
    },
    description:{
        marginRight:'8%',
        marginTop:20,
        marginBottom:15,
        textAlign:'right',
        fontFamily:Regular,
        color:'#e9e5f6',
        fontSize:16,
    },
    squareContainer : {
        width:45,
        height:45
    },
    inputContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:'5%',
        marginRight:'5%'
    },
    squareInput: {
        color:'#e8e9eb',
        flex:1,
        textAlign:'center',
        fontFamily:Regular,
        fontSize:12,
        borderWidth:2,
        borderColor:'#222149',
        borderRadius:5,
        backgroundColor:'#23234F',
        shadowColor: '#20224b',
        shadowOffset: { width:0, height:0 },
        shadowOpacity:0.8,
        shadowRadius:10,
        elevation:1
    },
    changePhoneNumberContainer : {
        marginTop:'12%',
        alignSelf:'center',
        flexDirection: 'row'
    },
    changePhoneNumber1:{
        color:'#cdd4dc',
        fontFamily:Ultra,
    },
    changePhoneNumber2:{
        color:'#ebeef3',
        fontFamily:Regular,
    },
    buttonsContainer :{
        flex:1,
        marginBottom:'12%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:'5%',
        marginRight:'5%'
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