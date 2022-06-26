import React, { useEffect } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native'
import PushNotification from "react-native-push-notification"
import GlobalStyle from '../../../utils/GlobalStyle'
import { images, colors } from '../../../constants'

const WelcomeScreen = (props) => {
    const { navigation, route } = props
    const { navigate, goBack } = navigation

    useEffect(() => {
        // createChannels()
        setTimeout(() => {
            navigation.replace('UITabView');
        }, 2000);
    }, [])

    // const createChannels = () => {
    //     PushNotification.createChannel(
    //         {
    //             channelId: "task-channel",
    //             channelName: "Task Channel"
    //         }
    //     )
    // }

    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={images.logoApp}
            />
            <Text
                style={[
                    GlobalStyle.CustomFontBig,
                    styles.text
                ]}
            >
                Todo List
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 150,
        height: 150,
        margin: 5
    },
    text: {
        fontSize: 35,
        color: colors.primary,
    },
})

export default WelcomeScreen