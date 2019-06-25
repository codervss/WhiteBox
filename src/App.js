/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { action, createStore, StoreProvider, useStore, useActions } from 'easy-peasy';
import {createAppContainer} from 'react-navigation'
import logger from 'redux-logger'
import appStore from './Store'
import AppNavigator from './Navigation/index'
import Api from './Api'

const theme = {
  dark : true,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'violet',
    accent: 'red',
    text : 'blue',
    background: 'violet'
  },
};

export const apiClient = Api();

export const store = createStore(appStore, {middleware:[logger], injections : {apiClient}})

const AppContainer = createAppContainer(AppNavigator)

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  
  render() {
    console.log('Api', apiClient);
    
    return (
      <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <AppContainer />
      </PaperProvider>
      </StoreProvider>
    );
  }
}