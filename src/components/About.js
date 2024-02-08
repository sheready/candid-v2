import React from 'react'
import img1 from '../media/events/intent.jpeg'
import img2 from '../media/events/money.jpeg'
import img3 from '../media/events/opp.jpeg'
import img4 from '../media/events/single.jpeg'
import img5 from '../media/events/social.jpeg'
import img6 from '../media/events/tech.jpeg'

const About = () => {
  return (
    <div className='my-3 py-24 bg-lightest-blue'>
        <h5 class="font-bold text-center font-myriad text-dark-blue text-2xl md:text-4xl">
        CORE VALUES
        </h5>
        <div class="container flex flex-col justify-center px-4 mx-auto mt-5 space-y-8 lg:space-y-0 lg:flex-row">     
            <div class="flex flex-col p-6 border border-lightest-blue rounded-lg lg:w-1/3 lg:mr-2">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-myfrida  text-dark-blue">WE ARE A TRUSTING COMMUNITY</h5>
                </a>
                <p class="mb-1 text-xl text-left text-myriad ">Exists to create a trusting environment for Women to learn from each other, in an authentic way.</p>
            </div>

            <div class="flex flex-col p-6 border border-lightest-blue rounded-lg lg:w-1/3 lg:mr-2">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-myfrida  text-dark-blue">WE LISTEN</h5>
                </a>
                <p class="mb-1 text-xl text-left text-myriad ">Our unique event format ensures that every woman’s voice in the room is heard.</p>
            </div>

            <div class="flex flex-col p-6 border border-lightest-blue rounded-lg lg:w-1/3 lg:mr-2">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-myfrida  text-dark-blue">WE SUPPORT</h5>
                </a>
                <p class="mb-1 text-xl text-left text-myriad ">After every event women leave feeling heard, hopeful, equipped with immediate action plans and new important networks.</p>
            </div>
        </div>
    </div>
  )
}

export default About