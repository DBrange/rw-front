import { modalSendRequest } from "@/services/sharing-information.service";
import {
  BtnModal,
  DivModalSent,
  H4Modal,
  SectionModalBg,
  TitleModal
} from "..";
import { useBrokerFindClientsContext } from "@/pages";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux";
import { addNewNotification } from "@/redux/slices/notificationSlice";

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
  const dispatch = useDispatch<AppDispatch>()
  const sent = () => {
    

    activateTrigger()
    modalSendRequest.setSubject(false)
  };
  const close = () => modalSendRequest.setSubject(false);

  const {activateTrigger} = useBrokerFindClientsContext()
  return (
    <SectionModalBg $modalActive={modalActive} onClick={close}>
      <DivModalSent $modalActive={modalActive}>
        {/* <ImgModal src={person2} alt="" /> */}
        <TitleModal>Cliente</TitleModal>
        {email && <p>email: {email}</p>}
        {dni && <p>dni: {dni}</p>}
        {cuit && <p>cuit: {cuit}</p>}
        {name && <p>name: {name}</p>}
        {lastname && <p>lastname: {lastname}</p>}
        {companyName && <p>companyName: {companyName}</p>}
        <BtnModal onClick={sent}>Enviar solicitud</BtnModal>
      </DivModalSent>
    </SectionModalBg>
  );
}
export default ModalSendRequest;
