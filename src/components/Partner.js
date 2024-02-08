import React from 'react'
import img2 from '../media/icon.png'
import img3 from  '../media/kampala/53148010670_3f64234747_c.jpg'
import video1 from '../media/video/ig.mp4'

const Partner = () => {
  return (
    <div>
        <section >
            <section class="bg-center bg-no-repeat bg-[url('/home/stella/Documents/projects/Candid/candid-v2/candid-v2/src/media/kampala/53147000502_a90ce9918d_c.jpg')] bg-gray-400 bg-blend-multiply bg-cover">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-indigo font-myriad md:text-5xl lg:text-7xl">CANDID PARTNERSHIPS </h1>
                    
                </div>
            </section>       
        </section>
        <h5 class="pt-4 font-bold text-center font-myriad text-dark-blue text-2xl md:text-4xl mt-6 md:my-6">
            EVENT PARTNERSHIPS
        </h5>
        <div className='grid grid-cols-1 mb-4 lg:grid-cols-2'>
            <div className='mx-4 max-w-4xl mt-4'>               
                <h5 class="pt-4 font-bold text-center font-myriad text-dark-blue text-3xl">
                    JOIN AS A SPONSOR
                </h5>
                <p class="text-gray pt-4 text-left mx-4 md:mx-10 text-2xl font-myriad">
                Through sponsorship or partnership with Candid Conversations, a company or individual has an opportunity to market or expand their customer base via the extensive membership reach. 
                </p>
                <p class="text-gray pt-2 text-left mx-4 md:mx-10 text-2xl font-myriad">
                As a sponsor the benefits include, but are not limited to: 
                </p>
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        Placement of your logo on all Candid Conversations’ branded materials
                        </p>
                        </div>
                    </div>                 
                </div>
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        The option to place an advert or article in the Kayana Create magazine, Kayana News and the Candid newsletter.
                        </p>
                        </div>
                    </div>                 
                </div>
                <div class="flex flex-col space-y-3  mx-4 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        A panelist slot at one event, in the region of your choice
                        </p>
                        </div>
                    </div>                 
                </div>
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        Opportunity to showcase your products/service on the display screens during the event
                        </p>
                        </div>
                    </div>                 
                </div>
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        Display/exhibition table at the event networking space for you to interact with the attendees of the event during the networking sessions.
                        </p>
                        </div>
                    </div>                 
                </div>
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 mt-4 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        Placement of logo or advert on the candid website sponsor’s panel
                        </p>
                        </div>
                    </div>                 
                </div>
                <div class="flex flex-col space-y-4 mx-2 mt-4 justify-center md:mx-10 sm:flex-row sm:space-y-0">
                    <a href="#" class="inline-flex justify-center font-myfrida items-center py-3 px-5 mx-10 md:mx-0 text-lg font-medium text-center rounded-lg bg-light-blue focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    join as a partner
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className='flex md:justify-center mx-4 mt-10 md:mx-0 lg:mr-10 lg:mt-10 lg:h-1/2'>
                
                <video class="w-full" autoPlay muted controls loop>
                <source src={video1} type="video/mp4"/>
                Your browser does not support the video tag.
                </video>

            </div>
        </div>
    </div>
  )
}

export default Partner