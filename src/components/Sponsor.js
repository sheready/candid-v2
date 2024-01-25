import React from 'react'
import banner from '../media/circles/banner3.jpg'
import img2 from '../media/icon.png'
import img8 from '../media/sponsor/img1.JPG'
import img9 from '../media/sponsor/img2.JPG'
import img12 from '../media/sponsor/img5.jpg'
import img13 from '../media/sponsor/img6.jpg'
import img16 from '../media/sponsor/img9.JPG'
import img17 from '../media/sponsor/img10.JPG'


const Sponsor = () => {
  return (
    <div>
        <section id='Hero'  class="mt-[20%] lg:mt-[7%]">
            <section class="bg-center bg-no-repeat bg-[url('https://candid-backend.s3.amazonaws.com/banner/img2.jpg')] bg-gray-400 bg-blend-multiply bg-cover h-[50vh] lg:h-[70vh]">
                <div class="flex flex-col space-y-5 md:absolute md:mb-10 pt-36  md:top-1/2 lg:top-1/3 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                <h1 class="w-full text-3xl font-bold font-myfrida text-center text-indigo md:text-7xl md:text-left">
                    PARTNERSHIP     
                </h1>
                </div>
            </section>
        </section>  
        <div class="">
            <h5 class="pt-4 font-bold text-center font-myfrida text-light-blue text-3xl">
            HOW TO JOIN AS A REGIONAL PARTNER
            </h5>
            <p class="text-gray text-left md:mx-11 md:text-xl font-myriad">
                This is an organization or company within a local area that has a pool of women in business as members and provide learning and networking opportunities for each other in one way or another.            
            </p>
            <br></br>
            <p class="text-gray text-left md:text-xl md:mx-11 font-myriad">
                A regional partner will be supported by the head office.
            </p>

            <div class="container flex flex-col px mx-auto mt-6 space-y-12  md:space-y-0 md:flex-row">
                <div class="flex flex-col space-y-10 md:space-y-5 md:mt-10 md:w-1/2">
                    <p class="font-myriad font-bold text-dark-blue md:text-xl text-center md:text-left">
                        To join as a regional office/branch, you need to have the following:
                    </p> 
                </div>
                <div class="flex flex-col space-y-6 ml-6 md:w-3/4">
                    {/* list Item 1 */}
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                        <div class="rounded-l-full ">
                            <div class="flex items-center space-x-2">
                                <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                <p class="text-gray">
                                An easily accessible office
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
                                Access to a network of women entrepreneurs or women in business
                                </p>
                            </div>
                        </div>                
                    </div> 
                    {/* list Item 1 */}
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                        <div class="rounded-l-full ">
                            <div class="flex items-center space-x-2">
                                <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                <p class="text-gray">
                                Social media presence i.e. active social media pages
                                </p>
                            </div>
                        </div>                
                    </div> 
                </div>
            </div>
            {/* <div class="container mx-auto mt-6 flex flex-col lg:flex-row">
                <div class="mr-2 mb-2">
                    <img class="h-auto max-w-full rounded-lg" src={img8} alt=""/>
                </div>
                <div class="mr-2 mb-2">
                    <img class="h-auto max-w-full rounded-lg" src={img9} alt=""/>
                </div>
                {/* <div class="mr-2 mb-2">
                    <img class="h-auto max-w-full rounded-lg" src={img10} alt=""/>
                </div>
                <div class="mr-2 mb-2">
                    <img class="h-auto max-w-full rounded-lg" src={img11} alt=""/>
                </div> */}
            {/* </div> */}
            <div class="container flex flex-col mx-auto  space-y-12  md:flex-row">
                <div class="flex flex-col align-center justify-center space-y-10 md:space-y-5 md:mt-10 md:w-1/2">
                    <p class="font-myriad font-bold text-dark-blue md:text-xl text-center md:text-left">
                    The benefits of joining the Candid Conversations Community as a Regional Partner include, but are not limited to:
                    </p> 
                </div>
                <div class="flex flex-col space-y-6 ml-6 md:w-3/4">
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* list Item 1 */}
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                        <div class="rounded-l-full ">
                            <div class="flex items-center space-x-2">
                                <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                <p class="text-gray">
                                    Access to wide range of educational resources from the head office at your disposal that will aid in organizational development
                                </p>
                            </div>
                        </div>                
                    </div>                   
                    </div> 
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* list Item 2*/}
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                        <div class="rounded-l-full ">
                            <div class="flex items-center space-x-2">
                                <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                <p class="text-gray">
                                    Mentorship opportunities for your members from experts in the different fields of focus
                                </p>
                            </div>
                        </div>                
                    </div>             
                    </div> 
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* list Item 3 */}
                        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                            <div class="rounded-l-full ">
                                <div class="flex items-center space-x-2">
                                    <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                    <p class="text-gray">
                                    Capacity building – with guidance from the head office leadership and partners.
                                    </p>
                                </div>
                            </div>                
                        </div>                   
                    </div> 
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* list Item 4 */}
                        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                            <div class="rounded-l-full ">
                                <div class="flex items-center space-x-2">
                                    <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                    <p class="text-gray">
                                    Collaborations with other organizations with the same goal to share knowledge
                                    </p>
                                </div>
                            </div>                
                        </div>                  
                    </div> 
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                         {/* list Item 5 */}
                        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                            <div class="rounded-l-full ">
                                <div class="flex items-center space-x-2">
                                    <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                    <p class="text-gray">
                                    Networking opportunities
                                    </p>
                                </div>
                            </div>                
                        </div>   
                    </div> 
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            {/* list Item 6 */}
                        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                            <div class="rounded-l-full ">
                                <div class="flex items-center space-x-2">
                                    <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                    <p class="text-gray">
                                    Communications channels provided by the head office
                                    </p>
                                </div>
                            </div>                
                        </div>          
                    </div> 
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* list Item 7 */}
                        <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                            <div class="rounded-l-full ">
                                <div class="flex items-center space-x-2">
                                    <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                    <p class="text-gray">
                                    Brand expansion
                                    </p>
                                </div>
                            </div>                
                        </div>   
                    </div> 
                </div>
            </div>
            <div class="container mx-auto mt-6 flex flex-col lg:flex-row">
                {/* <div class="mr-2 mb-2">
                    <img class="h-auto max-w-full rounded-lg" src={img12} alt=""/>
                </div>
                <div class="mr-2 mb-2">
                    <img class="h-auto max-w-full rounded-lg" src={img13} alt=""/>
                </div> */}
                {/* <div class="mr-2 mb-2">
                    <img class="h-auto max-w-full rounded-lg" src={img14} alt=""/>
                </div>
                <div class="mr-2 mb-2">
                    <img class="h-auto max-w-full rounded-lg" src={img15} alt=""/>
                </div> */}
            </div>
            <div class="container flex flex-col px mx-auto space-x-2 md:space-x-0 mt-6 space-y-12 md:space-y-0 md:flex-row">
                <div class="flex flex-col space-y-10 md:space-y-5  md:mt-10 md:w-1/2">
                    <p class="font-myriad font-bold text-dark-blue md:text-xl text-center md:text-left">
                        The buying of the license allows you to :-
                    </p> 
                </div>
                <div class="flex flex-col space-y-6 ml-6 md:w-3/4">
                    {/* list Item 1 */}
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                        <div class="rounded-l-full ">
                            <div class="flex items-center space-x-2">
                                <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                <p class="text-gray">
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
                                <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                <p class="text-gray">
                                Access to resources on our website using login details provided by the head office
                                </p>
                            </div>
                        </div>                
                    </div> 
                    {/* list Item 3 */}
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                        <div class="rounded-l-full ">
                            <div class="flex items-center space-x-2">
                                <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                <p class="text-gray">
                                Opportunities to attend national meetings
                                </p>
                            </div>
                        </div>                
                    </div> 
                     {/* list Item 4 */}
                     <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    {/* Heading */}
                        <div class="rounded-l-full ">
                            <div class="flex items-center space-x-2">
                                <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                <p class="text-gray">
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
                                <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                <p class="text-gray">
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
                                <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                                <p class="text-gray">
                                Branded material from the head office
                                </p>
                            </div>
                        </div>                
                    </div> 
                </div>
            </div>
            <div class="container mx-auto mt-6 flex flex-col lg:flex-row">
                {/* <div class="mr-2 mb-2">
                    <img class="h-auto max-w-full rounded-lg" src={img16} alt=""/>
                </div>
                <div class="mr-2 mb-2">
                    <img class="h-auto max-w-full rounded-lg" src={img17} alt=""/>
                </div> */}
                {/* <div class="mr-2 mb-2">
                    <img class="h-auto max-w-full rounded-lg" src={img18} alt=""/>
                </div>
                <div class="mr-2 mb-2">
                    <img class="h-auto max-w-full rounded-lg" src={img19} alt=""/>
                </div> */}
            </div>
            <h5 class="pt-4 lg:pt-6 font-bold text-center font-myfrida text-light-blue text-3xl">
            HOSTING AN EVENT
            </h5>
            <h5 class="pt-4 lg:pt-6 font-bold text-center font-myfrida text-dark-blue text-xl">
            LOCATION
            </h5>
            <p class="text-gray pt-4 text-left md:mx-11 md:text-xl font-myriad">
            We recommend selecting a location that can host between 20-50 women comfortably. The rooms should be clean, well ventilated, with large windows and lots of light.         
            </p>
            <h5 class="pt-4 lg:pt-6 font-bold text-center font-myfrida text-dark-blue text-lg">
            IDEAL LOCATION
            </h5>
            <p class="text-gray pt-4 text-left md:mx-11 md:text-xl font-myriad">
            Private members clubs, hotels, educational institutions (where this a catering service available.) 
            When selecting a venue consider: creative and fun locations, places that women in business will enjoy the ambience and feel heard and safe.
            </p>
            <h5 class="pt-4 lg:pt-6 font-bold text-center font-myfrida text-dark-blue text-lg">
            HOSTING CALENDAR
            </h5>
            <p class="text-gray pt-4 text-left md:mx-11 md:text-xl font-myriad">
            Typically, we recommend that events are hosted minimum of 5 times a year, according to the calendar below:
            </p>

            <div class="lg:mx-10 relative mt-5 overflow-x-auto">
                <table class="w-full text-sm text-left ">
                    <thead class="text-xs text-dark-blue uppercase bg-lightest-blue">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Month
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Theme
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Comments
                            </th>
                
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-indigo border-b">
                            <th scope="row" class="px-6 py-4 font-medium">
                                JANUARY
                            </th>
                            <td class="px-6 py-4">
                                Goal Setting
                            </td>
                            <td class="px-6 py-4">
                                Kick start the year intentionally
                            </td>
                            
                        </tr>
                        <tr class="bg-indigo border-b">
                            <th scope="row" class="px-6 py-4 font-medium">
                                MARCH
                            </th>
                            <td class="px-6 py-4">
                                Celebration of women
                            </td>
                            <td class="px-6 py-4">
                                Coincides wih International Celebration of Women
                            </td>
                            
                        </tr>
                        <tr class="bg-indigo border-b">
                            <th scope="row" class="px-6 py-4 font-medium">
                                MAY
                            </th>
                            <td class="px-6 py-4">
                                Women and Money
                            </td>
                            <td class="px-6 py-4">
                                Themes around attitudes and trends that impact women with regards to finances.
                            </td>
                            
                        </tr>
                        <tr class="bg-indigo border-b">
                            <th scope="row" class="px-6 py-4 font-medium">
                                JUNE
                            </th>
                            <td class="px-6 py-4">
                                Opportunities for women in business
                            </td>
                            <td class="px-6 py-4">
                                Opportunities for access to (new) markets for women owned businesses.
                            </td>
                            
                        </tr>
                        <tr class="bg-indigo border-b">
                            <th scope="row" class="px-6 py-4 font-medium">
                                SEPTEMBER
                            </th>
                            <td class="px-6 py-4">
                                Women in Technology
                            </td>
                            <td class="px-6 py-4">
                                Highlighting technology asan enabler for business.
                            </td>
                            
                        </tr>
                        <tr class="bg-indigo border-b">
                            <th scope="row" class="px-6 py-4 font-medium">
                                NOVEMBER
                            </th>
                            <td class="px-6 py-4">
                                Men on Women in business
                            </td>
                            <td class="px-6 py-4">
                                A time to celebrate and include met that support the advancement of women in business.
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
       

    </div>
  )
}

export default Sponsor