import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  changePage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  page: number;
  errors: any;
}

function PageButton({ changePage, page, errors }: Props) {
  return (
    <div className="flex justify-between p-1">
      <button
        onClick={changePage}
        type="button"
        value="back"
        className={`${
          page === 0 && "pointer-events-none opacity-0"
        } relative w-24 h-8 rounded-xl active:bg-gray-200 active:-translate-x-1`}
      >
        <i className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 ">
          <BsArrowLeft size={20} />
        </i>
      </button>
      <button
        onClick={changePage}
        type="button"
        value="next"
        className={`${errors && "border-red-400 pointer-events-none"} ${
          page === 2 && "pointer-events-none opacity-0"
        } relative w-24 h-8 border-2 border-green-400 rounded-xl active:bg-green-100 active:translate-x-1`}
      >
        <i
          className={`${
            errors && "text-red-400"
          } absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-green-400`}
        >
          {errors ? <AiOutlineClose size={20} /> : <BsArrowRight size={20} />}
        </i>
      </button>
    </div>
  );
}
export default PageButton;
