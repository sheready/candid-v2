import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import logo from '../media/images/logo.png'
import { logout } from '../actions/userActions'


const Header = () => {
  const handleToggleClick = () => {
    const megaMenu = document.getElementById('mega-menu-full');
    const button = document.querySelector('[data-collapse-toggle="mega-menu-full"]');

    // Toggle the aria-expanded attribute
    const isExpanded = megaMenu.getAttribute('aria-expanded') === 'true';
    megaMenu.setAttribute('aria-expanded', !isExpanded);

    // Toggle the visibility of the mega menu
    megaMenu.classList.toggle('hidden');

    // Update the button's aria-expanded attribute
    button.setAttribute('aria-expanded', !isExpanded);
  };


  return (
    <>
      <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} class="h-24" alt="Candid Logo" />           
          </a>
          <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false" onClick={handleToggleClick}>
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div id="mega-menu-full" class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0 lg:space-x-8 rtl:space-x-reverse">
              <li>
                  <a href="/" class="block lg:inline-block first-letter text-lg font-myfrida hover:text-dark-blue" aria-current="page">HOME</a>
              </li>
              <li>
                <a href="/events" class="block lg:inline-block text-lg font-myfrida hover:text-dark-blue ">EVENTS</a>
              </li>
              <li>
                <a href="/circles-of-trust" class="block lg:inline-block text-lg font-myfrida hover:text-dark-blue ">CIRCLES</a>
              </li>
              <li>
                <a href="/partner" class="block lg:inline-block text-lg font-myfrida hover:text-dark-blue ">EVENT PATNERSHIPS</a>
              </li>
              <li>
                <a href="/join-the-movement" class="block lg:inline-block text-lg font-myfrida hover:text-dark-blue ">JOIN THE MOVEMENT</a>
              </li>
              <li>
                <a href="https://candidbusinesswomen.co.ke/book/" class="block lg:inline-block text-lg font-myfrida hover:text-dark-blue ">CANDID BOOK</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    </>
  )
}

export default Header