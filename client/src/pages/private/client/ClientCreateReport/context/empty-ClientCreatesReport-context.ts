import {
  emptyClientCreateReportValues,
  touchedClientCreateReportValues,
} from "../../../utilities/client-create-report/objects-client-create-report.utility";
import { ElementReportActive, TouchedForms, ReportActive } from "@/models";
import {
  SubmitEventType,
  ChangeEventType,
  ChangeEventTextAreaType,
  SelectEventType,
  ClickEventType,
  ClientCreateReportValues,
  ErrorsClientCreateReportValues,
  TouchedClientCreateReportValues,
} from "@/pages";

export interface IClientCreateReportContext {
  submitValues: (e: SubmitEventType) => void;
  changeInputValues: (e: ChangeEventType) => void;
  changeInputForTextArea: (e: ChangeEventTextAreaType) => void;
  changeSelectValues: (e: SelectEventType) => void;
  inputValues: ClientCreateReportValues;
  inputTouched: TouchedClientCreateReportValues;
  errorsInputValues: Partial<ErrorsClientCreateReportValues> | undefined;
  setInputValues: React.Dispatch<
    React.SetStateAction<ClientCreateReportValues>
  >;
  setElementReportActive: React.Dispatch<
    React.SetStateAction<ElementReportActive>
  >;
  elementReportActive: ElementReportActive;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  changePage: (e: ClickEventType) => void;
  changeForm: (e: ClickEventType) => void;
  setInputsTouched: React.Dispatch<
    React.SetStateAction<TouchedClientCreateReportValues>
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

export const emptyClientCreateReportContext: IClientCreateReportContext = {
  submitValues: () => {},
  changeInputValues: () => {},
  changeInputForTextArea: () => {},
  changeSelectValues: () => {},
  inputValues: emptyClientCreateReportValues,
  inputTouched: touchedClientCreateReportValues,
  errorsInputValues: undefined,
  setInputValues: () => emptyClientCreateReportValues,
  setElementReportActive: () => ({
    vehicleReport: true,
    electronic: false,
  }),
  elementReportActive: {
    vehicleReport: true,
    electronic: false,
  },
  setPage: () => 0,
  page: 0,
  changePage: () => {},
  changeForm: () => {},
  setInputsTouched: () => touchedClientCreateReportValues,
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
  changeInputValuesNumber: () => {},
};
