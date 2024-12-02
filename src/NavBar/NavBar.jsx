import React from "react";
import Servicios_Generales_Especializados_con_mas_de_15_años from "../lib/Imagenes en Inicio/Servicios_Generales_Especializados_con_mas_de_15_años.webp";
import { Link, useNavigate } from "react-router-dom";
import { Accordionpc } from "./Accordionpc";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
function NavBar() {
const navigate=useNavigate()
  const NavBarMenu = [

    {
      id: 1,
      titulo: "SERVICIOS",
      submenu: [
        {
          titulo: "Trabajo de estructura métalicas",
          Link: "/mantenimientoPreventivo",
        },
        {
          titulo: "Gasfitería",
          Link: "/mantenimientoCorrectivo",
        },
        {
          titulo: "Revestimiento",
          Link: "/reparacionMotores",
        },
        { titulo: "Colocación e instalcaion de aberturas", Link: "/planchadoPintura" },
      ],
    },
        {
      id: 2,
      titulo: "Proyectos",
      Link: "/Proyectos",
    },
    {
      id: 3,
      titulo: "PRODUCTOS",
      Link: "/Productos",
    },
    {
      id: 4,
      titulo: "Quiénes somos",
      Link: "/Quienessomos",
    },
    {
      id: 5,
      titulo: "contáctenos",
      Link: "/Contactenos",
    },
  ];
  const redes = [
    {
      id: 1,
      nombre: "Facebook",
      icono: <FaFacebook className="text-[#2AA769]" size={24} />,
    },
    {
      id: 2,
      nombre: "LinkedIn",
      icono: <FaLinkedin className="text-[#2AA769]" size={24} />,
    },
    {
      id: 3,
      nombre: "Whatsapp",
      icono: <FaWhatsapp className="text-[#2AA769]" size={24} />,
    },
  ];
  return (
    <nav className="grid">
      <div className="bg-[#738585] py-4">
        <div className="w-[90vw] mx-auto">
          <span className=" text-white">
            Servicios Generales Especializados con mas de 15 años{" "}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center w-[90vw] mx-auto">
        <img
          className="w-64"
          onClick={()=>navigate('/')}
          src={Servicios_Generales_Especializados_con_mas_de_15_años}
          alt="Servicios Generales Especializados con mas de 15 años"
        />
        <ul className="hidden gap-4 lg:flex">
          {NavBarMenu.map((menu) => (
            <li
              key={menu.id}
              className="font-poppins uppercase z-50 font-medium text-base text-gray-950 focus:text-white hover:text-[#2AA769] active:text-white transition-all duration-200 hover:shadow-[0_3px_0_-1px_#ffffff] px-2"
            >
              {menu.submenu ? (
                <Accordionpc title={menu.titulo}>
                  <ul className="pl-4">
                    {menu.submenu.map((sub, idx) => (
                      <li
                        key={idx}
                        className="cursor-pointer text-nowrap text-black hover:text-[#2AA769] transition-all duration-200 text-base py-1"
                      >
                        <Link to={sub.Link}>{sub.titulo}</Link>
                      </li>
                    ))}
                  </ul>
                </Accordionpc>
              ) : (
                <Link to={menu.Link}>{menu.titulo}</Link>
              )}
            </li>
          ))}
        </ul>
        <ul className="flex">
      {redes.map((res) => (
        <li key={res.id} title={res.nombre} className="cursor-pointer scale-100 hover:scale-105 transition-all duration-200 p-2">
          {res.icono}
        </li>
      ))}
    </ul>
      </div>
    </nav>
  );
}

export default NavBar;
