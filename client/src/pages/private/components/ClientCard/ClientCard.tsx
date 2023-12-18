import { IoPersonSharp } from "react-icons/io5";
import { PiBuildingsBold } from "react-icons/pi";
import { CardText, DivCard, IconCard, SpanInspectionCard } from "..";
import { PrivateRoutes } from "@/models/types/routes";

interface Props {
  name?: string;
  lastname?: string;
  companyName?: string;
  keyName: string;
  id: string;
  dashboard?: boolean;
  newCard?: boolean
}

function ClientCard({
  name,
  lastname,
  companyName,
  keyName,
  id,
  dashboard,
  newCard
}: Props) {
  return (
    <CardText
      to={
        dashboard
          ? `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CLIENTS_OF_BROKER}/${id}`
          : `${id}`
      }
    >
      <DivCard>
        <IconCard>
          {companyName ? <PiBuildingsBold /> : <IoPersonSharp />}
        </IconCard>
        {companyName
          ? `${companyName} ${keyName}`
          : `${name} ${lastname} ${keyName}`}
        <SpanInspectionCard>{newCard && "Nuevo"}</SpanInspectionCard>
      </DivCard>
    </CardText>
  );
}
export default ClientCard;
