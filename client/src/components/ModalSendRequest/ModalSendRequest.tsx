import { useBrokerFindClientsContext } from "@/pages";
import { modalSendRequest, modalToast } from "@/services/sharing-information.service";
import { SectionModalBg } from "..";
import {
  BtnModalSendRequest,
  ConstainerInfoModalSendRequest,
  DivModalSendRequestSent,
  InfoModalSendRequest,
  InfoWrappedModalSendRequest,
  LabelInfoModalSendRequest,
  TitleModalSendRequest
} from "./ModalSendRequest.styled";

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

  const sent = () => {
    activateTrigger();
    modalSendRequest.setSubject(false);
    modalToast.setSubject(true);
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
            <InfoWrappedModalSendRequest>
              <LabelInfoModalSendRequest>Email:</LabelInfoModalSendRequest>{" "}
              <InfoModalSendRequest>{email}</InfoModalSendRequest>
            </InfoWrappedModalSendRequest>
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
