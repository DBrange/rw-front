import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

interface Props {
  changePage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  page: number;
}

function PageButton({ changePage, page }: Props) {
  return (
    <div className="flex justify-between p-1">
      <button
        onClick={changePage}
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
        value="next"
        className={`${
          page === 2 && "pointer-events-none opacity-0"
        } relative w-24 h-8 border-2 border-green-400 rounded-xl active:bg-green-100 active:translate-x-1`}
      >
        <i className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-green-400 ">
          <BsArrowRight size={20} />
        </i>
      </button>
    </div>
  );
}
export default PageButton;
