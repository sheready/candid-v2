import React, {useState} from 'react'
import logo from '../media/images/logo.png'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <nav class="fixed top-0 z-10 w-full px-6 py-2 bg-white h-auto">
        <div class="flex container mx-auto items-center justify-between">
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
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
          {/* menu items display after medium screen else hide the items */}
          <div className={`${
          isMenuOpen ? 'flex justify-end' : 'hidden'
        } flex-col items-end align-center lg:flex lg:flex-row lg:space-x-7 lg:mt-0`} >
            <a href="/" class="block lg:inline-block text-md first-letter text-md lg:text-lg font-myfrida hover:text-dark-blue ">HOME</a>
            <a href="/circles-of-trust" class="block lg:inline-block text-md lg:text-lg font-myfrida hover:text-dark-blue ">CIRCLES</a>
            <a href="/partner" class="block lg:inline-block text-md lg:text-lg font-myfrida hover:text-dark-blue ">JOIN AS A PARTNER</a>
            <a href="/join-the-movement" class="block lg:inline-block text-md lg:text-lg font-myfrida hover:text-dark-blue ">JOIN THE MOVEMENT</a>
            
          {/* donate button hidden in smaller screen and shown in large screens as block */}
          <a href='#' class="p-1 px-4 mb-2 lg:mb-0 font-myfrida text-white bg-dark-blue rounded-full baseline hover:bg-light-blue ">
            BECOME A MEMBER
          </a>
          <a href='#' class="p-1 px-4  font-myfrida text-white bg-light-blue rounded-full baseline hover:bg-dark-blue ">
            LOGIN
          </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header