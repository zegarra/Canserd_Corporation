import React from "react";
import Servicios_Generales_Especializados_con_mas_de_15_años from "../lib/Imagenes en Inicio/Servicios_Generales_Especializados_con_mas_de_15_años.webp";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { SiSimilarweb } from "react-icons/si";
import {
  FaEnvelope as EmailIcon,
  FaFacebook as FacebookIcon,
  FaGlobe as GlobalIcon,
  FaInstagram as InstagramIcon,
  FaLinkedin as LinkedinIcon,
  FaPhone as PhoneIcon,
  FaWhatsapp as WhatsappIcon,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-primary lg:h-80 h-auto text-white lg:pt-[70px] md:pt-0 bg-[#2AA769]">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="-top-10 absolute flex items-center p-4 text-lg font-semibold w-[80%] bg-white shadow-2xl rounded-md text-[#2AA769] justify-around">
            <picture className="p-2 shadow-2xl rounded-md">
                <img className="w-40" src={ Servicios_Generales_Especializados_con_mas_de_15_años} alt="" />
            </picture>
            <span className="flex gap-2 items-center">
            <CgMail size={25}/>
            soporte@carserdcorp.com
            </span>
            <span className="flex gap-2 items-center">
            <FaPhoneAlt size={25}/>
            902 635 107    
            </span>
            <span className="flex gap-2 items-center">
            <SiSimilarweb size={25} />
            carserdcorporation.com
            </span>
        </div>
        <section aria-labelledby="privacy-section" className="flex flex-col space-y-3">
          <h2 id="privacy-section" className="text-xl font-semibold">Privacidad</h2>
          <ul className="space-y-2">
            <li>
              <a href="/privacy-policy" className="hover:text-gray-400 text-lg">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="/terms-conditions" className="hover:text-gray-400 text-lg">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href="/carreras" className="hover:text-gray-400 text-lg">
                Libro de reclamaciones
              </a>
            </li>
          </ul>
        </section>

        {/* Sección Te Ofrecemos */}
        <section aria-labelledby="services-section" className="flex flex-col space-y-3">
          <h2 id="services-section" className="text-xl font-semibold">Te ofrecemos</h2>
          <ul className="space-y-2">
            <li>
              <a href="/politicas-privacidad" className="hover:text-gray-400 text-lg">
                Servicios
              </a>
            </li>
            <li>
              <a href="/terminos-condiciones" className="hover:text-gray-400 text-lg">
                Productos
              </a>
            </li>
            <li>
              <a href="/contactenos" className="hover:text-gray-400 text-lg">
                Proyectos
              </a>
            </li>
          </ul>
        </section>

        {/* Sección Quiénes Somos */}
        <section aria-labelledby="about-us-section" className="flex flex-col space-y-3">
          <h2 id="about-us-section" className="text-xl font-semibold">Quiénes somos</h2>
          <ul className="space-y-2">
            <li>
              <a href="/politicas-privacidad" className="hover:text-gray-400 text-lg">
                Misión
              </a>
            </li>
            <li>
              <a href="/terminos-condiciones" className="hover:text-gray-400 text-lg">
                Visión
              </a>
            </li>
          </ul>
        </section>

        {/* Sección Contáctanos */}
        <section aria-labelledby="contact-section" className="flex flex-col space-y-3">
          <h2 id="contact-section" className="text-xl font-semibold">Contáctanos</h2>
          <ul className="space-y-2">
            <li className="flex flex-row gap-4">
              <LinkedinIcon className="hover:text-gray-400" />
              <InstagramIcon className="hover:text-gray-400" />
              <FacebookIcon className="hover:text-gray-400" />
              <WhatsappIcon className="hover:text-gray-400" />
            </li>
            <li className="flex flex-row items-center gap-2">
              <EmailIcon />
              <a href="mailto:soporte@carserdcorp.com" className="hover:text-gray-400 text-base">
                ventas@carserdcorp.com
              </a>
            </li>
            <li className="flex flex-row items-center gap-2">
              <PhoneIcon />
              <a href="tel:902635107" className="hover:text-gray-400 text-base">
                902 635 107
              </a>
            </li>
            <li className="flex flex-row items-center gap-2">
              <GlobalIcon />
              <a
                href="https://carserdcorporation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 text-base"
              >
                carserdcorporation.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
