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
import {
  BtnModalDeleteBroker,
  DivBtnsModalDeleteBroker,
} from "./ModalDeleteBroker.styled";
import { AppDispatch, AppStore } from "@/redux";
import { useDispatch, useSelector } from "react-redux";
import { deleteBrokerAsync } from "@/redux/slices/clientSlice";
import { useNavigate, useParams } from "react-router-dom";
import { modalDeleteBroker } from "@/services/sharing-information.service";

function ModalDeleteBroker({ modalActive }: { modalActive: boolean }) {
  const user = useSelector((store: AppStore) => store.user);
  const dispatchAsync = useDispatch<AppDispatch>();
  const { userBrokerId } = useParams();
  const navigate = useNavigate()
// console.log(user.user?.id, userBrokerId);
  const deleteBroker = () => {
    dispatchAsync(
      deleteBrokerAsync({ clientId: user.user?.id, userBrokerId: userBrokerId })
    );
    close()
  };

  const close = () => {
    modalDeleteBroker.setSubject(false);
    navigate(-1);
  };
  return (
    <SectionModalBg $modalActive={modalActive}>
      <DivModalSent $modalActive={modalActive}>
        <H3Modal>¿Estas seguro que deseas eliminar este broker?</H3Modal>
        <DivBtnsModalDeleteBroker>
          <BtnModalDeleteBroker $yes onClick={deleteBroker}>
            Aceptar
          </BtnModalDeleteBroker>
          <BtnModalDeleteBroker onClick={close}>Cancelar</BtnModalDeleteBroker>
        </DivBtnsModalDeleteBroker>
      </DivModalSent>
    </SectionModalBg>
  );
}
export default ModalDeleteBroker;
