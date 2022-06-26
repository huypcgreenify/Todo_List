import React from 'react'
import { Image } from "react-native"
import { colors } from '../constants'
import { TodoScreen, DoneScreen } from '../features'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()

const screenOptions = ({ route }) => ({
    tabBarStyle: {
        height: 55,
        paddingBottom: 5,
    },
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.inactive,
    tabBarActiveBackgroundColor: 'white',
    tabBarInactiveBackgroundColor: 'white',
    tabBarIcon: ({ focused, color, size }) => {// 3 thuộc tính chuẩn của đối tượng( focused là có bấm vào icon không, true à bấm vào)
        let iconName
        if (route.name === 'TodoScreen') {
            iconName = 'clipboard-list'
            size = focused ? 25 : 20
        } else if (route.name === 'DoneScreen') {
            iconName = 'clipboard-check'
            size = focused ? 25 : 20
        }
        return (
            <Icon
                name={iconName}
                size={size}
                color={color}
            />
        )
    },
})

const UITabView = (props) => {

    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
            name={'TodoScreen'}
            component={TodoScreen}
            options={{
                tabBarLabel: 'To-do',
            }}
        >
        </Tab.Screen>
        <Tab.Screen
            name={'DoneScreen'}
            component={DoneScreen}
            options={{
                tabBarLabel: 'Done',
            }}
        >
        </Tab.Screen>
    </Tab.Navigator>
}

export default UITabView