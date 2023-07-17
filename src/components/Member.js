import React from 'react'

const Member = () => {
  return (
    <div class="flex flex-col container mx-auto justify-center min-h-screen">
        <form class="">
            <div class="mb-6">
                <label for="email" class="block mb-2 font-medium">Your email</label>
                <input type="email" id="email" class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required/>
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 font-medium">Your password</label>
                <input type="password" id="password" class="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
            </div>
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-blue-300 " required/>
                </div>
                <label for="remember" class="ml-2 font-medium">Remember me</label>
            </div>
            <button type="submit" class="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>        
        </form>
    </div>
  )
}

export default Member