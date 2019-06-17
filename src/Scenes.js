import {Navigation} from "react-native-navigation";
import Root from "./Scenes/Root"
import Authentication from "./Scenes/Auth/Authentication";
import SMSverification from "./Scenes/Auth/SMSverification"
import Competition from "./Scenes/Home/Competition";
import LeaderBoard from "./Scenes/Home/LeaderBoard";
import News from "./Scenes/Home/News";
import PreparationPhase from "./Scenes/GamePages/PreparationPhase"
import Profile from "./Scenes/Home/Profile";
import PrestartPhase from "./Scenes/GamePages/PrestartPhase"
import AnsweringPhase from "./Scenes/GamePages/AnsweringPhase"
import ScorePhase from "./Scenes/GamePages/ScorePhase"
import ErrorOverlay from "./Components/ErrorOverlay";
import SpinnerOverlay from "./Components/SpinnerOverlay";
export const  RegisterScenes = () =>{

    Navigation.registerComponent( `Root`, () => Root);
    Navigation.registerComponent( `ErrorOverlay` , () => ErrorOverlay)
    Navigation.registerComponent( `SpinnerOverlay` , () => SpinnerOverlay)
    Navigation.registerComponent( `AnsweringPhase`, () => AnsweringPhase);
    Navigation.registerComponent( `ScorePhase`, () => ScorePhase);
    Navigation.registerComponent( `PrestartPhase`, () => PrestartPhase);
    Navigation.registerComponent( `PreparationPhase`, () => PreparationPhase);
    Navigation.registerComponent( `Authentication` , () => Authentication)
    Navigation.registerComponent( `SMSverification` , () => SMSverification)
    Navigation.registerComponent( `Competition` , () => Competition)
    Navigation.registerComponent( `Profile` , () => Profile)
    Navigation.registerComponent( `News` , () => News)
    Navigation.registerComponent( `LeaderBoard` , () => LeaderBoard)
};