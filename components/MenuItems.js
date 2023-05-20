import {Text, StyleSheet, View, SectionList, Pressable} from 'react-native' ;
import React , {useState }from 'react';

const ItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
];

const Item = ({name, price})  => {
    return (
    <View style={MenuItemStyle.innerContainer}> 
        <Text style={MenuItemStyle.ItemText}>{name}</Text>
        <Text style={MenuItemStyle.ItemText}>{price}</Text>
    </View>
    )
};

const header = () => <Text style={MenuItemStyle.headText}>View Menu</Text>
const separator = () => <View style={MenuItemStyle.Separator}></View>
const sectionHeader = ({section: {title}}) => <Text style={MenuItemStyle.sectionHeader}>{title}</Text>

function MenuItems() {
    const [showMenu , setShowMenu] = useState(false) ;    
    return (
        
        <View style={MenuItemStyle.container}>
          {!showMenu && ( 
              <Text style={MenuItemStyle.infoSection}>
              Little Lemon is a charming neighborhood bistro that serves simple food
              and classic cocktails in a lively but casual environment. View our
              menu to explore our cuisine with daily specials!
              </Text>
            )}
        <Pressable
          style={MenuItemStyle.button}
          onPress={() => {
            setShowMenu(!showMenu);
          }}>
            <Text style={MenuItemStyle.btnText}>
              {showMenu ? 'Home' : 'View Menu'}
            </Text>
        </Pressable>
          {showMenu && (
                <SectionList
                sections={ItemsToDisplay}
                keyExtractor={(item,index) => item+index}
                renderItem={({item}) => <Item name={item.name} price={item.price} />}
                ListHeaderComponent={header}
                renderSectionHeader={sectionHeader}
                ItemSeparatorComponent={separator}
                /> 
            )}
        </View>
    );
};

const MenuItemStyle = StyleSheet.create({
    container: {
        flex: 0.95,
    },
    headText: {
        fontSize: 34,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        color: '#F4CE14',
        textAlign: 'center',
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    ItemText: {
        fontSize: 20,
        color: 'white'
    },
    Separator: {
        borderBottomWidth: 1,
        backgroundColor: '#EDEFEE'
    },
    sectionHeader : {
        fontSize: 25,
        backgroundColor: '#EDEFEE',
        textAlign: 'center'
    },
    infoSection: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
      textAlign: 'center',
      backgroundColor: '#495E57',
    },
    button: {
      fontSize: 22,
      padding: 10,
      marginVertical: 8,
      margin: 40,
      backgroundColor: '#EDEFEE',
      borderColor: '#EDEFEE',
      borderWidth: 2,
      borderRadius: 12
    },
    btnText: {
      color: '#333333',
      textAlign: 'center',
      fontSize: 32,
    },


});

export default MenuItems;