import { Navigation } from 'react-native-navigation'

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
