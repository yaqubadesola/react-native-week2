import React, {useState} from 'react'
import { ScrollView, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'

const FeedbackForm = () => {
    const [firstName, onChangeFirstname] = useState('')
    const [lastName, onChangeLastname] = useState('')
    const [message, onChangeMessage] = useState('')
  return (
    <KeyboardAvoidingView style={formStyles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <ScrollView keyboardDismissMode="on-drag">
            <Text style={formStyles.header}>
                How was your Holiday?
            </Text>
            <Text style={formStyles.header}>
                Pls tell us in details how you spent your last holiday
                Pls tell us in details how you spent your last holiday
                Pls tell us in details how you spent your last holiday
            </Text>
            <TextInput
                style={formStyles.textInput}
                onChangeText={onChangeFirstname}
                value={firstName}
                placeholder={'First Name'}
            />
            <TextInput
                style={formStyles.textInput}
                placeholder={'Last Name'}
                onChangeText={onChangeLastname}
                value={lastName}
            />
            <TextInput
                placeholder={'Message'}
                style={formStyles.textInput}
                onChangeText={onChangeMessage}
                value={message}
            />
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default FeedbackForm

const formStyles = StyleSheet.create({
    header:{
        fontSize:20,
        color:"#880000",
        textAlign:"center"
    },
    textInput:{
        margin:10,
        backgroundColor:"grey",
        height:40,
        color:"black",
        fontWeight:"bold",
        fontSize:20
    },
    container: { 
        flex: 1, 
    }, 
})