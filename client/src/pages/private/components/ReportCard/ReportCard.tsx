import { AiOutlineLaptop, AiOutlineTablet } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { LiaCarSideSolid } from "react-icons/lia";
import { RiMotorbikeFill, RiTruckLine } from "react-icons/ri";
import { CardText, DivCard, IconCard } from "..";

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
