import { StyleSheet,  View , StatusBar} from 'react-native';
import MenuItems from './components/MenuItems';
import Welcome from './components/Welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons' ;


const tab = createBottomTabNavigator() ;
export default function App() {
  return (
  <>
      <NavigationContainer>
        <View style={styles.container}>
        <tab.Navigator 
          initialRouteName='Login Page'
          screenOptions={({route}) => ({
            tabBarIcon : ({focused , color, size }) => {
              let iconName ;

              if(route.name === 'Welcome')
              {
                iconName : focused ? 'information-circle':
                'information-circle-outline';
              }
              else if(route.name=== 'Menu')
              {
                iconName: 'list-circle' ; 
              }
              return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: 'gray' ,
            tabBarInactiveTintColor: 'orange'
          })}>
          <tab.Screen 
            name="Welcome" 
            component={Welcome}  ></tab.Screen>
          <tab.Screen name="Menu" component={MenuItems} ></tab.Screen>
        </tab.Navigator>
        </View>
      </NavigationContainer>
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  }

 
})


