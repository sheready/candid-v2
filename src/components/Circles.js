import React from 'react'
import banner from '../media/events/banner2.jpg'
import img2 from '../media/icon.png'
import img3 from '../media/circles/img1.jpg'
import img4 from '../media/circles/img2.jpg'
import img5 from '../media/circles/img3.jpg'
import img6 from '../media/circles/img4.jpg'
import img7 from '../media/images/img5.jpg'
import img8 from '../media/images/img15.jpg'
import img9 from '../media/images/img10.jpg'
import img10 from '../media/images/img12.JPG'


const Circles = () => {
  return (
    <div>
      <section id='Hero'>
            {/* flex container */}
            <div class="relative">
            <img class="h-auto lg:h-[100vh] lg:w-[100vw]" src={banner}  alt='banner-image'></img>

            <div class="flex flex-col space-y-5 md:absolute md:mb-10 left-1/2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                <h1 class="w-full mt-3 text-3xl text-dark-blue lg:text-7xl md:text-black font-bold font-myfrida text-center md:text-[45px] md:text-left">
                CIRCLES OF TRUST        
                </h1>
                {/* <h5 class="max-w-md sm:mx-[4%] font-bold text-center font-myriad text-dark-blue md:text-indigo md:text-left md:ml-[10%] lg:mx-[10%] text-lg">
                CIRCLES FOR WOMEN IN BUSINESS
                </h5> */}
                <div class="flex justify-center md:justify-center">
                <a href='#' class="p-3 px-4 pt-2 sm:mr-[8%] md:mr-6 font-myfrida text-white bg-dark-blue rounded-full baseline hover:bg-light-blue md:ml-[10%] lg:mx-[9%]">
                    CREATE YOUR OWN CIRCLE
                </a>
                </div>
            </div>
        </div>
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

    <div class="container mx-auto mt-6 flex flex-col lg:flex-row">
      <div class="mr-2 mb-2">
          <img class="h-auto max-w-full rounded-lg" src={img3} alt=""/>
      </div>
      <div class="mr-2 mb-2">
          <img class="h-auto max-w-full rounded-lg" src={img4} alt=""/>
      </div>
      <div class="mr-2 mb-2">
          <img class="h-auto max-w-full rounded-lg" src={img5} alt=""/>
      </div>
      <div class="mr-2 mb-2">
          <img class="h-auto max-w-full rounded-lg" src={img6} alt=""/>
      </div>
    </div>

    <h5 class="pt-10 font-bold text-center mb-2 font-myfrida text-dark-blue md:text-xl">
      HOW TO BENEFIT MORE AS MEMBER?
    </h5>
    <div class="container flex flex-col px mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
      <div class="flex flex-col space-y-10 md:space-y-5 md:mt-10 md:w-1/2">
        <h5 class="max-w-md font-myriad md:text-xl font-bold text-dark-blue text-center md:text-left">
        Becoming a member of Candid Conversations opens you up to authentic conversations. 
        We believe that by presenting our authentic selves we are better able to:
        </h5> 
      </div>
      <div class="flex flex-col space-y-6 ml-6 md:w-3/4">
        {/* list Item 1 */}
        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full ">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
              <p class="text-gray">
              Position our businesses to solve real problems
              </p>
            </div>
          </div>                
        </div> 
        {/* list Item 2 */}
        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full ">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
              <p class="text-gray">
              Become effective business leaders
              </p>
            </div>
          </div>                
        </div> 
        {/* list Item 3*/}
        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full ">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
              <p class="text-gray">
              Grow our networks
              </p>
            </div>
          </div>                
        </div> 
        {/* list Item 4*/}
        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full ">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
              <p class="text-gray">
              Encourage each other to create businesses that will last for posterity
              </p>
            </div>
          </div>                
        </div> 
        {/* list Item 5*/}
        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full ">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
              <p class="text-gray">
              Create a support system that will walk alongside us as we build our businesses
              </p>
            </div>
          </div>                
        </div> 
      </div>
    </div>

    <div class="container mx-auto mt-6 flex flex-col lg:flex-row">
      <div class="mr-2 mb-2">
          <img class="h-auto max-w-full rounded-lg" src={img7} alt=""/>
      </div>
      <div class="mr-2 mb-2">
          <img class="h-auto max-w-full rounded-lg" src={img8} alt=""/>
      </div>
      <div class="mr-2 mb-2">
          <img class="h-auto max-w-full rounded-lg" src={img9} alt=""/>
      </div>
      <div class="mr-2 mb-2">
          <img class="h-auto max-w-full rounded-lg" src={img10} alt=""/>
      </div>
    </div>

    <h5 class="pt-10 font-bold text-center mb-2 font-myfrida text-dark-blue md:text-xl">
      HOW TO BUILD YOUR CIRCLE OF TRUST?
    </h5>
    <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
      <div class="flex flex-col space-y-10 md:space-y-5 md:mt-10 md:w-1/2">
        <h5 class="max-w-md font-myriad md:text-xl font-bold text-dark-blue text-center md:text-left">
        When selecting the type of individuals to have in your circle of trust, aim to have the following individuals:
        </h5> 
      </div>
      <div class="flex flex-col space-y-6 ml-6 md:w-3/4">
        {/* list Item 1 */}
        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full bg-lightest-blue md:bg-transparent">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
              <h3 class="text-base font-myfrida md:mb-4 md:hidden">
                Experts
              </h3>
            </div>
          </div>
          <div class="text-left">
            <h3 class='hidden mb-4 text-lg text-dark-blue font-myfrida md:block'>
              Experts
            </h3>
            <p class="text-gray">
            Individuals with mastery in an area/subject you need to learn more about.
            </p>
          </div>                   
        </div> 
        {/* list Item 2 */}
        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full bg-lightest-blue md:bg-transparent">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
              <h3 class="text-base font-myfrida md:mb-4 md:hidden">
                Peers
              </h3>
            </div>
          </div>
          <div class="text-left">
            <h3 class='hidden mb-4 text-lg text-dark-blue font-myfrida md:block'>
              Peers
            </h3>
            <p class="text-gray">
              Trusted colleagues or friends who you can open up to and who have your back
            </p>
          </div>                   
        </div> 
        {/* list Item 2 */}
        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
        {/* Heading */}
          <div class="rounded-l-full bg-lightest-blue md:bg-transparent">
            <div class="flex items-center space-x-2">
              <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
              <h3 class="text-base font-myfrida md:mb-4 md:hidden">
                Mentors
              </h3>
            </div>
          </div>
          <div class="text-left">
            <h3 class='hidden mb-4 text-lg text-dark-blue font-myfrida md:block'>
              Mentors
            </h3>
            <p class="text-gray">
              Someone senior to you, who can share her experience.
            </p>
          </div>                   
        </div> 
      </div>
    </div>


    

    </div>
  )
}

export default Circles