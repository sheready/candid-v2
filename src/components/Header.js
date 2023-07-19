import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import logo from '../media/images/logo.png'
import { logout } from '../actions/userActions'


const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }
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
            <a href="/" class="block lg:inline-block first-letter text-[12px] lg:text-lg font-myfrida hover:text-dark-blue ">HOME</a>
            <a href="/circles-of-trust" class="block lg:inline-block text-[12px] lg:text-lg font-myfrida hover:text-dark-blue ">CIRCLES</a>
            <a href="/partner" class="block lg:inline-block text-[12px] lg:text-lg font-myfrida hover:text-dark-blue ">JOIN AS A PARTNER</a>
            <a href="/join-the-movement" class="block lg:inline-block text-[12px] lg:text-lg font-myfrida hover:text-dark-blue ">JOIN THE MOVEMENT</a>
            
          {/* donate button hidden in smaller screen and shown in large screens as block */}
          {userInfo ? (
            <>
              <a href="#" onMouseOver={toggleDropdown} class="block lg:inline-block text-md first-letter text-md lg:text-lg font-myfrida hover:text-dark-blue">{userInfo.name}</a>
              {isDropdownOpen && (
              <div class="z-10 absolute divide-y bg-white divide-gray-100 shadow lg:w-44 w-[25%] mt-6 lg:mt-0"
                onMouseLeave={() => setIsDropdownOpen(false)}
                style={{ top: '70%', right: '0' }}
              >
                <ul class="py-2 text-sm" aria-labelledby="dropdownDelayButton">
                  <li>
                    <a href="/profile" class="block lg:inline-block text-md ml-2 lg:text-lg font-myfrida hover:text-dark-blue">Profile</a>
                  </li>
                  <li>
                    <a href="#" onClick={logoutHandler} class="block lg:inline-block text-md ml-2 lg:text-lg font-myfrida hover:text-dark-blue">Logout</a>
                  </li>
                </ul>
            
              </div>
              )}
             
            </>
          ) : (
            <>
              <a href='/register' class="p-1 px-4 mb-2 lg:mb-0 font-myfrida text-white bg-dark-blue rounded-full baseline hover:bg-light-blue ">
                BECOME A MEMBER
              </a>
              <a href='/login' class="p-1 px-4  font-myfrida text-white bg-light-blue rounded-full baseline hover:bg-dark-blue ">
                LOGIN
              </a>
            </>
          )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header