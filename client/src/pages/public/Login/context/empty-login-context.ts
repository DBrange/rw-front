import { InputValues, TouchedInputValues } from "..";
import { ChangeEventType, SubmitEventType } from "../../Inspect";

export interface ILoginContext {
  loginData: (e: ChangeEventType) => void;
  submitData: (e: SubmitEventType) => void;
  inputValues: InputValues;
  setInputValues: React.Dispatch<InputValues>;
  errorValues: Partial<InputValues> | undefined
  touchedValues: TouchedInputValues;
  formNotFound: boolean
}

export const emptyLoginContext: ILoginContext = {
  loginData: () => {},
  submitData: () => {},
  inputValues: { email: "", password: "" },
  setInputValues: () => {},
  errorValues: {},
  touchedValues: { email: false, password: false },
  formNotFound: false
};
