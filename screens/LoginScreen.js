import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native';
import { Icon, ThemeProvider, Input } from  'react-native-elements';
import Parse from 'parse';
import 'localstorage-polyfill';
import { AsyncStorage } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateName, updateEmail, updatePassword, login, updateAlerts } from '../actions/user';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, updateName, login, updateAlerts }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

Parse.setAsyncStorage(AsyncStorage);
Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
   'G0R2zZz5RW2gdK2QYz1rrtFLaOwh2sGRL9PoFJMY', // This is your Application ID
  'tPM7b3CMduKdNA34LkYrAmBw0LND1fk2eupLxvNl' // This is your Javascript key
);


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

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    handleLogin = () => {
        Parse.User.logIn(this.props.user.username, this.props.user.password).then((user) => {
            if (user.get('emailVerified')) {
                this.props.navigation.navigate('MainApp');
            } else {
                Alert.alert("NOTE", 'Your email has not been verified yet. Please verify it so you can be logged in.');
            }
        }).catch((error) => {
            Alert.alert("NOTE", "Wrong username/password. Please try again.");
        })
    }
    render() {
        return (
            <View style = {{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                <View style = {{paddingBottom: 20}}>
                <Image source = {require('../logoScrilla.png')} style = {{width: 350, height: 120, alignSelf: 'center'}}/>
                </View>
                <View style = {styles.inputText}>
                    <Input placeholder = 'Username'
                         leftIcon={{ type: 'material-community', name: 'account' }} 
                         leftIconContainerStyle = {{paddingRight: 5}} 
                         autoCorrect = {false}
                         maxLength = {50}
                         value = {this.props.user.username}
                         onChangeText = {(text) => this.props.updateName(text)}
                         autoCapitalize = 'none' />
                </View>
                <View style = {{paddingTop: 15, width: 260}}>
                    <Input placeholder = 'Password'
                    secureTextEntry = {true}
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    maxLength = {30}
                    onChangeText = {(text) => this.props.updatePassword(text)}
                    leftIconContainerStyle = {{paddingRight: 5}}
                    value = {this.props.user.password}
                    leftIcon={{ type: 'material-community', name: 'textbox-password' }} />
                </View>
                <View style = {styles.icon}>
                    <Icon
                        raised = {true}
                        reverse = {true}
                        color = '#3163B0'
                        name='login'
                        type='material-community'
                        onPress={this.handleLogin} />
                </View>
                <View>
                    <Text style = {styles.smallText}> Don't have an account? </Text>
                    <Text style = {{color: '#3163B0', fontSize: 13, alignSelf: 'center'}} onPress = {() => this.props.navigation.navigate('Signup')}> Sign Up </Text>
                </View>
            </View>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen)