import React, { Component, useState} from 'react';

//import 'react-native-gesture-handler';

import { AppLoading } from 'expo';

import Navigator from './routes/homeStack';
import DetailsScreen from './screens/details';
import LogInScreen from './screens/login';
//import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <LogInScreen />
  );
}