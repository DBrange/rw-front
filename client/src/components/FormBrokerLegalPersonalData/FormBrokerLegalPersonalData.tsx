import { ChangeEventType } from "@/pages";
import { FormInput, FormRegisterLegalPersonalData } from "..";
import {
  RegisterValues,
  TouchedRegisterValues,
  ErrorsRegisterValues,
} from "@/pages/public/Register";

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
    <>
      <FormRegisterLegalPersonalData
        changeInputValues={changeInputValues}
        inputValues={inputValues}
        inputTouched={inputTouched}
        errorsInputValues={errorsInputValues}
        objectName="registerBrokerLegalPersonal"
        HTMLElement={
          <>
            <FormInput
              label="Matricula"
              value={inputValues?.registerBrokerLegalPersonal?.enrollment}
              touched={inputTouched?.registerBrokerLegalPersonal?.enrollment}
              error={errorsInputValues?.registerBrokerLegalPersonal?.enrollment}
              handleChange={changeInputValues}
              name={`registerBrokerLegalPersonal.enrollment`}
              id={`registerBrokerLegalPersonal.enrollment`}
              type="text"
              placeholder="Ingresar matricula"
            />
            <FormInput
              label="Razon social"
              value={inputValues?.registerBrokerLegalPersonal?.businessName}
              touched={inputTouched?.registerBrokerLegalPersonal?.businessName}
              error={
                errorsInputValues?.registerBrokerLegalPersonal?.businessName
              }
              handleChange={changeInputValues}
              name={`registerBrokerLegalPersonal.businessName`}
              id={`registerBrokerLegalPersonal.businessName`}
              type="text"
              placeholder="Ingresar razon social"
            />
          </>
        }
      ></FormRegisterLegalPersonalData>
    </>
  );
}
export default FormBrokerLegalPersonalData;