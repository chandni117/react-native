import React , {useState} from 'react';
import {Text, ScrollView , TextInput , StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

function LoginPage() {
    const [Username , onChangeUsername] = useState('') ;
    const [password, onChangePassword] = useState('') ;
    return (
        <KeyboardAvoidingView style={loginPageStyle.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView keyboardDismissMode='on-drag'>
            <Text style={loginPageStyle.headerText}>
                Welcome to Little Lemon
            </Text>
            <Text style={loginPageStyle.regularText}>
                Login to continue
            </Text>
            <TextInput 
            value= {Username}
            style={loginPageStyle.inputText}
            placeholder='Username'
            keyboardType={'email-address'}
            onChangeText={onChangeUsername} />
            <TextInput 
            value= {password}
            placeholder='Password'
            secureTextEntry={true}
            minLength={8}
            keyboardType={'default'}
            style={loginPageStyle.inputText}
            onChangeText={onChangePassword} />
        </ScrollView>
        </KeyboardAvoidingView>
    );
}

const loginPageStyle = StyleSheet.create ({
        container: {
            flex: 1     
        },
        headerText: {
            fontSize: 30,
            textAlign: 'center',
            color: '#EDEFEE',
            padding: 30
        },
        regularText : {
            fontSize: 25,
            textAlign: 'center',
            color: '#EDEFEE',
            padding: 20
        },
        inputText: {
            borderColor: '#fff',
            borderWidth: 1,
            padding: 12,
            margin: 15,
            backgroundColor: 'pink'
            
        }

    });

export default LoginPage ;