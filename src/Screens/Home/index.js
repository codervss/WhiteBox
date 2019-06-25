import React,{useEffect} from 'react'
import {View, Text} from 'react-native'
import {Button, TouchableRipple} from 'react-native-paper'
import {useStoreState, useStoreActions} from 'easy-peasy'
import STATUS from '../../Constants'
import Path from '../../Navigation/Routes'
import LoadingControlAction from '../../Components/LoadingControlAction';

export default Home = ({navigation}) =>{
    const getUserData = useStoreActions(actions => actions.login.getUserData)
    useEffect(()=>{getUserData()},[])
    const {loginName, loginStatus} = useStoreState(state => ({loginName : state.login.name, loginStatus : state.login.status}))
    return(
        <LoadingControlAction bg='white' fixed={true}>
        <View style={{padding:20}}>
            <TouchableRipple onPress={()=>navigation.navigate(Path.PROFILE)} >
            <View style={{flex : 1, padding : 20, alignItems : 'center'}}>
                <Text>{loginStatus == STATUS.SUCCESS ? loginName : "Go To Profile"}</Text>
            </View>
            </TouchableRipple>
        </View>
        </LoadingControlAction>
    )
}