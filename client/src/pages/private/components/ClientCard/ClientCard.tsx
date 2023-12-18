import { IoPersonSharp } from "react-icons/io5";
import { PiBuildingsBold } from "react-icons/pi";
import {
  CardContent,
  CardText,
  CardTextContainer,
  CardTextLabel,
  ContainerCardTextContainer,
  DivCard,
  IconCard,
  SpanInspectionCard,
} from "..";
import { PrivateRoutes } from "@/models/types/routes";
import { AiOutlineTablet, AiOutlineLaptop } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { LiaCarSideSolid } from "react-icons/lia";
import { RiTruckLine, RiMotorbikeFill } from "react-icons/ri";

interface Props {
  name?: string;
  lastname?: string;
  companyName?: string;
  keyName: string;
  id: string;
  dashboard?: boolean;
  newCard?: boolean;
}

function ClientCard({
  name,
  lastname,
  companyName,
  keyName,
  id,
  dashboard,
  newCard,
}: Props) {
  return (
    <CardContent
      to={
        dashboard
          ? `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.ALL_INSURED}/${id}`
          : `${id}`
      }
    >
      <DivCard>
        <IconCard>
          {companyName ? <PiBuildingsBold /> : <IoPersonSharp />}
        </IconCard>
        <ContainerCardTextContainer>
          {companyName ? (
            <>
              <CardTextContainer>
                <CardTextLabel>COMPANIA:</CardTextLabel>
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
    </CardContent>
  );
}
export default ClientCard;
