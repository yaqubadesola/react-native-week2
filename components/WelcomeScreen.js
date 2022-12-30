import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
const  WelcomeScreen = () => {
  return (
    <ScrollView style={{flex: 1}}
    indicatorStyle={"white"}
    > 
        <Text 
           style={welComeScreenStyles.welcomeHeader}
        >
              Welcome to Little Lemon
        </Text>
        <Text 
            style={welComeScreenStyles.welcomeText}>
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. 
          We would love to hear more about your experience with us!
        </Text>
    </ScrollView>
  )
}

const welComeScreenStyles = StyleSheet.create({
  welcomeHeader:{
      padding: 40,
      fontSize: 30,
      color: '#880000',
      fontWeight:"bold",
      textAlign: 'center',
  },
  welcomeText:{
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  }
})
export default  WelcomeScreen