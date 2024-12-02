import { img, title } from "motion/react-client";
import CARSERDCORPORATIONsECCIONS from "../lib/Imagenes en Inicio/CARSERDCORPORATIONsECCIONS.webp";
import nosotros1 from "../lib/Imagenes Nosotros/Nosotros1.webp";
import nosotros2 from "../lib/Imagenes Nosotros/Nosotros2.webp";
import nosotros3 from "../lib/Imagenes Nosotros/Nosotros3.webp";
import nosotros4 from "../lib/Imagenes Nosotros/Nosotros4.webp";
import nosotros5 from "../lib/Imagenes Nosotros/Nosotros5.webp";
function QuienesSomos() {
  const metodologia = [
    {
      id: 1,
      title: "Evaluación Inicial y Diagnóstico",
      parrafo:
        "Antes de iniciar cualquier proyecto, realizamos una evaluación exhaustiva de las instalaciones. Esta fase crucial nos permite identificar necesidades específicas, posibles riesgos y áreas de mejora. Con un diagnóstico detallado, desarrollamos un plan de mantenimiento personalizado y efectivo que maximiza la eficiencia y seguridad de tus sistemas.",
      img: nosotros2,
    },
    {
      id: 2,
      title: "Monitoreo y Mejora Continua",
      parrafo:
        "Una vez finalizada la ejecución, implementamos un sistema de monitoreo continuo para evaluar el desempeño de las instalaciones. Este enfoque nos permite realizar ajustes proactivos y asegurar que se mantenga la eficacia del plan de mantenimiento a lo largo del tiempo. La mejora continua es fundamental para brindar un servicio excepcional.",
      img: nosotros3,
    },
    {
      id: 3,
      title: "Planificación Estratégica",
      parrafo:
        "Basándonos en la evaluación inicial, elaboramos un plan de mantenimiento estratégico que aborda todas las áreas críticas de tus instalaciones. Este plan es flexible y se ajusta continuamente para garantizar que cumpla con las expectativas y necesidades cambiantes de nuestros clientes. Con nuestra planificación, optimizamos recursos y aseguramos un funcionamiento ininterrumpido.",
      img: nosotros4,
    },
    {
      id: 4,
      title: "Ejecución Profesional",
      parrafo:
        "Nuestro equipo de técnicos certificados ejecuta cada tarea con un nivel de precisión y atención al detalle que garantiza resultados óptimos. Utilizamos herramientas y técnicas avanzadas en cada trabajo, asegurando que se completen a la perfección, dentro de los plazos establecidos y cumpliendo con los más altos estándares de calidad.",
      img: nosotros5,
    },
  ];
  return (
    <main className="overflow-x-hidden">
      <div className="marquee bg-[#2AA769]">
        <p className="text-white">
          CONTAMOS CON SERVICIOS DESDE GASFITERÍA, PINTURA, MANTENIMIENTO Y
          FABRICACIÓN DE MUEBLES PARA EL HOGAR U OFICINA HASTA CARPINTERÍA Y
          MÁS!
        </p>
      </div>
      <div className="relative mb-20">
        <h1 className="uppercase  container px-4 mx-auto absolute inset-0 flex items-center justify-center text-white  lg:text-6xl text-4xl text-center  font-bold">
          ¿QUIÉNES SOMOS?
        </h1>
        <img
          src={CARSERDCORPORATIONsECCIONS}
          className="max-w-[100vw] min-w-[1300px] min-h-[20vh] h-auto"
          alt=""
        />
      </div>
      <section className="grid grid-cols-2 gap-5  container px-4 mx-auto pb-10 md:pb-20 items-center">
        <div className="grid gap-4 col-span-2 md:col-span-1">
          <h2 className="uppercase text-xl font-bold md:text-3xl">
            CArserd corporation
          </h2>
          <div className="md:text-xl text-sm">
            <h3 className="font-bold">Mision</h3>
            <p className="text-base">
              Nuestra misión en Carserv SRL es proporcionar servicios de
              mantenimiento integral que aseguren la continuidad operativa de
              nuestros clientes en los sectores retail e industrial. Lo hacemos
              ofreciendo soluciones innovadoras, seguras y eficientes,
              respaldadas por un equipo altamente capacitado y comprometido con
              la excelencia.
            </p>
          </div>
          <div className="md:text-xl text-sm">
            <h3 className="font-bold">Visión</h3>
            <p className="text-base">
              Aspiramos a ser líderes en el mercado de mantenimiento integral
              para tiendas de retail, supermercados, almacenes e instalaciones
              industriales en Perú. Queremos ser reconocidos por nuestra
              excelencia operativa, nuestra capacidad para innovar y nuestro
              firme compromiso con la satisfacción del cliente.
            </p>
          </div>
        </div>
        <img
          className="col-span-2 md:col-span-1 rounded-md h-auto md:h-80 w-auto mx-auto"
          src={nosotros1}
          alt=""
        />
      </section>

      <div className="col-span-2 text-white bg-[#2AA769]">
        <div className="container mx-auto px-4 py-10 md:py-20 gap-5 flex flex-col">
          <h2 className="text-xl font-bold md:text-3xl">Metodología</h2>
          <div className="md:text-xl text-sm">
            <h3 className="font-bold">Nuestros Cuatro Pilares Fundamentales</h3>
            <p className="text-base">
              En Carserd, nuestro éxito se basa en una metodología sólida de
              mantenimiento que se centra en cuatro pilares fundamentales:
            </p>
          </div>
        </div>
      </div>
      <section className="py-20">
        {metodologia.map((metodo, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-5  container px-4 mx-auto pb-10 md:pb-20"
          >
            <div
              className={`flex flex-col justify-center gap-2 ${
                index % 2 === 0
                  ? "col-span-2 md:col-span-1"
                  : "col-span-2 md:col-span-1 md:order-2"
              }`}
            >
              <h3 className="font-bold text-xl md:text-2xl">{metodo.title}</h3>
              <p className="text-base">{metodo.parrafo}</p>
            </div>
            <picture className="rounded-lg ">
               <img
              className={`w-full rounded-lg object-none h-80 ${
                index % 2 === 0
                  ? "col-span-2 md:col-span-1 md:order-2"
                  : "col-span-2 md:col-span-1"
              }`}
              src={metodo.img}
              alt=""
            />
            </picture>
           
          </div>
        ))}
      </section>
    </main>
  );
}

export default QuienesSomos;
