import { FireVehicleValues, ErrorsFireVehicleValues, TouchedFireVehicleValues } from "../fire-vehicle";

export interface CrashVehicleValues extends FireVehicleValues {
  amountVehicles: number;
  friendlyStatement: boolean;
}
export interface ErrorsCrashVehicleValues extends ErrorsFireVehicleValues {
  amountVehicles: string;
}
export interface TouchedCrashVehicleValues extends TouchedFireVehicleValues {
  amountVehicles: boolean;
}
