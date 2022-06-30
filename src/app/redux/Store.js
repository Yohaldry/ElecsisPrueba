import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import RootReducer from './reducers/RootReducer'
import APIreducer from './APIdata/ApiUsers'

const initialState = {}
const middlewares = [thunk]
let devtools = (x) => x

if (
    process &&
    process.env.NODE_ENV !== 'production' &&
    process.browser &&
    window.__REDUX_DEVTOOLS_EXTENSION__
) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

export const Store = createStore(
    RootReducer,
    initialState,
    compose(applyMiddleware(...middlewares), devtools)
)

const rootReducer = combineReducers({
    users: APIreducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

export default function generarusers(){
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}