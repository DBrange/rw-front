import { AllCrashVehiclesValues, ErrorsAllCrashVehiclesValues, ErrorsThirdPartyVehicleValues } from "@/models";
import { validateThirdPartyVehicle } from "..";


export const validateAllCrashVehicles = ({
  thirdPartyVehiclesInfo,
}: AllCrashVehiclesValues) => {
  const errors: Partial<ErrorsAllCrashVehiclesValues> | null = {};

  let thirdPartyVehiclesErrors:
      | Partial<ErrorsThirdPartyVehicleValues>[]
    | undefined
  
  if (thirdPartyVehiclesInfo.length > 0) {
     thirdPartyVehiclesErrors = thirdPartyVehiclesInfo.map((vehicle) =>
       validateThirdPartyVehicle(vehicle)
     );

    errors.thirdPartyVehiclesInfo = thirdPartyVehiclesErrors;
  }

  return errors;
};
