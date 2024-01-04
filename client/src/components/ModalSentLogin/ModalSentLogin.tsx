import { LinkNavigate } from "@/styledComponents";
import person2 from "../../../assets/person2.svg";
import { SectionModalBg, DivModalSent, ImgModal, H3Modal, H4Modal, BtnModal } from "..";
import { PrivateRoutes } from "@/models/types/routes";

interface Props {
  modalActive: boolean;
  type: 'inspeccion' | 'denuncia'
}

function ModalSentLogin({ modalActive,type }: Props) {
  return (
    <SectionModalBg $modalActive={modalActive}>
      <DivModalSent $modalActive={modalActive}>
        <ImgModal src={person2} alt="" />
        <H3Modal>Su {type} fue realizada con exito</H3Modal>
        {/* <H4Modal>Pronto le llegara un mail con toda la informacion.</H4Modal> */}
        <H4Modal>Nos estaremos comunicando con usted a la brevedad.</H4Modal>
        <LinkNavigate to={`/${PrivateRoutes.PRIVATE}`}>
          <BtnModal>Aceptar</BtnModal>
        </LinkNavigate>
      </DivModalSent>
    </SectionModalBg>
  );
}
export default ModalSentLogin;
