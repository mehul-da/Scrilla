import * as React from 'react';
import { Text, View, TextInput, StyleSheet, AsyncStorage, Alert } from 'react-native';
import Parse from 'parse'
import 'localstorage-polyfill'
import { Icon, Input } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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

class NewTransactionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: "",
            item: "",
            price: "",
            returnDate: ""
        }
    }

    createItem = () => {
        const Transactions = Parse.Object.extend("Transactions");
        const transactions = new Transactions();
    
        transactions.set("store", this.state.store);
        transactions.set("item", this.state.item)
        transactions.set("price", this.state.price)
        transactions.set("returnDate", this.state.returnDate)
        transactions.set("status", "kept")
        transactions.set("username", this.props.user.username);
        
        transactions.save().then(object => {
            Alert.alert("Transaction was successful!")
            this.setState({
                store: "",
                item: "",
                price: "",
                returnDate: ""
            })
        }).catch(error=> {Alert.alert("Transaction was unsuccessful! Please try again.")})
      }

    render() {
        return (
            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}>
            <View style = {{alignItems: 'center', paddingTop: 65}}>
                <Text style = {{color: "#3163B0", fontSize: 36, fontWeight: "bold", fontFamily: "Avenir"}}>Add Transaction</Text>
            </View>
            <View style = {{alignItems: 'center', justifyContent: 'center'}}>
            <View style = {{paddingTop: 75, width: 300}}>
            <Input
            leftIcon={{ type: 'material-community', name: 'store' }} 
            leftIconContainerStyle = {{paddingRight: 10}}
            inputStyle = {{fontSize: 16}}
            value = {this.state.store}
            onChangeText = {(text) => this.setState({store: text})}
            placeholder = "Shop/Store"/>
            </View>
            <View style = {{paddingTop: 20, width: 300}}>
            <Input 
            leftIcon={{ type: 'material-community', name: 'tshirt-crew' }} 
            leftIconContainerStyle = {{paddingRight: 10}}
            inputStyle = {{fontSize: 16}}
            value = {this.state.item}
            onChangeText = {(text) => this.setState({item: text})}
            placeholder = "Item"/>
            </View>
            <View style = {{paddingTop: 20, width: 300}}>
            <Input 
            leftIcon={{ type: 'entypo', name: 'price-tag' }}
            leftIconContainerStyle = {{paddingRight: 10}}
            inputStyle = {{fontSize: 16}}
            value = {this.state.price}
            onChangeText = {(text) => this.setState({price: text})}
            placeholder = "Price of Item"/>
            </View>
            <View style = {{paddingTop: 20, width: 300}}>
            <Input 
            leftIcon={{ type: 'material-icon', name: 'date-range' }} 
            leftIconContainerStyle = {{paddingRight: 10}}
            inputStyle = {{fontSize: 16}}
            value = {this.state.returnDate}
            onChangeText = {(text) => this.setState({returnDate: text})}
            placeholder = "Return Date (MM/DD/YYYY)"/>
            </View>
            </View>
            <View style = {{alignItems: 'center', paddingTop: 45}}>
            <Icon 
            type = "material-icons" 
            name = "done" 
            size = {26} 
            color = "#3163B0"
            iconStyle = {{fontSize: 33}}
            onPress = {this.createItem} 
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTransactionScreen)