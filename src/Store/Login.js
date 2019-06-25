import {action, thunk} from 'easy-peasy'
import STATUS from '../Constants'
import {apiClient} from '../App'

const actions={
    updateState : action((state, payload) =>{
        _.merge(state, payload)
    }),
    
}

const thunks = {
    
    login : thunk(async(actions, payload, {injections}) =>{
        actions.updateState({
            status: STATUS.FETCHING
        });

        const api = injections
        const res = await api.getUserData()
        if(res.ok){
            actions.updateState({
                status: STATUS.SUCCESS
            });
        }
        else{
            actions.updateState({
                status: STATUS.FAILED
            });
        }
    }),
    getUserData : thunk(async(actions, payload) =>{
        actions.updateState({
            status: STATUS.FETCHING
        });

        const res = await apiClient.getUserData()
        if(res.ok){
            actions.updateState({
                status: STATUS.SUCCESS
            });
        }
        else{
            actions.updateState({
                status: STATUS.FAILED
            });
        }
    })
}

const LoginStore = {
    ...actions,
    ...thunks,
    status : STATUS.NOT_STARTED,
    name : 'Vishvajeet Singh'
}

export default LoginStore