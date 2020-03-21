import * as React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class NewTransactionHistory extends React.Component {
    render() {
        return (
            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={false}>
            <View style = {{alignItems: 'center', paddingTop: 60}}>
                <Text style = {{color: "#3163B0", fontSize: 36, fontWeight: "bold", fontFamily: "Avenir"}}>Add Transaction</Text>
            </View>
            <View style = {{alignItems: 'center', paddingTop: 70}}>
            <TextInput 
            style = {styles.textInput}
            placeholder = "Shop/Store"
            placeholderTextColor = "black"/>
            </View>
            <View style = {{alignItems: 'center', paddingTop: 20}}>
            <TextInput 
            style = {styles.textInput}
            placeholder = "Type of Item"
            placeholderTextColor = "black"/>
            </View>
            <View style = {{alignItems: 'center', paddingTop: 20}}>
            <TextInput 
            style={styles.textInput}
            placeholder = "Price of Item"
            placeholderTextColor = "black"/>
            </View>
            <View style = {{alignItems: 'center', paddingTop: 20}}>
            <TextInput 
            style={styles.textInput}
            placeholder = "Return Date (MM/DD/YYYY)"
            placeholderTextColor = "black"/>
            </View>
            <View style = {{alignItems: 'center', paddingTop: 30}}>
            <Icon 
            type = "material-icons" 
            name = "done" 
            size = {28} 
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