import { ChangeEventType, ClickEventType } from "@/pages";
import { Label } from "@/styledComponents";
import { CheckboxWrapper, CheckboxBox, InputCheckbox, Instructions } from "..";
import { checkboxService } from "@/services/sharing-information.service";
import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { DivButtonFormSwornDeclaration } from "./FormSwornDeclaration.styled";

interface Props {
  changeInputForCheckbox: (e: ChangeEventType) => void;
  label: string;
  name: string;
  id: string;
  instructions: string;
}

function FormSwornDeclaration({
  changeInputForCheckbox,
  label,
  name,
  id,
  instructions,
}: Props) {
  const check = (e: ChangeEventType) => {
    changeInputForCheckbox(e);

    checkboxService.setSubject(e.currentTarget.checked);
  };

  const [openDetail, setopenDetail] = useState<boolean>(false);

  const seeDetail = (e: ClickEventType) => {
    setopenDetail(el => !el)
    

  }

  return (
    <CheckboxWrapper>
      <CheckboxBox>
        <Label $error={false}>{label}</Label>
        <InputCheckbox type="checkbox" name={name} id={id} onChange={check} />
      </CheckboxBox>
      {instructions && (
        <>
          <DivButtonFormSwornDeclaration $open={openDetail} onClick={seeDetail}>
            <span>Ver detalle</span>
            <i>
              <MdOutlineArrowForwardIos size={10} />
            </i>
          </DivButtonFormSwornDeclaration>
          {openDetail && (
            <Instructions>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto soluta doloribus alias delectus dolorem expedita ex
              illum laborum provident! Vero quo doloremque earum. Sint iusto
              deserunt, eveniet accusantium temporibus minima. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Architecto soluta
              doloribus alias delectus dolorem expedita ex illum laborum
              provident! Vero quo doloremque earum. Sint iusto deserunt, eveniet
              accusantium temporibus minima.
            </Instructions>
          )}
        </>
      )}
    </CheckboxWrapper>
  );
}
export default FormSwornDeclaration;
