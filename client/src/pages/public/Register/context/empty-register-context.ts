import { IUserType, UserActive } from "@/models";
import { ChangeEventType, ClickEventType, SelectEventType, SubmitEventType, } from "@/pages";
import { RegisterValues, TouchedRegisterValues, ErrorsRegisterValues } from "..";
import { emptyRegisterValues, touchedRegisterValues } from '../utilities/objects-register.utility';

export interface IRegisterContext {
  submitValues: (e: SubmitEventType) => void;
  page: number;
  changePage: (e: ClickEventType) => void;
  partialErrors: () => boolean;
  markedTouches: () => void;
  userActive: UserActive;
  changeForm: (e: ClickEventType) => void;
  inputValues: RegisterValues;
  changeInputValues: (e: ChangeEventType) => void;
  inputTouched: TouchedRegisterValues;
  errorsInputValues: Partial<ErrorsRegisterValues> | undefined;
  changeSelectValues: (e: SelectEventType) => void;
  changeInputForCheckbox: (e: ChangeEventType) => void;
  userType: IUserType
}

export const emptyRegisterContext: IRegisterContext = {
  submitValues: () => {},
  page: 0,
  changePage: () => {},
  partialErrors: () => false,
  markedTouches: () => {},
  userActive: {
    personal: true,
    legalPersonal: false,
  },
  changeForm: () => {},
  inputValues: emptyRegisterValues,
  changeInputValues: () => {},
  inputTouched: touchedRegisterValues,
  errorsInputValues: undefined,
  changeSelectValues: () => {},
  changeInputForCheckbox: () => {},
  userType: {client: true, broker: false}
};