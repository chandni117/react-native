import { StyleSheet,  View , StatusBar} from 'react-native';
import LemonHeader from './components/LemonHeader';
import LemonFooter from './components/LemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
export default function App() {
  return (<>
    <View style= {styles.container}>
      <StatusBar />
      <MenuItems />
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
    backgroundColor: 'black'
  },
  footerStyle: {
    backgroundColor: 'grey'
  }
 
})


