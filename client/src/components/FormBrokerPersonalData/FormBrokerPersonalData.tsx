import { ChangeEventType, SelectEventType } from "@/pages";
import { ErrorsRegisterValues, RegisterValues, TouchedRegisterValues } from "@/pages/public/Register";
import { SectionFormContainer } from "@/styledComponents";
import { FormRegisterPersonalData } from "..";
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
      <FormRegisterPersonalData
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
