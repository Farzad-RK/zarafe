import {Navigation} from "react-native-navigation";
import React from "react"
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
import Settings from "./Scenes/SideScenes/Settings";
import VideoScene from "./Scenes/GamePages/VideoScene";
import BackgroundScreen from "./Scenes/GamePages/BackgroundScreen";
import TopBar from "./Components/TopBar";
import store from "./Store/UserStore"
export const  RegisterScenes = () =>{

    Navigation.registerComponent( `Root`, () => Root);
    Navigation.registerComponent( `BackgroundScreen`, () => BackgroundScreen);
    Navigation.registerComponent( `TopBar`, () => TopBar);
    Navigation.registerComponent( `ErrorOverlay` , () => ErrorOverlay)
    Navigation.registerComponent( `VideoScene` , () => VideoScene)
    Navigation.registerComponent( `Settings` , () => Settings)
    Navigation.registerComponent( `SpinnerOverlay` , () => SpinnerOverlay)
    Navigation.registerComponent( `AnsweringPhase`, () => AnsweringPhase);
    Navigation.registerComponent( `ScorePhase`, () => ScorePhase);
    Navigation.registerComponent( `PrestartPhase`, () => PrestartPhase);
    Navigation.registerComponent( `PreparationPhase`, () => PreparationPhase);
    Navigation.registerComponent( `Authentication` , () => Authentication)
    Navigation.registerComponent( `SMSverification` , () => SMSverification)
    Navigation.registerComponent( `News` , () => News)

    Navigation.registerComponent('TopBar', () => (props) => (
            <TopBar store={store} {...props} />
    ), () => TopBar);

    Navigation.registerComponent('Competition', () => (props) => (
            <Competition store={store} {...props} />
    ), () => Competition);

    Navigation.registerComponent('LeaderBoard', () => (props) => (
            <LeaderBoard store={store} {...props} />
    ), () => LeaderBoard);

    Navigation.registerComponent('Profile', () => (props) => (
            <Profile store={store} {...props} />
    ), () => Profile);

    return store
};