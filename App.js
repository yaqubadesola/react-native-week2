import { View } from 'react-native';
// import FeedbackForm from './components/FeedbackForm';
import FeedbackFormWithProps from './components/FeedbackFormWithProps';
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuItemList from './components/MenuItemList';
import MenuItems from './components/MenuItems';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
       <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <LittleLemonHeader />
      {/* <MenuItems/>
        <MenuItemList/>
       <FeedbackFormWithProps/> 
        <FeedbackForm/> */}
     
      <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="Login" component={FeedbackFormWithProps}/>
      </Stack.Navigator>
    </View>
    <View
      style={{
        backgroundColor: '#495E57'
      }}>
      <LittleLemonFooter />
    </View>
    </NavigationContainer>
   
  );
}
