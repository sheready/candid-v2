import React, {useState} from 'react'
import logo from '../media/images/logo.png'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <nav class="relative container mx-auto">
        <div class="flex items-center justify-between">
          {/* logo */}
          <div class="h-[80px] w-[80px]">
            <img src={logo} alt="candid-logo"></img>
          </div>
          <button
          className="lg:hidden focus:outline-none"
          onClick={handleMenuClick}
          aria-label="Open Menu"
        >
          <svg
            className="w-12 h-10 hover:text-dark-blue"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        </div>
          {/* menu items display after medium screen else hide the items */}
          <div className={`${
          isMenuOpen ? 'flex justify-end' : 'hidden'
        } flex-col items-end mr-[2%] lg:flex lg:flex-row lg:space-x-7 mt-4 lg:mt-0`} >
            <a href="/" class="block lg:inline-block text-lg font-myfrida hover:text-dark-blue ">HOME</a>
            <a href="/circles-of-trust" class="block lg:inline-block text-lg font-myfrida hover:text-dark-blue ">CIRCLES</a>
            <a href="/join-the-movement" class="block lg:inline-block text-lg font-myfrida hover:text-dark-blue ">JOIN THE MOVEMENT</a>
          {/* donate button hidden in smaller screen and shown in large screens as block */}
          <a href='#' class="lg:inline-block lg:w-auto lg:px-4 font-myriad md:block p-3 px-6 pt-2 mb-3 text-white bg-dark-blue rounded-full baseline hover:bg-light-blue">
            LOGIN
          </a>
          </div>

      </nav>
    </>
  )
}

export default Header