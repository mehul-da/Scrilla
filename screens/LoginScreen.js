import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Icon, ThemeProvider, Input } from  'react-native-elements';

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
        borderColor: "#3163B0", 
        color: "black",
        alignSelf: 'center',
        justifyContent: 'center',
        paddingLeft: 5
    },
    inputText: {
        width: 260
    },
    icon: {
        alignSelf: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 5
    },
    smallText: {
        color: 'black',
        fontSize: 13
    }
})

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style = {{alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: '#c7d8f2'}}>
                <View style = {{paddingBottom: 20}}>
                <Image source = {require('../logo.png')} style = {{width: 350, height: 120, alignSelf: 'center'}}/>
                </View>
                <View style = {styles.inputText}>
                    <Input placeholder = 'Email'
                         leftIcon={{ type: 'material-community', name: 'email' }} 
                         leftIconContainerStyle = {{paddingRight: 5}} 
                         autoCorrect = {false}
                         maxLength = {50}
                         autoCapitalize = 'none' />
                </View>
                <View style = {{paddingTop: 15, width: 260}}>
                    <Input placeholder = 'Password'
                    secureTextEntry = {true}
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    maxLength = {30}
                    leftIconContainerStyle = {{paddingRight: 5}}
                    leftIcon={{ type: 'material-community', name: 'textbox-password' }} />
                </View>
                <View style = {styles.icon}>
                    <Icon
                        raised = {true}
                        reverse = {true}
                        color = '#3163B0'
                        name='login'
                        type='material-community'
                        onPress={() => this.props.navigation.navigate('MainApp')} />
                </View>
                <View>
                    <Text style = {styles.smallText}> Don't have an account? </Text>
                    <Text style = {{color: '#3163B0', fontSize: 13, alignSelf: 'center'}} onPress = {() => this.props.navigation.navigate('Signup')}> Sign Up </Text>
                </View>
            </View>
        )
    }
}