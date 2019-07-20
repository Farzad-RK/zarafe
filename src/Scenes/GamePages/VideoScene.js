import React,{Component} from "react"
import {View, Text, ToastAndroid, BackHandler} from "react-native"
import axios from "axios"
import VideoPlayer from "react-native-video";
import {Navigation} from "react-native-navigation";

export default class VideoScene extends Component{
    constructor(props)
    {
        super(props);
        this.state =
            {
                progress:"0%",
                videoLength:0
            }
        this.onLoadVideo = this.onLoadVideo.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onPlayBackEnd = this. onPlayBackEnd.bind(this);
        this.handleBack = this.handleBack.bind(this)
    }
    videoError = () => {
        ToastAndroid.show("مشکل در اجرای ویدیو",ToastAndroid.LONG)
    };
    handleBack()
    {
        return true
    }
    componentDidMount()
    {
        // this.onPlayBackEnd()
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
    }

    onLoadVideo({duration})
    {
        this.setState({
            videoLength:duration
        })
    }
    onProgress({currentTime})
    {
        let progress = (currentTime/this.state.videoLength)*100
        progress = progress+"%";
        this.setState({
            progress:progress
        })
    }
    /*
           it's confirmed that the user has seen the video
           now a network request is made to server.
   */
    onPlayBackEnd()
    {
        const { data : {question_id} ,token} = this.props;
        axios.defaults.timeout = 5*1000;
        axios({
            method: "GET",
            url: "http://193.176.243.56/api/get_question/"+question_id,
            headers: {
                "Authorization": token,
                "Content-Type": "application/json"
            }})
            .then(response =>{
                const {data} = response
                Navigation.pop("VideoScene").then(
                    ()=>{
                        Navigation.push("competitionStack",{
                            component:{
                                id:"AnsweringPhase",
                                name:"AnsweringPhase",
                                options:{
                                    topBar:{
                                        visible:false
                                    },
                                    layout:{
                                        orientation:['portrait','landscape']
                                    },
                                    bottomTabs: { visible: false, drawBehind: true, animate: true }
                                },
                                passProps : {
                                    token:this.props.token,
                                    phoneNumber:this.props.phoneNumber,
                                    updateMainPage:this.props.updateMainPage,
                                    data:{ ...data,question_id:question_id}
                                }
                            }
                        })
                    })
                    .catch( error=>{
                        ToastAndroid.show("عدم دسترسی به اینترنت",ToastAndroid.LONG)
                    })
                   }
                )
    }
    render()
    {
        return(
            <View style={{flex:1,backgroundColor:"#000000"}}>
                <VideoPlayer
                    ref={(ref) => {
                        this.player = ref
                    }}
                    onLoad={this.onLoadVideo}
                    fullscreen={true}
                    onEnd={this.onPlayBackEnd}
                    onProgress={this.onProgress}
                    onError={this.videoError}
                    style={{height:"90%",width:"100%"}}
                    source={{ uri:this.props.data.link_dash}}
                />
                <View style={{height:"1.5%",width:"80%",alignSelf:"center",justifyContent:"center",borderWidth:1,borderColor:"#fff",borderRadius:15}}>
                    <View style={{alignSelf:"flex-start",width:this.state.progress,backgroundColor:"#fff",borderRadius:15,height:"100%"}}>
                    </View>
                </View>
            </View>
        )
    }
    componentWillUnmount()
    {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    }
}