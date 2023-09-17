import { checkboxService } from '@/pages';
import {
  AllInspectValues,
  ChangeEventType,
} from "../../pages";
import { Label } from '@/styledComponents';
import { CheckboxWrapper, CheckboxBox, InputCheckbox, Instructions } from '.';


interface Props {
  changeInputForCheckbox: (e: ChangeEventType) => void;
  label: string;
  name: string;
  id: string;
  instructions: string;
}

function FormCheckbox({
  changeInputForCheckbox,
  label,
  name,
  id,
  instructions,
}: Props) {
  const check = (e: ChangeEventType) => {
    const { checked } = e.currentTarget;
    // const [type, key] = name.split(".");

    changeInputForCheckbox(e)

    checkboxService.setSubject(checked);
  };
  return (
    <CheckboxWrapper>
      <CheckboxBox>
        <Label $error={false}>{label}</Label>
        <InputCheckbox type="checkbox" name={name} id={id} onChange={check} />
      </CheckboxBox>
      {instructions && (
        <Instructions className="block text-xs text-gray-400">
          {instructions}
        </Instructions>
      )}
    </CheckboxWrapper>
  );
}
export default FormCheckbox;
