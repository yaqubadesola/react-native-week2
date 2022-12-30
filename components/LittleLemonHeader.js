import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex:0.2, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          padding: 40,
          fontSize: 25,
          color: 'black',
          textAlign: 'center',
        }}
        numberOfLines={2}>
        Welcome
        <Text style={{fontWeight:"bold"}}> Little Lemon</Text>
       
      </Text>
    </View>
  );
}
