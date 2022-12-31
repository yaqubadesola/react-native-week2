import React, { useState } from 'react'; 
import { ScrollView, View, StyleSheet, Text, TextInput, Pressable } from 'react-native'; 

const FeedbackForm = () => { 
  // declare the variables 
    // const [firstName, onChangeFirstName] = useState(''); 
    // const [lastName, onChangeLastName] = useState(''); 
    const [password, onChangePassword] = useState(''); 
    const [showBtn, onChangeSetShowBtn] = useState(false); 
    const [email, onChangeEmail] = useState(''); 

    return ( 
        
        <ScrollView style={myStyles.container}> 
        {showBtn && <View>
            <Text style={myStyles.headingSection}> 
                Welcome {email}
            </Text>
        </View>}
        {!showBtn && 
        <View>
            <Text style={myStyles.headingSection}> 
                Login to Little Lemon
            </Text> 
     
            <TextInput 
            style={myStyles.input} 
            value={email} 
            onChangeText={onChangeEmail} 
            placeholder={'Email'} 
                /> 
            <TextInput 
                style={myStyles.input} 
                value={password} 
                onChangeText={onChangePassword} 
                placeholder={'Password'}
                secureTextEntry={true}
            /> 
        </View>}
      <Pressable  onPress={() => {
            onChangeSetShowBtn(!showBtn)
        }}>
      <Text style={myStyles.button}>{showBtn? "Home" : "Login"}</Text>
    </Pressable>
        {/* <TextInput 
     style={myStyles.messageInput} 
     value={message} 
     onChangeText={onChangeMessage} 
     placeholder={'Please leave feedback'} 
     multiline={true} 
     maxLength={250} 
        />  */}
        </ScrollView> 
    ); 
}; 

const myStyles = StyleSheet.create({ 
container: { 
    flex: 1, 
}, 
input: { 
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    borderColor: 'EDEFEE', 
    backgroundColor: '#F4CE14', 
 }, 
 messageInput: { 
    height: 100, 
    margin: 12, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 16, 
    backgroundColor: '#F4CE14', 
 }, 
 button:{
    fontWeight:"bold",
    color:"white",
    backgroundColor:"#889977",
    borderRadius:10,
    fontSize:20,
    textAlign:"center",
    padding:20,
    margin:20
},
infoSection: { 
    fontSize: 24, 
    padding: 20, 
    marginVertical: 8, 
    color: '#EDEFEE', 
    textAlign: 'center', 
    backgroundColor: '#495E57', 
 }, 
headingSection: { 
    fontSize: 28, 
    padding: 20, 
    marginVertical: 8, 
    color: '#EDEFEE', 
    textAlign: 'center', 
    backgroundColor: '#495E57', 
 }, 
}); 

export default FeedbackForm; 