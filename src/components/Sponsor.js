import React from 'react'
import banner from '../media/circles/banner3.jpg'
import img2 from '../media/icon.png'
import img8 from '../media/kampala/53147808659_31e4238cac_c.jpg'
import img9 from '../media/kampala/53148080158_18f90f46d0_c.jpg'
import img12 from '../media/kiambu/11.JPG'
import img13 from '../media/kiambu/14.JPG'
import img16 from '../media/sponsor/img9.JPG'



const Sponsor = () => {
  return (
    <div>
        <section >
            <section class="bg-center bg-no-repeat bg-[url('/home/stella/Documents/projects/Candid/candid-v2/candid-v2/src/media/kiambu/65.JPG')] bg-gray-400 bg-blend-multiply bg-cover">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-indigo font-myriad md:text-5xl lg:text-7xl">CANDID PARTNERSHIPS </h1>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" class="inline-flex justify-center font-myfrida items-center py-3 px-5 mx-16 md:mx-0 text-lg font-medium text-center rounded-lg bg-light-blue focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Join as a partner
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>       
        </section> 
        <h5 class="pt-4 font-bold text-center font-myriad text-dark-blue text-2xl md:text-4xl my-6">
            JOIN AS A REGIONAL PARTNER
        </h5>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='md:mt-2 mx-4 '>
                <p class="text-gray text-left md:mx-11 text-2xl font-myriad">
                    This is an organization or company within a local area that has a pool of women in business as members and provide learning and networking opportunities for each other in one way or another.            
                </p>
                <br></br>
                <p class="text-gray text-left text-2xl md:mx-11 font-myriad">
                    A regional partner will be supported by the head office.
                </p>
                <br></br>
                <p class="text-gray text-left text-2xl md:mx-11 font-myriad">
                    To join as a regional office/branch, you need to have the following:
                </p> 
                 {/* list Item 1 */}
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        An easily accessible office
                        </p>
                        </div>
                    </div>                
                </div> 
                 {/* list Item 1 */}
                 <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        Access to a network of women entrepreneurs or women in business
                        </p>
                        </div>
                    </div>                
                </div> 
                {/* list Item 1 */}
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        Engaging social media presence
                        </p>
                        </div>
                    </div>                
                </div> 
            </div>
            <div className='flex md:justify-center md:mr-6'>
                <img src={img8} className='w-full object-cover'/>
            </div>
        </div>
        <h5 class="font-bold text-center font-myriad text-dark-blue text-2xl md:text-4xl my-4 md:my-10">
            REGIONAL PARTNER BENEFITS
        </h5>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex md:justify-center md:ml-6'>
                <img src={img9} className='w-full object-cover'/>
            </div>
            <div>
                {/* list Item 1 */}
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        Access to wide range of educational resources from the head office at your disposal that will aid in organizational development
                        </p>
                        </div>
                    </div>                
                </div> 
                {/* list Item 1 */}
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        Mentorship opportunities for your members from experts in the different fields of focus
                        </p>
                        </div>
                    </div>                
                </div> 
                {/* list Item 1 */}
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        Capacity building – with guidance from the head office leadership and partners.
                        </p>
                        </div>
                    </div>                
                </div> 
                {/* list Item 1 */}
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        Collaborations with other organizations with the same goal to share knowledge
                        </p>
                        </div>
                    </div>                
                </div> 
                {/* list Item 1 */}
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        Networking opportunities
                        </p>
                        </div>
                    </div>                
                </div> 
                {/* list Item 1 */}
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        Communications channels provided by the head office
                        </p>
                        </div>
                    </div>                
                </div> 
                {/* list Item 1 */}
                <div class="flex flex-col space-y-3 mx-2 md:mx-10 my-4 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                    <div class="rounded-l-full ">
                        <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 ml-2"/>
                        <p class="text-gray text-xl">
                        Brand expansion
                        </p>
                        </div>
                    </div>                
                </div> 
            </div>

        </div>

        <h5 class="font-bold text-center font-myriad text-dark-blue text-2xl md:text-4xl my-4 md:my-10">
            BENEFITS OF BUYING A LICENSE
        </h5>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="container flex flex-col px mx-auto space-x-2 md:space-x-0 mt-6 space-y-12 md:space-y-0 md:flex-row">
                <div class="flex flex-col space-y-6 md:ml-6 ml-2">
                    {/* list Item 1 */}
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                        <div class="rounded-l-full ">
                            <div class="flex items-center space-x-2">
                                <img src={img2} class="h-6 w-6 ml-2"/>
                                <p class="text-gray text-xl">
                                Host a meeting using our unique format.
                                The events are curated to address the women holistically in four main areas: 
                                Leadership, entrepreneurship, finance, and technology.
                                </p>
                            </div>
                        </div>                
                    </div> 
                    {/* list Item 2 */}
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                        <div class="rounded-l-full ">
                            <div class="flex items-center space-x-2">
                                <img src={img2} class="h-6 w-6 ml-2"/>
                                <p class="text-gray text-xl">
                                Access to resources on our website using login details provided by the head office
                                </p>
                            </div>
                        </div>                
                    </div> 
                    {/* list Item 3 */}
                     {/* list Item 4 */}
                     <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                        <div class="rounded-l-full ">
                            <div class="flex items-center space-x-2">
                                <img src={img2} class="h-6 w-6 ml-2"/>
                                <p class="text-gray text-xl">
                                Opportunity to collaborate and partner with other regional members
                                </p>
                            </div>
                        </div>                
                    </div> 
                     {/* list Item 3 */}
                     <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                        <div class="rounded-l-full ">
                            <div class="flex items-center space-x-2">
                                <img src={img2} class="h-6 w-6 ml-2"/>
                                <p class="text-gray text-xl">
                                Collaborations and membership at Kayana Create (subject to meeting membership criteria)
                                </p>
                            </div>
                        </div>                
                    </div> 
                     {/* list Item 3 */}
                     <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                        <div class="rounded-l-full ">
                            <div class="flex items-center space-x-2">
                                <img src={img2} class="h-6 w-6 ml-2"/>
                                <p class="text-gray text-xl">
                                Branded material from the head office
                                </p>
                            </div>
                        </div>                
                    </div> 
                </div>
            </div>
            <div className='flex md:justify-center md:mr-6'>
                <img src={img12} className='w-full object-cover'/>
            </div>
        </div>  
    </div>
  )
}

export default Sponsor