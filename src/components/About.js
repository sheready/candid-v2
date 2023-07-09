import React from 'react'

const About = () => {
  return (
    <>
    <h5 class="pt-4 font-bold text-center font-myfrida text-light-blue text-xl">
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

    
    
    </>
  )
}

export default About