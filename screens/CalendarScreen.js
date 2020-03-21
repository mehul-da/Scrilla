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
                <View style = {{alignItems: 'center', paddingTop: 50}}>
                    <Text style = {{color: "#3163B0", fontSize: 29, fontWeight: "bold", fontFamily: "Avenir"}}>Calendar</Text>
                </View>
                <View style = {{paddingTop: 40, padding: 15}}>
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
                        <Text style = {{fontFamily: "Avenir", fontSize: 20}}>{this.state.date}</Text>
                    </View>
                </View>
            </View>
        );
    }
}