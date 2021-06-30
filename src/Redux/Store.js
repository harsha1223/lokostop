import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllProductsReducer, getProductDetailsReducer} from './Reducers/ProductReducers'

const reducers = combineReducers({
    getProducts: getAllProductsReducer,
    getProductDetails: getProductDetailsReducer
})

const middleware = [thunk]

const Store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store;