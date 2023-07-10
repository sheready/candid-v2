import React from 'react'
import banner from '../media/images/img25.JPG'
import About from './About'
import pot1 from '../media/gallery/pot1.jpg'
import pot2 from '../media/gallery/pot2.jpg'
import pot3 from '../media/gallery/pot3.jpg'
import pot4 from '../media/gallery/pot4.jpg'
import pot5 from '../media/gallery/pot5.jpg'
import land1 from '../media/gallery/land1.jpg'
import land2 from '../media/gallery/land2.jpg'
import land3 from '../media/gallery/land3.jpg'
import land4 from '../media/gallery/land4.jpg'
import land5 from '../media/gallery/land5.jpg'
import land6 from '../media/gallery/land6.jpg'
import land7 from '../media/gallery/land7.jpg'
import land8 from '../media/gallery/land9.jpg'
import land9 from '../media/gallery/land10.jpg'

const Home = () => {
  return (
    <>
      <section id='Hero'>
        {/* flex container */}
        <div class="relative">
          <img class="h-auto lg:h-[100vh] lg:w-[100vw]" src={banner}  alt='banner-image'></img>

          <div class="flex flex-col space-y-5 md:absolute md:mb-10 left-1/2 md:top-1/3 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <h1 class="w-full text-3xl font-bold font-myfrida text-center text-dark-blue md:text-indigo md:text-7xl md:text-left">
            CANDID CONVERSATIONS        
            </h1>
            <h5 class="w-full sm:mx-[4%] font-bold text-center font-myriad text-dark-blue md:text-indigo md:text-left md:ml-[10%] lg:mx-[2%] lg:text-2xl text-lg">
              CIRCLES FOR WOMEN IN BUSINESS
            </h5>
            <div class="flex justify-center md:justify-start">
              <a href='#' class="p-3 px-4 pt-2 sm:mr-[8%] md:mr-6 font-myfrida text-white bg-dark-blue rounded-full baseline hover:bg-light-blue md:ml-[10%] lg:mx-[2%]">
                BECOME A MEMBER
              </a>
            </div>
          </div>
        </div>

      </section>
      <About/>
      <h5 class="pt-4 font-bold text-center font-myfrida text-light-blue text-2xl">
        IMAGES FROM CANDID CONVERSATION 2023
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