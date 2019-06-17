import React,{Component} from "react"
import {Text, View} from "react-native";
import {FaNum, WIDTH} from "../Data";
import SmallStarNormal from "../../assets/img/small-star-normal.svg";
import SmallStar from "../../assets/img/small-star.svg"
export default class QuestionScore extends Component{

    constructor(props) {
        super(props);

    }
    render(){
        switch (this.props.type) {
            case "normal":
                return(
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",borderColor:"#fefe06",borderRadius:25,width:WIDTH*0.25,height:WIDTH*0.12,borderWidth:1.5}}>
                        <Text style={{marginLeft:WIDTH/20,textAlign:"center",textAlignVertical:"center",marginTop:WIDTH/55,flex:1,fontFamily:FaNum,color:"#fefe06",fontSize:20}}>
                            {this.props.score}
                        </Text>
                        <SmallStarNormal  style={{marginRight:WIDTH/20,flex:1,height:"50%"}}/>
                    </View>
                );
            case "success":
                return(
                    <View style={{flexDirection:"row",backgroundColor:"#4ab74a",alignItems:"center",justifyContent:"center",borderRadius:30,width:WIDTH*0.27,height:WIDTH*0.12}}>
                        <Text style={{marginLeft:WIDTH/20,textAlign:"center",textAlignVertical:"center",marginTop:WIDTH/55,flex:1,fontFamily:FaNum,color:"#ffffff",fontSize:20}}>
                            {this.props.score}
                        </Text>
                        <SmallStar  style={{marginRight:WIDTH/20,flex:1,height:"50%"}}/>
                    </View>
                )
            case "failure":
                return(
                    <View style={{flexDirection:"row",backgroundColor:"#c2272d",alignItems:"center",justifyContent:"center",borderRadius:30,width:WIDTH*0.27,height:WIDTH*0.12}}>
                        <Text style={{marginLeft:WIDTH/20,textAlign:"center",textAlignVertical:"center",marginTop:WIDTH/55,flex:1,fontFamily:FaNum,color:"#ffffff",fontSize:20}}>
                            {this.props.score}
                        </Text>
                        <SmallStar  style={{marginRight:WIDTH/20,flex:1,height:"50%"}}/>
                    </View>
                )
        }
    }

}