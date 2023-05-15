import {Text,  FlatList, StyleSheet, View} from 'react-native' ;
import React from 'react';

const MenuItemsToDisplay = [
  { name: 'Hummus', id: '1A' },
  { name: 'Moutabal', id: '2B' },
  { name: 'Falafel', id: '3C' },
  { name: 'Marinated Olives', id: '4D' },
  { name: 'Kofta', id: '5E' },
  { name: 'Eggplant Salad', id: '6F' },
  { name: 'Lentil Burger', id: '7G' },
  { name: 'Smoked Salmon', id: '8H' },
  { name: 'Kofta Burger', id: '9I' },
  { name: 'Turkish Kebab', id: '10J' },
  { name: 'Fries', id: '11K' },	
  { name: 'Buttered Rice', id: '12L' },
  { name: 'Bread Sticks', id: '13M' },
  { name: 'Pita Pocket', id: '14N' },
  { name: 'Lentil Soup', id: '15O' },
  { name: 'Greek Salad', id: '16Q' },
  { name: 'Rice Pilaf', id: '17R' },
  { name: 'Baklava', id: '18S' },
  { name: 'Tartufo', id: '19T' },
  { name: 'Tartufo', id: '20U' },
  { name: 'Tiramisu', id: '21V' },
  { name: 'Panna Cotta', id: '22W' },
];

export default function MenuItems() {
    const Item= ({name})  => {
        <View> 
            <Text>
                {name}
            </Text>
        </View>

    }
    const renderItem = ({item}) => {
        <Item name={item.name}></Item>
    }

    
    return (
        
        <View style={MenuItemStyle.container}>
            
                <Text style={MenuItemStyle.headText}>View Menu</Text>
                <FlatList data={MenuItemsToDisplay} renderItem={renderItem}/> 
        </View>
    );
};

const MenuItemStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewStyle: {
        paddingHorizontal: 40,
        paddingVertical: 40,
    }, 
    headText: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingStart: 10,
        flexWrap: 'wrap'
    },
    MenuItems: {
        fontSize: 30,
        color: '#fff'
       
    }

});