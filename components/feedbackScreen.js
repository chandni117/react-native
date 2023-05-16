import React, { useState } from 'react';
import { TextInput , ScrollView, Text , StyleSheet} from 'react-native';

function FeedbackScreen() {
    const [firstName , onChangeFirstName] = useState('');
    const [lastName, onChangeLastName] = useState('');
    const [message, onChangeMessage] =useState('');

    return (
        <ScrollView style={FeedbackStyle.container}>
            <Text style={FeedbackStyle.headingText}> How was your visit to Little Lemon? </Text>
            <Text style={FeedbackStyle.paraText}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear your experience with us!
            </Text>
            <TextInput 
            style={FeedbackStyle.inputStyle}
            value={firstName}
            onChangeText={onChangeFirstName} />
            <TextInput style={FeedbackStyle.inputStyle}
            value={lastName}
            onChangeText={onChangeLastName} />
            <TextInput style={FeedbackStyle.messageStyle}
            value={message}
            onChangeText={onChangeMessage} />
        </ScrollView>

    );
}

const FeedbackStyle = StyleSheet.create({
    container: {
      flex: 1
    },
    headingText: {
        textAlign: 'center',
        fontSize: 26,
        color: '#EDEFEE',
        marginVertical: 10,
        padding: 20
    },
    paraText: {
        textAlign: 'center',
        fontSize: 24,
        color: '#EDEFEE',
        marginVertical: 8,
        padding: 20

    },
    inputStyle: {
        backgroundColor: 'pink',
        borderWidth: 1,
        height: 40,
        margin: 10,
        padding: 10,
        borderColor: '#EDEFEE'
    },
    messageStyle: {
        backgroundColor: 'pink',
        borderWidth: 1,
        height: 100,
        padding: 10,
        margin: 12,
        borderColor: '#EDEFEE'

    }
});
export default FeedbackScreen ;