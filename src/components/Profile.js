import React, {useState,useEffect} from 'react'
import axios, { formToJSON } from "axios";
import useSWR from 'swr'
import {Link, useLocation, useNavigate} from 'react-router-dom'

const Profile = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const accessToken = userInfo.token

  const [name, setName] = useState(userInfo.name)
  const [email, setEmail] = useState(userInfo.email)
  const [image_url, setImage] = useState(null)
  const [location, setLocation] = useState(userInfo.location)
  const [interests, setInterest] = useState(userInfo.interests)

  const config = {
    headers:{
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`    }
  }
  
  //const url = 'https://candid-backend-b6b80bdb2d90.herokuapp.com/users/profile/'
  const url = 'http://127.0.0.1:8000/users/profile/'
 
  const fetcher = url => axios.get(url, config).then(res => res.data)
  
  const { data, error, mutate} = useSWR(url,fetcher);

  const Location = useLocation()
  const history = useNavigate()

  useEffect(() => {
    if(!userInfo){
      history('/login')
    }
  }, [userInfo]);

  const imageInput = document.getElementById('file_input')

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      name: name,
      email: email,
      location: location,
      interests: interests,
      image_url : 'images/' + imageInput.files[0].name,
    }
  
    try {
      const response = await fetch('http://127.0.0.1:8000/users/profile/update/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Profile updated successfully', data);
  
      } else {
        console.error('Error updating profile:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
      <div class='min-h-screen mx-auto mt-[30%] md:mt-[12%]'>
        <div class="flex flex-col md:flex-row mx-auto">
          <div class="flex flex-col mx-auto md:ml-[6%] md:w-1/4">
            <div class="md:mt-12 border-gray-200 dark:border-gray-700 rounded-lg">
              <img
                className="rounded-full h-24 w-24 md:h-48 md:w-48 md:ml-2"
                src={userInfo.profile.image_url}
                alt="profile picture"
              />
            </div>
          </div>
          <div class="flex flex-col mx-auto md:ml-3 md:w-3/4">     
            <form class="md:mr-[10%]" onSubmit={handleSubmit}>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Full Name</label>
                  <input class="border border-light-blue text-sm rounded-lg block w-full p-2.5 " 
                    type="text"
                    placeholder={userInfo.name} 
                    name="floating_name" 
                    id="floating_name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                  <input class="border border-light-blue text-gray-900 text-sm rounded-lg block w-full p-2.5 " 
                    type="email" 
                    name="floating_email"  
                    id="floating_email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={userInfo.email}
                  />
                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Interests</label>
                    <input class="border border-light-blue text-gray-900 text-sm rounded-lg block w-full p-2.5 " 
                      type="text" 
                      name="floating_interests" 
                      id="floating_interests" 
                      value={interests}
                      onChange={(e) => setInterest(e.target.value)}
                      placeholder={userInfo.profile.interests} required 
                    />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Location</label>
                    <input class=" border border-light-blue text-gray-900 text-sm rounded-lg block w-full p-2.5 " 
                      type="text" 
                      name="floating_location" 
                      id="floating_location" 
                      value={location} 
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder={userInfo.profile.location} 
                      required 
                    />
                </div>
              </div>   
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">             
                  <label class="block mb-2 text-sm font-medium " for="file_input">Upload file</label>
                  <input class="block w-full text-sm  border border-light-blue rounded-lg cursor-pointer  focus:outline-none bg-light-blue" 
                  accept=".jpg, .jpeg, .svg, .png"
                  onChange={(e) => setImage(e.target.value)}
                  id="file_input" 
                  type="file"/>
                </div>
              </div>     
              <button type="submit" 
                class="bg-light-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-light-blue dark:hover:bg-light-blue dark:focus:ring-light-blue">
                Update Profile
              </button>
            </form>

          </div>
        </div>  
      </div>  
  )};

export default Profile


