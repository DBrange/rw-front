import { BsPhone } from "react-icons/bs";
import { AiOutlineTablet } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import { LiaCarSideSolid } from "react-icons/lia";
import { RiTruckLine } from "react-icons/ri";
import { RiMotorbikeFill } from "react-icons/ri";
import {
  DivCard,
  IconCard,
  CardText,
  SpanInspectionCard,
  CardContent,
  CardTextLabel,
  CardTextContainer,
  ContainerCardTextContainer,
} from "./InspectionCard.styled";
import { PrivateRoutes } from "@/models/types/routes";
import { onlyDate } from "@/utilities/date.utility";

interface Props {
  type: string;
  keyName: string;
  id: string;
  dashboard?: boolean;
  newCard?: boolean;
  date: Date;
}

function InspectionCard({
  type,
  keyName,
  id,
  dashboard,
  newCard,
  date,
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
          {type === "CELULAR" && <BsPhone size={30} />}
          {type === "TABLET" && <AiOutlineTablet size={30} />}
          {type === "NOTEBOOK" && <AiOutlineLaptop size={30} />}
          {type === "AUTOMOVIL" && <LiaCarSideSolid size={30} />}
          {type === "CAMIONETA" && <RiTruckLine size={30} />}
          {type === "MOTOCICLETA" && <RiMotorbikeFill size={30} />}
        </IconCard>
        <ContainerCardTextContainer>
          {type === "CELULAR" || type === "TABLET" || type === "NOTEBOOK" ? (
            <>
              <CardTextContainer>
                <CardTextLabel>MARCA:</CardTextLabel>
                <CardText>{keyName}</CardText>
              </CardTextContainer>
              <CardTextContainer>
                <CardTextLabel>FECHA:</CardTextLabel>
                <CardText>{onlyDate(date)}</CardText>
              </CardTextContainer>
            </>
          ) : (
            <>
              <CardTextContainer>
                <CardTextLabel>PATENTE:</CardTextLabel>
                <CardText>{keyName}</CardText>
              </CardTextContainer>
              <CardTextContainer>
                <CardTextLabel>FECHA:</CardTextLabel>
                <CardText>{onlyDate(date)}</CardText>
              </CardTextContainer>
            </>
          )}
        </ContainerCardTextContainer>
        <SpanInspectionCard>{newCard && "Nuevo"}</SpanInspectionCard>
      </DivCard>
    </CardContent>
  );
}
export default InspectionCard;
