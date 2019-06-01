import React from 'react';
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import { createStackNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import {StyleSheet} from 'react-native'
import styles from "./Styles";
import Routes from './Routes'

const BottomTabs= createMaterialBottomTabNavigator({
	Home: {
    screen: Home,
    navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <AntDesign name={'home'}
          color={tintColor}
          color='white'
          size={24} />
      ),
        tabBarColor:'purple',
        headerStyle: styles.header,
        title: "HOME",
        headerTitleStyle: {
            color: "purple",
            width: 100,
            fontWeight: "800"
        }
    }
},
	Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => (
              <Feather name={'user'}
              color={tintColor}
              color='white'
              size={24} />
          ),
            tabBarColor:'violet',
            headerStyle: styles.header,
            title: "PROFILE",
            headerTitleStyle: {
                color: "violet",
                width: 100,
                fontWeight: "800"
            }
        }
    },
  }, {
      shifting : true,
	initialRouteName: 'Home',
	activeColor: '#f0edf6',
	inactiveColor: '#3e2465',
    // barStyle: { backgroundColor: '#694fad' },
    barStyle: {
        backgroundColor: '#f8f7f9',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: '#d0cfd0',
      },
  }

)

function getHomeIcon({ focused, horizontal, tintColor }) {
    return (
      <MaterialIcons
      style={{ backgroundColor: 'transparent' }}
      name={'favorite'}
      color={tintColor}
      size={24}
    />
    );
  }

  export default createStackNavigator(
    {
      [Routes.HOME_SCREEN]: {
        screen: BottomTabs,
        path: "tabs"
      }
    },
    {
      // Default config for all screens
      headerMode: "none",
    //   navigationOptions: {
    //     header: null
    //   },
      initialRouteName: Routes.HOME_SCREEN
    }
  );