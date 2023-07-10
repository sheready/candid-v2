import React from 'react'
import logo from '../media/images/logo.png'

const Header = () => {
  return (
    <>
    <nav class="relative container mx-auto">
        <div class="flex items-center justify-between">
          {/* logo */}
          <div class="h-[80px] w-[80px]">
            <img src={logo} alt="candid-logo"></img>
          </div>
          {/* menu items display after medium screen else hide the items */}
          <div class="hidden lg:flex space-x-7">
            <a href="/" class="text-lg font-myfrida hover:text-dark-blue ">HOME</a>
            <a href="/circles-of-trust" class="text-lg font-myfrida hover:text-dark-blue ">CIRCLES</a>
            <a href="/join-the-movement" class="text-lg font-myfrida hover:text-dark-blue ">JOIN THE MOVEMENT</a>
          </div>
          {/* donate button hidden in smaller screen and shown in large screens as block */}
          <a href='#' class="hidden font-myfrida md:block p-3 px-6 pt-2 text-white bg-light-blue rounded-full baseline hover:bg-dark-blue">
            LOGIN
          </a>
        </div>

      </nav>
    </>
  )
}

export default Header