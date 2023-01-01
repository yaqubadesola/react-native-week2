import React from 'react'
import { Image, View, Text, ScrollView, StyleSheet, useWindowDimensions, useColorScheme} from 'react-native'
const  WelcomeScreen = () => {
  const colorScheme = useColorScheme()
  const window = useWindowDimensions();
  return (
    <ScrollView style={{flex: 1}}
    indicatorStyle={"white"}
    > 
        <View style={welComeScreenStyles.headerWrapper}>
            <Image 
              source={require('../img/logo.png')}
              resizeMode="contain"
              style={welComeScreenStyles.logo}
              accessible={true}
              accessibilityLabel={'Little Lemon Logo'}

              />
              <Text style={welComeScreenStyles.headerText}>
                  Little Lemon
              </Text>
        </View>
        <Text>Color Theme : {colorScheme}</Text>
        <Text style={welComeScreenStyles.regular}>Window Dimensions</Text> 
        <Text style={welComeScreenStyles.regular}>Height: {window.height}</Text> 
        <Text style={welComeScreenStyles.regular}>Width: {window.width}</Text> 
        <Text style={welComeScreenStyles.regular}>Font scale: {window.fontScale}</Text> 
        <Text 
          style={welComeScreenStyles.welcomeHeader}
        >
              Welcome to Little Lemon App
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
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  container:{

  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  welcomeHeader:{
      padding: 40,
      fontSize: 30,
      color: '#88fff6',
      fontWeight:"bold",
      textAlign: 'center',
  },
  logo:{
    height:100,
    width:100,
    borderRadius:20,
    color: '#88fff6',
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