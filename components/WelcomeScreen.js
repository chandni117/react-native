
import { ScrollView, StyleSheet, Text, View } from 'react-native';
export default function WelcomeScreen() {
  return (
    <View style={WelcomeScreenStyle.container}>
        <ScrollView >
      <Text style={WelcomeScreenStyle.headerText}>Welcome to Little Lemon </Text>
      <Text style={WelcomeScreenStyle.paraStyle}>Little lemon is a charming neighborhood bistro that serves simple food and classic cocktails in lively but casual environment. We would love to hear more about your experience with us! </Text>
      </ScrollView>
    </View>
  );
}

const WelcomeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  headerText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    padding: 40,
  }, 
  paraStyle: {
    padding: 30,
    fontSize: 30,
    marginVertical : 8,
    color: 'black',
    textAlign: 'center'
  }
});
