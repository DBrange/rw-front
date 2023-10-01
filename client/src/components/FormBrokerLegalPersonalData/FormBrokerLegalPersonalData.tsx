import { ChangeEventType } from "@/pages";
import { FormLegalPersonalData } from "..";
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
      <FormLegalPersonalData
        changeInputValues={changeInputValues}
        inputValues={inputValues}
        inputTouched={inputTouched}
        errorsInputValues={errorsInputValues}
      ></FormLegalPersonalData>
    </SectionFormContainer>
  );
}
export default FormBrokerLegalPersonalData;
