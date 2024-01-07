import {
  modalSendRequest
} from "@/services/sharing-information.service";
import { IoPersonSharp } from "react-icons/io5";
import { PiBuildingsBold } from "react-icons/pi";
import {
  CardText,
  CardTextContainer,
  CardTextLabel
} from "..";
import { BtnClientCardFind, ContainerCardFindText, ContainerCardFindTextContainer, DivCardFind, IconCardFind } from "./ClientCardFind.styled";

interface Props {
  name?: string;
  lastname?: string;
  companyName?: string;
  dni?: string;
  cuit?: string;
  email?: string;
  id?: string;
  // setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ClientCardInFind({
  name,
  lastname,
  companyName,
  dni,
  cuit,
  email,
  id,
}: Props) {
  const openModal = () => {
    modalSendRequest.setSubject(true);
  };

  return (
    <ContainerCardFindText>
      <DivCardFind $noHover>
        <IconCardFind>
          {companyName ? <PiBuildingsBold /> : <IoPersonSharp />}
        </IconCardFind>
        <ContainerCardFindTextContainer>
          {companyName ? (
            <>
              <CardTextContainer>
                <CardTextLabel>EMAIL:</CardTextLabel>
                <CardText>{email}</CardText>
              </CardTextContainer>
              <CardTextContainer>
                <CardTextLabel>CUIT:</CardTextLabel>
                <CardText>{cuit}</CardText>
              </CardTextContainer>
            </>
          ) : (
            <>
              <CardTextContainer>
                <CardTextLabel>EMAIL:</CardTextLabel>
                <CardText>{email}</CardText>
              </CardTextContainer>
              <CardTextContainer>
                <CardTextLabel>DNI:</CardTextLabel>
                <CardText>{dni}</CardText>
              </CardTextContainer>
            </>
          )}
          <BtnClientCardFind onClick={openModal}>Agregar</BtnClientCardFind>
        </ContainerCardFindTextContainer>
        {/* <SpanInspectionCard>{newCard && "Nuevo"}</SpanInspectionCard> */}
      </DivCardFind>
    </ContainerCardFindText>

    // <CardTextNoLink>
    //   <DivCard>
    //     <IconCard>
    //       {companyName ? <PiBuildingsBold /> : <IoPersonSharp />}
    //     </IconCard>
    //     {companyName
    //       ? `${email} ${cuit} ${companyName}`
    //       : `${email} ${dni} ${name} ${lastname}`}
    //     <BtnClientCardFind onClick={openModal}>
    //       Agregar
    //     </BtnClientCardFind>
    //   </DivCard>
    // </CardTextNoLink>
  );
}
export default ClientCardInFind;
