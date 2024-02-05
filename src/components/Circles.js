import React from 'react'
import banner from '../media/circles/banner2.jpg'
import img2 from '../media/icon.png'
import img3 from '../media/circles/img1.jpg'
import img4 from '../media/circles/img2.jpg'
import img5 from '../media/circles/img3.jpg'
import img6 from '../media/circles/img4.jpg'
import img7 from '../media/images/img5.jpg'
import img8 from '../media/images/img15.jpg'
import img9 from '../media/images/img10.jpg'
import img10 from '../media/images/img12.JPG'
import img11 from '../media/circles/img5.jpg'


const Circles = () => {
  return (
    <div>
      <section id='Hero'  class="mt-[20%] lg:mt-[7%] ">
      <section class="bg-center bg-no-repeat bg-[url('/home/stella/Documents/projects/Candid/candid-v2/candid-v2/src/media/kiambu/3.JPG')] bg-gray-400 bg-blend-multiply bg-cover">
          <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-indigo font-myfrida md:text-5xl lg:text-7xl">Circles of trust </h1>
             <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="/register" class="inline-flex justify-center font-myfrida items-center py-3 px-5 mx-16 md:mx-0 text-lg font-medium text-center rounded-lg bg-light-blue focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                  CREATE A CIRCLE
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
              </div>
          </div>
      </section>       
    </section>
    <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
      <div class="flex flex-col space-y-10 md:space-y-5 md:mt-10 md:w-1/2">
        <h5 class="max-w-md font-myfrida md:text-lg font-bold text-dark-blue text-center md:text-left">
            WHY SHOULD YOU JOIN AS A MEMBER ?
        </h5> 
        <p class="max-w-sm text-center md:text-left">
        Circle of trust can also be referred to as a <em>Personal Board</em>, which is a small group of people that you go to for support and advice on advancing your business or career. 
        </p>
        <p class="max-w-sm text-center md:text-left">
        The Circle of Trust should consist of five to eight carefully selected individuals that you can rely on to strategize with and to act as your personal sounding board when it comes to your professional or personal development
        </p>
        <p class="max-w-sm text-center md:text-left">
        Members will acquire mentors and professional experts in the different fields of interest, who will help and guide them reach their potential as business people and develop friendships that last a lifetime.
        </p>

      </div>
      <div class="flex flex-col space-y-6 md:w-3/4">
        {/* list Item 1 */}
        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Heading */}
          <div class="rounded-l-full bg-lightest-blue md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div class="px-4 py-2 text-dark-blue rounded-full md:py-1 bg-lightest-blue">
                  01
              </div>
              <h3 class="text-base font-myfrida md:mb-4 md:hidden">
                We sell you, on your behalf
              </h3>
            </div>
          </div>
            <div class="text-left">
              <h3 class='hidden mb-4 text-lg text-dark-blue font-myfrida md:block'>
                  We sell you, on your behalf
              </h3>
              <p class="text-gray">
              Your circle of trust members can act as advocates for you. They can sell your skills and experience to hiring managers on the lookout for talent. 
              They can get you into key meetings, make sure you take the right training and make it onto the high potential list
              </p>
            </div>                   
        </div>
          {/* list Item 2 */}
          <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Heading */}
          <div class="rounded-l-full bg-lightest-blue md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div class="px-4 py-2 text-dark-blue rounded-full md:py-1 bg-lightest-blue">
                02
              </div>
              <h3 class="text-base font-myfrida md:mb-4 md:hidden">
                We hold you accountable
              </h3>
            </div>
            </div>
            <div class="text-left">
              <h3 class='hidden mb-4 text-lg text-dark-blue font-myfrida md:block'>
                We hold you accountable
              </h3>
              <p class="text-gray">
              It’s not just a matter of sharing their views; the very best circle of trust members will actively challenge you and ask the really hard questions about your grand strategy and plans. 
              This will help you discover and get clear on the potential flaws in your plan.
              </p>
            </div>                   
          </div>
          {/* list Item 4 */}
          <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Heading */}
            <div class="rounded-l-full bg-lightest-blue md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div class="px-4 py-2 text-dark-blue rounded-full md:py-1 bg-lightest-blue">
                  04
                </div>
                <h3 class="text-base font-myfrida md:mb-4 md:hidden">
                  We open doors & expand your network
                </h3>
              </div>
            </div>
            <div class="text-left">
              <h3 class='hidden mb-4 text-lg text-dark-blue font-myfrida md:block'>
                We open doors & expand your network
              </h3>
              <p class="text-gray">
              Every individual who sits in your circle holds the key to doors that otherwise may be closed to you. 
              They can be your door to key business contacts, prospects, and others who can help you.
              </p>
            </div>                   
          </div>
          {/* list Item 5 */}
          <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Heading */}
            <div class="rounded-l-full bg-lightest-blue md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div class="px-4 py-2 text-dark-blue rounded-full md:py-1 bg-lightest-blue">
                  05
                </div>
                <h3 class="text-base font-myfrida md:mb-4 md:hidden">
                  We will coach & challenge you
                </h3>
              </div>
            </div>
            <div class="text-left">
              <h3 class='hidden mb-4 text-lg text-dark-blue font-myfrida md:block'>
                We will coach & challenge you
              </h3>
              <p class="text-gray">
              Your circle of trust members should be able to hold you accountable for your actions and behavior impacting your professional performance.
              </p>
            </div>                   
          </div> 
          {/* list Item 6 */}
          <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          {/* Heading */}
            <div class="rounded-l-full bg-lightest-blue md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div class="px-4 py-2 text-dark-blue rounded-full md:py-1 bg-lightest-blue">
                  06
                </div>
                <h3 class="text-base font-myfrida md:mb-4 md:hidden">
                  Acquire mentors & professional experts
                </h3>
              </div>
            </div>
            <div class="text-left">
              <h3 class='hidden mb-4 text-lg text-dark-blue font-myfrida md:block'>
                Acquire mentors & professional experts
              </h3>
              <p class="text-gray">
                They will help and guide them reach their potential as business people and develop friendships that last a lifetime.
              </p>
            </div>                   
          </div>       
        </div>  
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 my-2 md:mt-14'>
      <div>
        <img src={img5} className=''/>
      </div>
      <div>
        <h5 class="text-left mb-2 text-lg font-myfrida text-dark-blue mx-14 md:text-2xl">
          BENEFITS OF BEING IN A CIRCLE OF TRUST
        </h5>
        {/* list Item 1 */}
        <div class="flex flex-col space-y-3 mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full ">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 ml-2"/>
              <p class="text-gray">
              Position your businesses to solve real problems
              </p>
            </div>
          </div>                
        </div> 
        {/* list Item 2 */}
        <div class="flex flex-col space-y-3 mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full ">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 ml-2"/>
              <p class="text-gray">
              Become effective business leaders
              </p>
            </div>
          </div>                
        </div> 
        {/* list Item 3*/}
        <div class="flex flex-col space-y-3 mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full ">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 ml-2"/>
              <p class="text-gray">
              Grow our networks
              </p>
            </div>
          </div>                
        </div> 
          {/* list Item 4*/}
          <div class="flex flex-col space-y-3 mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full ">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 ml-2"/>
              <p class="text-gray">
              Encourage each other to create businesses that will last for posterity
              </p>
            </div>
          </div>                
        </div> 
        {/* list Item 5*/}
        <div class="flex flex-col space-y-3 mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full ">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 ml-2"/>
              <p class="text-gray">
              Create a support system that will walk alongside us as we build our businesses
              </p>
            </div>
          </div>                
        </div> 
        <h5 class="text-left mb-2 text-lg font-myfrida text-dark-blue mx-14 md:text-2xl">
          HOW TO BUILD YOUR CIRCLE OF TRUST?
        </h5>
        <div class="flex flex-col space-y-3 mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full ">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 ml-2"/>
              <div>
                <h3 class="text-base font-myfrida text-dark-blue">
                  Experts
                </h3>
                <p class="text-gray">
                Individuals with mastery in an area/subject you need to learn more about.
                </p>
              </div>
            </div>
          </div>                
        </div> 
        <div class="flex flex-col space-y-3 mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full ">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 ml-2"/>
              <div>
                <h3 class="text-base font-myfrida text-dark-blue">
                  Peers
                </h3>
                <p class="text-gray">
                Trusted colleagues or friends who you can open up to and who have your back
                </p>
              </div>
            </div>
          </div>                
        </div> 
        <div class="flex flex-col space-y-3 mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full ">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 ml-2"/>
              <div>
                <h3 class="text-base font-myfrida text-dark-blue">
                  Mentors
                </h3>
                <p class="text-gray">
                  Someone with more experience than you, who can share and guide you.
                </p>
              </div>
            </div>
          </div>                
        </div> 

      </div>
    </div>


    

    </div>
  )
}

export default Circles