import React from 'react'
import img1 from '../media/events/intent.jpeg'
import img2 from '../media/events/money.jpeg'
import img3 from '../media/events/opp.jpeg'
import img4 from '../media/events/single.jpeg'
import img5 from '../media/events/social.jpeg'
import img6 from '../media/events/tech.jpeg'

const About = () => {
  return (
    <>
    <h5 class="pt-4 font-bold text-center font-myfrida text-light-blue text-2xl">
        WHY SHOULD YOU JOIN US?
    </h5>
    <div class="container flex flex-col justify-center px-4 mx-auto mt-5 space-y-8 lg:space-y-0 lg:flex-row">     
        <div class="flex flex-col p-6 bg-lightest-blue rounded-lg lg:w-1/3 lg:mr-2">
            <a href="#">
                <h5 class="mb-2 text-xl font-bold text-myriad text-center text-dark-blue">WE ARE A TRUSTING COMMUNITY</h5>
            </a>
            <p class="mb-1 font-normal text-center text-myriad text-dark-blue ">Exists to create a trusting environment for Women to learn from each other, in an authentic way.</p>
        </div>

        <div class="flex flex-col p-6 bg-lightest-blue rounded-lg lg:w-1/3 lg:mr-2">
            <a href="#">
                <h5 class="mb-2 text-xl font-bold text-myriad text-center text-dark-blue">WE LISTEN</h5>
            </a>
            <p class="mb-1 font-normal text-center text-myriad text-dark-blue ">Our unique event format ensures that every woman’s voice in the room is heard.</p>
        </div>

        <div class="flex flex-col p-6 bg-lightest-blue rounded-lg lg:w-1/3 lg:mr-2">
            <a href="#">
                <h5 class="mb-2 text-xl font-bold text-myriad text-center text-dark-blue">WE SUPPORT</h5>
            </a>
            <p class="mb-1 font-normal text-center text-myriad text-dark-blue ">After every event women should leave feeling heard, with hope, equipped with immediate action plans and where possible a set of new friends.</p>
        </div>
    </div>
    <h5 class="pt-4 font-bold text-center font-myfrida text-light-blue text-2xl">
        WHICH ARE SOME OF OUR PAST EVENTS?
    </h5>
    <div class="container flex flex-col justify-center px-4 mx-auto mt-5 space-y-8 lg:space-y-0 lg:flex-row">     
        <div class="flex flex-col rounded-lg lg:mr-2">
            <img src={img1} alt="event-1" />
        </div>
        <div class="flex flex-col rounded-lg lg:mr-2">
            <img src={img2} alt="event-2" />
        </div>
        <div class="flex flex-col rounded-lg lg:mr-2">
            <img src={img3} alt="event-3" />
        </div>
        <div class="flex flex-col rounded-lg lg:mr-2">
            <img src={img4} alt="event-4" />
        </div>
        <div class="flex flex-col rounded-lg lg:mr-2">
            <img src={img5} alt="event-5" />
        </div>
        <div class="flex flex-col rounded-lg lg:mr-2">
            <img src={img6} alt="event-6" />
        </div>
    </div> 
    </>
  )
}

export default About