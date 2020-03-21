import * as React from 'react';
import { View, Text } from 'react-native';
import { Icon, Button } from  'react-native-elements';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text> LOGIN SCREEN </Text>
                <Icon
                    raised
                    name='arrow-right'
                    type='font-awesome'
                    color='black'
                    reverse = {true}
                    onPress={() => this.props.navigation.navigate('MainApp')} />
                    </View>
        )
    }
}