import * as React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}>
                <View style = {{alignItems: 'center', paddingTop: 60}}>
                    <Text style = {{color: "#3163B0", fontSize: 36, fontWeight: "bold", fontFamily: "Avenir"}}>Home</Text>
                </View>
                <View style = {{paddingTop: 30, paddingLeft: 30}}>
                    <Text style = {{fontSize: 18, fontFamily: "Avenir", fontWeight: "bold"}}>UPCOMING</Text>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}