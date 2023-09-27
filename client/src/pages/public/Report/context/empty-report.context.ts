import {
  UserActive,
  ElementReportActive,
  TouchedForms,
  ReportActive,
} from "@/models";
import {
  SubmitEventType,
  ChangeEventType,
  SelectEventType,
  ClickEventType,
  ChangeEventTextAreaType,
} from "@/pages";
import {
  AllReportValues,
  TouchedAllReportValues,
  ErrorsAllReportValues,
  emptyAllReportValues,
  touchedAllReportValues,
} from "..";

export interface IReportContext {
  submitValues: (e: SubmitEventType) => void;
  changeInputValues: (e: ChangeEventType) => void;
  changeInputForTextArea: (e: ChangeEventTextAreaType) => void;
  changeSelectValues: (e: SelectEventType) => void;
  inputValues: AllReportValues;
  inputTouched: TouchedAllReportValues;
  errorsInputValues: Partial<ErrorsAllReportValues> | undefined;
  setInputValues: React.Dispatch<React.SetStateAction<AllReportValues>>;
  setUserActive: React.Dispatch<React.SetStateAction<UserActive>>;
  userActive: UserActive;
  setElementReportActive: React.Dispatch<
    React.SetStateAction<ElementReportActive>
  >;
  elementReportActive: ElementReportActive;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  changePage: (e: ClickEventType) => void;
  changeForm: (e: ClickEventType) => void;
  setInputsTouched: React.Dispatch<
    React.SetStateAction<TouchedAllReportValues>
  >;
  partialErrors: () => boolean;
  typeOfToucheds: () => TouchedForms;
  formNotFound: boolean;
  changeInputForCheckbox: (e: ChangeEventType) => void;
  changeInputForImages: (e: ChangeEventType, images: string[]) => void;
  markedTouches: () => void;
  reportActive: ReportActive;
  changeInputForSchedule: (name: string, schedule: string) => void;
  creatingThirdPartyInjuredContainer: () => JSX.Element | null;
  creatingThirdPartyVehicleContainer: () => JSX.Element | null;
  amountInjured: number;
  amountVehicles: number;
  changeInputValuesNumber: (e: ChangeEventType) => void;
}

export const emptyReportContext: IReportContext = {
  submitValues: () => {},
  changeInputValues: () => {},
  changeInputForTextArea: () => {},
  changeSelectValues: () => {},
  inputValues: emptyAllReportValues,
  inputTouched: touchedAllReportValues,
  errorsInputValues: undefined,
  setInputValues: () => emptyAllReportValues,
  userActive: {
    personal: true,
    legalPersonal: false,
  },
  setElementReportActive: () => ({
    vehicleReport: true,
    electronic: false,
  }),
  setUserActive: () => ({
    personal: true,
    legalPersonal: false,
  }),
  elementReportActive: {
    vehicleReport: true,
    electronic: false,
  },
  setPage: () => 0,
  page: 0,
  changePage: () => {},
  changeForm: () => {},
  setInputsTouched: () => touchedAllReportValues,
  partialErrors: () => false,
  typeOfToucheds: () => "" as TouchedForms,
  formNotFound: false,
  changeInputForCheckbox: () => {},
  changeInputForImages: () => {},
  markedTouches: () => {},
  reportActive: {
    theft: true,
    fire: false,
    crash: false,
  },
  changeInputForSchedule: () => {},
  creatingThirdPartyInjuredContainer: () => null,
  creatingThirdPartyVehicleContainer: () => null,
  amountInjured: 0,
  amountVehicles: 0,
  changeInputValuesNumber: () => {}
};
