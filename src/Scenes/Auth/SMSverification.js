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
import {Regular,Ultra} from "../../Data"
import bottomImage from "../../../assets/img/auth-bottom.png"
import TopLine from "../../../assets/img/top-line.svg"
import RegularButton from "../../Components/RegularButton";
import {Navigation} from "react-native-navigation";


export default class SMSverification extends Component {

    constructor(props){
        super(props)
        this.onChangeText =this.onChangeText.bind(this)
        this.keyboardWillShow = this.keyboardWillShow.bind(this)
        this.keyboardWillHide = this.keyboardWillHide.bind(this)
        this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
        this.returnOpacity = new Animated.Value(1)
    }
    returnToAuth(){
       Navigation.push('sms',{
           component: {
               id: 'auth',
               name: 'Authentication',
               options: {},
               passProps: {}
           }
       })
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
            case 6:
                return this.sixthInput;
        }
    }
    onChangeText(event,index){
        if(event.nativeEvent.text.length>0&&index!==6){
            const nextRef = this.getRef(index+1)
            nextRef.focus()
        }
    }
    componentWillUnmount(){
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }
    render(){
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
                        <Text style={styles.timer}>۲:۳۴</Text>
                        <Text style={styles.description}>کد به شماره ۰۹۳۹۷۴۴۹۸۰۰ ارسال شد.</Text>
                    </View>
                    <View style={styles.inputContainer}>

                         <View style={styles.squareContainer}>
                             <TextInput
                                 onChange={e => this.onChangeText(e,1)}
                                 ref={ x => this.firstInput =x }
                                 blurOnSubmit={false}
                                 style={styles.squareInput}
                                 maxLength={1}
                                 keyboardType={"number-pad"}/>
                         </View>
                        <View style={styles.squareContainer}>
                             <TextInput
                                 onChange={e => this.onChangeText(e,2)}
                                 ref={ x => this.secondInput =x }
                                 style={styles.squareInput}
                                 blurOnSubmit={false}
                                 maxLength={1}
                                 keyboardType={"number-pad"}/>
                         </View>
                        <View style={styles.squareContainer}>
                             <TextInput
                                 onChange={e => this.onChangeText(e,3)}
                                 ref={ x => this.thirdInput =x }
                                 style={styles.squareInput}
                                 maxLength={1}
                                 keyboardType={"number-pad"}/>
                         </View>
                        <View style={styles.squareContainer}>
                             <TextInput
                                 onChange={e => this.onChangeText(e,4)}
                                 ref={ x => this.fourthInput =x }
                                 style={styles.squareInput}
                                 maxLength={1}
                                 keyboardType={"number-pad"}/>
                         </View>
                        <View style={styles.squareContainer}>
                             <TextInput
                                 onChange={e => this.onChangeText(e,5)}
                                 ref={ x => this.fifthInput =x }
                                 style={styles.squareInput}
                                 maxLength={1}
                                 keyboardType={"number-pad"}/>
                         </View>
                        <View style={styles.squareContainer}>
                             <TextInput
                                 onChange={e => this.onChangeText(e,6)}
                                 ref={ x => this.sixthInput =x }
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
                    <RegularButton title={"ارسال دوباره کد"} style={{backgroundColor:'#6c2a50'}}/>
                    <RegularButton title={"مرحله بعد"} />
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
        fontFamily:Regular,
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