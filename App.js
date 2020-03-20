import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { FontAwesome } from 'react-native-vector-icons';
import { FontAwesome5 } from 'react-native-vector-icons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calendar!</Text>
    </View>
  );
}

function TransactionHistoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Transaction History!</Text>
    </View>
  );
}

function AddTransactionScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add Transaction!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName = "Home" shifting = {false}>
        <Tab.Screen
        name="Home" 
        component={HomeScreen}
        options = {{
          tabBarIcon: () =>
          <FontAwesome5 name = "home" size = {23}/>
        }}/>
        <Tab.Screen 
        name="Calendar" 
        component={CalendarScreen}
        options = {{
          tabBarIcon: () =>
          <FontAwesome name = "calendar" size = {23}/>
        }}/>
        <Tab.Screen 
        name="History" 
        component={TransactionHistoryScreen} 
        options = {{
          tabBarIcon: () =>
          <FontAwesome name = "history" size = {25}/>
        }}/>
        <Tab.Screen 
        name="New Trans." 
        component={AddTransactionScreen}
        options = {{
          tabBarIcon: () =>
          <FontAwesome name = "plus" size = {23}/>
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}