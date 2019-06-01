import React from 'react'
import {View, Text} from 'react-native'
import matIcons from '../../Style/Icons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";


export default class Home extends React.Component{

    componentDidMount(){

    }

    static navigationOptions = {
        // tabBarIcon : icon,
        // tabBarColor : 'purple'
    }

    render(){

        return(
            <View style={{padding:20}}>
            <View style={{flex : 1, padding : 20, alignItems : 'center'}}>
                <Text>{"Profile"}</Text>
            </View>
            </View>
        )
    }

}