import { createStackNavigator } from "react-navigation";
import styles from "./Styles";
import Path from "./Routes";
import BottomTabs from './Bottomtabs'

export default createStackNavigator(
	{
		[Path.HOME_SCREEN]: {
			screen: BottomTabs,
			navigationOptions: {
				headerStyle: styles.header,
				headerTitle: "HOME",
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

