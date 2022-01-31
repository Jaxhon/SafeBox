import React from 'react';
import { TouchableOpacity, Image, ImageBackground, Text, View , TextInput } from 'react-native';

import {globalStyles} from '../styles/global';
import 'react-native-gesture-handler';

export default function LogIn() {

  return (
    
    <View style={globalStyles.container}>
    
     <ImageBackground source={require('../assets/Background_LogIn.png')} resizeMode="cover" style={globalStyles.image}>
     <Image source={require('../assets/logo.jpg')} style={globalStyles.logo} />
      
        <Text style={globalStyles.titleText} >Log in to profile</Text>

        <Text style={globalStyles.inputTitle}>Username</Text>
        <TextInput style={globalStyles.inputField} placeholder='Username' />

        <Text style={globalStyles.inputTitle}>Password</Text>
        <TextInput style={globalStyles.inputField} secureTextEntry={true} placeholder='Password' />

        <TouchableOpacity
          style={globalStyles.buttonStandard}
          //onPress={navigation.navigate('details')}
        >
          <Text style={globalStyles.buttonText}>Submit</Text>
        </TouchableOpacity>
      
      </ImageBackground>

    </View>
  );
}