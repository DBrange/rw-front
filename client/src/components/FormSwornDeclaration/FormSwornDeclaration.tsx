import { ChangeEventType, checkboxService } from "@/pages";
import { Label } from "@/styledComponents";
import { CheckboxWrapper, CheckboxBox, InputCheckbox, Instructions } from "..";


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
  return (
    <CheckboxWrapper>
      <CheckboxBox>
        <Label $error={false}>{label}</Label>
        <InputCheckbox type="checkbox" name={name} id={id} onChange={check} />
      </CheckboxBox>
      {instructions && <Instructions>{instructions}</Instructions>}
    </CheckboxWrapper>
  );
}
export default FormSwornDeclaration;
