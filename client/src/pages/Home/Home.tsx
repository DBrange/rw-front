import { Link } from "react-router-dom";
import { BsFillCarFrontFill } from "react-icons/bs";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { LuMail } from "react-icons/lu";
import { BsArrowUp } from "react-icons/bs";
import { useEffect, useState } from "react";

function Home() {
  // const [isVisible, setIsVisible] = useState(false);

  // const toggleVisibility = () => {
  //   if (window.scrollY > 300) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", toggleVisibility);
  //   return () => {
  //     window.removeEventListener("scroll", toggleVisibility);
  //   };
  // }, []);
  return (
    <>
      {/* <button
        className={`fixed right-4 bottom-4 p-4 rounded-full shadow-md bg-violet-500 text-white ${
          isVisible ? "block" : "hidden"
        }`}
        onClick={scrollToTop}
      >
        <BsArrowUp />
      </button> */}
      <div className="">
        <section className="h-screen flex flex-col justify-center items-center bg-violet-300 gap-12 px-4">
          <div className="text-center text-white text-lg">
            <p>
              Bienvenido a Reclamo Web, el mejor sitio para realizar tus
              <span className="text-violet-500"> DENUNCIAS</span>
            </p>
            <div className="flex justify-center gap-5 mt-5 mb-2">
              <BsFillCarFrontFill size={40} />
              <HiMiniDevicePhoneMobile size={40} />
            </div>
            <p className=" text-sm">Rapido, Sencillo y Automatico</p>
          </div>

          <Link to={"/denuncia"}>
            <button className="bg-violet-500 rounded-md px-10 py-2 active:translate-y-1 text-white">
              Denunciar
            </button>
          </Link>
        </section>

        <section className="h-screen flex flex-col justify-center items-center bg-white gap-12 px-4">
          <div className="text-center text-lg">
            <p>
              En Reclamo web tambien podras realizar inspecciones, para poder{" "}
              <span className="text-violet-500">ASEGURAR</span> el vehiculo o
              dipositivo que desees
            </p>{" "}
            <div className="flex justify-center gap-5 mt-5 mb-2">
              <BsFillCarFrontFill size={40} />
              <HiMiniDevicePhoneMobile size={40} />
            </div>
            <p className="text-sm">
              Siempre de la forma mas sencilla y rapida que podrias conseguir
            </p>
          </div>
          <Link to={"/inspeccion"}>
            <button className="bg-violet-500 rounded-md px-10 py-2 active:translate-y-1 text-white">
              Inspeccionar
            </button>
          </Link>
        </section>

        <footer className="h-16 flex flex-col justify-center items-center bg-violet-300 gap-12 px-4 text-white text-center ">
          <div className="flex gap-5 items-center ">

            <i>
              <LuMail size={ 30} />
            </i>
          <p className="">
            aaaaaaaaaaa@gmail.com
          </p>
          </div>
          {/* <p className=" text-lg">
            Para cualquiera de las opciones que ofrecemos, una vez que completes
            todos los datos de tu vehiculo o dispositivo y finalizes el
            formulario, se te enviara a ti y a nuestro broker un archivo PDF con
            todos los datos ingresados, este broker se contactara contigo a la
            brevedad.
          </p>
          <p>
            Ante cualquier duda, puedes comunicarte con nosotros por medio de
            ............
          </p> */}
        </footer>
      </div>
    </>
  );
}
export default Home;
