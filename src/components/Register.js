import React from 'react'

const Register = () => {
  return (
    <div class="flex flex-col container mx-auto justify-center min-h-screen">
        <form class="mx-5">
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
            <div class="flex justify-left">
                <button type="submit" class="bg-light-blue font-medium rounded px-5 py-2.5">Submit</button>
            </div>

        </form>
    </div>
  )
}

export default Register