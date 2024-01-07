import React from "react";
import { IoClose, IoPersonSharp } from "react-icons/io5";
import { PiBuildingsBold } from "react-icons/pi";
import {
  DivCard,
  ContainerCardTextContainer,
  IconDeleteCard,
  IconCard,
  CardTextContainer,
  CardTextLabel,
  CardText,
  SpanInspectionCard,
} from "@/pages";
import { DivCardNoEvent, DivClientCardMiProfile } from ".";
import { useNavigate } from "react-router-dom";
import { modalDeleteBroker } from "@/services/sharing-information.service";

interface Props {
  name?: string;
  lastname?: string;
  companyName?: string;
  keyName: string;
id:string
  newCard?: boolean;
}

function ClientCardMiProfile({
  name,
  lastname,
  companyName,
  keyName,
id,
  newCard,
}: Props) {
  const navigate = useNavigate()
const deleteBroker = () => {
  modalDeleteBroker.setSubject(true)
  navigate(`${id}`)
}
  
  return (
    <DivClientCardMiProfile>
      <IconDeleteCard>
        <i onClick={deleteBroker}>
          <IoClose />
        </i>
      </IconDeleteCard>
      <DivCardNoEvent>
        <DivCard>
          <IconCard>
            {companyName ? <PiBuildingsBold /> : <IoPersonSharp />}
          </IconCard>
          <ContainerCardTextContainer>
            {companyName ? (
              <>
                <CardTextContainer>
                  <CardTextLabel>COMPAÑIA:</CardTextLabel>
                  <CardText>{companyName}</CardText>
                </CardTextContainer>
                <CardTextContainer>
                  <CardTextLabel>CUIT:</CardTextLabel>
                  <CardText>{keyName}</CardText>
                </CardTextContainer>
              </>
            ) : (
              <>
                <CardTextContainer>
                  <CardTextLabel>NOMBRE:</CardTextLabel>
                  <CardText>{name}</CardText>
                </CardTextContainer>
                <CardTextContainer>
                  <CardTextLabel>APELLIDO:</CardTextLabel>
                  <CardText>{lastname}</CardText>
                </CardTextContainer>
                <CardTextContainer>
                  <CardTextLabel>DNI:</CardTextLabel>
                  <CardText>{keyName}</CardText>
                </CardTextContainer>
              </>
            )}
          </ContainerCardTextContainer>
          <SpanInspectionCard>{newCard && "Nuevo"}</SpanInspectionCard>
        </DivCard>
      </DivCardNoEvent>
    </DivClientCardMiProfile>
  );
}
export default ClientCardMiProfile;
