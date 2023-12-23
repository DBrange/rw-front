import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { DivModalToast, IToast } from "../ModalToast/ModalToast.styled";
import { modalToastError } from "@/services/sharing-information.service";

function ModalToastError() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    modalToastError.getSubject.subscribe((bol) => setIsVisible(bol));
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [isVisible]);

  return (
    <>
      <DivModalToast $visible={isVisible}>
        <IToast>
          <AiFillCloseCircle size={16} />
        </IToast>
        <p>La operacion ha fallado</p>
      </DivModalToast>
    </>
  );
}

export default ModalToastError;
