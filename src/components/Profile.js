import React from 'react'

const Profile = () => {
  return (
    <div class="flex flex-col lg:flex-row container max-auto min-h-screen">
      <div class="flex flex-col space-y-6 md:w-1/4">
        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <img class="rounded-full w-96 h-96" src="" alt="profile picture"/>
          <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Start with Flowbite Design System</h2>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
        </div>
      </div>
      <div class="flex flex-col space-y-6 md:w-3/4">
      <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
          <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Start with Flowbite Design System</h2>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.</p>
        </div>
      </div>


      </div>
        
    </div>
  )
}

export default Profile