import * as actionTypes from '../Constants/UserConstants'
import api from '../../Apis/api'
import {setUserDetails, setAuthToken} from '../../Utils/Local'

export const loginUser = (email, password) => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_LOGIN_REQUEST})
        let reqData = { Email: email, Password: password}
        const {data} = await api.post('/users/login', {data: reqData})
        setAuthToken(data.data.token);
        setUserDetails(data.data._id, data.data["First Name"]+" "+data.data["Last Name"], data.data.Email, "")
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
