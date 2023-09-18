import { ClickEventType } from "../../pages";
import { BtnChoi, BtnChoiceContainer } from "./BtnChoice.styled";

interface Buttons {
  value: string;
  label: string;
  active: boolean;
}
interface Props {
  buttons: Buttons[];
  changeForm: (e: ClickEventType) => void;
}

function BtnChoice({ buttons, changeForm }: Props) {
  return (
    <BtnChoiceContainer>
      {buttons.map(({ value, label, active }) => (
        <BtnChoi
          $active={active}
          key={label}
          onClick={changeForm}
          value={value}
          type="button"
        >
          {label}
        </BtnChoi>
      ))}
    </BtnChoiceContainer>
  );
}
export default BtnChoice;
