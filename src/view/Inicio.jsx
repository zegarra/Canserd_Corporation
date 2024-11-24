import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import CARSERDCORPORATIONsECCIONS from "../lib/Imagenes en Inicio/CARSERDCORPORATIONsECCIONS.webp";
import NuestrosProyectosImg1 from '../lib/Imagenes en Inicio/NuestrosProyectosImg1.webp';
import NuestrosProyectosImg2 from '../lib/Imagenes en Inicio/NuestrosProyectosImg2.webp';
import NuestrosProyectosImg3 from '../lib/Imagenes en Inicio/NuestrosProyectosImg3.webp';
import NuestrosProyectosImg4 from '../lib/Imagenes en Inicio/NuestrosProyectosImg4.webp';
import NuestrosProyectosImg5 from '../lib/Imagenes en Inicio/NuestrosProyectosImg5.webp';
import NuestrosProyectosImg6 from '../lib/Imagenes en Inicio/NuestrosProyectosImg6.webp';
import NuestrosProyectosImg7 from '../lib/Imagenes en Inicio/NuestrosProyectosImg7.webp';
function Inicio() {
  const numeroProyector = [
    {
      id: 1,
      numero: 70,
      texto: "Pintura",
    },
    {
      id: 2,
      numero: 54,
      texto: "Gasfitería",
    },
    {
      id: 3,
      numero: 35,
      texto: "Drywall",
    },
    {
      id: 4,
      numero: 48,
      texto: "Carpinteria",
    },
  ];
  const ImgServicios=[
    {
        id:1,
        img:NuestrosProyectosImg1
    },
    {
        id:2,
        img:NuestrosProyectosImg2
    },
    {
        id:3,
        img:NuestrosProyectosImg3
    },
    {
        id:4,
        img:NuestrosProyectosImg4
    },{
        id:5,
        img:NuestrosProyectosImg5
    },
    {
        id:6,
        img:NuestrosProyectosImg6
    },
    {
        id:7,
        img:NuestrosProyectosImg7
    }
  ]
  return (
    <main>
      <section>
        <div className="relative">
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl lg:text-6xl md:text-4xl  font-bold">
            NUESTROS PROYECTOS
          </h2>
          <img
            src={CARSERDCORPORATIONsECCIONS}
            className="w-[100vw] h-auto"
            alt=""
          />
        </div>
      </section>
      <section className="grid sm:grid-cols-4 grid-cols-2 gap-4 w-[90vw] mx-auto mt-10 py-10 shadow-lg">
  {numeroProyector.map((proyecto) => (
    <motion.div
      key={proyecto.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center"
    >
      <div className="flex flex-col items-center lg:text-4xl text-3xl font-bold text-[#2AA769] text-center">
        <h3>+ {proyecto.numero}</h3>
        <h4 className="lg:text-xl text-lg font-bold">{proyecto.texto}</h4>
      </div>
    </motion.div>
  ))}
</section>

<section className="w-[90vw] mx-auto my-20 ">
<Swiper
  modules={[Autoplay]}
  spaceBetween={10}
  slidesPerView={4}
  loop={true}
  speed={1000}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  className="mb-10"
>
  {ImgServicios.map((servicio) => (
    <SwiperSlide key={servicio.id} className=" min-h-[25vh] flex items-center justify-center">
      <img
        src={servicio.img}
        alt={`Proyecto ${servicio.id}`}
        className="w-full min-h-[25vh] max-h-[25vh] object-cover object-center rounded-md"
      />
    </SwiperSlide>
  ))}
</Swiper>
<Swiper
  modules={[Autoplay]}
  spaceBetween={10}
  slidesPerView={4}
  loop={true}
  speed={1000}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: true, // Dirección inversa
  }}
>
  {ImgServicios.map((servicio) => (
    <SwiperSlide key={servicio.id} className="min-h-[25vh] flex items-center justify-center">
      <img
        src={servicio.img}
        alt={`Proyecto ${servicio.id}`}
        className="w-full min-h-[25vh] max-h-[25vh] object-cover object-center rounded-md"
      />
    </SwiperSlide>
  ))}
</Swiper>

</section>
<section>
        <div className="relative">
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl lg:text-6xl md:text-4xl  font-bold">
            NUESTROS SERVICIOS
          </h2>
          <img
            src={CARSERDCORPORATIONsECCIONS}
            className="w-[100vw] h-auto"
            alt=""
          />
        </div>
      </section>
    </main>
  );
}

export default Inicio;
