import React from 'react'
import bio from '../media/meru-speakers/bio1.jpeg'
import bio2 from '../media/meru-speakers/bio2.jpeg'
import bio3 from '../media/meru-speakers/bio3.jpeg'
import bio4 from '../media/meru-speakers/bio4.jpeg'
import bio5 from '../media/meru-speakers/bio5.jpeg'
import pot1 from '../media/kiambu/1.JPG'
import pot2 from '../media/kiambu/121.JPG'
import pot3 from '../media/kiambu/40.JPG'
import pot4 from '../media/kiambu/5.JPG'
import pot5 from '../media/kiambu/41.JPG'
import pot6 from '../media/kiambu/13.JPG'
import pot7 from '../media/kiambu/14.JPG'
import pot8 from '../media/kiambu/20.JPG'
import pot9 from '../media/kiambu/23.JPG'
import pot10 from '../media/kiambu/60.JPG'
import pot11 from '../media/kiambu/98.JPG'
import pot12 from '../media/kiambu/103.JPG'


const Kiambu = () => {
  return (
    <div>
        <section>
            <section class="bg-center bg-no-repeat bg-[url('/home/stella/Documents/projects/Candid/candid-v2/candid-v2/src/media/kiambu/40.JPG')] bg-gray-400 bg-blend-multiply bg-cover">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-indigo font-myfrida md:text-5xl lg:text-7xl">Candid kiambu 2023</h1>
                    
                </div>
            </section>       
        </section>
        <h4 class="pt-4 font-bold text-center font-myfrida text-dark-blue text-3xl md:text-5xl mt-6 md:my-6">ABOUT THE EVENT</h4>
        <div className='grid grid-cols-1 mx-10 md:grid-cols-2'>
            <div className=''>     
                <div class="flex flex-col justify-center space-y-4">
                    <h6 class="font-myfrida text-dark-blue font-bold text-2xl">Session objective</h6>
                    <p class="text-left font-myriad text-xl">
                        To maximize community cohesion, promote networking, and celebrate the local business landscape in Kiambu.
                    </p>
                </div>
            </div>
            <div className='mx-10 space-y-4'>
                <p class="text-left font-myriad text-xl">
                In September, we had Candid Conversations in Kiambu County. The event delved into the crucial theme of Empowering Women Agripreneurs through Access to Funding. 
                The event aimed to illuminate the untapped potential of women in agribusiness, explore strategies for accelerating their success, and inspire positive change within the industry. Focused on fostering meaningful conversations, the gathering highlighted the importance of access to funding and contributed to the ongoing dialogue on empowering women in this critical sector.
                </p>
            </div>
        </div>
    <h5 class="pt-4 font-bold text-center font-myfrida text-dark-blue text-3xl md:text-5xl mt-6 md:my-6">
        HIGHLIGHTS
    </h5>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 m-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot1} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot2} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot3} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot4} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot5} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot6} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot7} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot8} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot9} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot10} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot12} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={pot11} alt=""/>
        </div>
    </div>


  </div>
  )
}

export default Kiambu