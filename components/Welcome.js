import React from 'react' ;
import {
    Text, 
    StyleSheet,
    Image, 
    View, 
    Pressable} from 'react-native';

function Welcome ({navigation}) {
    return (
            <View style={styles.headerWrapper }>
            <Image 
                style={styles.logo} 
                source={require('../img/foodPicture.png')}
                accessible={true}
                resizeMode='cover'
                accessibilityLabel='LemonLogo'
             />

            <Text 
                style={styles.text}
                >
                Little Lemon, your local Mediterranean Bistro
            </Text>
            <Pressable 
            onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.text}>Menu View</Text>
            </Pressable>

            </View>
    )
}
const styles=StyleSheet.create ({

    headerWrapper: {
        flex: 1,
        padding: 30,
        marginTop: 25,
    },
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    image: {
        height: 100,
        width: 300,

    }
})
export default Welcome;