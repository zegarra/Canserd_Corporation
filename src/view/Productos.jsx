
import CARSERDCORPORATIONsECCIONS from "../lib/Imagenes en Inicio/CARSERDCORPORATIONsECCIONS.webp";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import producto1 from "../lib/imagenes de Productos/producto1.webp";
import producto2 from "../lib/imagenes de Productos/producto2.webp";
import producto3 from "../lib/imagenes de Productos/producto3.webp";
import producto4 from "../lib/imagenes de Productos/producto4.webp";
import producto5 from "../lib/imagenes de Productos/producto5.webp";
import banner from "../lib/imagenes de Productos/banner.webp";
function Productos() {
  const producto = [
    {
      id: 1,
      img: producto1,
      nombre: "CARRYBOY",
      descripcion: [
        {
          id: 1,
          descripcion:
            "Pintura al horno, que garantiza un acabado duradero y resistente a la corrosión",
        },
        {
          id: 2,
          descripcion: "Thiner acrilico para un acabada brillante y suave",
        },
      ],
      precioHasta: 119.99,
      precioDesde: 150.9,
    },
    {
      id: 2,
      img: producto2,
      nombre: "COCHE PLATAFORMA",
      descripcion: [
        {
          id: 1,
          descripcion:
            "Pintura al horno, que garantiza un acabado duradero y resistente a la corrosión",
        },
        {
          id: 2,
          descripcion: "Thiner acrilico para un acabada brillante y suave",
        },
      ],
      precioHasta: 119.99,
      precioDesde: 150.9,
    },
    {
      id: 3,
      img: producto3,
      nombre: "CARRYBOY",
      descripcion: [
        {
          id: 1,
          descripcion:
            "Pintura al horno, que garantiza un acabado duradero y resistente a la corrosión",
        },
        {
          id: 2,
          descripcion: "Thiner acrilico para un acabada brillante y suave",
        },
      ],
      precioHasta: 119.99,
      precioDesde: 150.9,
    },
    {
      id: 4,
      img: producto4,
      nombre: "CARRYBOY",
      descripcion: [
        {
          id: 1,
          descripcion:
            "Pintura al horno, que garantiza un acabado duradero y resistente a la corrosión",
        },
        {
          id: 2,
          descripcion: "Thiner acrilico para un acabada brillante y suave",
        },
      ],
      precioHasta: 119.99,
      precioDesde: 150.9,
    },
    {
      id: 5,
      img: producto5,
      nombre: "CARRYBOY",
      descripcion: [
        {
          id: 1,
          descripcion:
            "Pintura al horno, que garantiza un acabado duradero y resistente a la corrosión",
        },
        {
          id: 2,
          descripcion: "Thiner acrilico para un acabada brillante y suave",
        },
      ],
      precioHasta: 119.99,
      precioDesde: 150.9,
    },
  ];
  return (
    <main className="overflow-x-hidden">
      <div className="relative mb-20">
        <h1 className="w-[90vw] mx-auto absolute inset-0 flex items-center justify-center text-white  lg:text-6xl text-4xl text-center  font-bold">
          TIENDA CARSERD
        </h1>
        <img
          src={CARSERDCORPORATIONsECCIONS}
          className="max-w-[100vw] min-w-[1300px] min-h-[20vh] h-auto"
          alt=""
        />
      </div>
      <ul className="w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 pb-20">
        {producto.map((pro) => (
          <li
            key={pro.id}
            className="mx-auto shadow-2xl p-4 rounded-md w-full sm:w-[350px] flex flex-col gap-3"
          >
            <picture className="relative mb-5">
              <img className="h-80 rounded-md mx-auto" src={pro.img} alt={pro.nombre} />
              <button className="bg-[#2AA769] hover:bg-[#25D366]  cursor-pointer hover:translate-y-[-4px] transition-all p-2 rounded-md absolute bottom-[-20px] left-2 text-white font-bold">
                COMPRAR
              </button>
            </picture>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-3xl">
                ${pro.precioDesde.toFixed(2)}
              </h3>
              <h3 className="font-bold text-lg text-zinc-500">
              Desde :  ${pro.precioHasta.toFixed(2)}
              </h3>
            </div>

            <h2 className="text-[#2AA769] hover:text-[#25D366] transition-all duration-200 cursor-pointer text-2xl md:text-2xl font-bold flex">
              {pro.nombre} <MdKeyboardDoubleArrowDown size={35} />
            </h2>
            <div className="flex flex-col gap-2">
              {pro.descripcion.map((desc) => (
                <p key={desc.id} className="text-sm text-gray-500">
                  . {desc.descripcion}
                </p>
              ))}
            </div>
            <div className="flex justify-between items-center gap-2">
              <button className="hover:text-[#25D366] hover:border-[#25D366] hover:translate-y-[-4px] transition-all duration-200 flex items-center text-sm gap-3 text-[#2AA769] font-bold p-2 border-[#2AA769] rounded-md border-2">
                <span className="leading-4">FABRICAMOS <br/> A TU MEDIDA</span>
                <FaCar size={30}/>
              </button>
              <button className="hover:text-[#25D366] hover:border-[#25D366] hover:translate-y-[-4px] transition-all duration-200 flex items-center text-sm gap-3 text-[#2AA769] font-bold p-2 border-[#2AA769] rounded-md border-2">
                <span className="leading-4">GARANTIA DE <br/> 6 MESES</span>
                <CiClock1  size={30}/>
              </button>
            </div>
          </li>
        ))}
         <picture className="flex items-center justify-center">
        <img className="w-full  rounded-md mx-auto" src={banner} alt="" />
      </picture>
      </ul>
     
    </main>
  );
}

export default Productos;
