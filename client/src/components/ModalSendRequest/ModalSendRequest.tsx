import { useBrokerFindClientsContext } from "@/pages";
import { AppDispatch } from "@/redux";
import { modalSendRequest } from "@/services/sharing-information.service";
import { useDispatch } from "react-redux";
import { SectionModalBg } from "..";
import {
  BtnModalSendRequest,
  ConstainerInfoModalSendRequest,
  ContainerMiniModal,
  DivModalSendRequestSent,
  InfoModalSendRequest,
  LabelInfoModalSendRequest,
  TitleModalSendRequest,
} from "./ModalSendRequest.styled";
import { useState } from "react";

interface Props {
  modalActive: boolean;
  // setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  email?: string;
  dni?: string;
  cuit?: string;
  name?: string;
  lastname?: string;
  companyName?: string;
}

function ModalSendRequest({
  modalActive,
  email,
  dni,
  cuit,
  name,
  lastname,
  companyName,
}: Props) {
  const [miniModal, setMiniModal] = useState<number>(0);

  const sent = () => {
    activateTrigger();
    modalSendRequest.setSubject(false);
    setMiniModal(2);
  };
  const close = () => modalSendRequest.setSubject(false);

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();

  const { activateTrigger } = useBrokerFindClientsContext();
  return (
    <SectionModalBg $modalActive={modalActive} onClick={close}>
      <DivModalSendRequestSent
        $modalActive={modalActive}
        onClick={handleModalClick}
      >
        {/* <ImgModal src={person2} alt="" /> */}
        <TitleModalSendRequest>Cliente</TitleModalSendRequest>
        <ConstainerInfoModalSendRequest>
          {email && (
            <div>
              <LabelInfoModalSendRequest>Email:</LabelInfoModalSendRequest>{" "}
              <InfoModalSendRequest>{email}</InfoModalSendRequest>
            </div>
          )}
          {dni && (
            <div>
              <LabelInfoModalSendRequest>DNI:</LabelInfoModalSendRequest>{" "}
              <InfoModalSendRequest>{dni}</InfoModalSendRequest>
            </div>
          )}
          {cuit && (
            <div>
              <LabelInfoModalSendRequest>CUIT:</LabelInfoModalSendRequest>{" "}
              <InfoModalSendRequest>{cuit}</InfoModalSendRequest>
            </div>
          )}
          {name && (
            <div>
              <LabelInfoModalSendRequest>Nombre:</LabelInfoModalSendRequest>{" "}
              <InfoModalSendRequest>{name}</InfoModalSendRequest>
            </div>
          )}
          {lastname && (
            <div>
              <LabelInfoModalSendRequest>Apellido:</LabelInfoModalSendRequest>{" "}
              <InfoModalSendRequest>{lastname}</InfoModalSendRequest>
            </div>
          )}
          {companyName && (
            <div>
              <LabelInfoModalSendRequest>Compania:</LabelInfoModalSendRequest>{" "}
              <InfoModalSendRequest>{companyName}</InfoModalSendRequest>
            </div>
          )}
          {/* {dni && <p>dni: {dni}</p>}
          {cuit && <p>cuit: {cuit}</p>}
          {name && <p>name: {name}</p>}
          {lastname && <p>lastname: {lastname}</p>}
          {companyName && <p>companyName: {companyName}</p>} */}
        </ConstainerInfoModalSendRequest>
        <BtnModalSendRequest onClick={sent}>
          Enviar solicitud
        </BtnModalSendRequest>
      </DivModalSendRequestSent>
    </SectionModalBg>
  );
}
export default ModalSendRequest;
