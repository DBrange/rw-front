import {
  ElementReportActive,
  ErrorsAllCrashVehiclesValues,
  ErrorsAllThirdPartyInjuredValues,
  ErrorsCrashVehicleValues,
  ErrorsDamageElectronicValues,
  ErrorsDamageVehiclesValues,
  ErrorsFireVehicleValues,
  ErrorsIsTireValues,
  ErrorsSwornDeclaration,
  ErrorsTheftElectronicValues,
  ErrorsTheftVehiclesValues,
  ReportActive,
} from "@/models";
import {
  validateAllCrashVehicles,
  validateAllThirdPartyInjured,
  validateCrashVehicle,
  validateFireVehicle,
  validateSwornDeclaration,
  validateTheftElectronic,
  validateTheftVechile,
} from "@/utilities";
import { validateIsTire } from "@/utilities/is-tire/validate-is-tire.utility.interface";
import {
  ClientInspectedCreateReportValues,
  ErrorsClientInspectedCreateReportValues,
} from "../..";
import { validateDamageVehicle } from "@/utilities/damage-vehicle/validate-damage-vehicle.utility";
import { validateDamageElectronic } from "@/utilities/damage-electronic/validate-damage-electronic.utility";

interface Params {
  inputValues: ClientInspectedCreateReportValues;
  elementReportActive: ElementReportActive;
  reportActive: ReportActive;
}

export const validateClientInspectedCreateReport = ({
  inputValues: {
    theftVehicle,
    theftElectronic,
    damageVehicle,
    damageElectronic,
    isTire,
    fire,
    crash,
    thirdPartyInjured,
    thirdPartyVehicle,
    swornDeclaration,
  },
  elementReportActive: {
    vehicleReport: vehicleSelected,
    electronic: electronicEA,
  },
  reportActive: {
    theft: theftSelected,
    fire: fireSelected,
    crash: crashSelected,damage:damageSelected
  },
}: Params) => {
  let theftVehicleErrors: Partial<ErrorsTheftVehiclesValues> | undefined;
  let theftElectronicErrors: Partial<ErrorsTheftElectronicValues> | undefined;
  let damageVehicleErrors: Partial<ErrorsDamageVehiclesValues> | undefined;
  let damageElectronicErrors: Partial<ErrorsDamageElectronicValues> | undefined;
  let isTireErrors: Partial<ErrorsIsTireValues> | undefined;
  let fireErrors: Partial<ErrorsFireVehicleValues> | undefined;
  let crashErrors: Partial<ErrorsCrashVehicleValues> | undefined;
  let allThirdPartyInjuredErrors:
    | Partial<ErrorsAllThirdPartyInjuredValues>
    | undefined;
  let allCrashVehiclesErrors: Partial<ErrorsAllCrashVehiclesValues> | undefined;

  const swornDeclarationError: Partial<ErrorsSwornDeclaration> | undefined =
    validateSwornDeclaration(swornDeclaration);

  if (theftSelected && vehicleSelected) {
    if (theftVehicle) {
      theftVehicleErrors = validateTheftVechile(theftVehicle);
    }
  }

  if (theftSelected && electronicEA) {
    if (theftElectronic) {
      theftElectronicErrors = validateTheftElectronic(theftElectronic);
    }
  }

  
  if (theftSelected) {
    if (theftVehicle.isTire) {
      isTireErrors = validateIsTire(isTire);
    }
  }

  if (damageSelected && vehicleSelected) {
    if (damageVehicle) {
      damageVehicleErrors = validateDamageVehicle(damageVehicle);
    }
  }

  if (damageSelected && electronicEA) {
    if (damageElectronic) {
      damageElectronicErrors = validateDamageElectronic(damageElectronic);
    }
  }

  if (fireSelected) {
    if (fire) {
      fireErrors = validateFireVehicle(fire);
    }
  }

  if (crashSelected) {
    if (crash) {
      crashErrors = validateCrashVehicle(crash);
    }
  }

  if (fireSelected || crashSelected) {
    if (thirdPartyInjured) {
      allThirdPartyInjuredErrors =
        validateAllThirdPartyInjured(thirdPartyInjured);
    }
  }

  if (crashSelected) {
    if (thirdPartyVehicle) {
      allCrashVehiclesErrors = validateAllCrashVehicles(thirdPartyVehicle);
    }
  }

  const errors: Partial<ErrorsClientInspectedCreateReportValues | null> = {
    theftVehicle: theftVehicleErrors,
    theftElectronic: theftElectronicErrors,
    damageVehicle: damageVehicleErrors,
    damageElectronic: damageElectronicErrors,
    isTire: isTireErrors,
    fire: fireErrors,
    crash: crashErrors,
    thirdPartyInjured: allThirdPartyInjuredErrors,
    thirdPartyVehicle: allCrashVehiclesErrors,
    swornDeclaration: swornDeclarationError,
  };

  return errors;
};
