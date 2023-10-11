import React, { useState,useEffect } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../actions/userActions'
import Message from './Message'
import Loader from './Loader'
import img1 from '../media/circles/img5.jpg'
import loginimg from '../media/login.jpg'


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
            history(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <div class="min-h-screen">
            <h5 class="pt-4 font-bold text-center font-myfrida text-dark-blue md:mt-20 mt-[30%] lg:text-3xl">
                WELCOME BACK
            </h5>
            <div class="container flex flex-col px-4 mx-auto justify-center align-middle md:mt-10 mt-5 mb-4 space-y-12 md:space-y-0 md:flex-row min-h-screen">
                <div class="flex flex-col space-y-6 md:w-3/4">
                    {error && <Message>{error}</Message>}
                    {loading && <Loader/>}
                    <form class="" onSubmit={submitHandler}>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 font-medium text-dark-blue">Email</label>
                            <input type="email" 
                            id="email" 
                            value={email} 
                            class="border border-light-blue rounded-lg block w-full p-2.5"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email@circles.com" required/>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 font-medium text-dark-blue">Password</label>
                            <input type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            class="border border-light-blue rounded-lg block w-full p-2.5" 
                            placeholder='Enter password'
                            required/>
                        </div>
                        <button type="submit" 
                        class="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center">Login</button>        
                    </form>
                    <h3 class="text-lg mb-3">Not a member yet?
                        <span>
                        <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} class="text-dark-blue font-bold"> Register here</Link>
                        </span>
                    </h3>
                    
                </div>         
                <div class="flex flex-col md:w-1/2">
                    <img src={loginimg} alt="login illustration" class="object-contain" />
                </div>                      
            </div>
    </div>
    )
}

export default Login