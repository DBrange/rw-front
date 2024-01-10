import { LinkNavigate } from "@/styledComponents";
import {
  BtnModal,
  DivModalSent,
  H3Modal,
  H4Modal,
  ImgModal,
  SectionModalBg,
} from "..";
import error from "../../../assets/error.svg";
import { PrivateRoutes } from "@/models/types/routes";

function ModalError({ modalActive }: { modalActive: boolean }) {
  return (
    <SectionModalBg $modalActive={modalActive} $error>
      <DivModalSent $error $modalActive={modalActive}>
        <ImgModal src={error} alt="" />
        <H3Modal $error>Su Informacion no fue enviada</H3Modal>
        <H4Modal $error>
          Lo sentimos, hubo un error al enviar el formulario.
        </H4Modal>
        <H4Modal $error>Intente enviarlo nuevamente, gracias.</H4Modal>
        <LinkNavigate $large to={`/${PrivateRoutes.PRIVATE}`}>
          <BtnModal $error>Aceptar</BtnModal>
        </LinkNavigate>
      </DivModalSent>
    </SectionModalBg>
  );
}
export default ModalError;
