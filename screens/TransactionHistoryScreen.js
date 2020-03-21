import * as React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class TransactionHistoryScreen extends React.Component {
    render() {
        return (
            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
            style = {{backgroundColor: 'white'}}>
                <View style = {{alignItems: 'center', paddingTop: 60}}>
                    <Text style = {{color: "#3163B0", fontSize: 36, fontWeight: "bold", fontFamily: "Avenir"}}>Transaction History</Text>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}