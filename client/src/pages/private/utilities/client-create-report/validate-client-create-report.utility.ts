import {
  ElementReportActive,
  ErrorsAllCrashVehiclesValues,
  ErrorsAllThirdPartyInjuredValues,
  ErrorsCrashVehicleValues,
  ErrorsDamageElectronicValues,
  ErrorsDamageVehiclesValues,
  ErrorsElectronicValues,
  ErrorsFireVehicleValues,
  ErrorsGncValues,
  ErrorsIsTireValues,
  ErrorsPhoneValues,
  ErrorsSwornDeclaration,
  ErrorsTheftElectronicValues,
  ErrorsTheftVehiclesValues,
  ErrorsVehicleReportValues,
  ReportActive,
} from "@/models";
import {
  validateAllCrashVehicles,
  validateAllThirdPartyInjured,
  validateCrashVehicle,
  validateElectronic,
  validateFireVehicle,
  validateGnc,
  validatePhone,
  validateSwornDeclaration,
  validateTheftElectronic,
  validateTheftVechile,
  validateVehicleReport,
} from "@/utilities";
import { validateIsTire } from "@/utilities/is-tire/validate-is-tire.utility.interface";
import {
  ClientCreateReportValues,
  ErrorsClientCreateReportValues,
} from "../..";
import { validateDamageElectronic } from "@/utilities/damage-electronic/validate-damage-electronic.utility";
import { validateDamageVehicle } from "@/utilities/damage-vehicle/validate-damage-vehicle.utility";

interface Params {
  inputValues: ClientCreateReportValues;
  elementReportActive: ElementReportActive;
  reportActive: ReportActive;
}

export const validateClientCreateReport = ({
  inputValues: {
    vehicleReport,
    electronic,
    gnc,
    phone,
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
    crash: crashSelected,
    damage: damageSelected,
  },
}: Params) => {
  let vehicleErrors: Partial<ErrorsVehicleReportValues> | undefined;
  let electronicErrors: Partial<ErrorsElectronicValues> | undefined;
  let gncErrors: Partial<ErrorsGncValues> | undefined;
  let phoneErrors: Partial<ErrorsPhoneValues> | undefined;
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

  if (vehicleSelected) {
    if (vehicleReport) {
      vehicleErrors = validateVehicleReport(vehicleReport);
    }
  }

  if (electronicEA) {
    if (electronic) {
      electronicErrors = validateElectronic(electronic);
    }
  }

  if (vehicleReport.gnc) {
    if (gnc) {
      gncErrors = validateGnc(gnc);
    }
  }

  if (electronic.type === "CELULAR") {
    if (phone) {
      phoneErrors = validatePhone(phone);
    }
  }

  if (theftSelected && vehicleReport) {
    if (theftVehicle) {
      theftVehicleErrors = validateTheftVechile(theftVehicle);
    }
  }

  if (theftSelected && electronic) {
    if (theftElectronic) {
      theftElectronicErrors = validateTheftElectronic(theftElectronic);
    }
  }

  if (damageSelected && vehicleReport) {
    if (damageVehicle) {
      damageVehicleErrors = validateDamageVehicle(damageVehicle);
    }
  }

  if (damageSelected && electronic) {
    if (damageElectronic) {
      damageElectronicErrors = validateDamageElectronic(damageElectronic);
    }
  }

  if (theftSelected) {
    if (theftVehicle.isTire) {
      isTireErrors = validateIsTire(isTire);
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

  const errors: Partial<ErrorsClientCreateReportValues | null> = {
    vehicleReport: vehicleErrors,
    electronic: electronicErrors,
    gnc: gncErrors,
    phone: phoneErrors,
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
