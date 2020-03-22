import * as React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class TransactionHistoryScreen extends React.Component {

    displayReturned() {
        return(
            <View style = {{borderRadius: 10, padding: 10, backgroundColor: "#C6C8CC", width: 330, height: 100, alignItems: 'center'}}>
                <Text style = {{color: "white"}}>Hello</Text>
            </View>
        );
    }

    displayKept() {
        return(
            <View style = {{borderRadius: 10, padding: 10, backgroundColor: "#C6C8CC", width: 330, height: 100, alignItems: 'center'}}>
                <Text style = {{color: "white"}}>Hello</Text>
            </View>
        );
    }

    displayUndecided() {
        return(
            <View style = {{borderRadius: 10, padding: 10, backgroundColor: "#C6C8CC", width: 330, height: 100, alignItems: 'center'}}>
                <Text style = {{color: "white"}}>Hello</Text>
            </View>
        );
    }


    render() {
        return (
            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}>
                <View style = {{alignItems: 'center', paddingTop: 60, paddingBottom: 20}}>
                    <Text style = {{color: "#3163B0", fontSize: 36, fontWeight: "bold", fontFamily: "Avenir"}}>Transaction History</Text>
                </View>
                <View style = {{alignItems: 'center', paddingTop: 20}}>
                    <View style = {{paddingBottom: 15}}>
                        <Text style = {{fontSize: 18, fontFamily: "Avenir", fontWeight: "bold"}}>RETURNED</Text>
                    </View>
                    {this.displayReturned()}
                </View>
                <View style = {{alignItems: 'center', paddingTop: 15}}>
                    <View style = {{paddingBottom: 15}}>
                        <Text style = {{fontSize: 18, fontFamily: "Avenir", fontWeight: "bold"}}>KEPT</Text>
                    </View>
                    {this.displayKept()}
                </View>
                <View style = {{alignItems: 'center', paddingTop: 15}}>
                    <View style = {{paddingBottom: 15}}>
                        <Text style = {{fontSize: 18, fontFamily: "Avenir", fontWeight: "bold"}}>UNDECIDED</Text>
                    </View>
                    {this.displayUndecided()}
                </View>
            </KeyboardAwareScrollView>
        );
    }
}