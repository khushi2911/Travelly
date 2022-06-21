import { Text, View } from 'react-native'
import React, { Component } from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardScreen from './screens/OnBoardScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name= "OnBoardScreen" component={OnBoardScreen}/>
      <Stack.Screen name= "HomeScreen" component={HomeScreen}/>
      <Stack.Screen name= "DetailsScreen" component={DetailsScreen}/>
       </Stack.Navigator>
  </NavigationContainer>
    )
  }
  export default App;
