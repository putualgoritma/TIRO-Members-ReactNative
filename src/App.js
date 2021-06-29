import React from 'react';
import Router from './pages/Router'
import { NavigationContainer } from '@react-navigation/native';
import {
  Text,
} from 'react-native';
const App = () =>{
  return(
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}
export default App;
