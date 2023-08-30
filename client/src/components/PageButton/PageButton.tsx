import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { ErrorBtn, SwornDeclarationError } from "..";
import { useState } from "react";

interface Props {
  changePage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  page: number;
  max: number;
  isSwornDeclaration?: boolean
}

function PageButton({ changePage, page, max, isSwornDeclaration }: Props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isError, setIsError] = useState<boolean>(false);

  return (
    <>
      <div className="w-full flex justify-between p-1 mt-5">
        <button
          onClick={(e) => {
            changePage(e);
            scrollToTop();
          }}
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
        {page === max ? (
          <button
            className="relative w-24 h-8 mb-4 rounded-xl bg-violet-500 text-white active:translate-y-1"
            onClick={() => setIsError(true)}
            type="submit"
          >
            Enviar
          </button>
        ) : (
          <button
            onClick={(e) => {
              changePage(e);
              scrollToTop();
            }}
            type="button"
            value="next"
            className={`${
              page === max && "pointer-events-none opacity-0"
            } mb-4 relative w-24 h-8 border-2 border-green-400 rounded-xl active:bg-green-100 active:translate-x-1`}
          >
            <i
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-green-400`}
            >
              <BsArrowRight size={20} />
            </i>
          </button>
        )}
      </div>
      <SwornDeclarationError
        onConfirmed={isSwornDeclaration as boolean}
        isError={isError}
      />
      <ErrorBtn isError={isError} />
    </>
  );
}
export default PageButton;
