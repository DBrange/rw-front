import { Label } from "@/styledComponents";
import { CheckboxBox, CheckboxWrapper, InputCheckbox, Instructions } from "..";
import { ChangeEventType } from "../../pages";
import { checkboxService } from "@/services/sharing-information.service";

interface Props {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  changeInputForCheckbox: (e: ChangeEventType) => void;
  label: string;
  name: string;
  id: string;
  instructions: string;
}

function FormCheckboxOpenClose({
  checked,
  setChecked,
  changeInputForCheckbox,
  label,
  name,
  id,
  instructions,
}: Props) {
  const check = (e: ChangeEventType) => {
    const { checked } = e.currentTarget;
    // const [type, key] = name.split(".");

    changeInputForCheckbox(e);

    checkboxService.setSubject(checked);

    setChecked(checked);
  };
  return (
    <CheckboxWrapper>
      <CheckboxBox>
        <Label $error={false}>{label}</Label>
        <InputCheckbox
          type="checkbox"
          name={name}
          id={id}
          onChange={check}
          checked={checked}
        />
      </CheckboxBox>
      {instructions && (
        <Instructions className="block text-xs text-gray-400">
          {instructions}
        </Instructions>
      )}
    </CheckboxWrapper>
  );
}
export default FormCheckboxOpenClose;
