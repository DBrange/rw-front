import { LinkNavigate } from "@/styledComponents";
import {
  BtnModal,
  DivModalSent,
  H3Modal,
  H4Modal,
  ImgModal,
  SectionModalBg,
} from ".";
import person2 from "../../../assets/person2.svg";
import { PrivateRoutes } from "@/models/types/routes";

function ModalSent({ modalActive }: { modalActive: boolean }) {
  return (
    <SectionModalBg $modalActive={modalActive}>
      <DivModalSent $modalActive={modalActive}>
        <ImgModal src={person2} alt="" />
        <H3Modal>Su Informacion fue enviada</H3Modal>
        <H4Modal>Pronto le llegara un mail con toda la informacion.</H4Modal>
        <H4Modal>Nos estaremos comunicando con usted a la brevedad.</H4Modal>
        <LinkNavigate
          to={`/${PrivateRoutes.PRIVATE}`}
        >
          <BtnModal>Aceptar</BtnModal>
        </LinkNavigate>
      </DivModalSent>
    </SectionModalBg>
  );
}
export default ModalSent;
