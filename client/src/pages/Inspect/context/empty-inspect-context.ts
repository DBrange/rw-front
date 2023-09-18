import { ElementActive, TouchedForms, UserActive } from "@/models";
import {
  AllInspectValues,
  ChangeEventType,
  ClickEventType,
  ErrorsAllInspectValues,
  SelectEventType,
  SubmitEventType,
  TouchedAllInspectValues,
} from "..";
import { emptyAllInspectValues, touchedAllInspectValues } from "../utilities";
export interface IInspectContext {
  submitValues: (e: SubmitEventType) => void;
  changeInputValues: (e: ChangeEventType) => void;
  changeSelectValues: (e: SelectEventType) => void;
  inputValues: AllInspectValues;
  inputTouched: TouchedAllInspectValues;
  errorsInputValues: Partial<ErrorsAllInspectValues> | undefined;
  setInputValues: React.Dispatch<React.SetStateAction<AllInspectValues>>;
  setUserActive: React.Dispatch<React.SetStateAction<UserActive>>;
  userActive: UserActive;
  setElementActive: React.Dispatch<React.SetStateAction<ElementActive>>;
  elementActive: ElementActive;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  changePage: (e: ClickEventType) => void;
  changeForm: (e: ClickEventType) => void;
  setInputsTouched: React.Dispatch<
    React.SetStateAction<TouchedAllInspectValues>
  >;
  partialErrors: () => boolean;
  typeOfToucheds: () => TouchedForms;
  formNotFound: boolean;
  changeInputForCheckbox: (e: ChangeEventType) => void;
  changeInputForImages: (e: ChangeEventType, images: string[]) => void;
  markedTouches: () => void;
  changeInputValuesNumber: (e: ChangeEventType) => void;
}

export const emptyInspectContext: IInspectContext = {
  submitValues: () => {},
  changeInputValues: () => {},
  changeSelectValues: () => {},
  inputValues: emptyAllInspectValues,
  inputTouched: touchedAllInspectValues,
  errorsInputValues: undefined,
  setInputValues: () => emptyAllInspectValues,
  userActive: {
    personal: true,
    legalPersonal: false,
  },
  setElementActive: () => ({
    vehicle: true,
    electronic: false,
  }),
  setUserActive: () => ({
    personal: true,
    legalPersonal: false,
  }),
  elementActive: {
    vehicle: true,
    electronic: false,
  },
  setPage: () => 0,
  page: 0,
  changePage: () => {},
  changeForm: () => {},
  setInputsTouched: () => touchedAllInspectValues,
  partialErrors: () => false,
  typeOfToucheds: () => "" as TouchedForms,
  formNotFound: false,
  changeInputForCheckbox: () => {},
  changeInputForImages: () => {},
  markedTouches: () => {},
  changeInputValuesNumber: () => {},
};
