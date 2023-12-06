import {
  ErrorsGncValues,
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
import { ClientInfo } from "@/models/interfaces/userInfo/userInfo.interface";
import {
  ClientCreateReportValues,
  ErrorsClientCreateReportValues,
} from "@/pages";
import { validate } from "@/utilities";

interface Params {
  inputValues: ClientCreateReportValues;
  errorsInputValues: Partial<ErrorsClientCreateReportValues> | undefined;
  triggers: any;
  amountInjured?: number;
  user: ClientInfo
}

export const validationFormDataReportClient = ({
  inputValues,
  errorsInputValues,
  triggers,
  amountInjured,
  user,
}: Params) => {
  if (inputValues.swornDeclaration.swornDeclaration) {
    if ((amountInjured as number) > 0) {
      validationWithInjuries({
        inputValues,
        errorsInputValues,
        triggers,
        user,
      });
    } else {
      validationWithoutInjuries({
        inputValues,
        errorsInputValues,
        triggers,
        user,
      });
    }
  }
};

const validationWithInjuries = ({
  inputValues: {
    vehicleReport,
    gnc,
    fire,
    crash,
    thirdPartyInjured,
    thirdPartyVehicle,
    swornDeclaration,
  },
  errorsInputValues,
  triggers: {
    triggerReportVehicleCrash,
    triggerReportVehicleFire,
    triggerReportLegalVehicleCrash,
    triggerReportLegalVehicleFire,
  },
  user,
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

  const injuredDTOObjFire = {
    amount: fire.amount,
    injuredInfo: thirdPartyInjured.injuredInfo,
  };

  const injuredDTOObj = {
    amount: crash.amount,
    injuredInfo: thirdPartyInjured.injuredInfo,
  };

  if (
    user.user?.personalUser?.dni &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyInjured &&
    errorsInputValues?.thirdPartyVehicle
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,

          gncDTO: gnc,
          crashDTO: crashWithoutAmounts,
          injuredDTO: injuredDTOObj,
          thirdPartyVehicleDTO: thirdPartyVehicle,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredVehiclesExtra<
          ErrorsVehicleReportValues,
          ErrorsCrashVehicleValues,
          ErrorsAllThirdPartyInjuredValues,
          ErrorsAllCrashVehiclesValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.vehicleReport,
          errorsInputValues?.crash,
          errorsInputValues?.thirdPartyInjured,
          errorsInputValues?.thirdPartyVehicle,
          errorsInputValues?.gnc,
          triggerReportVehicleCrash(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,

        crashDTO: crashWithoutAmounts,
        injuredDTO: injuredDTOObj,
        thirdPartyVehicleDTO: thirdPartyVehicle,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportInjuredExtra<
        ErrorsVehicleReportValues,
        ErrorsCrashVehicleValues,
        ErrorsAllThirdPartyInjuredValues,
        ErrorsAllCrashVehiclesValues,
        any
      >(
        errorsInputValues?.vehicleReport,
        errorsInputValues?.crash,
        errorsInputValues?.thirdPartyInjured,
        errorsInputValues?.thirdPartyVehicle,
        triggerReportVehicleCrash(dataObj)
      );
    }
  } else if (
    user.user?.legalUser?.cuit &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyInjured
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,

          gncDTO: gnc,
          crashDTO: crashWithoutAmounts,
          injuredDTO: injuredDTOObj,
          thirdPartyVehicleDTO: thirdPartyVehicle,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredExtra<
          ErrorsVehicleReportValues,
          ErrorsCrashVehicleValues,
          ErrorsAllThirdPartyInjuredValues,
          ErrorsGncValues,
          any
        >(
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

        crashDTO: crashWithoutAmounts,
        injuredDTO: injuredDTOObj,
        thirdPartyVehicleDTO: thirdPartyVehicle,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportInjured<
        ErrorsVehicleReportValues,
        ErrorsCrashVehicleValues,
        ErrorsAllThirdPartyInjuredValues,
        any
      >(
        errorsInputValues?.vehicleReport,
        errorsInputValues?.crash,
        errorsInputValues?.thirdPartyInjured,
        triggerReportLegalVehicleCrash(dataObj)
      );
    }
  } else if (
    user.user?.personalUser?.dni &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.fire &&
    errorsInputValues?.thirdPartyInjured
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,

          gncDTO: gnc,
          fireDTO: fireWithoutAmounts,
          injuredDTO: injuredDTOObj,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredExtra<
          ErrorsVehicleReportValues,
          ErrorsFireVehicleValues,
          ErrorsAllThirdPartyInjuredValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.vehicleReport,
          errorsInputValues?.fire,
          errorsInputValues?.thirdPartyInjured,
          errorsInputValues?.gnc,
          triggerReportVehicleFire(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,

        fireDTO: fireWithoutAmounts,
        injuredDTO: injuredDTOObjFire,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportInjured<
        ErrorsVehicleReportValues,
        ErrorsFireVehicleValues,
        ErrorsAllThirdPartyInjuredValues,
        any
      >(
        errorsInputValues?.vehicleReport,
        errorsInputValues?.fire,
        errorsInputValues?.thirdPartyInjured,
        triggerReportVehicleFire(dataObj)
      );
    }
  } else if (
    user.user?.legalUser?.cuit &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.fire &&
    errorsInputValues?.thirdPartyInjured
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,

          gncDTO: gnc,
          fireDTO: fireWithoutAmounts,
          injuredDTO: injuredDTOObjFire,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredExtra<
          ErrorsVehicleReportValues,
          ErrorsFireVehicleValues,
          ErrorsAllThirdPartyInjuredValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.vehicleReport,
          errorsInputValues?.fire,
          errorsInputValues?.thirdPartyInjured,
          errorsInputValues?.gnc,
          triggerReportLegalVehicleFire(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,

        fireDTO: fireWithoutAmounts,
        injuredDTO: injuredDTOObjFire,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };
      console.log(dataObj);
      userElementReportInjured<
        ErrorsVehicleReportValues,
        ErrorsFireVehicleValues,
        ErrorsAllThirdPartyInjuredValues,
        any
      >(
        errorsInputValues?.vehicleReport,
        errorsInputValues?.fire,
        errorsInputValues?.thirdPartyInjured,
        triggerReportLegalVehicleFire(dataObj)
      );
    }
  } else if (
    user.user?.personalUser?.dni &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyInjured &&
    errorsInputValues?.thirdPartyVehicle
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,

          gncDTO: gnc,
          crashDTO: crashWithoutAmounts,
          injuredDTO: injuredDTOObj,
          thirdPartyVehicleDTO: thirdPartyVehicle,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredVehiclesExtra<
          ErrorsVehicleReportValues,
          ErrorsCrashVehicleValues,
          ErrorsAllThirdPartyInjuredValues,
          ErrorsAllCrashVehiclesValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.vehicleReport,
          errorsInputValues?.crash,
          errorsInputValues?.thirdPartyInjured,
          errorsInputValues?.thirdPartyVehicle,
          errorsInputValues?.gnc,
          triggerReportVehicleCrash(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,

        crashDTO: crashWithoutAmounts,
        injuredDTO: injuredDTOObj,
        thirdPartyVehicleDTO: thirdPartyVehicle.thirdPartyVehicleInfo,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportInjuredExtra<
        ErrorsVehicleReportValues,
        ErrorsCrashVehicleValues,
        ErrorsAllThirdPartyInjuredValues,
        ErrorsAllCrashVehiclesValues,
        any
      >(
        errorsInputValues?.vehicleReport,
        errorsInputValues?.crash,
        errorsInputValues?.thirdPartyInjured,
        errorsInputValues?.thirdPartyVehicle,
        triggerReportVehicleCrash(dataObj)
      );
    }
  } else if (
    user.user?.personalUser?.dni &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyInjured
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,

          gncDTO: gnc,
          crashDTO: crashWithoutAmounts,
          injuredDTO: injuredDTOObj,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredExtra<
          ErrorsVehicleReportValues,
          ErrorsCrashVehicleValues,
          ErrorsAllThirdPartyInjuredValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.vehicleReport,
          errorsInputValues?.crash,
          errorsInputValues?.thirdPartyInjured,
          errorsInputValues?.gnc,
          triggerReportVehicleCrash(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,

        crashDTO: crashWithoutAmounts,
        injuredDTO: injuredDTOObj,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportInjured<
        ErrorsVehicleReportValues,
        ErrorsCrashVehicleValues,
        ErrorsAllThirdPartyInjuredValues,
        any
      >(
        errorsInputValues?.vehicleReport,
        errorsInputValues?.crash,
        errorsInputValues?.thirdPartyInjured,
        triggerReportVehicleCrash(dataObj)
      );
    }
  }
};

const validationWithoutInjuries = ({
  inputValues: {
    vehicleReport,
    electronic,
    gnc,
    phone,
    theftVehicle,
    theftElectronic,
    isTire,
    fire,
    crash,
    thirdPartyVehicle,
    swornDeclaration,
  },
  errorsInputValues,
  triggers: {
    triggerReportVehicleCrash,
    triggerReportVehicleTheft,
    triggerReportVehicleFire,
    triggerReportLegalVehicleCrash,
    triggerReportLegalVehicleTheft,
    triggerReportLegalVehicleFire,
  },
  user,
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

  // const injuredDTOObj = {
  //   amount: crash.amount,
  //   thirdPartyInjured: thirdPartyInjured.injuredInfo,
  // };

  //vehicle
  if (
    user.user?.personalUser?.dni &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyVehicle
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,

          gncDTO: gnc,
          crashDTO: crashWithoutAmounts,
          thirdPartyVehicleDTO: thirdPartyVehicle,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredExtra<
          ErrorsVehicleReportValues,
          ErrorsCrashVehicleValues,
          ErrorsAllCrashVehiclesValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.vehicleReport,
          errorsInputValues?.crash,
          errorsInputValues?.thirdPartyVehicle,
          errorsInputValues?.gnc,
          triggerReportVehicleCrash(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,

        crashDTO: crashWithoutAmounts,
        thirdPartyVehicleDTO: thirdPartyVehicle,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };
      userElementReportInjured<
        ErrorsVehicleReportValues,
        ErrorsCrashVehicleValues,
        ErrorsAllCrashVehiclesValues,
        any
      >(
        errorsInputValues?.vehicleReport,
        errorsInputValues?.crash,
        errorsInputValues?.thirdPartyVehicle,
        triggerReportVehicleCrash(dataObj)
      );
    }
  } else if (
    user.user?.legalUser?.cuit &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyVehicle
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,

          gncDTO: gnc,
          crashDTO: crashWithoutAmounts,
          thirdPartyVehicleDTO: thirdPartyVehicle,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportInjuredExtra<
          ErrorsVehicleReportValues,
          ErrorsCrashVehicleValues,
          ErrorsAllCrashVehiclesValues,
          ErrorsGncValues,
          any
        >(
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

        crashDTO: crashWithoutAmounts,
        thirdPartyVehicleDTO: thirdPartyVehicle,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportInjured<
        ErrorsVehicleReportValues,
        ErrorsCrashVehicleValues,
        ErrorsAllCrashVehiclesValues,
        any
      >(
        errorsInputValues?.vehicleReport,
        errorsInputValues?.crash,
        errorsInputValues?.thirdPartyVehicle,
        triggerReportLegalVehicleCrash(dataObj)
      );
    }
  } else if (
    user.user?.personalUser?.dni &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.fire
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,

          gncDTO: gnc,
          fireDTO: fireWithoutAmounts,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportExtra<
          ErrorsVehicleReportValues,
          ErrorsFireVehicleValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.vehicleReport,
          errorsInputValues?.fire,
          errorsInputValues?.gnc,
          triggerReportVehicleFire(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,

        fireDTO: fireWithoutAmounts,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReport<
        ErrorsVehicleReportValues,
        ErrorsFireVehicleValues,
        any
      >(
        errorsInputValues?.vehicleReport,
        errorsInputValues?.fire,
        triggerReportVehicleFire(dataObj)
      );
    }
  } else if (
    user.user?.legalUser?.cuit &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.fire
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        const dataObj = {
          vehicleDTO: vehicleReport,

          gncDTO: gnc,
          fireDTO: fireWithoutAmounts,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportExtra<
          ErrorsVehicleReportValues,
          ErrorsFireVehicleValues,
          ErrorsGncValues,
          any
        >(
          errorsInputValues?.vehicleReport,
          errorsInputValues?.fire,
          errorsInputValues?.gnc,
          triggerReportLegalVehicleFire(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: vehicleReport,

        fireDTO: fireWithoutAmounts,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReport<
        ErrorsVehicleReportValues,
        ErrorsFireVehicleValues,
        any
      >(
        errorsInputValues?.vehicleReport,
        errorsInputValues?.fire,
        triggerReportLegalVehicleFire(dataObj)
      );
    }
  } else if (
    user.user?.personalUser?.dni &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.theftVehicle
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        if (!validate(errorsInputValues?.isTire) && errorsInputValues?.isTire) {
          const dataObj = {
            vehicleDTO: vehicleReport,
            gncDTO: gnc,
            electronicDTO: null,
            smartphoneDTO: null,
            theftDTO: theftVehicle,
            theftTireDTO: isTire,
            swornDeclaration: swornDeclaration.swornDeclaration,
          };

          userElementReportTwoExtra<
            ErrorsVehicleReportValues,
            ErrorsTheftVehiclesValues,
            ErrorsGncValues,
            ErrorsIsTireValues,
            any
          >(
            errorsInputValues?.vehicleReport,
            errorsInputValues?.theftVehicle,
            errorsInputValues?.gnc,
            errorsInputValues?.isTire,
            triggerReportVehicleTheft(dataObj)
          );
        } else {
          const dataObj = {
            vehicleDTO: vehicleReport,
            gncDTO: gnc,
            electronicDTO: null,
            smartphoneDTO: null,
            theftDTO: theftVehicle,
            swornDeclaration: swornDeclaration.swornDeclaration,
          };

          userElementReportExtra<
            ErrorsVehicleReportValues,
            ErrorsTheftVehiclesValues,
            ErrorsGncValues,
            any
          >(
            errorsInputValues?.vehicleReport,
            errorsInputValues?.theftVehicle,
            errorsInputValues?.gnc,
            triggerReportVehicleTheft(dataObj)
          );
        }
      }
    } else {
      if (!validate(errorsInputValues?.isTire) && errorsInputValues?.isTire) {
        const dataObj = {
          vehicleDTO: vehicleReport,
          gncDTO: null,
          electronicDTO: null,
          smartphoneDTO: null,
          theftDTO: theftVehicle,
          theftTireDTO: isTire,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportExtra<
          ErrorsVehicleReportValues,
          ErrorsTheftVehiclesValues,
          ErrorsIsTireValues,
          any
        >(
          errorsInputValues?.vehicleReport,
          errorsInputValues?.theftVehicle,
          errorsInputValues?.isTire,
          triggerReportVehicleTheft(dataObj)
        );
      } else {
        const dataObj = {
          vehicleDTO: vehicleReport,
          gncDTO: null,
          electronicDTO: null,
          smartphoneDTO: null,
          theftDTO: theftVehicle,
          theftTireDTO: isTire,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReport<
          ErrorsVehicleReportValues,
          ErrorsTheftVehiclesValues,
          any
        >(
          errorsInputValues?.vehicleReport,
          errorsInputValues?.theftVehicle,
          triggerReportVehicleTheft(dataObj)
        );
      }
    } //abajo
  } else if (
    user.user?.legalUser?.cuit &&
    errorsInputValues?.vehicleReport &&
    errorsInputValues?.theftVehicle
  ) {
    if (vehicleReport.gnc) {
      if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
        if (!validate(errorsInputValues?.isTire) && errorsInputValues?.isTire) {
          const dataObj = {
            vehicleDTO: vehicleReport,
            gncDTO: gnc,
            electronicDTO: null,
            smartphoneDTO: null,
            theftDTO: theftVehicle,
            theftTireDTO: isTire,
            swornDeclaration: swornDeclaration.swornDeclaration,
          };

          userElementReportTwoExtra<
            ErrorsVehicleReportValues,
            ErrorsTheftVehiclesValues,
            ErrorsGncValues,
            ErrorsIsTireValues,
            any
          >(
            errorsInputValues?.vehicleReport,
            errorsInputValues?.theftVehicle,
            errorsInputValues?.gnc,
            errorsInputValues?.isTire,
            triggerReportLegalVehicleTheft(dataObj)
          );
        } else {
          const dataObj = {
            vehicleDTO: vehicleReport,
            gncDTO: gnc,
            electronicDTO: null,
            smartphoneDTO: null,
            theftDTO: theftVehicle,
            swornDeclaration: swornDeclaration.swornDeclaration,
          };

          userElementReportExtra<
            ErrorsVehicleReportValues,
            ErrorsTheftVehiclesValues,
            ErrorsGncValues,
            any
          >(
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
          gncDTO: null,
          electronicDTO: null,
          smartphoneDTO: null,
          theftDTO: theftVehicle,
          theftTireDTO: isTire,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportExtra<
          ErrorsVehicleReportValues,
          ErrorsTheftVehiclesValues,
          ErrorsIsTireValues,
          any
        >(
          errorsInputValues?.vehicleReport,
          errorsInputValues?.theftVehicle,
          errorsInputValues?.isTire,
          triggerReportLegalVehicleTheft(dataObj)
        );
      } else {
        const dataObj = {
          vehicleDTO: vehicleReport,
          gncDTO: null,
          electronicDTO: null,
          smartphoneDTO: null,
          theftDTO: theftVehicle,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReport<
          ErrorsVehicleReportValues,
          ErrorsTheftVehiclesValues,
          any
        >(
          errorsInputValues?.vehicleReport,
          errorsInputValues?.theftVehicle,
          triggerReportLegalVehicleTheft(dataObj)
        );
      }
    }
  } else if (
    user.user?.personalUser?.dni &&
    errorsInputValues?.electronic &&
    errorsInputValues?.theftElectronic
  ) {
    if (electronic.type === "CELULAR") {
      if (!validate(errorsInputValues?.phone) && errorsInputValues?.phone) {
        const dataObj = {
          vehicleDTO: null,
          gncDTO: null,
          electronicDTO: electronic,
          theftDTO: theftElectronic,
          smartPhoneDTO: phone,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };
        console.log(dataObj);
        userElementReportExtra<
          ErrorsElectronicValues,
          ErrorsTheftElectronicValues,
          ErrorsPhoneValues,
          any
        >(
          errorsInputValues?.electronic,
          errorsInputValues?.theftElectronic,
          errorsInputValues?.phone,
          triggerReportVehicleTheft(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: null,
        gncDTO: null,
        electronicDTO: electronic,
        smartphoneDTO: null,
        theftDTO: theftElectronic,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReport<
        ErrorsElectronicValues,
        ErrorsTheftElectronicValues,
        any
      >(
        errorsInputValues?.electronic,
        errorsInputValues?.theftElectronic,
        triggerReportVehicleTheft(dataObj)
      );
    }
  } else if (
    user.user?.legalUser?.cuit &&
    errorsInputValues?.electronic &&
    errorsInputValues?.theftElectronic
  ) {
    if (electronic.type === "CELULAR") {
      if (!validate(errorsInputValues?.phone) && errorsInputValues?.phone) {
        const dataObj = {
          vehicleDTO: null,
          gncDTO: null,
          electronicDTO: electronic,
          theftDTO: theftElectronic,
          smartPhoneDTO: phone,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElementReportExtra<
          ErrorsElectronicValues,
          ErrorsTheftElectronicValues,
          ErrorsPhoneValues,
          any
        >(
          errorsInputValues?.electronic,
          errorsInputValues?.theftElectronic,
          errorsInputValues?.phone,
          triggerReportLegalVehicleTheft(dataObj)
        );
      }
    } else {
      const dataObj = {
        vehicleDTO: null,
        gncDTO: null,
        electronicDTO: electronic,
        smartphoneDTO: null,
        theftDTO: theftElectronic,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReport<
        ErrorsElectronicValues,
        ErrorsTheftElectronicValues,
        any
      >(
        errorsInputValues?.electronic,
        errorsInputValues?.theftElectronic,
        triggerReportLegalVehicleTheft(dataObj)
      );
    }
  }
};

const userElementReportInjuredVehiclesExtra = <U, V, K, E, R, L>(
  element: Partial<U>,
  report: Partial<V>,
  amountInjured: Partial<K>,
  amountVehicles: Partial<E>,
  extra: Partial<R>,
  trigger: L
): void => {
  const errorsArr = [
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

const userElementReportInjuredExtra = <U, V, K, E, R>(
  element: Partial<U>,
  report: Partial<V>,
  amountInjured: Partial<K>,
  extra: Partial<E>,
  trigger: R
): void => {
  const errorsArr = [
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

const userElementReportInjured = <U, V, K, E>(
  element: Partial<U>,
  report: Partial<V>,
  amountInjured: Partial<K>,
  trigger: E
): void => {
  const errorsArr = [
    Object.keys(element),
    Object.keys(amountInjured),
    Object.keys(report),
  ].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
    console.log("tamosss");
  }
};

const userElementReportTwoExtra = <U, V, E, R, K>(
  element: Partial<U>,
  report: Partial<V>,
  extra: Partial<E>,
  extraTwo: Partial<R>,
  trigger: K
): void => {
  const errorsArr = [
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

const userElementReportExtra = <U, V, E, R>(
  element: Partial<U>,
  report: Partial<V>,
  extra: Partial<E>,
  trigger: R
): void => {
  const errorsArr = [
    Object.keys(element),
    Object.keys(report),
    Object.keys(extra),
  ].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
    console.log("tamosss");
  }
};

const userElementReport = <U, V, E>(
  element: Partial<U>,
  report: Partial<V>,
  trigger: E
): void => {
  const errorsArr = [Object.keys(element), Object.keys(report)].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
    console.log("tamosss");
  }
};
