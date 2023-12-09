import { useState } from "react";
import {
  FormInput,
  FormOptional,
  FormPhoneData,
  FormSelectElectronic,
} from "..";
import { SectionFormContainer } from "@/styledComponents";
import { ChangeEventType, AllInspectValues, ClientCreateInspectionValues, TouchedAllInspectValues, TouchedClientCreateInspectionValues, ErrorsAllInspectValues, ErrorsClientCreateInspectionValues, SelectEventType } from "@/pages";

interface Porps {
  changeInputValues: (e: ChangeEventType) => void;
  inputValues: any //AllInspectValues | ClientCreateInspectionValues;
  inputTouched: any //TouchedAllInspectValues | TouchedClientCreateInspectionValues;
  errorsInputValues:
    | Partial<ErrorsAllInspectValues>
    | Partial<ErrorsClientCreateInspectionValues>
    | undefined;
  changeSelectValues: (e: SelectEventType) => void;
}

function FormElectronicData({
  changeInputValues,
  inputValues,
  inputTouched,
  errorsInputValues,
  changeSelectValues,
}: Porps) {
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const electronicType = (value: string) => {
    if (value === "CELULAR") {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  };
  return (
    <SectionFormContainer>
      <FormSelectElectronic
        label="Tipo de electodomestico"
        electronicType={electronicType}
        value={inputValues?.electronic?.type}
        touched={inputTouched?.electronic?.type}
        error={errorsInputValues?.electronic?.type}
        handleChange={changeSelectValues}
        name="electronic.type"
        id="electronic.type"
        options={["CELULAR", "TABLET", "NOTEBOOK"]}
      />
      <FormOptional
        children={
          <FormPhoneData
            changeInputValues={changeInputValues}
            inputValues={inputValues}
            inputTouched={inputTouched}
            errorsInputValues={errorsInputValues}
          />
        }
        checked={isPhone}
      />
      <FormInput
        label="Marca*"
        value={inputValues.electronic.brand}
        touched={inputTouched?.electronic?.brand}
        error={errorsInputValues?.electronic?.brand}
        handleChange={changeInputValues}
        name="electronic.brand"
        id="electronic.brand"
        type="text"
        placeholder="Ingresar marca"
      />
      <FormInput
        label="Modelo*"
        value={inputValues.electronic.model}
        touched={inputTouched?.electronic?.model}
        error={errorsInputValues?.electronic?.model}
        handleChange={changeInputValues}
        name="electronic.model"
        id="electronic.model"
        type="text"
        placeholder="Ingresar modelo"
      />
    </SectionFormContainer>
  );
}
export default FormElectronicData;
