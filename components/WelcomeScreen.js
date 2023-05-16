
import React , {useState} from 'react' ;
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
export default function WelcomeScreen() {
  const [username , onChangeUsername] = useState('')
  return (
    <View style={WelcomeScreenStyle.container}>
        <ScrollView >
      <Text style={WelcomeScreenStyle.headerText}>Welcome to Little Lemon </Text>
      <Text style={WelcomeScreenStyle.paraStyle}>Little lemon is a charming neighborhood bistro that serves simple food and classic cocktails in lively but casual environment. We would love to hear more about your experience with us! </Text>
      <TextInput
      value={username}
      placeholder='Enter Your Username...'
      style={WelcomeScreenStyle.inputStyle}
      onChangeText={onChangeUsername}
      />
      </ScrollView>
    </View>
  );
}

const WelcomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    padding: 40,
  }, 
  paraStyle: {
    padding: 20,
    fontSize: 24,
    marginVertical : 8,
    color: 'white',
    textAlign: 'center'
  },
  inputStyle: {
    borderWidth: 1,
    height: 40,
    margin: 8,
    padding: 12,
    backgroundColor: 'pink',
    borderColor: '#EDEFEE'
  }
});
