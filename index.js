/**
 * @format
 */

import {Navigation} from "react-native-navigation";
import {RegisterScenes} from "./src/Scenes";
import {goToAuth} from "./src/Navigation";

RegisterScenes();
Navigation.events().registerAppLaunchedListener(() => {

    // goToAuth()
});
