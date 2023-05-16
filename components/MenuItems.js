import {Text,  FlatList, StyleSheet, View, SectionList} from 'react-native' ;
import React from 'react';

const ItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
          'Hummus',
          'Moutabal',
          'Falafel',
          'Marinated Olives',
          'Kofta',
          'Eggplant Salad',
        ],
      },
      {
        title: 'Main Dishes',
        data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
      },
      {
        title: 'Sides',
        data: [
          'Fries',
          'Buttered Rice',
          'Bread Sticks',
          'Pita Pocket',
          'Lentil Soup',
          'Greek Salad',
          'Rice Pilaf',
        ],
      },
      {
        title: 'Desserts',
        data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
      },
];

const Item = ({name})  => {
    return (
    <View style={MenuItemStyle.innerContainer}> 
        <Text style={MenuItemStyle.ItemText}>{name}</Text>
        
    </View>
    )
};

const header = () => <Text style={MenuItemStyle.headText}>View Menu</Text>
const separator = () => <View style={MenuItemStyle.Separator}></View>
const sectionHeader = ({section: {title}}) => <Text style={MenuItemStyle.sectionHeader}>{title}</Text>
function MenuItems() {
    
    return (
        
        <View style={MenuItemStyle.container}>
                
                <SectionList
                sections={ItemsToDisplay}
                keyExtractor={(item,index) => item+index}
                renderItem={({item}) => <Item name={item} />}
                ListHeaderComponent={header}
                renderSectionHeader={sectionHeader}
                ItemSeparatorComponent={separator}
                /> 
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
        backgroundColor: '#EDEFEE'
    }


});

export default MenuItems;