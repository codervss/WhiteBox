import { createStackNavigator } from "react-navigation";
import {Text} from 'react-native'
import styles from "./Styles";
import Path from "./Routes";
import Home from "../Screens/Home";
import BottomTabs from './Bottomtabs'
import React from 'react'
import MatIcons from '../Style/Icons'

export default createStackNavigator(
	{
		[Path.HOME_SCREEN]: {
			screen: BottomTabs,
			navigationOptions: {
				headerStyle: styles.header,
				headerTitle: "HOME",
				// headerRight: <Text>Hi</Text>,
				headerTitleStyle: {
					color: "white",
					width: 100,
					fontWeight: "800"
				}
			}
		}
	},
	{
		// Default config for all screens
		mode: 'card',
		headerMode: "float",
		initialRouteName: Path.HOME_SCREEN,
		headerLayoutPreset: "center"
	}
);

