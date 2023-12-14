import { IoPersonSharp } from "react-icons/io5";
import { PiBuildingsBold } from "react-icons/pi";
import { CardTextNoLink, DivCard, IconCard } from "..";
import { BtnClientCardFind } from "./ClientCardFind";
import { modalSendRequest, modalSentService } from "@/services/sharing-information.service";

interface Props {
  name?: string;
  lastname?: string;
  companyName?: string;
  dni?: string;
  cuit?: string;
  email?: string;
  id?: string;
  // setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ClientCardInFind({
  name,
  lastname,
  companyName,
  dni,
  cuit,
  email,
  id,
}: Props) {
  const openModal = () => {
    modalSendRequest.setSubject(true);
  }
  return (
    <CardTextNoLink>
      <DivCard>
        <IconCard>
          {companyName ? <PiBuildingsBold /> : <IoPersonSharp />}
        </IconCard>
        {companyName
          ? `${email} ${cuit} ${companyName}`
          : `${email} ${dni} ${name} ${lastname}`}
        <BtnClientCardFind onClick={openModal}>
          Agregar
        </BtnClientCardFind>
      </DivCard>
    </CardTextNoLink>
  );
}
export default ClientCardInFind;
