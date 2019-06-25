import React from 'react'
import {View, Text} from 'react-native'
import {Button, TouchableRipple} from 'react-native-paper'
import {useStore} from 'easy-peasy'
import {store} from '../../App'
import STATUS from '../../Constants'
import Path from '../../Navigation/Routes'
import LoadingControlAction from '../../Components/LoadingControlAction';
export default class Home extends React.Component{

    componentDidMount(){

    }

    static navigationOptions = {
        // tabBarIcon : icon,
        // tabBarColor : 'purple'
    }

    render(){

        return(
            <LoadingControlAction bg='white' fixed={true}>
            <View style={{padding:20}}>
                <TouchableRipple onPress={()=>this.props.navigation.navigate(Path.HOME)} >
                <View style={{flex : 1, padding : 20, alignItems : 'center'}}>
                    <Text>{"Go To Home"}</Text>
                </View>
                </TouchableRipple>
            </View>
            </LoadingControlAction>
        )
    }

}