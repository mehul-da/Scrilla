import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

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
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Calendar" component={CalendarScreen}/>
        <Tab.Screen name="Transaction Hist" component={TransactionHistoryScreen} />
        <Tab.Screen name="Add Trans" component={AddTransactionScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}