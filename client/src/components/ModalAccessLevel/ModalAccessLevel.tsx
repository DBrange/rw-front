import { Link } from "react-router-dom";
import {
  DivNotAccessBrokerCreateReportContainer
} from "..";
import { BtnModalSendRequest } from "../ModalSendRequest/ModalSendRequest.styled";
import { ModalAccessLevelContainer } from "./ModalAccessLevel.styled";
import { PrivateRoutes } from "@/models/types/routes";

interface Props {
  title: string;
  text: string;
  modalActive: boolean
  broker: boolean
}

function ModalAccessLevel({ title, text, modalActive, broker }: Props) {
  return (
    <ModalAccessLevelContainer $modalActive={modalActive}>
      <DivNotAccessBrokerCreateReportContainer>
        <h2>{title}</h2>
        <p>{text}</p>
      {broker && (
        <Link
          to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.PAYMENT}`}
        >
          <BtnModalSendRequest>Ver niveles</BtnModalSendRequest>
        </Link>
      )}
      </DivNotAccessBrokerCreateReportContainer>
    </ModalAccessLevelContainer>
  );
}
export default ModalAccessLevel;
