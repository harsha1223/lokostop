import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllProductsReducer, getProductDetailsReducer} from './Reducers/ProductReducers'
import {getFooterReducer, getProductTabsReducer} from './Reducers/StorefrontReducer'
import {getAllCategoriesReducer, getCategoryProductsReducer} from './Reducers/CategoryReducers'
import {getAllPagesReducer} from './Reducers/PageReducers'

const reducers = combineReducers({
    getProducts: getAllProductsReducer,
    getProductDetails: getProductDetailsReducer,
    getFooter: getFooterReducer,
    getProductTabs: getProductTabsReducer,
    getCategories: getAllCategoriesReducer,
    getPages: getAllPagesReducer,
    getCategoryProducts: getCategoryProductsReducer
})

const middleware = [thunk]

const Store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default Store;