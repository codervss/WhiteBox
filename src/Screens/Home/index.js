import React from 'react'
import {View, Text} from 'react-native'
import matIcons from '../../Style/Icons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useStore} from 'easy-peasy'
import {store} from '../../App'
import STATUS from '../../Constants'

export default class Home extends React.Component{

    componentDidMount(){
        store.dispatch.login.getUserData()
    }

    render(){
        const {login} = store.getState()
        console.log('Login', login)
        return(
            <View style={{padding:20}}>
            <View style={{flex : 1, padding : 20, alignItems : 'center'}}>
                <Text>{login.status == STATUS.SUCCESS ? login && login.name : "Hello Beetches"}</Text>
            </View>
            </View>
        )
    }

}