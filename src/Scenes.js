import {Navigation} from "react-native-navigation";
import Root from "./Scenes/Root"
import Authentication from "./Scenes/Auth/Authentication";
import SMSverification from "./Scenes/Auth/SMSverification"

export const  RegisterScenes = () =>{
    Navigation.registerComponent(`Root`, () => Root);
    Navigation.registerComponent( `Authentication` , () => Authentication)
    Navigation.registerComponent( `SMSverification` , () => SMSverification)
};