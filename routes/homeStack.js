import { createStackNavigator } from '@react-navigation/stack';

import { createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/login';
import DetailsScreen from '../screens/details';

const screens = {
    loginScreen: {
        screen: LoginScreen
    },
    DetailsScreen:{
        screen: DetailsScreen
    }
}

const Stack = createStackNavigator();

export default createAppContainer(Stack);