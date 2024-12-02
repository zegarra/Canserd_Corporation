import { useState } from "react";

function Email() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };
const opciones=[
    {id:1,
        title:"Drywall"
    },
    {
        id:2,
        title:"Carpinteria"
    },
    {
        id:3,
        title:"Aire acondicionado"
    },
    {
        id:4,
        title:"Puertas enrollables"
    },
    {
        id:5,
        title:"Estructuras metalicas"
    },
    {
        id:6,
        title:"Albiñeria"
    },
    {
        id:7,
        title:"Instatalacion Electrica"
    },
    {
        id:8,
        title:"Mantenimiento pozo a tierra"
    },
    {
        id:9,
        title:"Mueble mecánicas"
    },
    {
        id:10,
        title:"Puertas de emergencia"
    },
    {
        id:11,
        title:"Mantenimiento de vidrios"
    },
    {
        id:12,
        title:"Gasfiteria"
    }
]
  return (
    <section className="w-full md:w-[600px] bg-white rounded-lg p-4">
      <form className="grid grid-cols-4 gap-x-2 gap-y-4">
        <div className="col-span-4">
          <label
            htmlFor="countries"
            className="block mb-2 text-base font-medium text-gray-900 text-start"
          >
            Tipos de servicio:
          </label>
          <select
            id="countries"
            value={selectedCountry}
            onChange={handleChange}
            className="bg-gray-50 border focus:outline-none border-gray-400 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
          >
            <option value="" disabled>
              Opciones de servicios
            </option>
            { opciones.map((option) => (
              <option key={option.id} value={option.title}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-4">
          <label
            htmlFor="countries"
            className="block mb-2 text-base font-medium text-gray-900 text-start"
          >
            Nombre y Apellido:
          </label>
         <input type="text" className="bg-gray-50 border focus:outline-none border-gray-400 text-gray-900 text-sm rounded-lg  block w-full p-2.5"/>
        </div>
        <div className="col-span-4">
          <label
            htmlFor="countries"
            className="block mb-2 text-base font-medium text-gray-900 text-start"
          >
            Correo electronico:
          </label>
         <input type="gmail" className="bg-gray-50 border focus:outline-none border-gray-400 text-gray-900 text-sm rounded-lg  block w-full p-2.5"/>
        </div>
        <div className="col-span-4 sm:col-span-2">
          <label
            htmlFor="countries"
            className="block mb-2 text-base font-medium text-gray-900 text-start"
          >
            RUC de la Empresa:
          </label>
         <input type="gmail" className="bg-gray-50 border focus:outline-none border-gray-400 text-gray-900 text-sm rounded-lg  block w-full p-2.5"/>
        </div>
        <div className="col-span-4 sm:col-span-2">
          <label
            htmlFor="countries"
            className="block mb-2 text-base font-medium text-gray-900 text-start"
          >
            Numero telefónico:
          </label>
         <input type="gmail" className="bg-gray-50 border focus:outline-none border-gray-400 text-gray-900 text-sm rounded-lg  block w-full p-2.5"/>
        </div>
        <div className="col-span-4 flex justify-end">
            <button className="bg-[#2AA769] p-2 rounded-md font-bold hover:bg-[#25D366] transition-all duration-200">
                Contactar
            </button>
        </div>
      </form>
    </section>
  );
}

export default Email;
