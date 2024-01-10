import { AppDispatch, AppStore } from "@/redux";
import { deleteBrokerAsync } from "@/redux/slices/clientSlice";
import { modalDeleteBroker } from "@/services/sharing-information.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  DivModalSent,
  H3Modal,
  SectionModalBg
} from "..";
import {
  BtnModalDeleteBroker,
  DivBtnsModalDeleteBroker,
} from "./ModalDeleteBroker.styled";

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
