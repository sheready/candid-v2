import React, { useState,useEffect } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../actions/userActions'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()


    const location = useLocation()
    const history = useNavigate()
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userLogin = useSelector(state => state.userLogin)
    const{error, loading, userInfo} = userLogin

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        
        <div class="flex flex-col container mx-auto justify-center min-h-screen">
           <h2>SIGN IN</h2>
            <form class="" onSubmit={submitHandler}>
                <div class="mb-6">
                    <label for="email" class="block mb-2 font-medium">Your email</label>
                    <input type="email" 
                    id="email" 
                    value={email} 
                    class="border border-gray-300 rounded-lg block w-full p-2.5"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@circles.com" required/>
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 font-medium">Your password</label>
                    <input type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="border border-gray-300 rounded-lg block w-full p-2.5" 
                    placeholder='enter password'
                    required/>
                </div>
                <button type="submit" 
                class="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center">Login</button>        
            </form>
            <div class="mb-3">
                <h3>New Customer?</h3>
                <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
            </div>
        </div>
    )
}

export default Login