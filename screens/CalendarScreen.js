import * as React from 'react';
import { Text, View, Modal, Alert, TouchableHighlight } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { AntDesign } from 'react-native-vector-icons';
import Parse from 'parse'
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

class CalendarScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            showModal: false,
            showItemsArray: [],
            markedDates: {}
        }
    }

    intervalID = null;

    componentDidMount() {
        this.intervalID = setInterval(this.markCalendar.bind(this), 100000);
        this.markCalendar();
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    markCalendar() {
        const Transactions = Parse.Object.extend("Transactions");
        const query = new Parse.Query(Transactions);
        query.equalTo("username", String(this.props.user.username))

        query.find().then(results => {
            results.forEach((obj, key) => {
                let theMarkedDates = this.state.markedDates;
                let date = obj.get('returnDate');
                let newDate = `${date.substr(6,4)}-${date.substr(0,2)}-${date.substr(3,2)}`
                theMarkedDates[newDate] = {marked: true}
                this.setState({markedDates: theMarkedDates})
            })
        })
    }

    findItems(date) {
        const Transactions = Parse.Object.extend("Transactions");
        const query = new Parse.Query(Transactions);
        let arrayVals = []

        query.equalTo("username", String(this.props.user.username))
        query.equalTo("returnDate", String(date))
        
        query.find().then(results => {
            results.forEach((obj, key) => {
            arrayVals.push(
                <View  style = {{padding: 10}}>
                <View style = {{borderRadius: 10, padding: 13, backgroundColor: "#C6C8CC", width: 330, height: 78, alignItems: 'center'}}>
                <Text style = {{color: "#3163B0", fontWeight: "bold"}}>
                    Store: {obj.get('store')}  
                </Text>
                <Text style = {{color: "#3163B0", fontWeight: "bold"}}>
                    Item: {obj.get('item')}
                </Text>
                <Text style = {{color: "#3163B0", fontWeight: "bold"}}>
                    Price: {obj.get('price')}
                </Text>
                </View>
                </View>)}
            )
        }).then(() => 
        {this.setState({showItemsArray: arrayVals})});
    }

    render() {
        return (
            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}>
                <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.showModal}>
                <KeyboardAwareScrollView
                style = {{paddingTop: 25}}
                resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}>
                    <View style = {{paddingTop: 20, alignItems: 'center'}}>
                    <Text style = {{fontSize: 35, color: "#3163B0"}}>{this.state.date}</Text>
                    <View style = {{paddingTop: 35}}>
                    {this.state.showItemsArray.length == 0 ? <Text>There are no items set for return on this date.</Text> : this.state.showItemsArray}
                    </View>
                        <View style = {{justifyContent: 'flex-end', paddingTop: 25}}>
                            <AntDesign
                            name = "closecircle"
                            style = {{color: "#3163B0"}}
                            size = {55}
                            onPress={() => {
                            this.setState({showModal: false})
                            }}/>
                        </View>
                    </View>
                    </KeyboardAwareScrollView>
                </Modal>
                <View style = {{alignItems: 'center', paddingTop: 60}}>
                    <Text style = {{color: "#3163B0", fontSize: 36, fontWeight: "bold", fontFamily: "Avenir"}}>Calendar</Text>
                </View>
                <View style = {{paddingTop: 60, padding: 15}}>
                    <Calendar
                    minDate = {'2020-03-01'}
                    markedDates = {this.state.markedDates}
                    onDayPress = {(day) => {
                        let properDay = (day.day > 9) ? "" + day.day : "0" + day.day;
                        let properMonth = (day.month > 9) ? "" + day.month : "0" + day.month;
                        this.findItems(`${properMonth}/${properDay}/${day.year}`)
                        this.setState({date: `${properMonth}/${properDay}/${day.year}`})
                        this.setState({showModal: true})
                        this.setState({markedCalendar: !this.state.markedCalendar})
                        }}/>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarScreen)