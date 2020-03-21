import * as React from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <View style = {{alignItems: 'center', paddingTop: 60}}>
                    <Text style = {{color: "#3163B0", fontSize: 36, fontWeight: "bold", fontFamily: "Avenir"}}>Home</Text>
                </View>
            </View>
        );
    }
}