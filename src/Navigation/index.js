import {createSwitchNavigator} from 'react-navigation'
import Path from './Routes'
import MainStack from './MainStack'

export default PrimaryNav = createSwitchNavigator(
	{
		[Path.MAIN_APP]: MainStack
		// headerRight: <Text>Hi</Text>,tack,
	},
	{
		// Default config for all screens
		headerMode: "none",
		initialRouteName: Path.MAIN_APP,
		navigationOptions: {
			headerStyle: {
                backgroundColor: "#313141",
                height: 70
            }
		}
	}
);