import { ThirdPartyVehicleValues, ErrorsThirdPartyVehicleValues, TouchedThirdPartyVehicleValues } from "../third-party-vehicle";


export interface AllCrashVehiclesValues {
  thirdPartyVehiclesInfo: ThirdPartyVehicleValues[];
}

export interface ErrorsAllCrashVehiclesValues {
  thirdPartyVehiclesInfo: Partial<ErrorsThirdPartyVehicleValues>[];
}

export interface TouchedAllCrashVehiclesValues {
  thirdPartyVehiclesInfo: TouchedThirdPartyVehicleValues[];
}