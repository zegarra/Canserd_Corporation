
import CARSERDCORPORATIONsECCIONS from "../lib/Imagenes en Inicio/CARSERDCORPORATIONsECCIONS.webp";

function Proyectos() {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
  ];

  // Crear grupos de imágenes en 4 columnas
  const chunks = [];
  for (let i = 0; i < images.length; i += 3) {
    chunks.push(images.slice(i, i + 3));
  }
  return (
    <main className="overflow-x-hidden pb-40">
      <div className="marquee bg-[#2AA769]">
        <p className='text-white'>
          CONTAMOS CON SERVICIOS DESDE GASFITERÍA, PINTURA, MANTENIMIENTO Y FABRICACIÓN DE MUEBLES PARA EL HOGAR U OFICINA HASTA CARPINTERÍA Y MÁS! 
        </p>
      </div>
      <div className="relative mb-20">
        <h1 className="uppercase w-[90vw] mx-auto absolute inset-0 flex items-center justify-center text-white  lg:text-6xl text-4xl text-center  font-bold">
        nuestros proyectos
        </h1>
        <img
          src={CARSERDCORPORATIONsECCIONS}
          className="max-w-[100vw] min-w-[1300px] min-h-[20vh] h-auto"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-[90vw] mx-auto">
      {chunks.map((chunk, index) => (
        <div key={index} className="grid gap-4">
          {chunk.map((src, idx) => (
            <div key={idx}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={src}
                alt={`Imagen ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
    </main>
  );
}

export default Proyectos;
