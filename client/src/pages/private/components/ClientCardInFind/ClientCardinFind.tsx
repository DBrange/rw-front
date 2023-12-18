import { IoPersonSharp } from "react-icons/io5";
import { PiBuildingsBold } from "react-icons/pi";
import {
  CardText,
  CardTextContainer,
  CardTextLabel,
  CardTextNoLink,
  ContainerCardTextContainer,
  DivCard,
  IconCard,
  SpanInspectionCard,
} from "..";
import { BtnClientCardFind } from "./ClientCardFind.styled";
import {
  modalSendRequest,
  modalSentService,
} from "@/services/sharing-information.service";
import { PrivateRoutes } from "@/models/types/routes";
import { useState } from "react";

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
    <CardTextNoLink>
      <DivCard $noHover>
        <IconCard>
          {companyName ? <PiBuildingsBold /> : <IoPersonSharp />}
        </IconCard>
        <ContainerCardTextContainer>
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
        </ContainerCardTextContainer>
        {/* <SpanInspectionCard>{newCard && "Nuevo"}</SpanInspectionCard> */}
      </DivCard>
    </CardTextNoLink>

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
