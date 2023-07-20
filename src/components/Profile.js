import React, { useState,useEffect } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getUserDetails} from '../actions/userActions'
import Message from './Message'
import Loader from './Loader'

const Profile = () => {
  const defaultImageURL = 'http://127.0.0.1:8000/candid-backend/media/avatar.jpg'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [image, setImage] = useState(defaultImageURL)
  const [Location, setLocation] = useState('')
  const [interest, setInterest] = useState('')

  const dispatch = useDispatch()


  const location = useLocation()
  const history = useNavigate()

  const userDetails = useSelector(state => state.userDetails)
  const{error, loading, user} = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const{userInfo} = userLogin
  
  console.log(userInfo)
  const backendURL = 'http://127.0.0.1:8000'
  

  useEffect(() => {
      if(!userInfo){
        history('/login')
      }else{
        //check if user info is loaded
        if(!user || !user.name){
          //if we don't have it get that data
          dispatch(getUserDetails('profile'))
        }else{
          setName(user.name)
          setEmail(user.email)
        }
      }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
      e.preventDefault()

      if(password !== confirmPassword){
          setMessage('Password do not match')
      }else{
          console.log("updating")
      }
     
  }
  return (
    <div class='min-h-screen mt-[20%] md:mt-[7%]'>
      <div class="flex flex-col md:flex-row container mx-auto">
        <div class="flex flex-col md:w-1/4">
          <div class="md:mt-12 border-gray-200 dark:border-gray-700 rounded-lg">
            {userInfo.profile && userInfo.profile.image_url ? (
              <img
                className="rounded-full w-46 h-46"
                src={backendURL + userInfo.profile.image_url}
                alt="profile picture"
              />
            ) : (
              // Use the default image URL as a fallback
              <img src={defaultImageURL} alt="Default Profile" />
            )}
          </div>
        </div>
        <div class="flex flex-col md:ml-3 md:w-3/4">
          <div class="border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <div class="border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <h2 class="text-gray-900  text-3xl font-extrabold mb-2">Name: {userInfo.name}</h2>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Interest: {userInfo.profile.interests}</p>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Location: {userInfo.profile.location}</p>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Email: {userInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row container mx-auto">
        <div class="flex flex-col mt-2 md:w-1/4">
          <div class="bg-indigo border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <img class="rounded-full w-96 h-96" src="" alt="profile picture"/>
          </div>
        </div>

        <div class="flex flex-col mt-2 md:ml-3 md:w-3/4">
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
              placeholder="Enter fullnames"/>
            </div>
            <div class="mb-6">
              <label for="email" class="block mb-2 font-medium text-dark-blue">Email</label>
              <input type="email" 
              id="email" 
              value={email} 
              class="border border-light-blue rounded-lg block w-full p-2.5"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email@circles.com"/>
            </div>
            <div class="mb-6">
              <label for="location" class="block mb-2 font-medium text-dark-blue">Location</label>
              <input type="text" 
              id="Location" 
              value={Location} 
              class="border border-light-blue rounded-lg block w-full p-2.5"
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Nairobi" required/>
            </div>
            <div class="mb-6">
              <label for="interest" class="block mb-2 font-medium text-dark-blue">Interests</label>
              <input type="text" 
              id="interest" 
              value={interest} 
              class="border border-light-blue rounded-lg block w-full p-2.5"
              onChange={(e) => setInterest(e.target.value)}
              placeholder="Finance, Fashion" required/>
            </div>
            <div class="mb-6">
              <label for="image" class="block mb-2 font-medium text-dark-blue">Profile Image</label>
              <input type="file" 
              id="image_url" 
              value={image} 
              class="border border-light-blue rounded-lg block w-full p-2.5"
              accept=".jpg, .jpeg .svg"
              onChange={(e) => setImage(e.target.value)}
              placeholder="upload image" required/>
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 font-medium text-dark-blue">Password</label>
              <input type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="border border-light-blue rounded-lg block w-full p-2.5" 
              placeholder='Enter password'
              />
            </div>
            <div class="mb-6">
              <label for="passwordConfirm" class="block mb-2 font-medium text-dark-blue">Confirm Password</label>
              <input type="password" 
              id="passwordConfirm" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              class="border border-light-blue rounded-lg block w-full p-2.5" 
              placeholder='Confirm password'
              />
            </div>
            <button type="submit" 
              class="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center">
              Update profile
            </button>        
          </form>
        </div>
      </div>   
    </div>  

  )
}

export default Profile