import React from 'react' ;
import {Text , StyleSheet , Image, View, useColorScheme} from 'react-native';

function Welcome () {
    const colorScheme = useColorScheme() ;
    return (
            <View style={[styles.headerWrapper , 
            colorScheme === 'light' ? 
                {backgroundColor: 'white'} : 
                {backgroundColor: 'gray'} 
            ]}>
            <Image 
                style={styles.logo} 
                source={require('../img/cutOrange.png')}
                accessible={true}
                resizeMode='center'
                accessibilityLabel='LemonLogo'
             />
            <Text 
                style={styles.text}
                >
                Little Lemon, your local Mediterranean Bistro
            </Text>
            
            </View>
    )
}
const styles=StyleSheet.create ({

    headerWrapper: {
        flex: 1,
        padding: 24,
        marginTop: 25,
    },
    text: {
        fontSize: 20,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    image: {
        height: 100,
        width: 300,
    }
})
export default Welcome;