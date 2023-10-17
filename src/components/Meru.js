import React from 'react'
import speaker from '../media/meru-speakers/marrianne-nyangi.jpg'
import speaker1 from '../media/meru-speakers/mercy chidi.jpg'
import speaker2 from '../media/meru-speakers/nyambura munyua.jpg'
import speaker3 from '../media/meru-speakers/purity njoki.jpeg'
import banner1 from '../media/carousel/banner.jpeg'
import banner2 from '../media/carousel/banner2.jpeg'
import poster from '../media/images/poster.jpeg'
import poster2 from '../media/images/poster2.jpeg'
import image from '../media/gallery/land3.jpg'
import bio from '../media/meru-speakers/bio1.jpeg'
import bio2 from '../media/meru-speakers/bio2.jpeg'
import bio3 from '../media/meru-speakers/bio3.jpeg'
import bio4 from '../media/meru-speakers/bio4.jpeg'
import bio5 from '../media/meru-speakers/bio5.jpeg'

const Meru = () => {
  return (
    <div>
        <section id='Hero'  class="mt-[12%] md:mt-[7%] ">
            <div id="default-carousel" class="relative w-full" data-carousel="slide">
            
                <div class="relative h-48 overflow-hidden rounded-lg md:h-96">
                    
                    <div class="duration-700 ease-linear" data-carousel-item>
                        <img src={banner1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    
                    <div class="duration-700 ease-linear" data-carousel-item>
                        <img src={banner2} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                </div>             
            </div>
        </section>
        <h4 class="font-myfrida text-dark-blue font-bold text-2xl text-center">About the Event</h4>
        <div class="container flex flex-col px-12 mx-auto mt-6 space-y-6  mb-4 md:space-x-2 md:space-y-0 md:flex-row">
            <div class="flex flex-col space-y-8 md:space-y-5 md:mt-10  md:w-3/4">
                <p class="max-w-sm text-left font-myriad ">
                    This debut cocktail event at Meru will focus on providing a platform for women from Meru to share their unconventional paths to success through an evening of moderated conversation and intimate breakout sessions.
                </p>
                <p class="max-w-sm text-left font-myriad">
                    We’ll be learning from our panelists’ personal stories as we explore both business and career  opportunities that could accelerate your current growth. This will be done through introspection and group reflection in the breakout sessions.
                </p>
            </div>
            <div class="flex flex-col space-y-4 md:mt-10 md:w-3/4">
                <div class="flex flex-col justify-center space-y-4 md:mt-8">
                    <h6 class="font-myfrida text-dark-blue font-bold text-2xl">Session objective</h6>
                    <p class="max-w-sm text-left font-myriad">
                        To maximize community cohesion, promote networking, and celebrate the local business landscape in Meru.
                    </p>
                </div>
                <div class="flex justify-center md:justify-start">
                    <a href='https://bit.ly/CandidMeru' class="p-2 px-6 pt-2 font-myfrida  bg-light-blue rounded-full baseline hover:bg-light-blue">
                        REGISTER NOW
                    </a>
                </div>
            </div>
        </div>
        <div class="bg-indigo">
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
        <div>
            <div class="flex justify-center">
                <h2 class="text-dark-blue font-bold font-myfrida text-2xl pt-10">EVENT SCHEDULE</h2>
            </div>
            <div>
                <section class="antialiased">
                    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-10 lg:py-14">
                    
                        <div class="flow-root max-w-3xl mx-auto mt-4">
                        <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p class="w-32 font-myfrida text-lg font-normal text-dark-blue sm:text-right shrink-0">
                                05:30 p.m
                            </p>
                            <h3 class="text-lg font-semibold font-myriad text-gray-900 ">
                                <a href="#">Arrival and Photo booth Session</a>
                            </h3>
                            </div>

                            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p class="w-32 font-myfrida text-lg font-normal text-dark-blue sm:text-right shrink-0">
                                05:45 p.m
                            </p>
                            <h3 class="text-lg font-semibold font-myriad text-gray-900 ">
                                <a href="#">Welcome Cocktail</a>
                            </h3>
                            </div>

                            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p class="w-32 font-myfrida text-lg font-normal text-dark-blue sm:text-right  shrink-0">
                                06:00 p.m
                            </p>
                            <h3 class="text-lg font-semibold font-myriad text-gray-900 ">
                                <a href="#">Opening Remarks</a>
                                <p>KCB Branch Manager, Patricia Nduku</p>
                            </h3>
                            </div>

                            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p class="w-32 font-myfrida text-lg font-normal text-dark-blue sm:text-right  shrink-0">
                                06:25 p.m
                            </p>
                            <h3 class="text-lg font-semibold font-myriad text-gray-900 ">
                                <a href="#">Women and Money: Defining Financial Success</a>
                                <p>Moderator, Josephine Macharia</p>
                            </h3>
                            </div>

                            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p class="w-32 font-myfrida text-lg font-normal text-dark-blue sm:text-right  shrink-0">
                                07:30 p.m
                            </p>
                            <h3 class="text-lg font-semibold font-myriad text-gray-900 ">
                                <a href="#">Networking</a>
                            </h3>
                            </div>

                            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p class="w-32 font-myfrida text-lg font-normal text-dark-blue sm:text-right  shrink-0">
                                08:00 p.m
                            </p>
                            <h3 class="text-lg font-semibold font-myriad text-gray-900 ">
                                <a href="#">Vote of Thanks</a>
                                <p>Community coordinator Candid Conversations, Brenda Ndirangu</p>
                            </h3>
                            </div>

                            <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p class="w-32 font-myfrida text-lg font-normal text-dark-blue sm:text-right  shrink-0">
                                08:30 p.m
                            </p>
                            <h3 class="text-lg font-semibold font-myriad text-gray-900 ">
                                <a href="#">Guest leave at their leisure</a>
                            </h3>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        

    </div>
  )
}

export default Meru