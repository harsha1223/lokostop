import * as actionTypes from '../Constants/StorefrontConstants'
import api from '../../Apis/api'

export const getFooterDetails = () => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_FOOTER_REQUEST})
        const {data: {data}} = await api.post('/storefront/get', {selectArray: ["Footer", "Menus"]})
        dispatch({
            type: actionTypes.GET_FOOTER_SUCCESS,
            payload: data[0],
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_FOOTER_FAIL,
            payload: "something went wrong"
        })
    }
}

export const getProductTabs = () => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_PRODUCT_TABS_REQUEST})
        const {data: {data}} = await api.post('/storefront/get', {selectArray: ["Products"]})
        
        dispatch({
            type: actionTypes.GET_PRODUCT_TABS_SUCCESS,
            payload: data[0].Products,
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_PRODUCT_TABS_FAIL,
            payload: "something went wrong"
        })
    }
}