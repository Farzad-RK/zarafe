/**
 * @format
 */
import {Navigation} from "react-native-navigation";
import {RegisterScenes} from "./src/Scenes";
import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage';
import {goToAuth, goToHome, showError} from "./src/Navigation";

const store = RegisterScenes();
Navigation.events().registerAppLaunchedListener( async () => {
    try {
        await  AsyncStorage.setItem('@phoneNumber',"09397449800");
        await  AsyncStorage.setItem('@token',"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdjZDg2ZDZmYjU5MWI1YzU1MDY4YjUwNTVhMzg2YWE5YzFhYWYyMzcwMWFhNDA2NmMzNzNlY2JjOTIwODhlM2Q4NWY5OWU2YzE0MDUwN2MyIn0.eyJhdWQiOiIxIiwianRpIjoiN2NkODZkNmZiNTkxYjVjNTUwNjhiNTA1NWEzODZhYTljMWFhZjIzNzAxYWE0MDY2YzM3M2VjYmM5MjA4OGUzZDg1Zjk5ZTZjMTQwNTA3YzIiLCJpYXQiOjE1NjIzMzYwNjcsIm5iZiI6MTU2MjMzNjA2NywiZXhwIjoxNTkzOTU4NDY3LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.cuhjbiNeDVGJSNcnrw3ixGJC48nHx092RYo9XJYJGb3dhUy8xWEXYuq1ymXGjNShpPfO-V4bpldkmIlEVvijIV_mnCgw-roAFNWY9fijg9hViM6xt0IcA-zlrDLzVWZ9VGlBYOtLsd_vrreoMW-yJagdiwqqlwitaQCdndWmY5dj4VwzL_4OWVPdVkIkSDpZ03xJxCDUZ2hsPFgNP3tLNgqZNmzbEJawuTs-7fT5wsOvlSfSRLeYxjrHUYRNDSuo9QIB9w9B-U6fWgk1SlSEsdWvRQYJOtMyaTN57qMa8KSOiLtupsfkKcAYUhWj_enImjJDndyaPrVopYBZlZVgHHEVouHx45EWpkO_XrBWsP1c9VOYmohAlRVoVmFBOE3jeFUSWcYx-bct0jkfIn-eDbERTBH7P_1jVrb6tJiPcd05AxBWq6bfNd5ZQjMm3eaEK1VGLoCSmJzjVURohSpOIaxbZDd61zmsdsiciY8vfM4K9oZGssc2jIeZWNurIK_DLmIuVGclQBdfA0KGBgcheVsJkhkWvCQDjw-WIr4vAwhdsVmyMRC7Qrhyi4VJbEbUcRWww7Wa7Nq6m_ZKX7o2cjMheOtS9lOb8DmTKpFad46mSn7lmrbmGp_q2TLKSSTsyJamxALvzwoUvEkEznQ269AiRAk7L_yfzcEakcLknEM");
        store.setToken("Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdjZDg2ZDZmYjU5MWI1YzU1MDY4YjUwNTVhMzg2YWE5YzFhYWYyMzcwMWFhNDA2NmMzNzNlY2JjOTIwODhlM2Q4NWY5OWU2YzE0MDUwN2MyIn0.eyJhdWQiOiIxIiwianRpIjoiN2NkODZkNmZiNTkxYjVjNTUwNjhiNTA1NWEzODZhYTljMWFhZjIzNzAxYWE0MDY2YzM3M2VjYmM5MjA4OGUzZDg1Zjk5ZTZjMTQwNTA3YzIiLCJpYXQiOjE1NjIzMzYwNjcsIm5iZiI6MTU2MjMzNjA2NywiZXhwIjoxNTkzOTU4NDY3LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.cuhjbiNeDVGJSNcnrw3ixGJC48nHx092RYo9XJYJGb3dhUy8xWEXYuq1ymXGjNShpPfO-V4bpldkmIlEVvijIV_mnCgw-roAFNWY9fijg9hViM6xt0IcA-zlrDLzVWZ9VGlBYOtLsd_vrreoMW-yJagdiwqqlwitaQCdndWmY5dj4VwzL_4OWVPdVkIkSDpZ03xJxCDUZ2hsPFgNP3tLNgqZNmzbEJawuTs-7fT5wsOvlSfSRLeYxjrHUYRNDSuo9QIB9w9B-U6fWgk1SlSEsdWvRQYJOtMyaTN57qMa8KSOiLtupsfkKcAYUhWj_enImjJDndyaPrVopYBZlZVgHHEVouHx45EWpkO_XrBWsP1c9VOYmohAlRVoVmFBOE3jeFUSWcYx-bct0jkfIn-eDbERTBH7P_1jVrb6tJiPcd05AxBWq6bfNd5ZQjMm3eaEK1VGLoCSmJzjVURohSpOIaxbZDd61zmsdsiciY8vfM4K9oZGssc2jIeZWNurIK_DLmIuVGclQBdfA0KGBgcheVsJkhkWvCQDjw-WIr4vAwhdsVmyMRC7Qrhyi4VJbEbUcRWww7Wa7Nq6m_ZKX7o2cjMheOtS9lOb8DmTKpFad46mSn7lmrbmGp_q2TLKSSTsyJamxALvzwoUvEkEznQ269AiRAk7L_yfzcEakcLknEM");
        store.setPhoneNumber("09397449800");
        goToHome(2)
    } catch (e) {
        // saving error
    }
    // const url = "http://checkip.amazonaws.com"
    // axios.get(url).then(
    //     async (response) =>{
    //         try {
    //             const value = await AsyncStorage.getItem('@token');
    //             if(value !== null) {
    //                 goToHome(3)
    //             }else {
    //                 goToAuth()
    //             }
    //         } catch(e) {
    //             goToAuth()
    //         }
    //     }
    // ).catch(
    //     (error)  => {
    //         showError("noConnection")
    //    }
    // )
});
