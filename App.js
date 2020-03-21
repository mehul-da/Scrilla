import * as React from 'react';
import { Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import SwitchNavigator from './SwitchNavigator';

export default class App extends React.Component {
  render() {
    return (
      <SwitchNavigator />
    );
  }
}