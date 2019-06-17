/**
 * @format
 */
import {Navigation} from "react-native-navigation";
import {RegisterScenes} from "./src/Scenes";
import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage';
import {goToAuth, goToHome, showError} from "./src/Navigation";

RegisterScenes();
Navigation.events().registerAppLaunchedListener( async () => {
    try {
        await  AsyncStorage.setItem('@phoneNumber',"09397449800");
        await  AsyncStorage.setItem('@token',"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg1ZTAyMWZjMzc0MGEzNzYwOWNjMTM5ZTIwMTM4MDA5MWFlYjEyODI5ZDA3NzYyY2EyZmYyZGNmY2NiN2RmNTg4MDU5NDJhZDMwYzMxMjU2In0.eyJhdWQiOiIxIiwianRpIjoiODVlMDIxZmMzNzQwYTM3NjA5Y2MxMzllMjAxMzgwMDkxYWViMTI4MjlkMDc3NjJjYTJmZjJkY2ZjY2I3ZGY1ODgwNTk0MmFkMzBjMzEyNTYiLCJpYXQiOjE1NjAxNzE3MDcsIm5iZiI6MTU2MDE3MTcwNywiZXhwIjoxNTkxNzk0MTA2LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.S-5Sm_fXwwKBv_XeTFggX1xz0Ude73m0CFWHqMdX2m4mUbeg9FfUN0Pd7qhewIbifSrHmlBe2RyyJRBEOHy2xUKlD6PbsLL8l9k50M4UGE_7BLG0jsVYFhkCgQvlx4mopOgGVMGuo79Y8t1ZUVbFTJummfuQVRhmJnjXpx4LMu5ksWI8ljQjzUw_pqmFlD5dOX_OOl-E4kYxSu_pyElQzOzqDLXgk0GQad8MVapbKutgT3_X6l_y34d6erkvQc6Zd_4Gg0gZULyENQoc5WA0ST8o1LV6pmVJS1XnLySmneIS5531jAwfEqH0q3O0f29TmchymUJtyJnrjbJ_43l__jLmmmJu5eRD3INoBlnpxH04Gd3mcQxa6zB0QPzxbhzYCikE6dh9Adw2ktBVRZxa8k9C8j3jZiLjw_1lgLReYrF_b-fHBqz8Q2LSSQUUcgQS9UDI52oG3XQBkiJE2X1zKgQoD48IBS3CVRorLxSN7zgCtFeP94HpyUaxhp8PK5YskROLeYeLVG3Dd-MPNc8B3CRr2A8eLK_nbWBnihTeeRuzyupllGFSjskLS5PZ3EDbu5lnmYanweqjmJ1eS8af8Z-zzq6271tKYMhiLYUqcYlhXzVgQd3iNWqTknMCXFgsYtUDM41VE43vRBFU6b8cWl1Gdz3Z7hNxG0hmJMRdt9c");
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
