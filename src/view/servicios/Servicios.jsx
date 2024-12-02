import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../index.css";
import imgDescuento from "../../lib/Imagenes de Servicios/serviciosDescuento.webp";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import CARSERDCORPORATIONsECCIONS from "../../lib/Imagenes en Inicio/CARSERDCORPORATIONsECCIONS.webp";
function Servicios() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const location = useLocation();
  const servicio = location.state?.servicio; // Recupera el contenido pasado en el estado

  return (
    <main>
      <section className="overflow-x-hidden ">
        <div className="relative">
          <h1 className="w-[90vw] mx-auto absolute inset-0 flex items-center justify-center text-white  lg:text-6xl text-4xl text-center  font-bold">
            {servicio.title}
          </h1>
          <img
            src={CARSERDCORPORATIONsECCIONS}
            className="max-w-[100vw] min-w-[1300px] min-h-[20vh] h-auto"
            alt=""
          />
        </div>
      </section>
      <section className="overflow-x-hidden lg:container max-w-[90vw] py-10 md:py-20 grid lg:grid-cols-2 col-span-1 gap-10 mx-auto">
        <div className=" ">
          <h2 className="text-3xl font-bold text-start  mb-5">
            {servicio.contenido.seccion1.text}
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-10 md:mb-20">
            {servicio.contenido.seccion1.parrafo}
          </p>
          <h2 className="text-3xl font-bold text-start my-5 md:my-10">
            Nuestros principales servicios incluyen
          </h2>
          <div className="grid gap-8 md:gap-10">
            {servicio.contenido.seccion2.map((servicio) => (
              <div key={servicio.id} className="col-span-2 sm:col-span-1">
                <h3 className="text-xl font-bold md:h-14 h-auto">
                  {servicio.title}
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  {servicio.parrafo}
                </p>
              </div>
            ))}
            <p className="col-span-2  text-xl">
              En Carserd, nos enfocamos en la seguridad, la calidad y el
              cumplimiento de plazos. Ya sea para proyectos comerciales o
              industriales, te ofrecemos un servicio especializado con un equipo
              certificado y con experiencia en todo tipo de estructuras.
            </p>
            <p className="text-[#2AA769] font-bold col-span-2 text-xl">
              ¡Contáctanos hoy mismo para una cotización personalizada y
              descubre cómo podemos hacer que tu proyecto sea un éxito!
            </p>
          </div>
        </div>
        <div className="lg:w-full xl:w-[600px] w-[90vw] md:gap-5 mx-auto rounded-md grid lg:grid-cols-1 grid-cols-1 md:grid-cols-2">
          <div>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 mb-5"
            >
              {servicio.contenido.seccion3.map((img) => (
                <SwiperSlide key={img.id}>
                  <img
                    className="h-[30vh] w-[600px] rounded-md "
                    src={img.img}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper "
            >
              {servicio.contenido.seccion3.map((img) => (
                <SwiperSlide key={img.id}>
                  <img
                    className="w-[80px] rounded-md max-h-[60px] cursor-pointer"
                    src={img.img}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <picture className="flex justify-center max-w-[600px] md:my-0 my-10">
              <img
                className="max-w-[400px] mx-auto w-full h-auto rounded-md"
                src={imgDescuento}
                alt=""
              />
            </picture>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 mx-auto">
               <button className="text-xl md:text-2xl font-bold btn-class flex gap-10 justify-center items-center text-white p-4 rounded-s-md rounded-tr-md rounded-br-2xl bg-[#2AA769] hover:bg-[#33be79] transition-all duration-200">
            Cotiza este
            <br />
            Servicio ya!
            <div>
              <MdKeyboardDoubleArrowDown size={35}/>
            </div>
          </button>
          </div>
       
        </div>
      </section>
    </main>
  );
}

export default Servicios;
