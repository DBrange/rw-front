import { BsPhone } from "react-icons/bs";
import { AiOutlineTablet } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import { LiaCarSideSolid } from "react-icons/lia";
import { RiTruckLine } from "react-icons/ri";
import { RiMotorbikeFill } from "react-icons/ri";
import { PrivateRoutes } from "@/models/types/routes";
import { CardText, DivCard, IconCard } from "..";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

interface Props {
  type: string;
  keyName: string;
  id: string;
}

function ReportCard({ type, keyName, id }: Props) {
  return (
    <CardText
      to={`${id}`}
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
      </DivCard>
    </CardText>
  );
}
export default ReportCard;
