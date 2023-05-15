import { StyleSheet, Text, View } from 'react-native';

export default function LemonFooter() {
  return (
    <View style={FooterStyle.container}>
      <Text style={FooterStyle.headerText}>All rights reserved by Little Lemon, 2022</Text>
    </View>
  );
}

const FooterStyle = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: 'black',
    
  },
  headerText: {
    color: 'yellow',
    textAlign: 'center',
    fontSize: 15,
  }
});