import React, { useState,useEffect } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {register} from '../actions/userActions'
import Message from './Message'
import Loader from './Loader'
import img1 from '../media/circles/img5.jpg'
import loginimg from '../media/login.jpg'


const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()


    const location = useLocation()
    const history = useNavigate()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const{error, loading, userInfo} = userRegister

    const submitHandler = (e) => {
        e.preventDefault()

        if(password !== confirmPassword){
            setMessage('Password do not match')
        }else{
            dispatch(register(name, email, password))
        }
       
    }

    useEffect(() => {
        console.log(userInfo)
        if(userInfo){
            history(redirect)
        }
    }, [history, userInfo, redirect])

    return (
        <div class="min-h-screen">
            <h5 class="pt-4 font-bold text-center font-myfrida text-dark-blue md:mt-20 mt-[30%] lg:text-3xl">
                REGISTER AS A MEMBER
            </h5>
            <div class="container flex flex-col px-4 mx-auto justify-center align-middle md:mt-10 mt-5 mb-4 space-y-12 md:space-y-0 md:flex-row min-h-screen">
                <div class="flex flex-col space-y-6 md:w-3/4">
                    {message && <Message>{message}</Message>}
                    {error && <Message>{error}</Message>}
                    {loading && <Loader/>}
                    <form class="" onSubmit={submitHandler}>
                        <div class="mb-6">
                            <label for="name" class="block mb-2 font-medium text-dark-blue">Full Name</label>
                            <input type="name" 
                            id="name" 
                            value={name} 
                            class="border border-light-blue rounded-lg block w-full p-2.5"
                            onChange={(e) => setName(e.target.value)}
                            placeholder={userInfo.name}/>
                        </div>
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
                        <div class="mb-6">
                            <label for="passwordConfirm" class="block mb-2 font-medium text-dark-blue">Confirm Password</label>
                            <input type="password" 
                            id="passwordConfirm" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            class="border border-light-blue rounded-lg block w-full p-2.5" 
                            placeholder='Confirm password'
                            required/>
                        </div>
                        <button type="submit" 
                        class="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center">Become a member</button>        
                    </form>
                    <h3 class="text-lg mb-3">Not a member yet?
                        <span>
                        <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} class="text-dark-blue font-bold"> Login here</Link>
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