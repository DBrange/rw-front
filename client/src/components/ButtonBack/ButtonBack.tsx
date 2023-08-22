import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ButtonBack() {
    const navigate = useNavigate();
  return (
    <button
      className="ml-[10%] relative h-8  mt-5  active:-translate-x-1"
      onClick={() => navigate(-1)}
    >
      <i className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 ">
        <BsArrowLeft size={20} />
      </i>
    </button>
  );
}
export default ButtonBack;
