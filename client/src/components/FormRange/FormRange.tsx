import { useState } from "react";
import { ChangeEventType } from "../../pages";
import { Label } from "@/styledComponents";
import { FormRangeContainer, RangeContainer, PRange, Range } from ".";

interface Props {
  label: string;
  name: string;
  id: string;
  changeInputValues: (e: ChangeEventType) => void;
}

function FormRange({ label, name, id, changeInputValues }: Props) {
  const [slider, setSlider] = useState(0);

  const SliderChange = (e: ChangeEventType) => {
    const value = Math.ceil(parseInt(e.target.value) / 10) * 10;
    setSlider(value);
    // const [type, key] = name.split(".");
    changeInputValues(e);
  };
  return (
    <FormRangeContainer>
      <Label $error={false}>{label}</Label>
      <RangeContainer>
        <Range
          name={name}
          type="range"
          id={id}
          value={slider}
          onChange={SliderChange}
          min="0"
          max="100"
        />
        <PRange>{slider}%</PRange>
      </RangeContainer>
    </FormRangeContainer>
  );
}
export default FormRange;
