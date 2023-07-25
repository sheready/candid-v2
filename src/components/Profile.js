import React, { useState,useEffect } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getUserDetails, updateUserProfile} from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import Message from './Message'
import Loader from './Loader'

const Profile = () => {
  const defaultImageURL = 'http://127.0.0.1:8000/candid-backend/media/avatar.jpg'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [image_url, setImage] = useState('')
  const [location, setLocation] = useState('')
  const [interests, setInterest] = useState('')

  const dispatch = useDispatch()
  const Location = useLocation()
  const history = useNavigate()

  const userDetails = useSelector(state => state.userDetails)
  const{error, loading, user} = userDetails

  const userLogin = useSelector(state => state.userLogin)
  const{userInfo} = userLogin

  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
  const{success} = userUpdateProfile
  
  const backendURL = 'http://127.0.0.1:8000'


  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
        setMessage('Password do not match')
    }else{
      dispatch(updateUserProfile({
        'id':user._id,
        'name':name,
        'email':email,
        'password':password,
        "profile": {
          "location": location,
          "interests": interests,
          "image_url": image_url
        }
      }))
    } 
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  };

  useEffect(() => {
    if(!userInfo){
      history('/login')
    }else{
      //check if user info is loaded
      if(!user || !user.name || success){
        dispatch({type:USER_UPDATE_PROFILE_RESET})
        //if we don't have it get that data
        dispatch(getUserDetails('profile'))
      }else{
        setName(user.name)
        setEmail(user.email)
        setInterest(user.profile.interests)
        setImage(user.profile.image_url)
        setLocation(user.profile.location)
        
      }
    }
  }, [dispatch, history, userInfo, user, success])

  return (
    <div class='min-h-screen mx-auto mt-[30%] md:mt-[12%]'>
        {message && <Message>{message}</Message>}
        {error && <Message>{error}</Message>}
        {loading && <Loader/>}
      <div class="flex flex-col md:flex-row mx-auto">
        <div class="flex flex-col mx-auto md:ml-[6%] md:w-1/4">
          <div class="md:mt-12 border-gray-200 dark:border-gray-700 rounded-lg">
            {userInfo.profile && userInfo.profile.image_url ? (
              <img
                className="rounded-full h-24 w-24 md:h-48 md:w-48 md:ml-2"
                src={backendURL + userInfo.profile.image_url}
                alt="profile picture"
              />
            ) : (
              // Use the default image URL as a fallback
              <img src={defaultImageURL} alt="Default Profile" />
            )}
          </div>
        </div>
        <div class="flex flex-col mx-auto md:ml-3 md:w-3/4">     
        <form class="md:mr-[10%]" onSubmit={submitHandler}>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" 
                  name="floating_name" 
                  id="floating_name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-light-blue appearance-none focus:outline-none focus:ring-0 focus:border-light-blue peer" 
                  placeholder={userInfo.name} />
                <label for="floating_name" 
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Name
                </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input type="email" 
                name="floating_email"  
                id="floating_email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-light-blue appearance-none focus:outline-none focus:ring-0 focus:border-light-blue peer" 
                placeholder=" " />
              <label for="floating_email" 
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
                <input type="tel" 
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                  name="floating_phone" id="floating_phone" 
                  class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-light-blue appearance-none focus:outline-none focus:ring-0 focus:border-light-blue peer" 
                  placeholder=" "/>
                <label for="floating_phone" 
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Phone number (123-456-7890)
                </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
                <input type="text" 
                  name="floating_location" 
                  id="floating_location" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)}
                  class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-light-blue appearance-none focus:outline-none focus:ring-0 focus:border-light-blue peer" 
                  placeholder=" " required />
                <label for="floating_location" 
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Location
                </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input type="password" 
                name="floating_password" 
                id="floating_password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-light-blue appearance-none focus:outline-none focus:ring-0 focus:border-light-blue peer" 
                placeholder=" " />
              <label for="floating_password" 
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input type="password" 
                name="repeat_password" 
                id="floating_repeat_password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-light-blue appearance-none focus:outline-none focus:ring-0 focus:border-light-blue peer" 
                placeholder=" "/>
              <label for="floating_repeat_password" 
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Confirm password
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input type="text" 
                name="floating_interests" 
                id="floating_interests" 
                value={interests}
                onChange={(e) => setInterest(e.target.value)}
                class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-light-blue appearance-none focus:outline-none focus:ring-0 focus:border-light-blue peer" 
                placeholder=" " required />
              <label for="floating_interests" 
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Interests
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">             
              <label class="block mb-2 text-sm font-medium " for="file_input">Upload file</label>
              <input class="block w-full text-sm  border border-gray-300 rounded-lg cursor-pointer bg-light-blue focus:outline-none" 
              value=""
              accept=".jpg, .jpeg, .svg, .png"
              onChange={(e) => {handleImageChange(e)}}
              id="file_input" 
              type="file"/>
            </div>
          </div>        
          <button type="submit" 
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Update Profile
          </button>
        </form>

        </div>
      </div>  
    </div>  

  )
}

export default Profile