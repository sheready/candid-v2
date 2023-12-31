import axios from 'axios'
import {USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST, 
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_RESET,

    USER_UPDATE_PROFILE_REQUEST, 
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    } from '../constants/userConstants.js'


export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers:{
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.post(
            'http://127.0.0.1:8000/users/login/',
            {'username': email, 'password':password},
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})
    dispatch({type:USER_DETAILS_RESET})
}


export const register = (name, email, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers:{
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.post(
            'http://127.0.0.1:8000/users/register/',
            {'name':name, 'email': email, 'password':password},
            config
        )

        console.log(data)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload:data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error){
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()


        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `https://candid-backend-b6b80bdb2d90.herokuapp.com/users/${id}/`,
            config
        )


        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload:data
        })

    } catch(error){
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try{
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            'https://candid-backend-b6b80bdb2d90.herokuapp.com/users/profile/update/',
            // userInfo,
            user,
            config
        )
    

        const existingData = localStorage.getItem('userInfo') ? 
        JSON.parse(localStorage.getItem('userInfo')) : {}
        
        const {access, token, refresh} = existingData

        const newData = {...data, access, token, refresh}

            
        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload:newData
        })
        
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload:newData
        })
    

        localStorage.setItem('userInfo', JSON.stringify(newData))
        

    } catch(error){
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

