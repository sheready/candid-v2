import { createStore,combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer} from './reducers/userReducer.js'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin : {userInfo: userInfoFromStorage}
}

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(reducer, initialState,middleware)


export default store