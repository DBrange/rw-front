import { useEffect, useState } from "react";
import { DivModalToast, IToast } from "./ModalToast.styled";
import { BsCheckLg } from "react-icons/bs";
import { modalToast } from "@/services/sharing-information.service";

function ModalToast() {
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      modalToast.getSubject.subscribe((bol) => setIsVisible(bol));
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
        <IToast $green>
          <BsCheckLg size={16} />
        </IToast>
        <p>La operacion ha sido exitosa</p>
      </DivModalToast>
    </>
  );
}

export default ModalToast;
