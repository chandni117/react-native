import { StyleSheet,  View , StatusBar} from 'react-native';
import LemonHeader from './components/LemonHeader';
import LemonFooter from './components/LemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import FeedbackScreen from './components/feedbackScreen';
export default function App() {
  return (<>
    <View style= {styles.container}>
      <StatusBar />
      <LemonHeader />
      <WelcomeScreen />
    </View>
    <View style={styles.footerStyle}>
      <LemonFooter/> 
    </View>
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


