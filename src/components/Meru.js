import React from 'react'
import banner from '../media/events/banner1.jpg'
import networking from '../media/icons/networking.png'
import friends from '../media/icons/friends.png'
import grow from '../media/icons/grow.png'
import food from '../media/icons/food.png'

const Meru = () => {
  return (
    <div>
        <section id='Hero'  class="mt-[20%] lg:mt-[7%] ">
            {/* flex container */}
            <div class="relative">
                <img class="h-auto lg:h-[60vh] lg:w-full object-cover" src={banner}  alt='banner-image' style={{opacity: 0.6}}></img>

                <div class="flex flex-col space-y-5 md:absolute md:mb-10 left-1/2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <h1 class="w-full mt-2  text-3xl text-dark-blue lg:text-7xl font-bold font-myfrida text-center md:text-[45px] md:text-left md:ml-[10%]">
                        WOMEN AND MONEY: DEFINING FINANCIAL SUCCESS        
                    </h1>
                    <h3 class="font-myfrida text-5xl text-dark-blue font-bold md:text-left md:ml-[10%]">VENUE: ALBA HOTEL MERU</h3>
                    {/* <h5 class="max-w-md sm:mx-[4%] font-bold text-center font-myriad text-dark-blue md:text-indigo md:text-left md:ml-[10%] lg:mx-[10%] text-lg">
                    CIRCLES FOR WOMEN IN BUSINESS
                    </h5> */}
                    <div class="flex justify-center md:justify-start">
                        <a href='https://bit.ly/CandidMeru' class="p-2 px-6 pt-2 sm:mr-[8%] md:mr-6 font-myfrida text-dark-blue bg-indigo rounded-full baseline hover:bg-light-blue md:ml-[8%] lg:mx-[9%]">
                            REGISTER NOW
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <div class="container flex flex-col-reverse px-4 mx-auto  space-y-12 md:space-y-0 md:flex-row md:mt-4">
            <div class="flex flex-col mx-12 align-middle md:w-1/2">
                <div class="grid grid-cols-2">
                    <div class="">
                        <img class="h-[60%]" src={networking}></img>
                        <p class="font-myriad text-md">Network</p>
                    </div>
                    <div class="">
                        <img class="h-[60%]" src={friends}></img>
                        <p class="font-myriad text-md">Have Fun</p>
                    </div>
                  
                    <div class="">
                        <img class="h-[60%]" src={grow}></img>
                        <p class="font-myriad text-md">Grow</p>
                    </div>
                    <div class="">
                        <img class="h-[60%]" src={food}></img>
                        <p class="font-myriad text-md">Drinks</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col space-y-6 pb-4 md:w-3/4">
                <h4 class="font-myfrida text-dark-blue font-bold text-2xl">Why Should You Join the Event</h4>
                <p class="text-xl font-myriad">Let's share, grow and learn from each other as women in business on matters money</p>
                <h5></h5>
            </div>
        </div>
        <div class="bg-indigo">
            <div class="flex justify-center pt-5">
                <h2 class="text-dark-blue font-bold font-myfrida text-2xl">EVENT SPEAKERS</h2>
            </div>
            <div class="flex flex-col container justify-center md:flex-row">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar"/>
                                <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                                    <a href="#">Bonnie Green</a>
                                </h3>
                            <p>Co-founder</p>
                            <ul class="flex justify-center mt-4 space-x-4">
                                <li>
                                    <a href="#" class="text-[#39569c] hover:text-gray-900">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-[#00acee] hover:text-gray-900">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene Avatar"/>
                            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                                <a href="#">Helene Engels</a>
                            </h3>
                            <p>Co-founder</p>
                            <ul class="flex justify-center mt-4 space-x-4">
                                <li>
                                    <a href="#" class="text-[#39569c] hover:text-gray-900 ">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-[#00acee] hover:text-gray-900 ">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>
    
                            </ul>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Avatar"/>
                            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                                <a href="#">Jese Leos</a>
                            </h3>
                            <p>CEO</p>
                            <ul class="flex justify-center mt-4 space-x-4">
                                <li>
                                    <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-center text-gray-500 dark:text-gray-400">
                            <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="Joseph Avatar"/>
                            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                                <a href="#">Joseph Mcfall</a>
                            </h3>
                            <p>Founder</p>
                            <ul class="flex justify-center mt-4 space-x-4">
                                <li>
                                    <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>               
                    </div>  
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
                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
                            08:00 - 09:00
                        </p>
                        <h3 class="text-lg font-semibold text-gray-900 ">
                            <a href="#" class="hover:underline">Opening remarks</a>
                        </h3>
                        </div>

                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right shrink-0">
                            09:00 - 10:00
                        </p>
                        <h3 class="text-lg font-semibold text-gray-900 ">
                            <a href="#" class="hover:underline">Money</a>
                        </h3>
                        </div>

                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                            10:00 - 11:00
                        </p>
                        <h3 class="text-lg font-semibold text-gray-900 ">
                            <a href="#" class="hover:underline">Money</a>
                        </h3>
                        </div>

                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                            11:00 - 12:00
                        </p>
                        <h3 class="text-lg font-semibold text-gray-900 ">
                            <a href="#" class="hover:underline">Coffee Break</a>
                        </h3>
                        </div>

                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                            12:00 - 13:00
                        </p>
                        <h3 class="text-lg font-semibold text-gray-900 ">
                            <a href="#" class="hover:underline">Scaling your brand from 0 to multimillion</a>
                        </h3>
                        </div>

                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                            13:00 - 14:00
                        </p>
                        <h3 class="text-lg font-semibold text-gray-900 ">
                            <a href="#" class="hover:underline">Money</a>
                        </h3>
                        </div>

                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                            14:00 - 15:00
                        </p>
                        <h3 class="text-lg font-semibold text-gray-900 ">
                            <a href="#" class="hover:underline">Exploring the balance between customer acquisition and retention</a>
                        </h3>
                        </div>

                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                            15:00 - 16:00
                        </p>
                        <h3 class="text-lg font-semibold text-gray-900 ">
                            <a href="#" class="hover:underline">Money</a>
                        </h3>
                        </div>

                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                            16:00 - 14:00
                        </p>
                        <h3 class="text-lg font-semibold text-gray-900 ">
                            <a href="#" class="hover:underline">Scaling your brand from 0 to multimillion</a>
                        </h3>
                        </div>

                        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right  shrink-0">
                            17:00 - 14:00
                        </p>
                        <h3 class="text-lg font-semibold text-gray-900 ">
                            <a href="#" class="hover:underline">Drinks & networking</a>
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