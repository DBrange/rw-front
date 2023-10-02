import { ElementReportActive, TouchedForms, ReportActive } from "@/models";
import {
  emptyClientInspectedCreateReportValues,
  touchedClientInspectedCreateReportValues,
} from "../../../utilities/client-inspected-create-report/objects-client-inspected-create-report";
import {
  SubmitEventType,
  ChangeEventType,
  ChangeEventTextAreaType,
  SelectEventType,
  ClickEventType,
  ClientInspectedCreateReportValues,
  ErrorsClientInspectedCreateReportValues,
  TouchedClientInspectedCreateReportValues,
} from "@/pages";

export interface IClientInspectedCreateReportContext {
  submitValues: (e: SubmitEventType) => void;
  changeInputValues: (e: ChangeEventType) => void;
  changeInputForTextArea: (e: ChangeEventTextAreaType) => void;
  changeSelectValues: (e: SelectEventType) => void;
  inputValues: ClientInspectedCreateReportValues;
  inputTouched: TouchedClientInspectedCreateReportValues;
  errorsInputValues:
    | Partial<ErrorsClientInspectedCreateReportValues>
    | undefined;
  setInputValues: React.Dispatch<
    React.SetStateAction<ClientInspectedCreateReportValues>
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
    React.SetStateAction<TouchedClientInspectedCreateReportValues>
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

export const emptyClientInspectedCreateReportContext: IClientInspectedCreateReportContext =
  {
    submitValues: () => {},
    changeInputValues: () => {},
    changeInputForTextArea: () => {},
    changeSelectValues: () => {},
    inputValues: emptyClientInspectedCreateReportValues,
    inputTouched: touchedClientInspectedCreateReportValues,
    errorsInputValues: undefined,
    setInputValues: () => emptyClientInspectedCreateReportValues,
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
    setInputsTouched: () => touchedClientInspectedCreateReportValues,
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
