import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
            style = {{backgroundColor: 'white'}}>
                <View style = {{alignItems: 'center', paddingTop: 40}}>
                    <Image source = {require("../logoScrilla.png")} style = {{width: 300, height: 100}}/>
                </View>
                <View style = {{paddingTop: 40, paddingLeft: 30}}>
                    <Text style = {{fontSize: 18, fontFamily: "Avenir", fontWeight: "bold"}}>UPCOMING</Text>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}