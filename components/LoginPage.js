import React , {useState} from 'react';
import {Text, ScrollView , TextInput , StyleSheet, KeyboardAvoidingView, Platform, Pressable} from 'react-native';

function LoginPage() {
    const [Username , onChangeUsername] = useState('') ;
    const [password, onChangePassword] = useState('') ;
    const [pressed, setPressed] = useState(false) ;
    return (
        <KeyboardAvoidingView style={loginPageStyle.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView keyboardDismissMode='on-drag'>
            <Text style={loginPageStyle.headerText}>
                Welcome to Little Lemon
            </Text>
            {pressed && 
                <Text style={loginPageStyle.regularText}>You are logged in</Text>
            }
            {!pressed && (
                <>
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
            <Pressable 
                onPress= {() => { setPressed(!pressed)} } 
                >
                <Text style={loginPageStyle.btnText}>Login</Text>
            </Pressable>
            </>
            )}

        </ScrollView>
        </KeyboardAvoidingView>
    );
}

const loginPageStyle = StyleSheet.create ({
        container: {
            flex: 1     ,
            backgroundColor: '#333333'
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
            backgroundColor: '#f0fff0'
            
        },
        btnText: {
            textAlign: 'center',
            borderRadius: 70,
            marginLeft: 125,
            marginTop:20,
            padding:10,
            fontSize: 25,
            width: 100,
            backgroundColor: 'gray',
            borderWidth: 1,


        }

    });

export default LoginPage ;