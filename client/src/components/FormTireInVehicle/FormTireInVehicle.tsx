import { FormInput, FormRange } from "..";
import {
  AllInspectValues,
  ChangeEventType,
  ErrorsAllInspectValues,
  TouchedAllInspectValues,
} from "@/pages";

interface Props {
  inputValues: AllInspectValues;
  inputTouched: TouchedAllInspectValues;
  changeInputValues: (e: ChangeEventType) => void;
  errorsInputValues: Partial<ErrorsAllInspectValues> | undefined;
}

export default function FormTireInVehicle({
  inputValues,
  inputTouched,
  changeInputValues,
  errorsInputValues,
}: Props) {
  return (
    <>
      <FormInput
        label="Marca de los neumaticos*"
        value={inputValues?.vehicle?.tireBrand}
        touched={inputTouched?.vehicle?.tireBrand}
        error={errorsInputValues?.vehicle?.tireBrand}
        handleChange={changeInputValues}
        name="vehicle.tireBrand"
        id="vehicle.tireBrand"
        type="text"
        placeholder="Ingresar marca de neumaticos"
      />
      <FormInput
        label="Tamaño de neumaticos*"
        value={inputValues?.vehicle?.tireSize}
        touched={inputTouched?.vehicle?.tireSize}
        error={errorsInputValues?.vehicle?.tireSize}
        handleChange={changeInputValues}
        name="vehicle.tireSize"
        id="vehicle.tireSize"
        type="text"
        placeholder="Ingresar tamaño de neumaticos"
      />
      <FormRange
        label="Desgaste de neumaticos*"
        id="vehicle.tireWear"
        name="vehicle.tireWear"
        changeInputValues={changeInputValues}
      />
    </>
  );
}
