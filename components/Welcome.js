import React from 'react' ;
import {Text , ScrollView , StyleSheet , Image} from 'react-native';

function Welcome () {
    return (
        <ScrollView style={styles.container}>
            <Image 
                style={styles.logo} 
                source={require('../img/littleLemonApp.png')}
                accessible={true}
                resizeMode='contain'
                accessibilityLabel='LemonLogo'
             />
            <Text 
                style={styles.text}
                >
                Little Lemon, your local Mediterranean Bistro
            </Text>
            <Image 
                style={styles.image} 
                source={require('../img/picture1.png')}
                accessible={true}
                accessibilityLabel='NewsPaper'
                resizeMode= 'contain'
             />
             <Image 
                style={styles.image} 
                source={require('../img/foodPicture.png')}
                accessible={false}
                accessibilityLabel='eat Meat'
                resizeMode= 'cover'
             />
             <Image 
                style={styles.image} 
                source={require('../img/cutOrange.png')}
                accessible={true}
                accessibilityLabel='Cut orange'
                resizeMode= 'stretch'
             />
             <Image 
                style={styles.image} 
                source={require('../img/picture4.png')}
                accessible={false}
                accessibilityLabel='picture 4'
                resizeMode= 'center'
             />
        </ScrollView>
    )
}
const styles=StyleSheet.create ({
    container: {
        flex: 1,
        marginTop: 26,
        backgroundColor: 'white',
        padding: 20
    },
    text: {
        fontSize:25,
        color: 'orange',
        margin: 20,
    },
    logo: {
        height: 100,
        width: 300
    },
    image: {
        height: 400,
        width: 300
    }
})
export default Welcome;