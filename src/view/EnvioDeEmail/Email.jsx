import { useState } from "react";
import emailjs from "@emailjs/browser";

function Email() {
  const [formData, setFormData] = useState({
    selectedCountry: "",
    fullName: "",
    email: "",
    companyRuc: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    companyRuc: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "companyRuc") {
      if (!/^\d*$/.test(value)) {
        setErrors({ ...errors, companyRuc: "Solo se permiten números." });
        return;
      }
      if (value.length > 11) {
        setErrors({ ...errors, companyRuc: "El RUC debe tener exactamente 11 dígitos." });
        return;
      }
      setErrors({ ...errors, companyRuc: "" });
    }

    if (name === "phoneNumber") {
      if (!/^\d*$/.test(value)) {
        setErrors({ ...errors, phoneNumber: "Solo se permiten números." });
        return;
      }
      if (value.length > 9) {
        setErrors({ ...errors, phoneNumber: "El número debe tener exactamente 9 dígitos." });
        return;
      }
      setErrors({ ...errors, phoneNumber: "" });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (name) => {
    if (name === "companyRuc" && formData.companyRuc.length !== 11) {
      setErrors({ ...errors, companyRuc: "El RUC debe tener exactamente 11 dígitos." });
    } else if (name === "phoneNumber" && formData.phoneNumber.length !== 9) {
      setErrors({ ...errors, phoneNumber: "El número debe tener exactamente 9 dígitos." });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.selectedCountry ||
      !formData.fullName ||
      !formData.email ||
      !formData.companyRuc ||
      !formData.phoneNumber
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const serviceID = "service_i5h9zeq";
    const templateID = "template_9622u2h";
    const publicKey = "FiOIebaYfaTGEnXXt";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          service_type: formData.selectedCountry,
          from_name: formData.fullName,
          from_email: formData.email,
          company_ruc: formData.companyRuc,
          phone_number: formData.phoneNumber,
        },
        publicKey
      )
      .then(() => {
        alert("¡Correo enviado exitosamente!");
        setFormData({
          selectedCountry: "",
          fullName: "",
          email: "",
          companyRuc: "",
          phoneNumber: "",
        });
      })
      .catch(() => {
        alert("Hubo un problema al enviar el correo. Revisa los datos.");
      });
  };

  const opciones = [
    { id: 1, title: "Drywall" },
    { id: 2, title: "Carpintería" },
    { id: 3, title: "Aire acondicionado" },
    { id: 4, title: "Puertas enrollables" },
    { id: 5, title: "Estructuras metálicas" },
    { id: 6, title: "Albañilería" },
    { id: 7, title: "Instalación eléctrica" },
    { id: 8, title: "Mantenimiento pozo a tierra" },
    { id: 9, title: "Mueble mecánicas" },
    { id: 10, title: "Puertas de emergencia" },
    { id: 11, title: "Mantenimiento de vidrios" },
    { id: 12, title: "Gasfitería" },
  ];

  return (
    <section className="w-full md:w-[600px] bg-white rounded-lg p-4 shadow-md">
      <form className="grid grid-cols-4 gap-x-2 gap-y-4" onSubmit={handleSubmit}>
        <div className="col-span-4">
          <label
            htmlFor="service"
            className="block mb-2 text-base font-medium text-gray-900 text-start"
          >
            Tipos de servicio:
          </label>
          <select
            id="service"
            name="selectedCountry"
            value={formData.selectedCountry}
            onChange={handleChange}
            className="bg-gray-50 border focus:outline-none border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          >
            <option value="" disabled>
              Opciones de servicios
            </option>
            {opciones.map((option) => (
              <option key={option.id} value={option.title}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-4">
          <label
            htmlFor="fullName"
            className="block mb-2 text-base font-medium text-gray-900 text-start"
          >
            Nombre y Apellido:
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="bg-gray-50 border focus:outline-none border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div className="col-span-4">
          <label
            htmlFor="email"
            className="block mb-2 text-base font-medium text-gray-900 text-start"
          >
            Correo electrónico:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border focus:outline-none border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div className="col-span-4 sm:col-span-2">
          <label
            htmlFor="companyRuc"
            className="block mb-2 text-base font-medium text-gray-900 text-start"
          >
            RUC de la Empresa:
          </label>
          <input
            type="text"
            name="companyRuc"
            id="companyRuc"
            value={formData.companyRuc}
            onChange={handleChange}
            onBlur={() => handleBlur("companyRuc")}
            className="bg-gray-50 border focus:outline-none border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            maxLength={11}
          />
          {errors.companyRuc && (
            <p className="text-red-600 text-sm mt-1">{errors.companyRuc}</p>
          )}
        </div>
        <div className="col-span-4 sm:col-span-2">
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text-base font-medium text-gray-900 text-start"
          >
            Número telefónico:
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            onBlur={() => handleBlur("phoneNumber")}
            className="bg-gray-50 border focus:outline-none border-gray-400 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            maxLength={9}
          />
          {errors.phoneNumber && (
            <p className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>
        <div className="col-span-4 flex justify-end">
          <button
            type="submit"
            className="bg-[#2AA769] p-2 rounded-md font-bold text-white hover:bg-[#25D366] transition-all duration-200"
          >
            Contactar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Email;
