import { BsPhone } from "react-icons/bs";
import { AiOutlineTablet } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import { LiaCarSideSolid } from "react-icons/lia";
import { RiTruckLine } from "react-icons/ri";
import { RiMotorbikeFill } from "react-icons/ri";
import { DivCard, IconCard, CardText, SpanInspectionCard } from "./InspectionCard.styled";
import { PrivateRoutes } from "@/models/types/routes";

interface Props {
  type: string;
  keyName: string;
  id: string;
  dashboard?: boolean;
  newCard?:boolean
}

function InspectionCard({ type, keyName, id, dashboard,newCard }: Props) {
  return (
    <CardText
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
        {`${type} ${keyName}`}
      <SpanInspectionCard>{newCard && 'Nuevo'}</SpanInspectionCard>
      </DivCard>
    </CardText>
  );
}
export default InspectionCard;
