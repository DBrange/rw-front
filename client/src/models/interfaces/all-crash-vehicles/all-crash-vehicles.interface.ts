import {
  ThirdPartyVehicleValues,
  ErrorsThirdPartyVehicleValues,
  TouchedThirdPartyVehicleValues,
} from "../third-party-vehicle";

export interface AllCrashVehiclesValues {
  thirdPartyVehicleInfo: ThirdPartyVehicleValues[];
}

export interface ErrorsAllCrashVehiclesValues {
  thirdPartyVehicleInfo: Partial<ErrorsThirdPartyVehicleValues>[];
}

export interface TouchedAllCrashVehiclesValues {
  thirdPartyVehicleInfo: TouchedThirdPartyVehicleValues[];
}
