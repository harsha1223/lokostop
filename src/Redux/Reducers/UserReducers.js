import * as actionTypes from '../Constants/UserConstants'

export const loginUser = (state = { user: []}, action) => {
    switch(action.type){
        case actionTypes.GET_LOGIN_REQUEST:
            return{
                loading: true,
                user: []
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
        default:
            return state;
    }
}
