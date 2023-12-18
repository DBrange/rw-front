import { AiOutlineLaptop, AiOutlineTablet } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { LiaCarSideSolid } from "react-icons/lia";
import { RiMotorbikeFill, RiTruckLine } from "react-icons/ri";
import { CardText, DivCard, IconCard, SpanInspectionCard } from "..";
import { PrivateRoutes } from "@/models/types/routes";

interface Props {
  type: string;
  keyName: string;
  id: string;
  dashboard?: boolean
  newCard?:boolean
}

function ReportCard({ type, keyName, id, dashboard, newCard }: Props) {
  return (
    <CardText
      to={
        dashboard
          ? `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.SINISTER_DETAIL}/${id}`
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
        <SpanInspectionCard>{newCard && "Nuevo"}</SpanInspectionCard>
      </DivCard>
    </CardText>
  );
}
export default ReportCard;
