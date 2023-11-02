import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { BtnSideBySide, IconSideBySide, PageBtnContainer, SecretBtn } from ".";
import { ClickEventType } from "@/pages";
import { useEffect, useRef, useState } from "react";
import { checkboxService } from "@/services/sharing-information.service";

interface Props {
  changePage: (e: ClickEventType) => void;
  page: number;
  max: number;
  errorsInputValues: boolean | undefined;
  markedTouches: () => void;
}

function PageBtn({
  changePage,
  page,
  max,
  errorsInputValues,
  markedTouches,
}: Props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonRef = useRef<HTMLButtonElement>(null);

  const [state, setstate] = useState<boolean>(false);

  useEffect(() => {
    checkboxService.getSubject.subscribe((bol) => {
      if (bol) setstate(bol);
    });

    if (state && buttonRef.current) buttonRef.current.click();
  }, [state]);

  const nextBackPage = (e: ClickEventType) => {
    changePage(e);
    scrollToTop();
  };

  const send = () => {};

  const errorBtn = () => {
    markedTouches();
    scrollToTop();
  };

  return (
    <>
      <SecretBtn type="button" ref={buttonRef}></SecretBtn>
      <PageBtnContainer>
        <BtnSideBySide
          $left
          $page={page}
          onClick={nextBackPage}
          type="button"
          value="back"
        >
          <IconSideBySide $left>
            <BsArrowLeft size={20} />
          </IconSideBySide>
        </BtnSideBySide>

        {errorsInputValues ? (
          <BtnSideBySide
            $error={!!errorsInputValues}
            onClick={errorBtn}
            type="button"
            value=""
          >
            <IconSideBySide $error={!!errorsInputValues}>
              <IoMdClose size={20} />
            </IconSideBySide>
          </BtnSideBySide>
        ) : page === max && !errorsInputValues ? (
          <BtnSideBySide
            $max={false}
            $send
            onClick={send}
            type="submit"
            value=""
          >
            <IconSideBySide $send>Enviar</IconSideBySide>
          </BtnSideBySide>
        ) : (
          <BtnSideBySide
            $max={page === max}
            onClick={nextBackPage}
            type="button"
            value="next"
          >
            <IconSideBySide>
              <BsArrowRight size={20} />
            </IconSideBySide>
          </BtnSideBySide>
        )}
      </PageBtnContainer>
    </>
  );
}
export default PageBtn;
