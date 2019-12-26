/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';

import HomeScreen from './src/Screens/HomeScreen';
import AboutScreen from './src/Screens/AboutScreen';
import HomeListScreen from './src/Screens/HomeListScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

declare var global: { HermesInternal: null | {} };

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    About: {
      screen: AboutScreen,
    },
    HomeList: {
      screen: HomeListScreen,
    },
  },
  {
    initialRouteName: 'Home',
    // not work for all screens
    // navigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#48BBEC',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // },
  },
);

const App = createAppContainer(AppNavigator);

export default App;
