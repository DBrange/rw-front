
import { LinkNavigate } from "@/styledComponents";
import { BtnModal, DivModalSent, H3Modal, H4Modal, SectionModalBg } from ".";

function ModalSent({ modalActive }: { modalActive: boolean }) {
  return (
    <SectionModalBg $modalActive={modalActive}>
      <DivModalSent $modalActive={modalActive}>
        <H3Modal>Su Informacion fue enviada</H3Modal>
        <H4Modal>Pronto le llegara un mail con toda la informacion</H4Modal>
        <LinkNavigate to="/">
          <BtnModal>Aceptar</BtnModal>
        </LinkNavigate>
      </DivModalSent>
    </SectionModalBg>
  );
}
export default ModalSent;
