import { IoPersonSharp } from "react-icons/io5";
import { PiBuildingsBold } from "react-icons/pi";
import { CardText, DivCard, IconCard } from "..";

interface Props {
  name?: string;
  lastname?: string;
  companyName?: string;
  keyName: string;
  id: string;
}

function ClientCard({ name, lastname, companyName, keyName, id }: Props) {
  return (
    <CardText to={`${id}`}>
      <DivCard>
        <IconCard>
          {companyName ? <PiBuildingsBold /> : <IoPersonSharp />}
        </IconCard>
        {companyName
          ? `${companyName} ${keyName}`
          : `${name} ${lastname} ${keyName}`}
        {/* {`${name} ${lastname} ${keyName}`} */}
      </DivCard>
    </CardText>
  );
}
export default ClientCard;
