
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import AppNavigation from './scr/navigation/navigation.js';
 
const App = ()=>{
  return(
    <AppNavigation />
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   <Text style={{fontSize: 50}}>Home</Text>
    // </View>
  )
}
export default App;
