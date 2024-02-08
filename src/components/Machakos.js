import React from 'react'
import bio from '../media/meru-speakers/bio1.jpeg'
import bio2 from '../media/meru-speakers/bio2.jpeg'
import bio3 from '../media/meru-speakers/bio3.jpeg'
import bio4 from '../media/meru-speakers/bio4.jpeg'
import bio5 from '../media/meru-speakers/bio5.jpeg'
import pot1 from '../media/machakos/Candid Conversation IMG_9948.jpg'
import pot2 from '../media/machakos/Candid Conversation_ IMG_0123.jpg'
import pot3 from '../media/machakos/Candid Conversation IMG_9953.jpg'
import pot4 from '../media/machakos/Candid Conversation_ IMG_0066.jpg'
import pot5 from '../media/gallery/pot5.jpg'
import land1 from '../media/machakos/Candid Conversation IMG_9956.jpg'
import land2 from '../media/gallery/land2.jpg'
import land3 from '../media/machakos/Candid Conversation_ IMG_0132.jpg'
import land4 from '../media/machakos/Candid Conversation IMG_9974.jpg'
import land5 from '../media/machakos/Candid Conversation_ IMG_0007.jpg'
import land6 from '../media/machakos/Candid Conversation_ IMG_0096.jpg'
import land7 from '../media/machakos/Candid Conversation_ IMG_0098.jpg'
import land8 from '../media/machakos/Candid Conversation_ IMG_0081.jpg'
import land9 from '../media/machakos/Candid Conversation IMG_9970.jpg'

const Meru = () => {
  return (
    <div>
        <section>
            <section class="bg-center bg-no-repeat bg-[url('/home/stella/Documents/projects/Candid/candid-v2/candid-v2/src/media/machakos/img.jpg')] bg-gray-400 bg-blend-multiply bg-cover">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-indigo font-myfrida md:text-5xl lg:text-7xl">Candid Machakos 2023</h1>
                    
                </div>
            </section>       
        </section>
        <h4 class="pt-4 font-bold text-center font-myfrida text-dark-blue text-3xl md:text-5xl mt-6 md:my-6">ABOUT THE EVENT</h4>
        <div className='grid grid-cols-1 mx-10 md:grid-cols-2'>
            <div className=''>     
                <div class="flex flex-col justify-center space-y-4">
                    <h6 class="font-myfrida text-dark-blue font-bold text-2xl">Session objective</h6>
                    <p class="text-left font-myriad text-xl">
                        To maximize community cohesion, promote networking, and celebrate the local business landscape in Machakos.
                    </p>
                </div>

                <div class="flex justify-center mt-6 md:justify-start">
                    <a href='https://bit.ly/CandidMachakos' class="p-2 px-6 pt-2 font-myfrida  bg-light-blue rounded-full baseline hover:bg-light-blue">
                        REGISTER NOW
                    </a>
                </div>
            </div>
            <div className='mx-10 space-y-4'>
                <p class="text-left font-myriad text-xl">
                    This debut cocktail event at Machakos will focus on providing a platform for women from Machakos to share their unconventional paths to success through an evening of moderated conversation and intimate breakout sessions.
                </p>
                <p class="text-left font-myriad text-xl">
                    We’ll be learning from our panelists’ personal stories as we explore both business and career  opportunities that could accelerate your current growth. This will be done through introspection and group reflection in the breakout sessions.
                </p>
            </div>
        </div>
        <div class="container flex flex-col px-12 mx-auto mt-6 space-y-6  mb-4 md:space-x-2 md:space-y-0 md:flex-row">
            <div class="flex flex-col space-y-8 md:space-y-5 md:mt-10  md:w-3/4">
                
            </div>
            
        </div>
        {/* <div class="">
            <div class="flex justify-center pt-5">
                <h2 class="text-dark-blue font-bold font-myfrida text-2xl">EVENT SPEAKERS</h2>
            </div>
          
            <div class="flex flex-col container mx-auto  space-y-4 md:flex-row md:space-x-4 md:space-y-0  md:pb-4 ">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={bio5} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={bio} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={bio2} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={bio3} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={bio4} alt=""/>
                </div>
            </div>
        </div> */}
        <h5 class="pt-4 font-bold text-center font-myfrida text-dark-blue text-3xl md:text-5xl mt-6 md:my-6">
            HIGHLIGHTS
        </h5>
        <div class="grid mt-6 mx-4 grid-cols-2 md:grid-cols-4 gap-4 mb-4">
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
                <img class="h-auto max-w-full rounded-lg" src={land8} alt=""></img>
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
                <img class="h-auto max-w-full rounded-lg" src={land6} alt=""></img>
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