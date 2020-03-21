import * as React from 'react';
import { Text, View } from 'react-native';

export default class TransactionHistoryScreen extends React.Component {
    render() {
        return (
            <View>
                <View style = {{alignItems: 'center', paddingTop: 50}}>
                    <Text style = {{color: "#3163B0", fontSize: 29, fontWeight: "bold", fontFamily: "Avenir"}}>Transaction History</Text>
                </View>
            </View>
        );
    }
}