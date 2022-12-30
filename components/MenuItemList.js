import { FlatList, View, Text, StyleSheet, SectionList } from "react-native";
import Item from "./Item";
import React from 'react'

  
const MenuItemList = () => {
  const Separator = () => <View style={menuListStyle.separator}/>
  const Header = () => <Text style={menuListStyle.titleHeader}>Menu</Text>
  const renderItem = ({item}) => <Item item={item}/>
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuListStyle.sectionHeader}>{title} </Text>
  );
  const menuItemsToDisplay = [
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
  //const renderItem2 = ({item}) => <Item item={item}/>
//   const menuItemsToDisplay = [
//     { name: 'Hummus', price: '$5.00', id: '1A' },
//     { name: 'Moutabal', price: '$5.00', id: '2B' },
//     { name: 'Falafel', price: '$7.50', id: '3C' },
//     { name: 'Marinated Olives', price: '$5.00', id: '4D' },
//     { name: 'Kofta', price: '$5.00', id: '5E' },
//     { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
//     { name: 'Lentil Burger', price: '$10.00', id: '7G' },
//     { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
//     { name: 'Kofta Burger', price: '$11.00', id: '9I' },
//     { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
//     { name: 'Fries', price: '$3.00', id: '11K' },
//     { name: 'Buttered Rice', price: '$3.00', id: '12L' },
//     { name: 'Bread Sticks', price: '$3.00', id: '13M' },
//     { name: 'Pita Pocket', price: '$3.00', id: '14N' },
//     { name: 'Lentil Soup', price: '$3.75', id: '15O' },
//     { name: 'Greek Salad', price: '$6.00', id: '16Q' },
//     { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
//     { name: 'Baklava', price: '$3.00', id: '18S' },
//     { name: 'Tartufo', price: '$3.00', id: '19T' },
//     { name: 'Tiramisu', price: '$5.00', id: '20U' },
//     { name: 'Panna Cotta', price: '$5.00', id: '21V' },
//   ];
//   const menuItemsToDisplay2 = [
//     {
//       title: 'Appetizers',
//       data: [
//         'Hummus',
//         'Moutabal',
//         'Falafel',
//         'Marinated Olives',
//         'Kofta',
//         'Eggplant Salad',
//       ],
//     },
//     {
//       title: 'Main Dishes',
//       data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
//     },
//     {
//       title: 'Sides',
//       data: [
//         'Fries',
//         'Buttered Rice',
//         'Bread Sticks',
//         'Pita Pocket',
//         'Lentil Soup',
//         'Greek Salad',
//         'Rice Pilaf',
//       ],
//     },
//     {
//       title: 'Desserts',
//       data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
//     },
//   ];
//   const menuItemsToDisplay = [
//     { name: 'Hummus', id: '1A' },
//     { name: 'Moutabal', id: '2B' },
//     { name: 'Falafel', id: '3C' },
//     { name: 'Marinated Olives', id: '4D' },
//     { name: 'Kofta', id: '5E' },
//     { name: 'Eggplant Salad', id: '6F' },
//     { name: 'Lentil Burger', id: '7G' },
//     { name: 'Smoked Salmon', id: '8H' },
//     { name: 'Kofta Burger', id: '9I' },
//     { name: 'Turkish Kebab', id: '10J' },
//     { name: 'Fries', id: '11K' },
//     { name: 'Buttered Rice', id: '12L' },
//     { name: 'Bread Sticks', id: '13M' },
//     { name: 'Pita Pocket', id: '14N' },
//     { name: 'Lentil Soup', id: '15O' },
//     { name: 'Greek Salad', id: '16Q' },
//     { name: 'Rice Pilaf', id: '17R' },
//     { name: 'Baklava', id: '18S' },
//     { name: 'Tartufo', id: '19T' },
//     { name: 'Tartufo', id: '20U' },
//     { name: 'Tiramisu', id: '21V' },
//     { name: 'Panna Cotta', id: '22W' },
//   ];
  return (
    <View style={menuListStyle.container}>
        {/* <FlatList 
            data={menuItemsToDisplay} 
            renderItem={renderItem} 
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator}
            ListHeaderComponent={Header}
        /> */}
        <SectionList 
            sections={menuItemsToDisplay} 
            renderItem={renderItem} 
            keyExtractor={(item,index) => item + index}
            ItemSeparatorComponent={Separator}
            ListHeaderComponent={Header}
            renderSectionHeader={renderSectionHeader}
        />
    </View>
  )
}

export default MenuItemList

const menuListStyle = StyleSheet.create({
    container:{
        flex:0.75,
        padding:40,
        background:"#00087e",
        fontSize:"20"
    },
    titleHeader:{
        fontWeight:"bold",
        color:"white",
        fontSize:25,
        textAlign:"center",
        paddingTop:20
    },
    separator:{
        borderBottomWidth:1,
        borderColor:"#efffff"
    },
    sectionHeader:{
        fontWeight:"bold",
        backgroundColor:"#880000",
        color:"white",
        fontSize:20,
        textAlign:"center",
        margin:10,
        padding:10
    }
})