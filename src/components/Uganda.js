import React from 'react'
import pot1 from '../media/kampala/53147798189_2a0047d390_c.jpg'
import pot2 from '../media/kampala/53148010670_3f64234747_c.jpg'
import pot3 from '../media/kampala/53147571536_07158e6ef3_c.jpg'
import pot4 from '../media/kampala/53147590741_320070f0ee_k.jpg'
import land1 from '../media/kampala/53147016967_3fb1f6bf80_c.jpg'
import land3 from '../media/kampala/53147591426_99a71d1f8c_c.jpg'
import land4 from '../media/kampala/53147804444_76ccb9e2fe_c.jpg'
import land5 from '../media/kampala/53148004435_f7bb34dc0e_c.jpg'
import land6 from '../media/kampala/53148094953_de7c2e983f_c.jpg'
import land7 from '../media/kampala/53148075113_c4274bc1ba_c.jpg'
import land8 from '../media/kampala/53147584631_c923d824d0_c.jpg'
import land9 from '../media/kampala/53147786049_baa961de88_c.jpg'

const Uganda = () => {
  return (
    <div>
       <section >
            <section class="bg-center bg-no-repeat bg-[url('/home/stella/Documents/projects/Candid/candid-v2/candid-v2/src/media/kampala/53148004435_f7bb34dc0e_c.jpg')] bg-gray-400 bg-blend-multiply bg-cover">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-indigo font-myfrida md:text-5xl lg:text-7xl">Candid kampala 2023</h1>
                    
                </div>
            </section>       
        </section> 
        <h5 class="pt-4 font-bold text-center font-myfrida text-dark-blue text-3xl md:text-5xl mt-6 md:my-6">
            HIGHLIGHTS
        </h5>
      <div class="grid mt-6 m-4 grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
          <div>
              <img class="h-auto max-w-full rounded-lg" src={land1} alt=""/>
          </div>
          <div>
              <img class="h-auto max-w-full rounded-lg" src={pot1} alt=""></img>
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

export default Uganda;


