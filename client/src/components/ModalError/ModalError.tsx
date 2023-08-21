import { useNavigate } from "react-router-dom";

function ModalError({ modalActive }: { modalActive: boolean }) {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        modalActive
          ? "pointer-events-auto opacity-1"
          : "pointer-events-none opacity-0"
      } transition-all duration-200 fixed flex justify-center items-center z-10 w-screen h-screen  bg-black bg-opacity-50`}
    >
      <div
        className={`${
          modalActive ? "scale-100" : "scale-50"
        } transition-all duration-200 delay-150 w-[90%] max-w-[700px] bg-red-200 text-red-500 rounded-md p-5 text-center`}
      >
        <p className="mb-5 text-xl">Su Informacion no fue enviada</p>
        <p className=" text-xs">
          Lo sentimos, hubo un error al enviar el formulario.
        </p>
        <p className=" text-xs">Intente enviarlo nuevamente, gracias.</p>
        <button
          onClick={() => navigate(-1)}
          className="w-[40%] max-w-[200px] h-8 mx-auto mt-5 rounded-xl bg-red-500 text-white active:translate-y-1"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
export default ModalError;
