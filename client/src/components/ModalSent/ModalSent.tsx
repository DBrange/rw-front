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
    <SectionModalBg $modalActive={true}>
      <DivModalSent $modalActive={true}>
        <ImgModal src={person2} alt="" />
        <H3Modal>Su Informacion fue enviada</H3Modal>
        <H4Modal>Su broker se encargara del resto.</H4Modal>
        <H4Modal>Nos estaremos comunicando con usted a la brevedad.</H4Modal>
        <LinkNavigate $large
          to={`/${PrivateRoutes.PRIVATE}`}
        >
          <BtnModal>Aceptar</BtnModal>
        </LinkNavigate>
      </DivModalSent>
    </SectionModalBg>
  );
}
export default ModalSent;
