import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import CARSERDCORPORATIONsECCIONS from "../lib/Imagenes en Inicio/CARSERDCORPORATIONsECCIONS.webp";
import NuestrosProyectosImg1 from "../lib/Imagenes en Inicio/NuestrosProyectosImg1.webp";
import NuestrosProyectosImg2 from "../lib/Imagenes en Inicio/NuestrosProyectosImg2.webp";
import NuestrosProyectosImg3 from "../lib/Imagenes en Inicio/NuestrosProyectosImg3.webp";
import NuestrosProyectosImg4 from "../lib/Imagenes en Inicio/NuestrosProyectosImg4.webp";
import NuestrosProyectosImg5 from "../lib/Imagenes en Inicio/NuestrosProyectosImg5.webp";
import NuestrosProyectosImg6 from "../lib/Imagenes en Inicio/NuestrosProyectosImg6.webp";
import NuestrosProyectosImg7 from "../lib/Imagenes en Inicio/NuestrosProyectosImg7.webp";
import { IoIosArrowDroprightCircle } from "react-icons/io";
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
  const ImgServicios = [
    {
      id: 1,
      img: NuestrosProyectosImg1,
    },
    {
      id: 2,
      img: NuestrosProyectosImg2,
    },
    {
      id: 3,
      img: NuestrosProyectosImg3,
    },
    {
      id: 4,
      img: NuestrosProyectosImg4,
    },
    {
      id: 5,
      img: NuestrosProyectosImg5,
    },
    {
      id: 6,
      img: NuestrosProyectosImg6,
    },
    {
      id: 7,
      img: NuestrosProyectosImg7,
    },
  ];
  const servicios = [
    {
      id: 1,
      img: NuestrosProyectosImg1,
      title: "Servicio de gasfiteria",
      parrafo:
        "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
      url: "/Gasfiteria",
    },
    {
      id: 2,
      img: NuestrosProyectosImg1,
      title: "Trabajo sanitario",
      parrafo:
        "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
      url: "/Gasfiteria",
    },
    {
      id: 3,
      img: NuestrosProyectosImg1,
      title: "Puertas enrollables",
      parrafo:
        "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
      url: "/Gasfiteria",
    },
    {
      id: 4,
      img: NuestrosProyectosImg1,
      title: "Trabajos de obras civiles",
      parrafo:
        "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
      url: "/Gasfiteria",
    },
    {
      id: 5,
      img: NuestrosProyectosImg1,
      title: "Sistema constructivo en Drywall",
      parrafo:
        "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
      url: "/Gasfiteria",
    },
    {
      id: 6,
      img: NuestrosProyectosImg1,
      title: "Servicios de Carpintería",
      parrafo:
        "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
      url: "/Gasfiteria",
    },
    {
      id: 7,
      img: NuestrosProyectosImg1,
      title: "Estructuras metálicas",
      parrafo:
        "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
      url: "/Gasfiteria",
    },
    {
      id: 8,
      img: NuestrosProyectosImg1,
      title: "Instalaciones Eléctricas",
      parrafo:
        "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
      url: "/Gasfiteria",
    },
    {
      id: 9,
      img: NuestrosProyectosImg1,
      title: "Mantenimiento de Pozo Tierra",
      parrafo:
        "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
      url: "/Gasfiteria",
    },
    {
      id: 10,
      img: NuestrosProyectosImg1,
      title: "Mantenimiento de Vidrios",
      parrafo:
        "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
      url: "/Gasfiteria",
    },
    {
      id: 11,
      img: NuestrosProyectosImg1,
      title: "Trabajo de Pintura",
      parrafo:
        "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
      url: "/Gasfiteria",
    },
    {
      id: 12,
      img: NuestrosProyectosImg1,
      title: "Muebles Metálicos",
      parrafo:
        "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
      url: "/Gasfiteria",
    },
    {
      id: 13,
      img: NuestrosProyectosImg1,
      title: "Puertas de Emergencia",
      parrafo:
        "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
      url: "/Gasfiteria",
    },
  ];
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
            <SwiperSlide
              key={servicio.id}
              className=" min-h-[25vh] flex items-center justify-center"
            >
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
            <SwiperSlide
              key={servicio.id}
              className="min-h-[25vh] flex items-center justify-center"
            >
              <img
                src={servicio.img}
                alt={`Proyecto ${servicio.id}`}
                className="w-full min-h-[25vh] max-h-[25vh] object-cover object-center rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="py-10">
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
      <section className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[90vw] mx-auto gap-5 py-10">
        {servicios.map((servicio) => (
          <div
            key={servicio.id}
            className="flex flex-col items-start w-full text-[#2AA769]  rounded-lg p-4 shadow-lg"
          >
            <img
              src={servicio.img}
              alt={`Servicio ${servicio.id}`}
              className="w-full h-[300px] object-cover object-center rounded-md"
            />
            <h3 className="text-xl font-bold mt-5">{servicio.title}</h3>
            <p className="text-base text-zinc-400 line-clamp-2">
              {servicio.parrafo}
            </p>

            <div className="flex justify-end w-full items-center cursor-pointer gap-2 mt-2">
                Más informacion
              <IoIosArrowDroprightCircle
                size={30}
                className=" cursor-pointer hover:translate-x-2 transition-all duration-200"
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Inicio;
