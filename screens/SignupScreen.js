import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native';
import { Icon, ThemeProvider, Input } from  'react-native-elements';
import Parse from 'parse';
import localStorage from 'localstorage-polyfill';
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
    "wtfcr2EX0Kc4509Pyz32XMNGEmDzXh1XxsgRr0k5", // This is your Application ID
  'aKl8va1IdTM0zo82zE2qzovjNzODZsbA7E5aSIu4' // This is your Javascript key
);


const styles = StyleSheet.create({
    screenTitle: {
        alignSelf: 'center',
        justifyContent: 'center',
        color: '#3163B0',
        fontSize: 30,
        fontWeight: 'bold',
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
        paddingTop: 30,
        paddingBottom: 22
    },
    smallText: {
        color: 'black',
        fontSize: 13
    }
})

class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSignup = () => {
        let allowNav = true;
        const user = new Parse.User();
        user.set('username', this.props.user.username);
        user.set('email', this.props.user.email);
        user.set('password', this.props.user.password);
        user.signUp().then((user) => {
             Parse.User.logOut();
             Alert.alert("NOTE", "You are signed up. Please verify your e-mail to be logged in.");
         }) .catch((error) => {
            this.handleAlert(error.message);
            allowNav = false;
            // Alert.alert("NOTE", error.code);
          }).then(() => {
              if (allowNav) {
                this.props.navigation.navigate('Login');
              }
          })
    }

    handleAlert = (message) => {
        Alert.alert("NOTE", message);
    }

    render() {
        return (
            <View style = {{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                <View style = {styles.screenTitle}>
                    <Text style = {styles.screenTitle}> Sign Up </Text>
                </View>
                <View style = {styles.inputText}>
                    <Input placeholder = 'Username'
                         leftIcon={{ type: 'material-community', name: 'account' }} 
                         leftIconContainerStyle = {{paddingRight: 5}} 
                         autoCorrect = {false}
                         maxLength = {50}
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
                <View style = {{borderWidth: 1, borderRadius: 10, borderColor: '#3163B0', backgroundColor: '#3163B0'}}>
                        <Text
                            style = {{fontWeight: "bold", paddingTop: 9, paddingBottom: 9, paddingLeft: 90, paddingRight: 90, color: 'white', fontSize: 18}} 
                            onPress={this.handleSignup}>Sign Up</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.smallText}> Already have an account? </Text>
                    <Text style = {{color: '#3163B0', fontSize: 13, alignSelf: 'center'}} onPress = {() => this.props.navigation.navigate('Login')}> Go Back </Text>
                </View>
            </View>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupScreen)