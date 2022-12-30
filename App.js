import { View } from 'react-native';
import FeedbackForm from './components/FeedbackForm';
import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItemList from './components/MenuItemList';
import MenuItems from './components/MenuItems';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <>
       <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <LittleLemonHeader />
      {/* <MenuItems/>
      */}
      {/* <MenuItemList/> */}
      {/* <WelcomeScreen/> */}
      <FeedbackForm/>
    </View>
    <View
      style={{
        backgroundColor: '#495E57'
      }}>
      <LittleLemonFooter />
    </View>
    </>
   
  );
}
