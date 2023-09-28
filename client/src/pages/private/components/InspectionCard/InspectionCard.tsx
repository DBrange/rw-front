import { BsPhone } from "react-icons/bs";
import { AiOutlineTablet } from "react-icons/ai";
import { AiOutlineLaptop } from "react-icons/ai";
import { LiaCarSideSolid } from "react-icons/lia";
import { RiTruckLine } from "react-icons/ri";
import { RiMotorbikeFill } from "react-icons/ri";
import { DivCard, IconCard, CardText } from "./InspectionCard.styled";

interface Props{
  type: string;
  keyName: string;
}

function InspectionCard({type, keyName}: Props) {
  return (
    <DivCard>
      <IconCard>
        {type === "CELULAR" && <BsPhone size={30} />}
        {type === "TABLET" && <AiOutlineTablet size={30} />}
        {type === "NOTEBOOK" && <AiOutlineLaptop size={30} />}
        {type === "AUTOMOVIL" && <LiaCarSideSolid size={30} />}
        {type === "CAMIONETA" && <RiTruckLine size={30} />}
        {type === "MOTOCICLETA" && <RiMotorbikeFill size={30} />}
      </IconCard>
      <CardText>{`${type} ${keyName}`}</CardText>
    </DivCard>
  );
}
export default InspectionCard