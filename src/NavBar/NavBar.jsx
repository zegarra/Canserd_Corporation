import React, { useState } from "react";
import Servicios_Generales_Especializados_con_mas_de_15_años from "../lib/Imagenes en Inicio/Servicios_Generales_Especializados_con_mas_de_15_años.webp";
import { Link, useNavigate } from "react-router-dom";
import { Accordionpc } from "./Accordionpc";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; // Importamos el ícono de hamburguesa

function NavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú

  const NavBarMenu = [
    {
      id: 1,
      titulo: "SERVICIOS",
      submenu: [
        {
          titulo: "Trabajo de estructura metálicas",
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
        {
          titulo: "Colocación e instalación de aberturas",
          Link: "/reparacionMotores",
        },
        {
          titulo: "Puertas de madera",
          Link: "/reparacionMotores",
        },
        {
          titulo: "Drywall",
          Link: "/reparacionMotores",
        },
        {
          titulo: "Trabajo de melamina",
          Link: "/reparacionMotores",
        },
        {
          titulo: "Trabajos de obras civiles",
          Link: "/reparacionMotores",
        },
        {
          titulo: "Trabajos sanitarios",
          Link: "/reparacionMotores",
        },
        {
          titulo: "Electricidad",
          Link: "/reparacionMotores",
        },
        {
          titulo: "Puertas enrollables",
          Link: "/reparacionMotores",
        },
        {
          titulo: "Carpinteria",
          Link: "/reparacionMotores",
        },
        {
          titulo: "Vidrios",
          Link: "/reparacionMotores",
        },
        { titulo: "Reparaciones de equipos de frio", 
          Link: "/planchadoPintura" 
        },
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
      icono: <FaFacebook className="text-[#2AA769]" />,
    },
    {
      id: 2,
      nombre: "LinkedIn",
      icono: <FaLinkedin className="text-[#2AA769]" />,
    },
    {
      id: 3,
      nombre: "Whatsapp",
      icono: <FaWhatsapp className="text-[#2AA769]" />,
    },
  ];

  return (
    <nav className="grid">
      <div className="bg-[#2AA769] py-4">
        <div className="w-[90vw] mx-auto">
          <span className="text-white">
            Servicios Generales Especializados con más de 15 años
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center w-[90vw] mx-auto">
        <img
          className="w-32 md:w-40 cursor-pointer"
          onClick={() => navigate("/")}
          src={Servicios_Generales_Especializados_con_mas_de_15_años}
          alt="Servicios Generales Especializados con más de 15 años"
        />
           <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu className="text-zinc-900 text-3xl cursor-pointer " />
        </div>
        <ul className={`hidden lg:flex gap-4`}>
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

        {/* Redes sociales */}
        <ul className="hidden lg:flex">
          {redes.map((res) => (
            <li
              key={res.id}
              title={res.nombre}
              className="cursor-pointer scale-100 hover:scale-105 transition-all duration-200 p-2 text-xl md:text-2xl"
            >
              {res.icono}
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
}

export default NavBar;
