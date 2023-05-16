import { StyleSheet, Text, View  } from 'react-native';
export default function LemonHeader() {
  return (
    <View style={LemonHeaderStyle.container}>
      <Text style={LemonHeaderStyle.headerText}>Little Lemon App</Text>
    </View>
  );
}

const LemonHeaderStyle = StyleSheet.create({
  container: {
    flex: 0.13,
    backgroundColor: 'gray',
  },
  headerText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 30,
    padding: 20,
  }
});
