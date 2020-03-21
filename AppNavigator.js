import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from 'react-native-vector-icons';
import { FontAwesome5 } from 'react-native-vector-icons';
import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import TransactionHistoryScreen from './screens/TransactionHistoryScreen';
import NewTransactionScreen from './screens/NewTransactionScreen';

const Tab = createMaterialBottomTabNavigator();

export default class AppNavigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
            <Tab.Navigator initialRouteName = "Home" shifting = {false} barStyle = {{backgroundColor: '#3163B0'}}>
                <Tab.Screen
                name="Home" 
                component={HomeScreen}
                options = {{
                tabBarIcon: () =>
                <FontAwesome5 name = "home" size = {23} color = "white"/>
                }}/>
                <Tab.Screen 
                name="Calendar" 
                component={CalendarScreen}
                options = {{
                tabBarIcon: () =>
                <FontAwesome name = "calendar" size = {23} color = "white"/>
                }}/>
                <Tab.Screen 
                name="History" 
                component={TransactionHistoryScreen} 
                options = {{
                tabBarIcon: () =>
                <FontAwesome name = "history" size = {25} color = "white"/>
                }}/>
                <Tab.Screen 
                name="New Trans." 
                component={NewTransactionScreen}
                options = {{
                tabBarIcon: () =>
                <FontAwesome name = "plus" size = {23} color = "white"/>
                }}/>
            </Tab.Navigator>
            </NavigationContainer>
        );
    }
}