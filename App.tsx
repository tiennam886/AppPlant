import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from './src/screens/types';
import HomeScreen from './src/screens/HomeTab/HomeTab';
import LoginScreen from './src/screens/LoginScreen';
import IntroScreen from './src/screens/Intro/IntroScreen';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerBackTitleVisible: false, headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerBackTitleVisible: false, headerShown: false}}
        />
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{headerBackTitleVisible: false, headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
