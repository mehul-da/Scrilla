import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native';
import { Icon, ThemeProvider, Input } from  'react-native-elements';
import Parse from 'parse';
import 'localstorage-polyfill';
import { AsyncStorage } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateName, updateEmail, updatePassword, signup, updateAlerts } from '../actions/user';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, updateName, signup, updateAlerts }, dispatch)
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
        paddingLeft: 5,
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

class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alerts: false
        }
    }
    handleSignup = () => {
        let emailRegex = /[A-Za-z][A-Za-z1-9]*@[A-Za-z]+.com/;
        let nameRegex = /[A-Za-z]+\s[A-Za-z]+/;
        if (nameRegex.test(this.props.user.username)) {
            if (emailRegex.test(this.props.user.email)) {
                if (this.props.user.password.length >= 8) {
                    const user = new Parse.User();
                    user.set('username', this.props.user.username);
                    user.set('email', this.props.user.email);
                    user.set('password', this.props.user.password);
                    user.signUp().then((user) => {
                        this.props.signup(user);
                    }).catch(error => {
                        this.props.updateAlerts("yes");
                        Alert.alert("ERROR", "The username entered has already been taken.");
                    });
                    this.handleNewUser(user);
                } else {
                    Alert.alert("ERROR", "Please make sure the password entered is at least 8 characters long.");
                }
            } else {
                Alert.alert("ERROR", "Please make sure a valid email is entered.");
            }   
        } else {
            Alert.alert("ERROR", "Please make sure a first and last name is entered.");
        }
    }
    handleNewUser = (user) => {
        console.log("alerts" + this.props.user.alerts);
        if (this.props.user.alerts === "no") {
            this.props.signup(user);
            this.props.navigation.navigate('MainApp');
            this.props.updateAlerts(false);
        }
    }
    render() {
        return (
            <View style = {{alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: '#c7d8f2'}}>
                <View style = {styles.screenTitle}>
                    <Text style = {styles.screenTitle}> Sign Up </Text>
                </View>
                <View style = {styles.inputText}>
                    <Input placeholder = 'Name (First & Last)'
                         leftIcon={{ type: 'material-community', name: 'account' }} 
                         leftIconContainerStyle = {{paddingRight: 5}} 
                         autoCorrect = {false}
                         maxLength = {50}
                         value = {this.props.user.username}
                         onChangeText = {(text) => {this.props.updateName(text); this.props.updateAlerts("no")}}
                         autoCapitalize = 'none' />
                </View>
                <View style = {{paddingTop: 15, width: 260 }}>
                <Input placeholder = 'Email'
                         leftIcon={{ type: 'material-community', name: 'email' }} 
                         leftIconContainerStyle = {{paddingRight: 5}} 
                         autoCorrect = {false}
                         maxLength = {50}
                         onChangeText = {(text) => this.props.updateEmail(text)}
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
                    leftIcon={{ type: 'material-community', name: 'textbox-password' }} />
                </View>
                <View style = {styles.icon}>
                    <Icon
                        raised = {true}
                        reverse = {true}
                        color = '#3163B0'
                        name='login'
                        type='material-community'
                        onPress={this.handleSignup} />
                </View>
                <View>
                    <Text style = {styles.smallText}> Already have an account? </Text>
                    <Text style = {{color: '#3163B0', fontSize: 13, alignSelf: 'center'}} onPress = {() => this.props.navigation.navigate('Login')}> Log In </Text>
                </View>
            </View>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupScreen)