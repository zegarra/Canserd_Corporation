import React from 'react';
import Fondo from '../lib/Imgenes Contactanos/FondoContactanos.png';
import Email from './EnvioDeEmail/Email';
import { CiClock1 } from "react-icons/ci";

import { LuMapPin } from "react-icons/lu";
import Map from './EnvioDeEmail/Map';
function Contactenos() {
  return (
    <main>
      <section
        style={{
          backgroundImage: `url(${Fondo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          height: 'auto',
          width: 'auto',
        }}
        className='relative '
      >
       <div className='-z-10 bg-black opacity-10 absolute inset-0 h-[100vh] w-full'></div>
       <div className=' z-10 w-[90vw] mx-auto text-center text-white py-20 gap-5 flex flex-col'>
        <h1 className='font-bold text-3xl md:text-5xl'>¿TIENES UNA EMERGENCIA?</h1>
        <p className='font-semibold text-xl md:text-3xl'>¡Contáctate ahora mismo con nosotros!</p>
        <div className='mx-auto w-full flex justify-center'>
                  <Email/>
        </div>
        <div className='w-full sm:w-[800px] mt-10 text-[#2AA769] sm:flex mx-auto grid justify-center text-lg bg-white rounded-md gap-10 py-4'>
          <span className='flex gap-2 items-center font-medium'><LuMapPin size={26}/>Ca. San Martín 595, Miraflores 15074</span>
          <span className='flex gap-2 items-center font-medium'><CiClock1  size={26}/>De  8:00 am  a  10:00 am</span>
        </div>
       </div>
      </section>
      <Map/>
    </main>
  );
}

export default Contactenos;
