import * as React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class NewTransactionHistory extends React.Component {
    render() {
        return (
            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}>
            <View style = {{alignItems: 'center', paddingTop: 60}}>
                <Text style = {{color: "#3163B0", fontSize: 36, fontWeight: "bold", fontFamily: "Avenir"}}>Add Transaction</Text>
            </View>
            <View style = {{alignItems: 'center', justifyContent: 'center'}}>
            <View style = {{paddingTop: 70, width: 300}}>
            <Input
            leftIcon={{ type: 'material-community', name: 'store' }} 
            leftIconContainerStyle = {{paddingRight: 10}}
            inputStyle = {{fontSize: 16}}
            placeholder = "Shop/Store"/>
            </View>
            <View style = {{paddingTop: 20, width: 300}}>
            <Input 
            leftIcon={{ type: 'material-community', name: 'tshirt-crew' }} 
            leftIconContainerStyle = {{paddingRight: 10}}
            inputStyle = {{fontSize: 16}}
            placeholder = "Item"/>
            </View>
            <View style = {{paddingTop: 20, width: 300}}>
            <Input 
            leftIcon={{ type: 'entypo', name: 'price-tag' }} 
            leftIconContainerStyle = {{paddingRight: 10}}
            inputStyle = {{fontSize: 16}}
            placeholder = "Price of Item"/>
            </View>
            <View style = {{paddingTop: 20, width: 300}}>
            <Input 
            leftIcon={{ type: 'material-icon', name: 'date-range' }} 
            leftIconContainerStyle = {{paddingRight: 10}}
            inputStyle = {{fontSize: 16}}
            placeholder = "Return Date (MM/DD/YYYY)"/>
            </View>
            </View>
            <View style = {{alignItems: 'center', paddingTop: 35}}>
            <Icon 
            type = "material-icons" 
            name = "done" 
            size = {26} 
            color = "#3163B0"
            iconStyle = {{fontSize: 33}} 
            reverse = {true}/>
            </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 14, 
        width: 230, 
        height: 43, 
        borderRadius: 11, 
        borderWidth: 2, 
        borderColor: "black", 
        color: "black", 
        paddingLeft: 5
    }
})