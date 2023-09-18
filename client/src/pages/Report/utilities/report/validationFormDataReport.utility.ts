import {
  ErrorsPersonalValues,
  ErrorsGncValues,
  ErrorsLegalPersonalValues,
  ErrorsPhoneValues,
  ErrorsElectronicValues,
  ErrorsCrashVehicleValues,
  ErrorsVehicleReportValues,
  ErrorsAllCrashVehiclesValues,
  ErrorsAllThirdPartyInjuredValues,
  ErrorsFireVehicleValues,
  ErrorsTheftVehiclesValues,
  ErrorsIsTireValues,
  ErrorsTheftElectronicValues,
} from "@/models";
import { validate } from "@/utilities";
import { AllReportValues, ErrorsAllReportValues } from "../..";

interface Params {
  inputValues: AllReportValues;
  errorsInputValues: Partial<ErrorsAllReportValues> | undefined;
  triggers: any;
  amountInjured?: number;
}

export const validationFormDataReport = ({
  inputValues,
  errorsInputValues,
  triggers,
  amountInjured,
}: Params) => {
  if ((amountInjured as number) > 0) {
    validationWithInjuries({ inputValues, errorsInputValues, triggers });
  } else {
    validationWithoutInjuries({ inputValues, errorsInputValues, triggers });
  }
};

