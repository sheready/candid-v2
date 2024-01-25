import React from 'react'
import bio from '../media/meru-speakers/bio1.jpeg'
import bio2 from '../media/meru-speakers/bio2.jpeg'
import bio3 from '../media/meru-speakers/bio3.jpeg'
import bio4 from '../media/meru-speakers/bio4.jpeg'
import bio5 from '../media/meru-speakers/bio5.jpeg'
import pot1 from '../media/kiambu/1.JPG'
import pot2 from '../media/kiambu/121.JPG'
import pot3 from '../media/kiambu/40.JPG'
import pot4 from '../media/kiambu/5.JPG'
import pot5 from '../media/kiambu/41.JPG'
import pot6 from '../media/kiambu/13.JPG'
import pot7 from '../media/kiambu/14.JPG'
import pot8 from '../media/kiambu/20.JPG'
import pot9 from '../media/kiambu/23.JPG'
import pot10 from '../media/kiambu/60.JPG'
import pot11 from '../media/kiambu/98.JPG'
import pot12 from '../media/kiambu/103.JPG'


const Kiambu = () => {
  return (
    <div>
      <section class="mt-[12%] md:mt-[7%] bg-center bg-no-repeat bg-[url('https://candid-backend.s3.amazonaws.com/banner/69.JPG')] bg-gray-400 bg-blend-multiply bg-cover h-[50vh] lg:h-[70vh]">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-44 md:py-72 lg:py-56 xl:py-68">
          <h1 class="mb-4 text-4xl font-myfrida tracking-tight leading-none text-indigo md:text-6xl lg:text-6xl">DEFINING FINANCIAL SUCCESS</h1>
        </div>
      </section>
    <h4 class="font-myfrida text-dark-blue font-bold text-2xl text-center">About the Event</h4>
    <div class="container flex flex-col px-12 mx-auto mt-6 space-y-6  mb-4 md:space-x-2 md:space-y-0 md:flex-row">
        <div class="flex flex-col space-y-8 md:space-y-5 md:mt-10  md:w-3/4">
            <p class="max-w-sm text-left font-myriad ">
                This debut cocktail event at Kiambu will focus on providing a platform for women from Kiambu to share their unconventional paths to success through an evening of moderated conversation and intimate breakout sessions.
            </p>
            <p class="max-w-sm text-left font-myriad">
                We’ll be learning from our panelists’ personal stories as we explore both business and agricultural opportunities that could accelerate your current growth. This will be done through introspection and group reflection in the breakout sessions.
            </p>
        </div>
        <div class="flex flex-col space-y-4 md:mt-10 md:w-3/4">
            <div class="flex flex-col justify-center space-y-4 md:mt-8">
                <h6 class="font-myfrida text-dark-blue font-bold text-2xl">Session objective</h6>
                <p class="max-w-sm text-left font-myriad">
                    To maximize community cohesion, promote networking, and celebrate the local agricultural landscape in Kiambu.
                </p>
            </div>
            <div class="flex justify-center md:justify-start">
                <a href='https://bit.ly/CandidKiambu' class="p-2 px-6 pt-2 font-myfrida  bg-light-blue rounded-full baseline hover:bg-light-blue">
                    REGISTER NOW
                </a>
            </div>
        </div>
    </div>
    <div class="">
        <div class="flex justify-center pt-5">
            <h2 class="text-dark-blue font-bold font-myfrida text-2xl">EVENT SPEAKERS</h2>
        </div>
      
        <div class="flex flex-col container mx-auto  space-y-4 md:flex-row md:space-x-4 md:space-y-0  md:pb-4 ">
            <div>
                <img class="h-auto max-w-full rounded-lg" src={bio5} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={bio} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={bio2} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={bio3} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={bio4} alt=""/>
            </div>
        </div>
    </div>
    <h5 class="pt-4 font-bold text-center font-myfrida text-dark-blue text-2xl">
        IMAGES FROM CANDID CONVERSATION KIAMBU 2023
    </h5>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 m-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot1} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot2} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot3} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot4} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot5} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot6} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot7} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot8} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot9} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot10} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot12} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot11} alt=""/>
        </div>
    </div>


  </div>
  )
}

export default Kiambu