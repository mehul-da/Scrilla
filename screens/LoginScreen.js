import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Icon, ThemeProvider } from  'react-native-elements';

const styles = StyleSheet.create({
    screenTitle: {
        alignSelf: 'center',
        justifyContent: 'center',
        color: '#3163B0',
        fontSize: 30,
        fontFamily: 'Avenir',
        paddingTop: 70,
        paddingBottom: 10
    },
    textInput: {
        fontSize: 14, 
        width: 230, 
        height: 43, 
        borderRadius: 11, 
        borderWidth: 2, 
        borderColor: "black", 
        color: "black",
        alignSelf: 'center',
        justifyContent: 'center',
        paddingLeft: 5
    },
    icon: {
        alignSelf: 'center',
        justifyContent: 'center',
        paddingTop: 10
    }
})

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style = {{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                <View style = {{paddingBottom: 20}}>
                <Image source = {require('../logo.png')} style = {{width: 350, height: 120, alignSelf: 'center'}}/>
                </View>
                <View style = {styles.textInput}>
                    <TextInput 
                    placeholder = ' Email'
                    autoCorrect = {false} 
                    placeholderTextColor = 'black'
                    autoCapitalize = 'none' />
                </View>
                <View style = {{paddingTop: 15}}>
                    <TextInput
                    style = {styles.textInput}
                    placeholder = ' Password'
                    secureTextEntry = {true}
                    autoCapitalize = 'none'
                    placeholderTextColor = 'black'
                    autoCorrect = {false} />
                </View>
                <View style = {styles.icon}>
                    <Icon
                        raised = {true}
                        reverse = {true}
                        color = 'black'
                        name='arrow-right'
                        type='font-awesome'
                        onPress={() => this.props.navigation.navigate('MainApp')} />
                </View>
            </View>
        )
    }
}