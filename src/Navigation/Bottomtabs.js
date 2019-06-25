import React from 'react';
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import { createStackNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {StyleSheet} from 'react-native'
import styles from "./Styles";
import Path from './Routes'
import IconX,{ICON_TYPE} from '../Icons'

const BottomTabs= createMaterialBottomTabNavigator({
	[Path.HOME]: {
    screen: Home,
    navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <IconX
            style={{ marginBottom: 5 }}
            origin={ICON_TYPE.ANT_ICON}
            name={"home"}
            color={tintColor}
          />
        ),
        tabBarColor:'red',
        headerStyle: styles.header,
        title: "HOME",
        // headerTitleStyle: {
        //     color: "purple",
        //     width: 100,
        //     fontWeight: "800"
        // }
    }
},
[Path.PROFILE]: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor, focused }) => (
              <IconX
                style={{ marginBottom: 5 }}
                origin={ICON_TYPE.FEATHER_ICONS}
                name={"user"}
                color={tintColor}
              />
          ),
            tabBarColor:'violet',
            headerStyle: styles.header,
            title: "PROFILE",
            // headerTitleStyle: {
            //     color: "violet",
            //     width: 100,
            //     fontWeight: "800"
            // }
        }
    },
  }, {
      shifting : true,
	initialRouteName: Path.HOME,
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


  export default createStackNavigator(
    {
      [Path.HOME_SCREEN]: {
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
      initialRouteName: Path.HOME_SCREEN
    }
  );