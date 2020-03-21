import * as React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>HOME SCREEN</Text>
            <Icon
                raised
                name='arrow-left'
                type='font-awesome'
                color='black'
                reverse = {true}
                onPress={() => this.props.navigation.navigate('Login')} />
            </View>
        );
    }
}