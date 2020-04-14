import * as React from 'react';
import { Text, View, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Parse from 'parse';
import { AsyncStorage } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateName, updateEmail, updatePassword, signup, updateAlerts } from '../actions/user';
import { Icon } from 'react-native-elements';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, updateName, signup, updateAlerts }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayItems: [],
        }
    }

    intervalID = null;

    componentDidMount() {
        this.intervalID = setInterval(this.findItemsWithinAMonth.bind(this), 1000000);
        this.findItemsWithinAMonth();
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    returnItem(created, updated, user) {
        Alert.alert("Confirmation", "Are you sure you want to return this item?",
        [
            {text: 'Yes', onPress: () => {

                const Transactions = Parse.Object.extend("Transactions");
                const query = new Parse.Query(Transactions);
                query.equalTo('createdAt', created);
                query.equalTo('username', user);
                query.equalTo('createdAt', created)

                query.find().then((results) => {
                    results.forEach((item) => {
                        item.set('status', 'returned')
                        item.save()
                    })
                })
            
        }},
            {text: 'No'},
        ],)
    }

    findItemsWithinAMonth() {
        const Transactions = Parse.Object.extend("Transactions");
        const query = new Parse.Query(Transactions);
        let arrayVals = []
        let today = new Date()
        let nextMonth = new Date()
        nextMonth.setTime(today.getTime() + 30 * 24000 * 3600)

        query.equalTo("username", String(this.props.user.username))
        query.equalTo("status", "kept")
        
        query.find().then(results => {
            results.forEach((obj, key) => {
                let date = obj.get('returnDate')
                let year = parseInt(date.substr(6, 4))
                let day = parseInt(date.substr(3, 2))
                let month = parseInt(date.substr(0, 2))
                let dateObject = new Date(year, month - 1, day);
                if (dateObject.getTime() >= today.getTime() && dateObject.getTime() <= nextMonth.getTime()) {
                    arrayVals.push(
                        <View style = {{padding: 10}}>
                        <View style = {{borderRadius: 10, padding: 13, backgroundColor: "#C6C8CC", width: 330, height: 100, flexDirection: 'row'}}>
                            <View>
                                <Text style = {{color: "#3163B0", fontWeight: "bold"}}>
                                    Store: {obj.get('store')}  
                                </Text>
                                <Text style = {{color: "#3163B0", fontWeight: "bold"}}>
                                    Item: {obj.get('item')}
                                </Text>
                                <Text style = {{color: "#3163B0", fontWeight: "bold"}}>
                                    Price: {obj.get('price')}
                                </Text>
                                <Text style = {{color: "#3163B0", fontWeight: "bold"}}>
                                    Return Date: {obj.get('returnDate')}
                                </Text>
                            </View>
                            <View style = {{paddingLeft: 70, paddingTop: 6}}>
                                <Icon 
                                    type = 'font-awesome' 
                                    name = 'check-square' 
                                    size = {45}
                                    onPress = {() => this.returnItem(obj.get('createdAt'), obj.get('updatedAt'), obj.get('username'))}/>
                                <Text style = {{paddingTop: 3, fontSize: 11,}}>RETURN</Text>
                            </View>
                        </View>
                        </View>)
                }
            })
        }).then(() => {
            this.setState({displayItems: arrayVals})
        })
    }

    render() {
        return (
            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}>
                <View style = {{alignItems: 'center', paddingTop: 60}}>
                    <Text style = {{color: "#3163B0", fontSize: 36, fontWeight: "bold", fontFamily: "Avenir"}}>Home</Text>
                </View>
                <View style = {{alignItems: 'center', paddingTop: 40}}>
                    <Text onPress = {() => this.findItemsWithinAMonth()} style = {{fontSize: 20, fontFamily: "Avenir", color: "#3163B0", fontWeight: "bold"}}>UPCOMING</Text>
                </View>
                <View style = {{alignItems: 'center', paddingTop: 25}}>
                    {this.state.displayItems.length == 0 ? <Text>No items set for return within the next month!</Text> : this.state.displayItems}
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)