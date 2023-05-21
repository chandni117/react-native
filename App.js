import { StyleSheet,  View , StatusBar} from 'react-native';
import LemonHeader from './components/LemonHeader';
import LemonFooter from './components/LemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import FeedbackScreen from './components/feedbackScreen';
import LoginPage from './components/LoginPage';
import Welcome from './components/Welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const stack = createNativeStackNavigator() ;
export default function App() {
  return (
  <>
      <NavigationContainer>
        <View style={styles.container}>
        <LemonHeader />
        <stack.Navigator 
          initialRouteName='Login Page'
          screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' }}}>
          <stack.Screen 
            name="Welcome" 
            component={Welcome} 
            options={{ title: 'Home' }} ></stack.Screen>
          <stack.Screen name="Menu" component={MenuItems} ></stack.Screen>
        </stack.Navigator>
        </View>
        <View style={styles.footerStyle}> 
          <LemonFooter />
        </View>
      </NavigationContainer>
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  footerStyle: {
    backgroundColor: '#333333'
  }
 
})


