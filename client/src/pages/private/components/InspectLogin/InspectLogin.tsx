import { CardText, DivCard, IconCard, SectionCard } from "./InspectLogin.styled";
import { BsPhone } from "react-icons/bs";

function InspectLogin() {
  return (
    <SectionCard>
      <DivCard>
        <IconCard>
          <BsPhone size={30} />
        </IconCard>
        <CardText>NOTEBOOK nosecuanto</CardText>
      </DivCard>
    </SectionCard>
  );
}
export default InspectLogin;
