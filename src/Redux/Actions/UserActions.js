import * as actionTypes from '../Constants/UserConstants'
import api from '../../Apis/api'
import {setUserDetails, setAuthToken, removeUserDetails, removeAuthToken} from '../../Utils/Local'

export const loginUser = (email, password) => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_LOGIN_REQUEST})
        let reqData = { Email: email, Password: password}
        const {data} = await api.post('/users/login', {data: reqData})
        setAuthToken(data.data.token);
        delete data.data.Permissions
        delete data.data.ID
        delete data.data.Roles
        delete data.data.token
        delete data.data.__v
        delete data.data.updatedAt
        delete data.data.LastLogin

        setUserDetails(data.data)
        dispatch({
            type: actionTypes.GET_LOGIN_SUCCESS,
            payload: data.data
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_LOGIN_FAIL,
            payload: "something went wrong"
        })
    }
}

export const logoutUser = () => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_LOGOUT_REQUEST})
        removeAuthToken()
        removeUserDetails()
        dispatch({
            type: actionTypes.GET_LOGOUT_SUCCESS,
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_LOGOUT_FAIL,
            payload: "something went wrong"
        })
    }
}
