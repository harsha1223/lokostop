import * as actionTypes from '../Constants/ProductConstants'
import api from '../../Apis/api'

export const getAllProducts = () => {
    try{
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST})
        const {data} = await api.get('/products/get')
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: "something went wrong"
        })
    }
}