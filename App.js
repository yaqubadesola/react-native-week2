import { View, Image } from 'react-native';
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
  
  const LogoTitle = () => {
    return <Image 
            style={{height:40,width:300, resizeMode:"contain", alignSelf:"center"}}
            source={require('./img/logo.png')}
            />
  }

  return (
    <NavigationContainer>
       <View
      style={{
        flex: 1,
        backgroundColor: '#495E00',
      }}>
      <LittleLemonHeader />
      {/* <MenuItems/>
        <MenuItemList/>
       <FeedbackFormWithProps/> 
        <FeedbackForm/> */}
     
      <Stack.Navigator 
          initialRouteName="Welcome" 
          screenOptions={{ 
            headerStyle: { backgroundColor: '#333333', justifyContent:"center"},
            headerTintColor:"#fff",
            headerTintStyle:{fontWeight:"bold"},

          }}>
          <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen} 
            options={{
              title:"Home",
              headerTitle : (props) => <LogoTitle {...props}/>
            }}
          />
          <Stack.Screen name="Login" component={FeedbackFormWithProps}/>
          <Stack.Screen name="Menu" component={MenuItemList}/>
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
