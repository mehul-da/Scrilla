import * as React from 'react';
import { Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import SwitchNavigator from './SwitchNavigator';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <SwitchNavigator />
      </Provider>
    );
  }
}