import { LinkNavigate } from "@/styledComponents";

import person2 from "../../../assets/person2.svg";
import { SectionModalBg, DivModalSent, ImgModal, H3Modal, H4Modal, BtnModal } from "..";
import { PublicRoutes } from "@/models/types/routes";

function ModalSuccessfulRegistration({ modalActive }: { modalActive: boolean }) {
  return (
    <SectionModalBg $modalActive={modalActive}>
      <DivModalSent $modalActive={modalActive}>
        <ImgModal src={person2} alt="" />
        <H3Modal>Su Informacion fue enviada</H3Modal>
        <H4Modal>
          Pronto se le enviara un mail para confirmar su nuevo usuario.
        </H4Modal>
        <H4Modal>Una vez confirmado, podra ingresar a su usuario.</H4Modal>
        <LinkNavigate to={`/${PublicRoutes.PUBLIC}/${PublicRoutes.HOME}`}>
          <BtnModal>Aceptar</BtnModal>
        </LinkNavigate>
      </DivModalSent>
    </SectionModalBg>
  );
}
export default ModalSuccessfulRegistration;
