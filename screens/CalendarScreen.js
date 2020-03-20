import * as React from 'react';
import { Text, View, ALert, Alert } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class CalendarScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ""
        }
    }

    render() {
        return (
            <View>
                <View style = {{alignItems: 'center', paddingTop: 40}}>
                    <Text style = {{fontSize: 25, fontWeight: "bold", fontFamily: "Trebuchet MS"}}>Calendar</Text>
                </View>
                <View style = {{paddingTop: 30, padding: 15}}>
                    <Calendar
                    minDate = {'2020-03-01'}
                    onDayPress = {(day) => {
                        console.log(day)
                        this.setState({date: `${day.month}/${day.day}/${day.year}`})
                        }}
                    onDayLongPress = {(day) => {
                        this.setState({date: ""})
                    }}/>
                    <View style = {{alignItems: 'center', paddingTop: 20}}>
                        <Text style = {{fontFamily: "Trebuchet MS", fontSize: 20}}>{this.state.date}</Text>
                    </View>
                </View>
            </View>
        );
    }
}