const validationWithInjuries = ({
  inputValues: {
    personal,
    legalPersonal,
    vehicleReport,
    electronic,
    gnc,
    phone,
    theftVehicle,
    theftElectronic,
    isTire,
    fire,
    crash,
    thirdPartyInjured,
    thirdPartyVehicle,
    swornDeclaration,
  },
  errorsInputValues,
  triggers: {
    triggerReportPersonalVehicleCrash,
    triggerReportPersonalVehicleTheft,
    triggerReportPersonalVehicleFire,
    triggerReportLegalVehicleCrash,
    triggerReportLegalVehicleTheft,
    triggerReportLegalVehicleFire,
    triggerReportPersonalElectronicTheft,
    triggerReportLegalElectronicTheft,
  },
}: Params) => {
  const crashWithoutAmounts = {
    ambulance: crash.ambulance,
    ambulanceTo: crash.ambulanceTo,
    date: crash.date,
    details: crash.details,
    friendlyStatement: crash.friendlyStatement,
    injured: crash.injured,
    injuries: crash.injuries,
    location: crash.location,
    thirdInjured: crash.thirdInjured,
    time: crash.time,
  };

  const injuredDTOObj = {
    amount: crash.amount,
    thirdPartyInjured: thirdPartyInjured.injuredInfo,
  };

  if (
    errorsInputValues?.personal &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyInjured
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,
          userDTO: personal,
          gncDTO: gnc,
          crashDTO: crashWithoutAmounts,
          injuredDTO: injuredDTOObj,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredExtra<
          ErrorsPersonalValues,
          ErrorsVehicleReportValues,
          ErrorsCrashVehicleValues,
          ErrorsAllThirdPartyInjuredValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.personal,
          errorsInputValues?.vehicleReport,
          errorsInputValues?.crash,
          errorsInputValues?.thirdPartyInjured,
          errorsInputValues?.gnc,
          triggerReportPersonalVehicleCrash(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,
        userDTO: personal,
        crashDTO: crashWithoutAmounts,
        injuredDTO: injuredDTOObj,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportInjured<
        ErrorsPersonalValues,
        ErrorsVehicleReportValues,
        ErrorsCrashVehicleValues,
        ErrorsAllThirdPartyInjuredValues,
        any
      >(
        errorsInputValues?.personal,
        errorsInputValues?.vehicleReport,
        errorsInputValues?.crash,
        errorsInputValues?.thirdPartyInjured,
        triggerReportPersonalVehicleCrash(dataObj)
      );
    }
  } else if (
    errorsInputValues?.legalPersonal &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyInjured
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,
          legalUserDTO: legalPersonal,
          gncDTO: gnc,
          crashDTO: crashWithoutAmounts,
          injuredDTO: injuredDTOObj,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredExtra<
          ErrorsLegalPersonalValues,
          ErrorsVehicleReportValues,
          ErrorsCrashVehicleValues,
          ErrorsAllThirdPartyInjuredValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.legalPersonal,
          errorsInputValues?.vehicleReport,
          errorsInputValues?.crash,
          errorsInputValues?.thirdPartyInjured,
          errorsInputValues?.gnc,
          triggerReportLegalVehicleCrash(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,
        legalUserDTO: legalPersonal,
        crashDTO: crashWithoutAmounts,
        injuredDTO: injuredDTOObj,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportInjured<
        ErrorsLegalPersonalValues,
        ErrorsVehicleReportValues,
        ErrorsCrashVehicleValues,
        ErrorsAllThirdPartyInjuredValues,
        any
      >(
        errorsInputValues?.legalPersonal,
        errorsInputValues?.vehicleReport,
        errorsInputValues?.crash,
        errorsInputValues?.thirdPartyInjured,
        triggerReportLegalVehicleCrash(dataObj)
      );
    }
  } else if (
    errorsInputValues?.personal &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.fire &&
    errorsInputValues?.thirdPartyInjured
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,
          userDTO: personal,
          gncDTO: gnc,
          crashDTO: crashWithoutAmounts,
          injuredDTO: injuredDTOObj,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredExtra<
          ErrorsPersonalValues,
          ErrorsVehicleReportValues,
          ErrorsFireVehicleValues,
          ErrorsAllThirdPartyInjuredValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.personal,
          errorsInputValues?.vehicleReport,
          errorsInputValues?.fire,
          errorsInputValues?.thirdPartyInjured,
          errorsInputValues?.gnc,
          triggerReportPersonalVehicleFire(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,
        userDTO: personal,
        crashDTO: crashWithoutAmounts,
        injuredDTO: injuredDTOObj,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportInjured<
        ErrorsPersonalValues,
        ErrorsVehicleReportValues,
        ErrorsFireVehicleValues,
        ErrorsAllThirdPartyInjuredValues,
        any
      >(
        errorsInputValues?.personal,
        errorsInputValues?.vehicleReport,
        errorsInputValues?.fire,
        errorsInputValues?.thirdPartyInjured,
        triggerReportPersonalVehicleFire(dataObj)
      );
    }
  } else if (
    errorsInputValues?.legalPersonal &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.fire &&
    errorsInputValues?.thirdPartyInjured
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,
          legalUserDTO: legalPersonal,
          gncDTO: gnc,
          crashDTO: crashWithoutAmounts,
          injuredDTO: injuredDTOObj,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredExtra<
          ErrorsLegalPersonalValues,
          ErrorsVehicleReportValues,
          ErrorsFireVehicleValues,
          ErrorsAllThirdPartyInjuredValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.legalPersonal,
          errorsInputValues?.vehicleReport,
          errorsInputValues?.fire,
          errorsInputValues?.thirdPartyInjured,
          errorsInputValues?.gnc,
          triggerReportPersonalVehicleFire(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,
        legalUserDTO: legalPersonal,
        crashDTO: crashWithoutAmounts,
        injuredDTO: injuredDTOObj,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportInjured<
        ErrorsLegalPersonalValues,
        ErrorsVehicleReportValues,
        ErrorsFireVehicleValues,
        ErrorsAllThirdPartyInjuredValues,
        any
      >(
        errorsInputValues?.legalPersonal,
        errorsInputValues?.vehicleReport,
        errorsInputValues?.fire,
        errorsInputValues?.thirdPartyInjured,
        triggerReportPersonalVehicleFire(dataObj)
      );
    }
  } else if (
    errorsInputValues?.personal &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyInjured &&
    errorsInputValues?.thirdPartyVehicle
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,
          userDTO: personal,
          gncDTO: gnc,
          crashDTO: crashWithoutAmounts,
          injuredDTO: injuredDTOObj,
          thirdPartyVehicleDTO: thirdPartyVehicle,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredVehiclesExtra<
          ErrorsPersonalValues,
          ErrorsVehicleReportValues,
          ErrorsCrashVehicleValues,
          ErrorsAllThirdPartyInjuredValues,
          ErrorsAllCrashVehiclesValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.personal,
          errorsInputValues?.vehicleReport,
          errorsInputValues?.crash,
          errorsInputValues?.thirdPartyInjured,
          errorsInputValues?.thirdPartyVehicle,
          errorsInputValues?.gnc,
          triggerReportPersonalVehicleCrash(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,
        userDTO: personal,
        crashDTO: crashWithoutAmounts,
        injuredDTO: injuredDTOObj,
        thirdPartyVehicleDTO: thirdPartyVehicle,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportInjuredExtra<
        ErrorsPersonalValues,
        ErrorsVehicleReportValues,
        ErrorsCrashVehicleValues,
        ErrorsAllThirdPartyInjuredValues,
        ErrorsAllCrashVehiclesValues,
        any
      >(
        errorsInputValues?.personal,
        errorsInputValues?.vehicleReport,
        errorsInputValues?.crash,
        errorsInputValues?.thirdPartyInjured,
        errorsInputValues?.thirdPartyVehicle,
        triggerReportPersonalVehicleCrash(dataObj)
      );
    }
  }
};

