import { useState } from "react";
import { useWatch } from "react-hook-form";

interface Props {
  register: any;
  setValue: any;
  schemaName: string;
  control: any
}

function FormInputRange({ register, setValue, schemaName, control }: Props) {
  const slider = useWatch({
    control,
    name: schemaName 
  });
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.ceil(parseInt(e.target.value) / 10) * 10;
    setValue(schemaName, value);
  };
  return (
    <div className="flex flex-col">
      <label htmlFor="tireWear">Desgaste de la rueda*</label>
      <div className="flex gap-2">
        <input
          className="flex-1"
          type="range"
          id="tireWear"
          {...register}
          value={!slider ? 0 : slider}
          onChange={handleSliderChange}
          min="0"
          max="100"
        />
        <p className=" flex-none">{`${!slider ? 0 : slider}%`}</p>
      </div>
    </div>
  );
}
export default FormInputRange