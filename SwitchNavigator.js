import * as React from 'react';
import CalendarScreen from './screens/CalendarScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AppNavigator from './AppNavigator';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const SwitchNavigator = createSwitchNavigator({
        MainApp: {
            screen: AppNavigator
        },
        Login: {
            screen: LoginScreen
        },
        Home: {
            screen: HomeScreen
        },
        Signup: {
            screen: SignupScreen
        }
    }, {
        initialRouteName: 'Login'
    });

export default createAppContainer(SwitchNavigator);
