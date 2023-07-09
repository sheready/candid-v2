import React from 'react'
import banner from '../media/images/img25.JPG'
import About from './About'

const Home = () => {
  return (
    <>
      <section id='Hero'>
        {/* flex container */}
        <div class="relative">
          <img class="h-auto lg:h-[100vh] lg:w-[100vw]" src={banner}  alt='banner-image'></img>

          <div class="flex flex-col space-y-5 md:absolute md:mb-10 left-1/2 md:top-1/2 md:left-1/4 md:-translate-x-1/2 md:-translate-y-1/2">
            <h1 class="max-w-md px-[2%] mx-[8%] text-3xl font-bold font-myfrida text-center text-dark-blue md:text-indigo md:text-[45px] md:text-left">
            CANDID CONVERSATIONS        
            </h1>
            <h5 class="max-w-md sm:mx-[4%] font-bold text-center font-myriad text-dark-blue md:text-indigo md:text-left md:ml-[10%] lg:mx-[10%] text-lg">
              CIRCLES FOR WOMEN IN BUSINESS
            </h5>
            <div class="flex justify-center md:justify-start">
              <a href='#' class="p-3 px-4 pt-2 sm:mr-[8%] md:mr-6 font-myfrida text-white bg-dark-blue rounded-full baseline hover:bg-light-blue md:ml-[10%] lg:mx-[9%]">
                BECOME A MEMBER
              </a>
            </div>
          </div>
        </div>

      </section>
      <About/>
    
    </>
  )
}

export default Home