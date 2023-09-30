import { ChangeEventType, SelectEventType } from "@/pages";
import { FormInput, FormPersonalData } from "..";
import { RegisterValues, TouchedRegisterValues, ErrorsRegisterValues } from "@/pages/public/Register";
import { SectionFormContainer } from "@/styledComponents";
interface Props {
  changeInputValues: (e: ChangeEventType) => void;
  inputValues: RegisterValues;
  inputTouched: TouchedRegisterValues;
  errorsInputValues: Partial<ErrorsRegisterValues> | undefined;
  changeSelectValues: (e: SelectEventType) => void;
}
function FormBrokerPersonalData({
  changeInputValues,
  inputValues,
  inputTouched,
  errorsInputValues,
  changeSelectValues,
}: Props) {
  return (
    <SectionFormContainer>
      <FormPersonalData
        changeInputValues={changeInputValues}
        inputValues={inputValues}
        inputTouched={inputTouched}
        errorsInputValues={errorsInputValues}
        changeSelectValues={changeSelectValues}
      />
     
    </SectionFormContainer>
  );
}
export default FormBrokerPersonalData;
