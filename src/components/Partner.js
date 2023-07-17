import React from 'react'
import img2 from '../media/icon.png'
import banner from '../media/circles/banner4.jpg'
import img3 from '../media/images/img7.jpg'
import img5 from '../media/images/img21.JPG'
import img6 from '../media/images/img5.jpg'
import img7 from '../media/images/img11.jpg'
import img10 from '../media/sponsor/img3.JPG'
import img11 from '../media/sponsor/img4.jpg'
import img14 from '../media/sponsor/img7.jpg'
import img15 from '../media/sponsor/img8.jpg'
import img18 from '../media/sponsor/img11.JPG'
import img19 from '../media/sponsor/img12.JPG'
import img20 from '../media/sponsor/img13.JPG'

const Partner = () => {
  return (
    <div>
        <section id='Hero'  class="mt-[20%] lg:mt-[7%]">
    {/* flex container */}
            <div class="relative">
                <img class="h-auto lg:h-[50vh] lg:w-full object-cover" src={banner}  alt='banner-image'></img>
                <div class="flex flex-col space-y-5 md:absolute md:mb-10 left-1/2 md:top-2/3 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <h1 class="w-full mt-3 text-3xl text-dark-blue lg:text-7xl font-bold font-myfrida text-center md:text-indigo md:text-[45px] md:text-left">
                    PARTNER WITH US        
                    </h1>
                </div>
            </div>
        </section>
        <h5 class="pt-4 font-bold text-center font-myfrida text-light-blue text-3xl">
            HOW TO JOIN AS A RETAILER
        </h5>
        <div class="flex flex-col container mx-auto space-x-2">
            <p class="text-gray pt-4 text-left mx-4 md:mx-10 md:text-xl font-myriad">
            The retailer position will be initially open to members of Candid Conversations. 
            The products or services on sale have to be strictly Kenyan sourced and made. 
            The benefit of signing up as a retailer include, but are not limited to:
            </p>
            <br></br>
            <div class="flex flex-col space-y-6 ml-6 md:w-3/4">
                {/* list Item 1 */}
                <div class="flex flex-col space-y-3 md:space-y-0 mx-4 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                            <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                            <p class="text-myriad  text-dark-blue">
                            Opportunity to have their products/services showcased on the official website for members to purchase.
                            </p>
                        </div>
                    </div>                
                </div>
                {/* list Item 2 */}
                <div class="flex flex-col space-y-3 md:space-y-0 mx-4 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                            <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                            <p class="text-myriad  text-dark-blue">
                            An opportunity to have a display/exhibition table during one event in their region
                            </p>
                        </div>
                    </div>                
                </div>
                {/* list Item 3 */}
                <div class="flex flex-col space-y-3 md:space-y-0 mx-4 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                            <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                            <p class="text-myriad  text-dark-blue">
                            Inclusion into the Kayana Verified list of vendors and a feature on the Kenya Cottage Industry Website
                            </p>
                        </div>
                    </div>                
                </div>
                {/* list Item 4 */}
                <div class="flex flex-col space-y-3 md:space-y-0 mx-4 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                            <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                            <p class="text-myriad  text-dark-blue">
                            Posts of their products or services on the official Candid conversations social media pages
                            </p>
                        </div>
                    </div>                
                </div>
             </div>
        </div>
        <div class="container mx-auto mt-6 flex flex-col lg:flex-row">
            <div class="mr-2 mb-2">
                <img class="h-auto max-w-full rounded-lg" src={img3} alt=""/>
            </div>
            <div class="mr-2 mb-2">
                <img class="h-auto max-w-full rounded-lg" src={img5} alt=""/>
            </div>
            <div class="mr-2 mb-2">
                <img class="h-auto max-w-full rounded-lg" src={img6} alt=""/>
            </div>
            <div class="mr-2 mb-2">
                <img class="h-auto max-w-full rounded-lg" src={img7} alt=""/>
            </div>
        </div>
        <h5 class="pt-4 font-bold text-center font-myfrida text-light-blue text-3xl">
            HOW TO JOIN AS A SPONSOR
        </h5>
        <div class="flex flex-col container mx-auto space-x-7">
            <p class="text-gray pt-4 text-left mx-4 md:mx-10 md:text-xl font-myriad">
            Through sponsorship or partnership with Candid Conversations, a company or individual has an opportunity to market or expand their customer base via the extensive membership reach. 
            As a sponsor the benefits include, but are not limited to: 
            {/* This will give your organization the opportunity to work with other organizations that are working to improve the lively hoods and working environments of women in their area of operation. */}
            </p>
            <br></br>
            <div class="flex flex-col container space-y-6 ">
                {/* list Item 1 */}
                <div class="flex flex-col mr-9 space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                            <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                            <p class="text-myriad  text-dark-blue">
                            Placement of your logo on all Candid Conversations’ branded materials
                            </p>
                        </div>
                    </div>                
                </div>
                {/* list Item 2 */}
                <div class="flex flex-col space-y-3 mr-9 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                            <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                            <p class="text-myriad  text-dark-blue">
                            The option to place an advert or article in the Kayana Create magazine, Kayana News and the Candid newsletter.
                            </p>
                        </div>
                    </div>                
                </div>
                {/* list Item 3 */}
                <div class="flex flex-col space-y-3 mr-9 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                            <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                            <p class="text-myriad  text-dark-blue">
                            A speaking slot at one event, in the region of your choice
                            </p>
                        </div>
                    </div>                
                </div>
                {/* list Item 4 */}
                <div class="flex flex-col space-y-3 mr-9 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                            <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                            <p class="text-myriad  text-dark-blue">
                            Opportunity to showcase your products/service on the display screens during the event
                            </p>
                        </div>
                    </div>                
                </div>
                {/* list Item 5 */}
                <div class="flex flex-col space-y-3 mr-9 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                            <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                            <p class="text-myriad  text-dark-blue">
                            Display/exhibition table at the event networking space for you to interact with the attendees of the event during the networking sessions.
                            </p>
                        </div>
                    </div>                
                </div>
                {/* list Item 6 */}
                <div class="flex flex-col space-y-3 mr-9 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                            <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                            <p class="text-myriad  text-dark-blue">
                            Placement of logo or advert on the candid website sponsor’s panel
                            </p>
                        </div>
                    </div>                
                </div>
            </div>
        </div>

       


    </div>
  )
}

export default Partner