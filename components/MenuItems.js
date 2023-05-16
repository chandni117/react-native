import {Text,  FlatList, StyleSheet, View} from 'react-native' ;
import React from 'react';

const ItemsToDisplay = [
  { title: 'Hummus', id: '1A' },
  { title: 'Moutabal', id: '2B' },
  { title: 'Falafel', id: '3C' },
  { title: 'Marinated Olives', id: '4D' },
  { title: 'Kofta', id: '5E' },
  { title: 'Eggplant Salad', id: '6F' },
  { title: 'Lentil Burger', id: '7G' },
  { title: 'Smoked Salmon', id: '8H' },
  { title: 'Kofta Burger', id: '9I' },
  { title: 'Turkish Kebab', id: '10J' },
  { title: 'Fries', id: '11K' },	
  { title: 'Buttered Rice', id: '12L' },
  { title: 'Bread Sticks', id: '13M' },
  { title: 'Pita Pocket', id: '14N' },
  { title: 'Lentil Soup', id: '15O' },
  { title: 'Greek Salad', id: '16Q' },
  { title: 'Rice Pilaf', id: '17R' },
  { title: 'Baklava', id: '18S' },
  { title: 'Tartufo', id: '19T' },
  { title: 'Tartufo', id: '20U' },
  { title: 'Tiramisu', id: '21V' },
  { title: 'Panna Cotta', id: '22W' },
];

const Item = ({title})  => {
    return (
    <View style={MenuItemStyle.innerContainer}> 
        <Text style={MenuItemStyle.ItemText}>
            {title}
        </Text>
    </View>
    )
};

function MenuItems() {
    //const renderItem = ({item}) => {
      //  <Item name={item.name} />
    //}
    
    return (
        
        <View style={MenuItemStyle.container}>
                <Text style={MenuItemStyle.headText}>View Menu</Text>
                <FlatList 
                data={ItemsToDisplay}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Item title={item.title} />} /> 
        </View>
    );
};

const MenuItemStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    headText: {
        fontSize: 40,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        color: 'yellow',
        textAlign: 'center'
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: 'gray'
    },
    ItemText: {
        fontSize: 30,
        color: 'white'
    }

});

export default MenuItems;