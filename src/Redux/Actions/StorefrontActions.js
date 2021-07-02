import * as actionTypes from '../Constants/StorefrontConstants'
import api from '../../Apis/api'

export const getFooterDetails = () => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_FOOTER_REQUEST})
        const {data} = await api.post('/storefront/get', {selectString: "Footer"})
        const menudata = await api.post('/storefront/get', {selectString: "Logo"})
        console.log(menudata)
        dispatch({
            type: actionTypes.GET_FOOTER_SUCCESS,
            payload: data.data[0].Footer
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_FOOTER_FAIL,
            payload: "something went wrong"
        })
    }
}