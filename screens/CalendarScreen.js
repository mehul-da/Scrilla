import * as React from 'react';
import { Text, View, Modal, Alert, TouchableHighlight } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { AntDesign } from 'react-native-vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class CalendarScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            showModal: false
        }
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
                <View style={{marginTop: 22,}}>
                    <View style = {{paddingTop: 20, alignItems: 'center'}}>
                    <Text style = {{fontSize: 35, color: "#3163B0"}}>{this.state.date}</Text>
                        <View style = {{paddingTop: 500}}>
                            <AntDesign
                            name = "closecircle"
                            style = {{color: "#3163B0"}}
                            size = {55}
                            onPress={() => {
                            this.setState({showModal: false})
                            }}/>
                        </View>
                    </View>
                </View>
                </Modal>
                <View style = {{alignItems: 'center', paddingTop: 60}}>
                    <Text style = {{color: "#3163B0", fontSize: 36, fontWeight: "bold", fontFamily: "Avenir"}}>Calendar</Text>
                </View>
                <View style = {{paddingTop: 70, padding: 15}}>
                    <Calendar
                    minDate = {'2020-03-01'}
                    onDayPress = {(day) => {
                        this.setState({date: `${day.month}/${day.day}/${day.year}`})
                        this.setState({showModal: true})
                        }}/>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}