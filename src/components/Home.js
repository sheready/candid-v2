import React from 'react'
import banner from '../media/circles/img2.jpg'
import About from './About'
import pot1 from '../media/gallery/pot1.jpg'
import pot2 from '../media/machakos/Candid Conversation_ IMG_0049.jpg'
import pot3 from '../media/kampala/53147798189_2a0047d390_c.jpg'
import pot4 from '../media/gallery/pot4.jpg'
import pot5 from '../media/gallery/pot5.jpg'
import land1 from '../media/meru/Candid Conversations IMG_3897.jpg'
import land2 from '../media/gallery/land2.jpg'
import land3 from '../media/gallery/land3.jpg'
import land4 from '../media/kiambu/13.JPG'
import land5 from '../media/kampala/53147784479_ea3670b98f_c.jpg'
import land6 from '../media/kampala/53147584631_c923d824d0_c.jpg'
import land7 from '../media/kiambu/9.JPG'
import land8 from '../media/meru/Candid Conversations IMG_4072.jpg'
import land9 from '../media/gallery/land10.jpg'
import video1 from '../media/video/candid.mp4'

const Home = () => {
  return (
    <>
      <div class="relative">
        <video autoPlay muted loop class="absolute inset-0 w-full h-full object-cover">
            <source src={video1} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>

        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 relative z-10">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight text-white leading-none font-myfrida md:text-5xl lg:text-7xl"></h1>
            <p class="mb-8 text-lg font-normal font-myriad lg:text-2xl text-white sm:px-16 lg:px-48"></p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                
            </div>
        </div>
      </div>
      <div class="px-4 mx-auto max-w-screen-xl text-center py-10 relative ">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-dark-blue font-myriad md:text-5xl lg:text-7xl">CANDID CONVERSATIONS</h1>
        <p class="mb-8 text-lg font-normal text-dark-blue font-myfrida lg:text-2xl sm:px-16 lg:px-48">CIRCLES FOR WOMEN IN BUSINESS</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a href="#" class="inline-flex justify-center font-myfrida items-center py-3 px-5 mx-16 md:mx-0 text-lg font-medium text-center rounded-lg bg-light-blue focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            BECOME A MEMBER
            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>

      <About/>
      <h5 class="pt-4 font-bold text-center font-myriad text-dark-blue text-2xl md:text-4xl">
        2023 HIGHLIGHTS
      </h5>
      <div class="grid mt-6 mx-4 grid-cols-2 md:grid-cols-4 gap-4">
        <div class="grid gap-4">
          <div>
              <img class="h-auto max-w-full rounded-lg" src={pot1} alt=""/>
          </div>
          <div>
              <img class="h-auto max-w-full rounded-lg" src={land1} alt=""></img>
          </div>
          <div>
              <img class="h-auto max-w-full rounded-lg" src={land9} alt=""></img>
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={land8} alt=""></img>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={pot2} alt=""></img>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={land3} alt=""></img>
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src={pot3} alt=""></img>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={land4} alt=""></img>
          </div>
          <div>
            <img class="h-auto max-w-full rounded-lg" src={land5} alt=""></img>
          </div>
        </div>
        <div class="grid gap-4">
            <div>
              <img class="h-auto max-w-full rounded-lg" src={land6} alt=""></img>
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={pot4} alt=""></img>
            </div>
            <div>
              <img class="h-auto max-w-full rounded-lg" src={land7} alt=""></img>
            </div>
        </div>
      </div>

    
    </>
  )
}

export default Home