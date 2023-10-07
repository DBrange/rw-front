import { ElementActive, TouchedForms } from "@/models";
import {
  ChangeEventType,
  ClickEventType,
  ClientCreateInspectionValues,
  ErrorsClientCreateInspectionValues,
  SelectEventType,
  SubmitEventType,
  TouchedClientCreateInspectionValues,
} from "@/pages";
import { emptyClientCreateInspectionValues, touchedTouchedClientCreateInspectionValues } from '../../../utilities/client-create-inspection/objects-client-create-inspection.utility';

export interface IClientCreateInspectionContext {
  submitValues: (e: SubmitEventType) => void;
  changeInputValues: (e: ChangeEventType) => void;
  changeSelectValues: (e: SelectEventType) => void;
  inputValues: ClientCreateInspectionValues;
  inputTouched: TouchedClientCreateInspectionValues;
  errorsInputValues: Partial<ErrorsClientCreateInspectionValues> | undefined;
  setInputValues: React.Dispatch<
    React.SetStateAction<ClientCreateInspectionValues>
  >;
  setElementActive: React.Dispatch<React.SetStateAction<ElementActive>>;
  elementActive: ElementActive;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  changePage: (e: ClickEventType) => void;
  changeForm: (e: ClickEventType) => void;
  setInputsTouched: React.Dispatch<
    React.SetStateAction<TouchedClientCreateInspectionValues>
  >;
  partialErrors: () => boolean;
  typeOfToucheds: () => TouchedForms;
  formNotFound: boolean;
  changeInputForCheckbox: (e: ChangeEventType) => void;
  changeInputForImages: (e: ChangeEventType, images: string[]) => void;
  markedTouches: () => void;
  changeInputValuesNumber: (e: ChangeEventType) => void;
}

export const emptyClientCreateInspectionContext: IClientCreateInspectionContext =
  {
    submitValues: () => {},
    changeInputValues: () => {},
    changeSelectValues: () => {},
    inputValues: emptyClientCreateInspectionValues,
    inputTouched: touchedTouchedClientCreateInspectionValues,
    errorsInputValues: undefined,
    setInputValues: () => emptyClientCreateInspectionValues,
    setElementActive: () => ({
      vehicle: true,
      electronic: false,
    }),
    elementActive: {
      vehicle: true,
      electronic: false,
    },
    setPage: () => 0,
    page: 0,
    changePage: () => {},
    changeForm: () => {},
    setInputsTouched: () => touchedTouchedClientCreateInspectionValues,
    partialErrors: () => false,
    typeOfToucheds: () => "" as TouchedForms,
    formNotFound: false,
    changeInputForCheckbox: () => {},
    changeInputForImages: () => {},
    markedTouches: () => {},
    changeInputValuesNumber: () => {},
  };
