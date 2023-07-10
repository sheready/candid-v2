import React from 'react'
import banner from '../media/images/img26.jpg'
import img2 from '../media/icon.png'
import img3 from '../media/images/img7.jpg'
import img5 from '../media/images/img21.JPG'
import img6 from '../media/images/img5.jpg'
import img7 from '../media/images/img11.jpg'

const Sponsor = () => {
  return (
    <div>
        <section id='Hero'>
            {/* flex container */}
            <div class="relative">
                <img class="h-auto lg:h-[100vh] lg:w-[100vw]" src={banner}  alt='banner-image'></img>
                <div class="flex flex-col space-y-5 md:absolute md:mb-10 left-1/2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <h1 class="w-full mt-3 text-3xl text-dark-blue lg:text-7xl md:text-indigo font-bold font-myfrida text-center md:text-[45px] md:text-left">
                    JOIN THE MOVEMENT        
                    </h1>
                </div>
            </div>
        </section>
        <h5 class="pt-4 font-bold text-center text-dark-blue mb-2 font-myriad md:text-2xl">
        Circles for Women in Business is a professional Networking event for women in business.
        </h5> 
        <h5 class=" font-bold text-center text-dark-blue mb-2 font-myriad md:text-2xl">
        You can join us either a regional partner, sponsor, member or retailer.
        </h5>  
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
        <div class="bg-indigo">
            <h5 class="pt-4 font-bold text-center font-myfrida text-light-blue text-3xl">
            HOW TO JOIN AS A REGIONAL PATNER
            </h5>
            <p class="text-gray text-center md:mx-11 md:text-xl font-myriad">
                This is an organization or company within a local area that has a pool of women in business as members and provide learning and networking opportunities for each other in one way or another.            
            </p>
            <br></br>
            <p class="text-gray text-center md:text-xl font-myriad">
                A regional partner will be supported by the head office.
            </p>

            <div class="container flex flex-col px mx-auto mt-6 space-y-12 md:space-y-0 md:flex-row">
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
            <div class="container flex flex-col mx-auto mt-6 space-y-12  md:flex-row">
                <div class="flex flex-col align-center justify-center space-y-10 md:space-y-5 md:mt-10 md:w-1/2">
                    <p class="font-myriad font-bold text-dark-blue md:text-xl text-center md:text-left">
                    The benefits of joining the Candid Conversations Community as a Regional Partner include, but are not limited to:
                    </p> 
                </div>
                <div class="flex flex-col space-y-6 ml-6 md:w-3/4">
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div class="">
                            <div class="flex items-center space-x-2">
                            <div class="px-4 py-2 text-dark-blue rounded-full md:py-1 bg-lightest-blue">
                                01
                            </div>
                            <h3 class="text-base font-myriad md:mb-4 md:hidden">
                            Access to wide range of educational resources from the head office at your disposal that will aid in organizational development
                            </h3>
                            </div>
                        </div>
                        <div class="text-left">
                            <h3 class='hidden mb-4 text-lg font-myriad md:block'>
                            Access to wide range of educational resources from the head office at your disposal that will aid in organizational development
                            </h3>
                        </div>                   
                    </div> 
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div class="">
                            <div class="flex items-center space-x-2">
                            <div class="px-4 py-2 text-dark-blue rounded-full md:py-1 bg-lightest-blue">
                                02
                            </div>
                            <h3 class="text-base font-myriad md:mb-4 md:hidden">
                            Mentorship opportunities for your members from experts in the different fields of focus
                            </h3>
                            </div>
                        </div>
                        <div class="text-left">
                            <h3 class='hidden mb-4 text-lg font-myriad md:block'>
                            Mentorship opportunities for your members from experts in the different fields of focus
                            </h3>
                        </div>                   
                    </div> 
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div class="">
                            <div class="flex items-center space-x-2">
                            <div class="px-4 py-2 text-dark-blue rounded-full md:py-1 bg-lightest-blue">
                                03
                            </div>
                            <h3 class="text-base font-myriad md:mb-4 md:hidden">
                            Capacity building – with guidance from the head office leadership and partners
                            </h3>
                            </div>
                        </div>
                        <div class="text-left">
                            <h3 class='hidden mb-4 text-lg font-myriad md:block'>
                            Capacity building – with guidance from the head office leadership and partners
                            </h3>
                        </div>                   
                    </div> 
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div class="">
                            <div class="flex items-center space-x-2">
                            <div class="px-4 py-2 text-dark-blue rounded-full md:py-1 bg-lightest-blue">
                                04
                            </div>
                            <h3 class="text-base font-myriad md:mb-4 md:hidden">
                           Collaborations with other organizations with the same goal to share knowledge
                            </h3>
                            </div>
                        </div>
                        <div class="text-left">
                            <h3 class='hidden mb-4 text-lg font-myriad md:block'>
                           Collaborations with other organizations with the same goal to share knowledge
                            </h3>
                        </div>                   
                    </div> 
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div class="">
                            <div class="flex items-center space-x-2">
                            <div class="px-4 py-2 text-dark-blue rounded-full md:py-1 bg-lightest-blue">
                                05
                            </div>
                            <h3 class="text-base font-myriad md:mb-4 md:hidden">
                           Networking opportunities
                            </h3>
                            </div>
                        </div>
                        <div class="text-left">
                            <h3 class='hidden mb-4 text-lg font-myriad md:block'>
                           Networking opportunities
                            </h3>
                        </div>                   
                    </div> 
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div class="">
                            <div class="flex items-center space-x-2">
                            <div class="px-4 py-2 text-dark-blue rounded-full md:py-1 bg-lightest-blue">
                                05
                            </div>
                            <h3 class="text-base font-myriad md:mb-4 md:hidden">
                           Communications channels provided by the head office
                            </h3>
                            </div>
                        </div>
                        <div class="text-left">
                            <h3 class='hidden mb-4 text-lg font-myriad md:block'>
                           Communications channels provided by the head office
                            </h3>
                        </div>                   
                    </div> 
                    <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                        {/* Heading */}
                        <div class="">
                            <div class="flex items-center space-x-2">
                            <div class="px-4 py-2 text-dark-blue rounded-full md:py-1 bg-lightest-blue">
                                07
                            </div>
                            <h3 class="text-base font-myriad md:mb-4 md:hidden">
                           Brand expansion
                            </h3>
                            </div>
                        </div>
                        <div class="text-left">
                            <h3 class='hidden mb-4 text-lg font-myriad md:block'>
                           Brand expansion
                            </h3>
                        </div>                   
                    </div> 
                </div>
            </div>
            <div class="container flex flex-col px mx-auto mt-6 space-y-12 md:space-y-0 md:flex-row">
                <div class="flex flex-col space-y-10 md:space-y-5 md:mt-10 md:w-1/2">
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

            <div class="lg:mx-10 relative overflow-x-auto">
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
        <h5 class="pt-4 font-bold text-center font-myfrida text-light-blue text-3xl">
            HOW TO JOIN AS A RETAILER
        </h5>
        <p class="text-gray pt-4 text-left md:mx-11 md:text-xl font-myriad">
        The retailer position will be initially open to members of Candid Conversations. The products or services on sale have to be strictly Kenyan sourced and made. 
        </p>
        <p class="text-gray pt-4 text-left md:mx-11 md:text-xl font-myriad">
        The benefit of signing up as a retailer include, but are not limited to:
        </p>
        <br></br>
        <div class="flex flex-col space-y-6 ml-6 md:w-3/4">
            {/* list Item 1 */}
            <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
                <div class="rounded-l-full ">
                    <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                        <p class="text-gray text-myriad font-bold text-dark-blue">
                        Opportunity to have their products/services showcased on the official website for members to purchase.
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
                        <p class="text-gray text-myriad font-bold text-dark-blue">
                        An opportunity to have a display/exhibition table during one event in their region
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
                        <p class="text-gray text-myriad font-bold text-dark-blue">
                        Inclusion into the Kayana Verified list of vendors and a feature on the Kenya Cottage Industry Website
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
                        <p class="text-gray text-myriad font-bold text-dark-blue">
                        Posts of their products or services on the official Candid conversations social media pages
                        </p>
                    </div>
                </div>                
            </div>
        </div>
        <h5 class="pt-4 font-bold text-center font-myfrida text-light-blue text-3xl">
            HOW TO JOIN AS A SPONSOR
        </h5>
        <p class="text-gray pt-4 text-left md:mx-11 md:text-xl font-myriad">
        Through sponsorship or partnership with Candid Conversations, a company or individual has an opportunity to market or expand their customer base via the extensive membership reach. 
        </p>
        <p class="text-gray pt-4 text-left md:mx-11 md:text-xl font-myriad">
        This will give your organization the opportunity to work with other organizations that are working to improve the lively hoods and working environments of women in their area of operation
        </p>
        <p class="text-gray pt-4 text-left md:mx-11 md:text-xl font-myriad">
        As a sponsor the benefits include, but are not limited to: 
        </p>
        <br></br>
        <div class="flex flex-col space-y-6 ml-6 md:w-3/4">
            {/* list Item 1 */}
            <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
                <div class="rounded-l-full ">
                    <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                        <p class="text-gray text-myriad font-bold text-dark-blue">
                        Placement of your logo on all Candid Conversations’ branded materials
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
                        <p class="text-gray text-myriad font-bold text-dark-blue">
                        The option to place an advert or article in the Kayana Create magazine, Kayana News and the Candid newsletter.
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
                        <p class="text-gray text-myriad font-bold text-dark-blue">
                        A speaking slot at one event, in the region of your choice
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
                        <p class="text-gray text-myriad font-bold text-dark-blue">
                        Opportunity to showcase your products/service on the display screens during the event
                        </p>
                    </div>
                </div>                
            </div>
             {/* list Item 5 */}
             <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
                <div class="rounded-l-full ">
                    <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                        <p class="text-gray text-myriad font-bold text-dark-blue">
                        Display/exhibition table at the event networking space for you to interact with the attendees of the event during the networking sessions.
                        </p>
                    </div>
                </div>                
            </div>
             {/* list Item 6 */}
             <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
                <div class="rounded-l-full ">
                    <div class="flex items-center space-x-2">
                        <img src={img2} class="h-6 w-6 lg:h-8 lg:w-8 ml-2"/>
                        <p class="text-gray text-myriad font-bold text-dark-blue">
                        Placement of logo or advert on the candid website sponsor’s panel
                        </p>
                    </div>
                </div>                
            </div>
        </div>


    </div>
  )
}

export default Sponsor