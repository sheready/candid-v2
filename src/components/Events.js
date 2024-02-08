import React from 'react'
import kiambu from '../media/kiambu/14.JPG'
import machakos from '../media/machakos/Candid Conversation_ IMG_0153.jpg'
import kampala from '../media/kampala/53148062613_d701a714e0_c.jpg'
import meru from '..//media/meru/Candid Conversations IMG_4003.jpg'

const Events = () => {
  return (
    <>
        <section>
            <section class="bg-center bg-no-repeat bg-[url('/home/stella/Documents/projects/Candid/candid-v2/candid-v2/src/media/events/banner2.jpg')] bg-gray-400 bg-blend-multiply bg-cover">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-indigo font-myriad md:text-5xl lg:text-7xl">CANDID EVENTS</h1>
                    
                </div>
            </section>       
        </section>
        <h4 className='pt-4 font-bold text-center font-myriad  text-dark-blue text-2xl md:text-5xl mt-6 md:my-6'>CANDID 2023</h4>
        <div className='flex flex-col justify-center align-middle'>
            <div className='grid grid-cols-1 gap-4 my-4 mx-4 lg:mx-60 md:grid-cols-2'>
                <div class="w-full mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="/kiambu">
                        <img class="rounded-t-lg" src={kiambu} alt="" />
                    </a>
                    <div class="p-5">
                        
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                        <a href="/kiambu" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-light-blue rounded-lg hover:bg-light-blue focus:ring-4 focus:outline-none focus:ring-dark-blue dark:bg-light-blue dark:hover:bg-light-blue dark:focus:ring-dark-blue">
                            Kiambu
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-full mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="/kampala">
                        <img class="rounded-t-lg" src={kampala} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                        <a href="/kampala" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-light-blue rounded-lg hover:bg-light-blue focus:ring-4 focus:outline-none focus:ring-dark-blue dark:bg-light-blue dark:hover:bg-light-blue dark:focus:ring-dark-blue">
                            Kampala
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-4 mx-4 lg:mx-60 my-4 md:grid-cols-2'>
                <div class="w-full mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="/machakos">
                        <img class="rounded-t-lg" src={machakos} alt="" />
                    </a>
                    <div class="p-5">
                        
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                        <a href="/machakos" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-light-blue rounded-lg hover:bg-light-blue focus:ring-4 focus:outline-none focus:ring-dark-blue dark:bg-light-blue dark:hover:bg-light-blue dark:focus:ring-dark-blue">
                            Machakos
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="w-full mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="/meru">
                        <img class="rounded-t-lg" src={meru} alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                        <a href="/meru" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-light-blue rounded-lg hover:bg-light-blue focus:ring-4 focus:outline-none focus:ring-dark-blue dark:bg-light-blue dark:hover:bg-light-blue dark:focus:ring-dark-blue">
                            Meru
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>


            </div>
        </div>
       
    </>
  )
}

export default Events