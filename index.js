/**
 * @format
 */

import {Navigation} from "react-native-navigation";
import {RegisterScenes} from "./src/Scenes";
import {gotToAuth} from "./src/Navigation";

RegisterScenes();
Navigation.events().registerAppLaunchedListener(() => {

    gotToAuth()
});
