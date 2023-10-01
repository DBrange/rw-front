import { ChangeEventType } from "@/pages";
import { FormRegisterLegalPersonalData } from "..";
import {
  RegisterValues,
  TouchedRegisterValues,
  ErrorsRegisterValues,
} from "@/pages/public/Register";
import { SectionFormContainer } from "@/styledComponents";

interface Props {
  changeInputValues: (e: ChangeEventType) => void;
  inputValues: RegisterValues;
  inputTouched: TouchedRegisterValues;
  errorsInputValues: Partial<ErrorsRegisterValues> | undefined;
}
function FormBrokerLegalPersonalData({
  changeInputValues,
  inputValues,
  inputTouched,
  errorsInputValues,
}: Props) {
  return (
    <SectionFormContainer>
      <FormRegisterLegalPersonalData
        changeInputValues={changeInputValues}
        inputValues={inputValues}
        inputTouched={inputTouched}
        errorsInputValues={errorsInputValues}
      ></FormRegisterLegalPersonalData>
    </SectionFormContainer>
  );
}
export default FormBrokerLegalPersonalData;
