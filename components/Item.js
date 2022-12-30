import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Item = ({item}) => {
 const {name,price} = item
  return (
    <View style={newStyle.innerContainer}>
        <Text style={newStyle.menulist}>{name} </Text>
        <Text style={newStyle.menulist}>{price}</Text>
    </View>
  )
}

export default Item

const newStyle = StyleSheet.create({
     innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    menulist:{
        padding:5,
        fontSize:15,
        color:"yellow",
    }
})