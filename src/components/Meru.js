import React from 'react'
import bio from '../media/meru-speakers/bio1.jpeg'
import bio2 from '../media/meru-speakers/bio2.jpeg'
import bio3 from '../media/meru-speakers/bio3.jpeg'
import bio4 from '../media/meru-speakers/bio4.jpeg'
import bio5 from '../media/meru-speakers/bio5.jpeg'
import pot1 from '../media/meru/Candid Conversations IMG_3550.jpg'
import pot2 from '../media/meru/Candid Conversations IMG_3565.jpg'
import pot3 from '../media/meru/Candid Conversations IMG_3590.jpg'
import pot4 from '../media/meru/Candid Conversations IMG_3599.jpg'
import land1 from '../media/meru/Candid Conversations IMG_3558.jpg'
import land3 from '../media/meru/Candid Conversations IMG_3612.jpg'
import land4 from '../media/meru/Candid Conversations IMG_3842.jpg'
import land5 from '../media/meru/Candid Conversations IMG_3897.jpg'
import land6 from '../media/meru/Candid Conversations IMG_3941.jpg'
import land7 from '../media/meru/Candid Conversations IMG_4003.jpg'
import land9 from '../media/meru/Candid Conversations IMG_4072.jpg'


const Meru = () => {
  return (
    <div>
        <section>
            <section class="bg-center bg-no-repeat bg-[url('/home/stella/Documents/projects/Candid/candid-v2/candid-v2/src/media/meru/img2.jpg')] bg-gray-400 bg-blend-multiply bg-cover">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-indigo font-myfrida md:text-5xl lg:text-7xl">Candid Meru 2023</h1>
                    
                </div>
            </section>       
        </section>
        <h4 class="pt-4 font-bold text-center font-myfrida text-dark-blue text-3xl md:text-5xl mt-6 md:my-6">ABOUT THE EVENT</h4>
        <div className='grid grid-cols-1 mx-10 md:grid-cols-2'>
            <div className='ml-20'>     
                <div class="flex flex-col justify-center space-y-4">
                    <h6 class="font-myfrida text-dark-blue font-bold text-2xl">Session objective</h6>
                    <p class="text-left font-myriad text-xl">
                        To maximize community cohesion, promote networking, and celebrate the local business landscape in Meru.
                    </p>
                </div>

                <div class="flex justify-center mt-6 md:justify-start">
                    <a href='https://bit.ly/CandidMeru' class="p-2 px-6 pt-2 font-myfrida  bg-light-blue rounded-full baseline hover:bg-light-blue">
                        REGISTER NOW
                    </a>
                </div>
            </div>
            <div className='mx-10 space-y-4'>
                <p class="text-left font-myriad text-xl">
                This debut cocktail event at Meru will focus on providing a platform for women from Meru to share their unconventional paths to success through an evening of moderated conversation and intimate breakout sessions.
                </p>
                <p class="text-left font-myriad text-xl">
                    We’ll be learning from our panelists’ personal stories as we explore both business and career  opportunities that could accelerate your current growth. This will be done through introspection and group reflection in the breakout sessions.
                </p>
            </div>
        </div>
        <h5 class="pt-4 font-bold text-center font-myfrida text-dark-blue text-3xl md:text-5xl mt-6 md:my-6">
            HIGHLIGHTS
        </h5>
        <div class="grid mt-6 m-4 grid-cols-2 md:grid-cols-4 gap-4">
            <div class="grid gap-4">
            <div>
                <img class="h-auto max-w-full rounded-lg" src={pot1} alt=""/>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={land1} alt=""></img>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={land9} alt=""></img>
            </div>
            </div>
            <div class="grid gap-4">
            <div>
                <img class="h-auto max-w-full rounded-lg" src={land7} alt=""></img>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={pot2} alt=""></img>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={land3} alt=""></img>
            </div>
            </div>
            <div class="grid gap-4">
            <div>
                <img class="h-auto max-w-full rounded-lg" src={pot3} alt=""></img>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={land4} alt=""></img>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-lg" src={land5} alt=""></img>
            </div>
            </div>
            <div class="grid gap-4">
                <div>
                <img class="h-auto max-w-full rounded-lg" src={land7} alt=""></img>
                </div>
                <div>
                <img class="h-auto max-w-full rounded-lg" src={pot4} alt=""></img>
                </div>
                <div>
                <img class="h-auto max-w-full rounded-lg" src={land7} alt=""></img>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Meru