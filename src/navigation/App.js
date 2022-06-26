import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { WelcomeScreen } from '../features'
import TaskComponent from '../features/Todo/components/TaskComponent'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UITabView from './UITabView'
import { Provider } from 'react-redux'
import { Store } from '../redux/store'

const Stack = createNativeStackNavigator()

const App = (props) => {
    return (
        <Provider store={Store}>
            <NavigationContainer style={{}}>
                <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{ headerShown: false }} >
                    <Stack.Screen name={'WelcomeScreen'} component={WelcomeScreen}></Stack.Screen>
                    <Stack.Screen name={'UITabView'} component={UITabView}></Stack.Screen>
                    <Stack.Screen name={'TaskComponent'} component={TaskComponent}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer >
        </Provider>
    )
}

export default App