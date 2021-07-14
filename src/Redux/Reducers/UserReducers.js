import * as actionTypes from '../Constants/UserConstants'
import {getUserDetails} from '../../Utils/Local'

export const loginUser = (state = { user: getUserDetails()?getUserDetails(): {}}, action) => {
    switch(action.type){
        case actionTypes.GET_LOGIN_REQUEST:
            return{
                loading: true,
                user: {}
            }
        case actionTypes.GET_LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case actionTypes.GET_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_LOGOUT_REQUEST:
            return {
                loading: true,
            }
        case actionTypes.GET_LOGOUT_SUCCESS:
            return {
                loading: false,
                user: {}
            }
        case actionTypes.GET_LOGOUT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

