import { ChangeEventType, SelectEventType } from "@/pages";
import {
  ErrorsRegisterValues,
  RegisterValues,
  TouchedRegisterValues,
} from "@/pages/public/Register";
import { FormInput, FormRegisterPersonalData } from "..";
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
    <>
      <FormRegisterPersonalData
        changeInputValues={changeInputValues}
        inputValues={inputValues}
        inputTouched={inputTouched}
        errorsInputValues={errorsInputValues}
        changeSelectValues={changeSelectValues}
        objectName="registerBrokerPersonal"
        HTMLElement={
          <>
            <FormInput
              label="Matricula"
              value={inputValues?.registerBrokerPersonal?.enrollment}
              touched={inputTouched?.registerBrokerPersonal?.enrollment}
              error={errorsInputValues?.registerBrokerPersonal?.enrollment}
              handleChange={changeInputValues}
              name={`registerBrokerPersonal.enrollment`}
              id={`registerBrokerPersonal.enrollment`}
              type="text"
              placeholder="Ingresar matricula"
            />
            <FormInput
              label="Razon social"
              value={inputValues?.registerBrokerPersonal?.bussinesName}
              touched={inputTouched?.registerBrokerPersonal?.bussinesName}
              error={errorsInputValues?.registerBrokerPersonal?.bussinesName}
              handleChange={changeInputValues}
              name={`registerBrokerPersonal.bussinesName`}
              id={`registerBrokerPersonal.bussinesName`}
              type="text"
              placeholder="Ingresar razon social"
            />
          </>
        }
      />
    </>
  );
}
export default FormBrokerPersonalData;
