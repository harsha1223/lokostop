import * as actionTypes from '../Constants/WishlistConstants'

export const getWishlistReducer = (state = { wishlist: []}, action) => {
    switch(action.type){
        case actionTypes.GET_WISHLIST_REQUEST:
            return{
                loading: true,
                wishlist: []
            }
        case actionTypes.GET_WISHLIST_SUCCESS:
            return {
                loading: false,
                wishlist: action.payload
            }
        case actionTypes.GET_WISHLIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
