import * as actionTypes from '../Constants/StorefrontConstants'

export const getFooterReducer = (state = { footerData: {}}, action) => {
    switch(action.type){
        case actionTypes.GET_FOOTER_REQUEST:
            return{
                loading: true,
                footerData: { }
            }
        case actionTypes.GET_FOOTER_SUCCESS:
            return {
                loading: false,
                footerData: action.payload
            }
        case actionTypes.GET_FOOTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}