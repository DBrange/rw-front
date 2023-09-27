import {
  AllCrashVehiclesValues,
  ErrorsAllCrashVehiclesValues,
  ErrorsThirdPartyVehicleValues,
} from "@/models";
import { validateThirdPartyVehicle } from "..";

export const validateAllCrashVehicles = ({
  thirdPartyVehicleInfo,
}: AllCrashVehiclesValues) => {
  const errors: Partial<ErrorsAllCrashVehiclesValues> | null = {};

  let thirdPartyVehiclesErrors:
    | Partial<ErrorsThirdPartyVehicleValues>[]
    | undefined;

  if (thirdPartyVehicleInfo.length > 0) {
    thirdPartyVehiclesErrors = thirdPartyVehicleInfo.map((vehicle) =>
      validateThirdPartyVehicle(vehicle)
    );

    errors.thirdPartyVehicleInfo = thirdPartyVehiclesErrors;
  }

  return errors;
};
