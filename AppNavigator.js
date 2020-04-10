import * as React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
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
                }} />
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
                name="Add Trans." 
                component={NewTransactionScreen}
                options = {{
                tabBarIcon: () =>
                <FontAwesome name = "plus" size = {23} color = "white"/>
                }}/>
            </Tab.Navigator>
            <Text style = {{fontSize: 1, backgroundColor: 'black'}}> </Text>
            <Text style = {{fontSize: 13, fontWeight: 'bold', backgroundColor: '#3163B0', textAlign: 'center', color: 'white', paddingBottom: 5, paddingTop: 3}} onPress = {() => this.props.navigation.navigate('Login')}> --LOG OUT-- </Text>
            </NavigationContainer>
        );
    }
}