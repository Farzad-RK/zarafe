import { Navigation } from 'react-native-navigation'
import profile from "../assets/img/Profile.png"
import competition from "../assets/img/Competition.png"
import news from "../assets/img/News.png"
import leaderBoard from "../assets/img/LeaderBoard.png"
export const goToAuth = () => {

    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
            drawBehind: true,
            animate: false,

        },
        layout: {
            orientation: ['portrait']
        }

    });
    Navigation.setRoot({
        root : {
            stack :{
                options:{
                    layout: {
                        orientation: ['portrait']
                    }
                },
                id:'authStack',
                children : [
                    {
                        component: {
                            id: 'authentication',
                            name: 'Authentication',
                            options: {
                                layout: {
                                    orientation: ['portrait']
                                }
                            },
                            passProps: {}
                        },
                    }
                ],
            }

        }
    })
}

export const goToHome = (currentIndex)=>{
    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
            drawBehind: true,
            animate: false,

        }

    });
    Navigation.setRoot({
        root : {
            bottomTabs:{
                id:'bottomTabs',
                options:{
                    bottomTabs:{
                        backgroundColor:"#2b2d46",
                        titleDisplayMode: 'alwaysHide',
                        currentTabIndex: currentIndex,
                        hideShadow:true,
                    }
                },
                children: [
                    {
                        component: {
                            id:'News',
                            name: 'News',
                            options: {
                                bottomTab: {
                                    fontSize: 10,
                                    text:"",
                                    icon: news,
                                    selectedIconColor:'#f2e443',
                                },
                                layout: {
                                    orientation: ['portrait']
                                }
                            }
                        },
                    },
                    {
                        component: {
                            id:'LeaderBoard',
                            name: 'LeaderBoard',
                            options: {
                                bottomTab: {
                                    fontSize: 10,
                                    text:"",
                                    icon:leaderBoard ,
                                    selectedIconColor:'#f2e443',
                                },
                                layout: {
                                    orientation: ['portrait']
                                }
                            }
                        },
                    },
                    {
                        stack:{
                            options: {
                                layout: {
                                    orientation: ['portrait', 'landscape']
                                }
                            },
                            id:"competitionStack",
                            children:[
                                {
                                    component: {
                                        id:'Competition',
                                        name: 'Competition',
                                        options: {
                                            bottomTab: {
                                                fontSize: 10,
                                                text:"",
                                                icon: competition,
                                                selectedIconColor:'#f2e443',
                                            },
                                            layout: {
                                                orientation: ['portrait']
                                            }
                                        }
                                    },
                                }
                            ]
                        },
                    },{
                        stack:{
                            options: {
                                layout: {
                                    orientation: ['portrait', 'landscape']
                                }
                            },
                            id:"profileStack",
                            children:[
                                {
                                    component: {
                                        id:'Profile',
                                        name: 'Profile',
                                        options: {
                                            bottomTab: {
                                                fontSize: 10,
                                                text:"",
                                                icon: profile,
                                                selectedIconColor:'#f2e443',
                                            },
                                            layout: {
                                                orientation: ['portrait']
                                            }
                                        }
                                    },
                                }
                            ]
                        },
                    }
                    // {
                    //     component: {
                    //         id:'Profile',
                    //         name: 'Profile',
                    //         options: {
                    //             bottomTab: {
                    //                 fontSize: 10,
                    //                 text:"",
                    //                 icon: profile,
                    //                 selectedIconColor:'#f2e443',
                    //             },
                    //             layout: {
                    //                 orientation: ['portrait']
                    //             }
                    //         }
                    //     },
                    // }
                ]
            }
        }
    })
}
export const showSpinner = () =>{
    Navigation.showOverlay({
        component: {
            name: 'SpinnerOverlay',
            id: 'SpinnerOverlay',
            options: {
                overlay: {
                    interceptTouchOutside: false
                },
            }
        }
    });
}

export const hideSpinner = () =>{
    Navigation.dismissOverlay("SpinnerOverlay");
}
export const showError = (type) =>{
    Navigation.showOverlay({
        component: {
            name: 'ErrorOverlay',
            id: 'ErrorOverlay',
            options: {
                overlay: {
                    interceptTouchOutside: false
                },
            },
            passProps :{
                type:type
            }
        }
    });
}
export const hideError = () =>{
    Navigation.dismissOverlay("ErrorOverlay");
}