const validationWithoutInjuries = ({
  inputValues: {
    personal,
    legalPersonal,
    vehicleReport,
    electronic,
    gnc,
    phone,
    theftVehicle,
    theftElectronic,
    isTire,
    fire,
    crash,
    thirdPartyInjured,
    thirdPartyVehicle,
    swornDeclaration,
  },
  errorsInputValues,
  triggers: {
    triggerReportPersonalVehicleCrash,
    triggerReportPersonalVehicleTheft,
    triggerReportPersonalVehicleFire,
    triggerReportLegalVehicleCrash,
    triggerReportLegalVehicleTheft,
    triggerReportLegalVehicleFire,
    triggerReportPersonalElectronicTheft,
    triggerReportLegalElectronicTheft,
  },
}: Params) => {
  const crashWithoutAmounts = {
    ambulance: crash.ambulance,
    ambulanceTo: crash.ambulanceTo,
    date: crash.date,
    details: crash.details,
    friendlyStatement: crash.friendlyStatement,
    injured: crash.injured,
    injuries: crash.injuries,
    location: crash.location,
    thirdInjured: crash.thirdInjured,
    time: crash.time,
  };

  const fireWithoutAmounts = {
    ambulance: fire.ambulance,
    ambulanceTo: fire.ambulanceTo,
    date: fire.date,
    details: fire.details,
    injured: fire.injured,
    injuries: fire.injuries,
    location: fire.location,
    thirdInjured: fire.thirdInjured,
    time: fire.time,
  };

  const injuredDTOObj = {
    amount: crash.amount,
    thirdPartyInjured: thirdPartyInjured.injuredInfo,
  };

  //vehicle
  if (
    errorsInputValues?.personal &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyVehicle
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,
          userDTO: personal,
          gncDTO: gnc,
          crashDTO: crashWithoutAmounts,
          thirdPartyVehicleDTO: thirdPartyVehicle,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredExtra<
          ErrorsPersonalValues,
          ErrorsVehicleReportValues,
          ErrorsCrashVehicleValues,
          ErrorsAllCrashVehiclesValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.personal,
          errorsInputValues?.vehicleReport,
          errorsInputValues?.crash,
          errorsInputValues?.thirdPartyVehicle,
          errorsInputValues?.gnc,
          triggerReportPersonalVehicleCrash(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,
        userDTO: personal,
        gncDTO: gnc,
        crashDTO: crashWithoutAmounts,
        injuredDTO: injuredDTOObj,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportInjured<
        ErrorsPersonalValues,
        ErrorsVehicleReportValues,
        ErrorsCrashVehicleValues,
        ErrorsAllCrashVehiclesValues,
        any
      >(
        errorsInputValues?.personal,
        errorsInputValues?.vehicleReport,
        errorsInputValues?.crash,
        errorsInputValues?.thirdPartyVehicle,
        triggerReportPersonalVehicleCrash(dataObj)
      );
    }
  } else if (
    errorsInputValues?.legalPersonal &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyVehicle
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,
          legalUserDTO: legalPersonal,
          gncDTO: gnc,
          crashDTO: crashWithoutAmounts,
          thirdPartyVehicleDTO: thirdPartyVehicle,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredExtra<
          ErrorsLegalPersonalValues,
          ErrorsVehicleReportValues,
          ErrorsCrashVehicleValues,
          ErrorsAllCrashVehiclesValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.legalPersonal,
          errorsInputValues?.vehicleReport,
          errorsInputValues?.crash,
          errorsInputValues?.thirdPartyVehicle,
          errorsInputValues?.gnc,
          triggerReportLegalVehicleCrash(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,
        legalUserDTO: legalPersonal,
        crashDTO: crashWithoutAmounts,
        injuredDTO: injuredDTOObj,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportInjured<
        ErrorsLegalPersonalValues,
        ErrorsVehicleReportValues,
        ErrorsCrashVehicleValues,
        ErrorsAllCrashVehiclesValues,
        any
      >(
        errorsInputValues?.legalPersonal,
        errorsInputValues?.vehicleReport,
        errorsInputValues?.crash,
        errorsInputValues?.thirdPartyVehicle,
        triggerReportLegalVehicleCrash(dataObj)
      );
    }
  } else if (
    errorsInputValues?.personal &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.fire
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,
          userDTO: personal,
          gncDTO: gnc,
          fireDTO: fireWithoutAmounts,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportExtra<
          ErrorsPersonalValues,
          ErrorsVehicleReportValues,
          ErrorsFireVehicleValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.personal,
          errorsInputValues?.vehicleReport,
          errorsInputValues?.fire,
          errorsInputValues?.gnc,
          triggerReportPersonalVehicleFire(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,
        userDTO: personal,
        fireDTO: fireWithoutAmounts,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReport<
        ErrorsPersonalValues,
        ErrorsVehicleReportValues,
        ErrorsFireVehicleValues,
        any
      >(
        errorsInputValues?.personal,
        errorsInputValues?.vehicleReport,
        errorsInputValues?.fire,
        triggerReportPersonalVehicleFire(dataObj)
      );
    }
  } else if (
    errorsInputValues?.legalPersonal &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.fire
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,
          legalUserDTO: legalPersonal,
          gncDTO: gnc,
          fireDTO: fireWithoutAmounts,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportExtra<
          ErrorsLegalPersonalValues,
          ErrorsVehicleReportValues,
          ErrorsFireVehicleValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.legalPersonal,
          errorsInputValues?.vehicleReport,
          errorsInputValues?.fire,
          errorsInputValues?.gnc,
          triggerReportLegalVehicleFire(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,
        legalUserDTO: legalPersonal,
        fireDTO: fireWithoutAmounts,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReport<
        ErrorsLegalPersonalValues,
        ErrorsVehicleReportValues,
        ErrorsFireVehicleValues,
        any
      >(
        errorsInputValues?.legalPersonal,
        errorsInputValues?.vehicleReport,
        errorsInputValues?.fire,
        triggerReportLegalVehicleFire(dataObj)
      );
    }
  } else if (
    errorsInputValues?.personal &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.theftVehicle
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        if (!validate(errorsInputValues?.isTire) && errorsInputValues?.isTire) {
          const dataObj = {
            vehicleDTO: vehicleReport,
            userDTO: personal,
            gncDTO: gnc,
            theftDTO: theftVehicle,
            theftTireDTO: isTire,
            swornDeclaration: swornDeclaration.swornDeclaration,
          };

          userElementReportTwoExtra<
            ErrorsPersonalValues,
            ErrorsVehicleReportValues,
            ErrorsTheftVehiclesValues,
            ErrorsGncValues,
            ErrorsIsTireValues,
            any
          >(
            errorsInputValues?.personal,
            errorsInputValues?.vehicleReport,
            errorsInputValues?.theftVehicle,
            errorsInputValues?.gnc,
            errorsInputValues?.isTire,
            triggerReportPersonalVehicleTheft(dataObj)
          );
        } else {
          const dataObj = {
            vehicleDTO: vehicleReport,
            userDTO: personal,
            gncDTO: gnc,
            theftDTO: theftVehicle,
            swornDeclaration: swornDeclaration.swornDeclaration,
          };

          userElementReportExtra<
            ErrorsPersonalValues,
            ErrorsVehicleReportValues,
            ErrorsTheftVehiclesValues,
            ErrorsGncValues,
            any
          >(
            errorsInputValues?.personal,
            errorsInputValues?.vehicleReport,
            errorsInputValues?.theftVehicle,
            errorsInputValues?.gnc,
            triggerReportPersonalVehicleTheft(dataObj)
          );
        }
      }
    } else {
      if (!validate(errorsInputValues?.isTire) && errorsInputValues?.isTire) {
        const dataObj = {
          vehicleDTO: vehicleReport,
          userDTO: personal,
          fireDTO: fireWithoutAmounts,
          theftTireDTO: isTire,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportExtra<
          ErrorsPersonalValues,
          ErrorsVehicleReportValues,
          ErrorsTheftVehiclesValues,
          ErrorsIsTireValues,
          any
        >(
          errorsInputValues?.personal,
          errorsInputValues?.vehicleReport,
          errorsInputValues?.theftVehicle,
          errorsInputValues?.isTire,
          triggerReportPersonalVehicleTheft(dataObj)
        );
      } else {
        const dataObj = {
          vehicleDTO: vehicleReport,
          userDTO: personal,
          fireDTO: fireWithoutAmounts,
          theftTireDTO: isTire,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReport<
          ErrorsPersonalValues,
          ErrorsVehicleReportValues,
          ErrorsTheftVehiclesValues,
          any
        >(
          errorsInputValues?.personal,
          errorsInputValues?.vehicleReport,
          errorsInputValues?.theftVehicle,
          triggerReportPersonalVehicleTheft(dataObj)
        );
      }
    } //abajo
  } else if (
    errorsInputValues?.legalPersonal &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.theftVehicle
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        if (!validate(errorsInputValues?.isTire) && errorsInputValues?.isTire) {
          const dataObj = {
            vehicleDTO: vehicleReport,
            legalUserDTO: legalPersonal,
            gncDTO: gnc,
            theftDTO: theftVehicle,
            theftTireDTO: isTire,
            swornDeclaration: swornDeclaration.swornDeclaration,
          };

          userElementReportTwoExtra<
            ErrorsLegalPersonalValues,
            ErrorsVehicleReportValues,
            ErrorsTheftVehiclesValues,
            ErrorsGncValues,
            ErrorsIsTireValues,
            any
          >(
            errorsInputValues?.legalPersonal,
            errorsInputValues?.vehicleReport,
            errorsInputValues?.theftVehicle,
            errorsInputValues?.gnc,
            errorsInputValues?.isTire,
            triggerReportLegalVehicleTheft(dataObj)
          );
        } else {
          const dataObj = {
            vehicleDTO: vehicleReport,
            legalUserDTO: legalPersonal,
            gncDTO: gnc,
            theftDTO: theftVehicle,
            swornDeclaration: swornDeclaration.swornDeclaration,
          };

          userElementReportExtra<
            ErrorsLegalPersonalValues,
            ErrorsVehicleReportValues,
            ErrorsTheftVehiclesValues,
            ErrorsGncValues,
            any
          >(
            errorsInputValues?.legalPersonal,
            errorsInputValues?.vehicleReport,
            errorsInputValues?.theftVehicle,
            errorsInputValues?.gnc,
            triggerReportLegalVehicleTheft(dataObj)
          );
        }
      }
    } else {
      if (!validate(errorsInputValues?.isTire) && errorsInputValues?.isTire) {
        const dataObj = {
          vehicleDTO: vehicleReport,
          legalUserDTO: legalPersonal,
          fireDTO: fireWithoutAmounts,
          theftTireDTO: isTire,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportExtra<
          ErrorsLegalPersonalValues,
          ErrorsVehicleReportValues,
          ErrorsTheftVehiclesValues,
          ErrorsIsTireValues,
          any
        >(
          errorsInputValues?.legalPersonal,
          errorsInputValues?.vehicleReport,
          errorsInputValues?.theftVehicle,
          errorsInputValues?.isTire,
          triggerReportLegalVehicleTheft(dataObj)
        );
      } else {
        const dataObj = {
          vehicleDTO: vehicleReport,
          userDTO: legalPersonal,
          fireDTO: fireWithoutAmounts,
          theftTireDTO: isTire,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReport<
          ErrorsLegalPersonalValues,
          ErrorsVehicleReportValues,
          ErrorsTheftVehiclesValues,
          any
        >(
          errorsInputValues?.legalPersonal,
          errorsInputValues?.vehicleReport,
          errorsInputValues?.theftVehicle,
          triggerReportLegalVehicleTheft(dataObj)
        );
      }
    }
  } else if (
    errorsInputValues?.personal &&
    errorsInputValues?.electronic &&
    errorsInputValues?.theftElectronic
  ) {
    if (electronic.type === "CELULAR") {
      if (!validate(errorsInputValues?.phone) && errorsInputValues?.phone) {
        const dataObj = {
          electronicDTO: electronic,
          userDTO: personal,
          theftDTO: theftElectronic,
          smartphoneDTO: phone,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportExtra<
          ErrorsPersonalValues,
          ErrorsElectronicValues,
          ErrorsTheftElectronicValues,
          ErrorsPhoneValues,
          any
        >(
          errorsInputValues?.personal,
          errorsInputValues?.electronic,
          errorsInputValues?.theftElectronic,
          errorsInputValues?.phone,
          triggerReportPersonalElectronicTheft(dataObj)
        );
      }
    } else {
      const dataObj = {
        electronicDTO: electronic,
        userDTO: personal,
        theftDTO: theftElectronic,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReport<
        ErrorsPersonalValues,
        ErrorsElectronicValues,
        ErrorsTheftElectronicValues,
        any
      >(
        errorsInputValues?.personal,
        errorsInputValues?.electronic,
        errorsInputValues?.theftElectronic,
        triggerReportPersonalElectronicTheft(dataObj)
      );
    }
  } else if (
    errorsInputValues?.legalPersonal &&
    errorsInputValues?.electronic &&
    errorsInputValues?.theftElectronic
  ) {
    if (electronic.type === "CELULAR") {
      if (!validate(errorsInputValues?.phone) && errorsInputValues?.phone) {
        const dataObj = {
          electronicDTO: electronic,
          legalUserDTO: legalPersonal,
          theftDTO: theftElectronic,
          smartphoneDTO: phone,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportExtra<
          ErrorsLegalPersonalValues,
          ErrorsElectronicValues,
          ErrorsTheftElectronicValues,
          ErrorsPhoneValues,
          any
        >(
          errorsInputValues?.legalPersonal,
          errorsInputValues?.electronic,
          errorsInputValues?.theftElectronic,
          errorsInputValues?.phone,
          triggerReportLegalElectronicTheft(dataObj)
        );
      }
    } else {
      const dataObj = {
        electronicDTO: electronic,
        legalUserDTO: legalPersonal,
        theftDTO: theftElectronic,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReport<
        ErrorsLegalPersonalValues,
        ErrorsElectronicValues,
        ErrorsTheftElectronicValues,
        any
      >(
        errorsInputValues?.legalPersonal,
        errorsInputValues?.electronic,
        errorsInputValues?.theftElectronic,
        triggerReportLegalElectronicTheft(dataObj)
      );
    }
  }
};

const userElementReportInjuredVehiclesExtra = <T, U, V, K, E, R, L>(
  user: Partial<T>,
  element: Partial<U>,
  report: Partial<V>,
  amountInjured: Partial<K>,
  amountVehicles: Partial<E>,
  extra: Partial<R>,
  trigger: L
): void => {
  const errorsArr = [
    Object.keys(user),
    Object.keys(element),
    Object.keys(report),
    Object.keys(amountInjured),
    Object.keys(amountVehicles),
    Object.keys(extra),
  ].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
    console.log("tamosss");
  }
};

const userElementReportInjuredExtra = <T, U, V, K, E, R>(
  user: Partial<T>,
  element: Partial<U>,
  report: Partial<V>,
  amountInjured: Partial<K>,
  extra: Partial<E>,
  trigger: R
): void => {
  const errorsArr = [
    Object.keys(user),
    Object.keys(element),
    Object.keys(report),
    Object.keys(amountInjured),
    Object.keys(extra),
  ].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
    console.log("tamosss");
  }
};

const userElementReportInjured = <T, U, V, K, E>(
  user: Partial<T>,
  element: Partial<U>,
  report: Partial<V>,
  amountInjured: Partial<K>,
  trigger: E
): void => {
  const errorsArr = [
    Object.keys(user),
    Object.keys(element),
    Object.keys(amountInjured),
    Object.keys(report),
  ].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
    console.log("tamosss");
  }
};

const userElementReportTwoExtra = <T, U, V, E, R, K>(
  user: Partial<T>,
  element: Partial<U>,
  report: Partial<V>,
  extra: Partial<E>,
  extraTwo: Partial<R>,
  trigger: K
): void => {
  const errorsArr = [
    Object.keys(user),
    Object.keys(element),
    Object.keys(report),
    Object.keys(extra),
    Object.keys(extraTwo),
  ].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
    console.log("tamosss");
  }
};

const userElementReportExtra = <T, U, V, E, R>(
  user: Partial<T>,
  element: Partial<U>,
  report: Partial<V>,
  extra: Partial<E>,
  trigger: R
): void => {
  const errorsArr = [
    Object.keys(user),
    Object.keys(element),
    Object.keys(report),
    Object.keys(extra),
  ].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
    console.log("tamosss");
  }
};

const userElementReport = <T, U, V, E>(
  user: Partial<T>,
  element: Partial<U>,
  report: Partial<V>,
  trigger: E
): void => {
  const errorsArr = [
    Object.keys(user),
    Object.keys(element),
    Object.keys(report),
  ].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
    console.log("tamosss");
  }
};
