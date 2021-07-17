import * as actionTypes from '../Constants/MenuConstants'
import api from '../../Apis/api'

export const getMenus = () => async(dispatch) => {
    try{
        dispatch({ type: actionTypes.GET_MENUS_REQUEST})
        const {data} = await api.post('/menu/get')
        dispatch({
            type: actionTypes.GET_MENUS_SUCCESS,
            payload: data.data
        })
    }catch(error){
        dispatch({
            type: actionTypes.GET_MENUS_FAIL,
            payload: "something went wrong"
        })
    }
}