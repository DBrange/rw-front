import {
  ErrorsAllCrashVehiclesValues,
  ErrorsAllThirdPartyInjuredValues,
  ErrorsCrashVehicleValues,
  ErrorsFireVehicleValues,
  ErrorsIsTireValues,
  ErrorsTheftElectronicValues,
  ErrorsTheftVehiclesValues,
} from "@/models";
import { ClientInfo } from "@/models/interfaces/userInfo/userInfo.interface";
import {
  ClientInspectedCreateReportValues,
  ErrorsClientInspectedCreateReportValues,
} from "@/pages";
import { validate } from "@/utilities";

interface Params {
  inputValues: ClientInspectedCreateReportValues;
  errorsInputValues:
    | Partial<ErrorsClientInspectedCreateReportValues>
    | undefined;
  triggers: any;
  amountInjured?: number;
  user: ClientInfo
}

export const validationFormDataInspectedReport = ({
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
    fire,
    crash,
    thirdPartyInjured,
    thirdPartyVehicle,
    swornDeclaration,
  },
  errorsInputValues,
  triggers: { triggerReportCrash, triggerReportFire },
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
    user.user.dni &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyInjured &&
    errorsInputValues?.thirdPartyVehicle
  ) {
    const dataObj = {
      crashDTO: crashWithoutAmounts,
      injuredDTO: injuredDTOObj,
      thirdPartyVehicleDTO: thirdPartyVehicle,
      swornDeclaration: swornDeclaration.swornDeclaration,
    };

    userElementReportInjuredExtra<
      ErrorsCrashVehicleValues,
      ErrorsAllThirdPartyInjuredValues,
      ErrorsAllCrashVehiclesValues,
      any
    >(
      errorsInputValues?.crash,
      errorsInputValues?.thirdPartyInjured,
      errorsInputValues?.thirdPartyVehicle,
      triggerReportCrash(dataObj)
    );
  } else if (
    user.user.cuit &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyInjured
  ) {
    const dataObj = {
      crashDTO: crashWithoutAmounts,
      injuredDTO: injuredDTOObj,
      thirdPartyVehicleDTO: thirdPartyVehicle,
      swornDeclaration: swornDeclaration.swornDeclaration,
    };

    userElementReportInjured<
      ErrorsCrashVehicleValues,
      ErrorsAllThirdPartyInjuredValues,
      any
    >(
      errorsInputValues?.crash,
      errorsInputValues?.thirdPartyInjured,
      triggerReportCrash(dataObj)
    );
  } else if (
    user.user.dni &&
    errorsInputValues?.fire &&
    errorsInputValues?.thirdPartyInjured
  ) {
    const dataObj = {
      fireDTO: fireWithoutAmounts,
      injuredDTO: injuredDTOObjFire,
      swornDeclaration: swornDeclaration.swornDeclaration,
    };

    userElementReportInjured<
      ErrorsFireVehicleValues,
      ErrorsAllThirdPartyInjuredValues,
      any
    >(
      errorsInputValues?.fire,
      errorsInputValues?.thirdPartyInjured,
      triggerReportFire(dataObj)
    );
  } else if (
    user.user.cuit &&
    errorsInputValues?.fire &&
    errorsInputValues?.thirdPartyInjured
  ) {
    const dataObj = {
      fireDTO: fireWithoutAmounts,
      injuredDTO: injuredDTOObjFire,
      swornDeclaration: swornDeclaration.swornDeclaration,
    };
    console.log(dataObj);
    userElementReportInjured<
      ErrorsFireVehicleValues,
      ErrorsAllThirdPartyInjuredValues,
      any
    >(
      errorsInputValues?.fire,
      errorsInputValues?.thirdPartyInjured,
      triggerReportFire(dataObj)
    );
  } else if (
    user.user.dni &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyInjured &&
    errorsInputValues?.thirdPartyVehicle
  ) {
    const dataObj = {
      crashDTO: crashWithoutAmounts,
      injuredDTO: injuredDTOObj,
      thirdPartyVehicleDTO: thirdPartyVehicle.thirdPartyVehicleInfo,
      swornDeclaration: swornDeclaration.swornDeclaration,
    };

    userElementReportInjuredExtra<
      ErrorsCrashVehicleValues,
      ErrorsAllThirdPartyInjuredValues,
      ErrorsAllCrashVehiclesValues,
      any
    >(
      errorsInputValues?.crash,
      errorsInputValues?.thirdPartyInjured,
      errorsInputValues?.thirdPartyVehicle,
      triggerReportCrash(dataObj)
    );
  } else if (
    user.user.dni &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyInjured
  ) {
    const dataObj = {
      crashDTO: crashWithoutAmounts,
      injuredDTO: injuredDTOObj,
      swornDeclaration: swornDeclaration.swornDeclaration,
    };

    userElementReportInjured<
      ErrorsCrashVehicleValues,
      ErrorsAllThirdPartyInjuredValues,
      any
    >(
      errorsInputValues?.crash,
      errorsInputValues?.thirdPartyInjured,
      triggerReportCrash(dataObj)
    );
  }
};

const validationWithoutInjuries = ({
  inputValues: {
    theftVehicle,
    theftElectronic,
    isTire,
    fire,
    crash,
    thirdPartyVehicle,
    swornDeclaration,
  },
  errorsInputValues,
  triggers: { triggerReportCrash, triggerReportTheft, triggerReportFire },
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
    user.user.dni &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyVehicle
  ) {
    const dataObj = {
      crashDTO: crashWithoutAmounts,
      thirdPartyVehicleDTO: thirdPartyVehicle,
      swornDeclaration: swornDeclaration.swornDeclaration,
    };
    userElementReportInjured<
      ErrorsCrashVehicleValues,
      ErrorsAllCrashVehiclesValues,
      any
    >(
      errorsInputValues?.crash,
      errorsInputValues?.thirdPartyVehicle,
      triggerReportCrash(dataObj)
    );
  } else if (
    user.user.cuit &&
    errorsInputValues?.crash &&
    errorsInputValues?.thirdPartyVehicle
  ) {
    const dataObj = {
      crashDTO: crashWithoutAmounts,
      thirdPartyVehicleDTO: thirdPartyVehicle,
      swornDeclaration: swornDeclaration.swornDeclaration,
    };

    userElementReportInjured<
      ErrorsCrashVehicleValues,
      ErrorsAllCrashVehiclesValues,
      any
    >(
      errorsInputValues?.crash,
      errorsInputValues?.thirdPartyVehicle,
      triggerReportCrash(dataObj)
    );
  } else if (user.user.dni && errorsInputValues?.fire) {
    const dataObj = {
      fireDTO: fireWithoutAmounts,
      swornDeclaration: swornDeclaration.swornDeclaration,
    };

    userElementReport<ErrorsFireVehicleValues, any>(
      errorsInputValues?.fire,
      triggerReportFire(dataObj)
    );
  } else if (user.user.cuit && errorsInputValues?.fire) {
    const dataObj = {
      fireDTO: fireWithoutAmounts,
      swornDeclaration: swornDeclaration.swornDeclaration,
    };

    userElementReport<ErrorsFireVehicleValues, any>(
      errorsInputValues?.fire,
      triggerReportFire(dataObj)
    );
  } else if (user.user.dni && errorsInputValues?.theftVehicle) {
    if (!validate(errorsInputValues?.isTire) && errorsInputValues?.isTire) {
      const dataObj = {
        theftDTO: theftVehicle,
        theftTireDTO: isTire,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportExtra<
        ErrorsTheftVehiclesValues,
        ErrorsIsTireValues,
        any
      >(
        errorsInputValues?.theftVehicle,
        errorsInputValues?.isTire,
        triggerReportTheft(dataObj)
      );
    } else {
      const dataObj = {
        theftDTO: theftVehicle,
        theftTireDTO: isTire,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReport<ErrorsTheftVehiclesValues, any>(
        errorsInputValues?.theftVehicle,
        triggerReportTheft(dataObj)
      );
    }
    //abajo
  } else if (user.user.cuit && errorsInputValues?.theftVehicle) {
    if (!validate(errorsInputValues?.isTire) && errorsInputValues?.isTire) {
      const dataObj = {
        theftDTO: theftVehicle,
        theftTireDTO: isTire,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReportExtra<
        ErrorsTheftVehiclesValues,
        ErrorsIsTireValues,
        any
      >(
        errorsInputValues?.theftVehicle,
        errorsInputValues?.isTire,
        triggerReportTheft(dataObj)
      );
    } else {
      const dataObj = {
        theftDTO: theftVehicle,
        swornDeclaration: swornDeclaration.swornDeclaration,
      };

      userElementReport<ErrorsTheftVehiclesValues, any>(
        errorsInputValues?.theftVehicle,
        triggerReportTheft(dataObj)
      );
    }
  } else if (user.user.dni && errorsInputValues?.theftElectronic) {
    const dataObj = {
      theftDTO: theftElectronic,
      swornDeclaration: swornDeclaration.swornDeclaration,
    };

    userElementReport<ErrorsTheftElectronicValues, any>(
      errorsInputValues?.theftElectronic,
      triggerReportTheft(dataObj)
    );
  } else if (user.user.cuit && errorsInputValues?.theftElectronic) {
    const dataObj = {
      theftDTO: theftElectronic,
      swornDeclaration: swornDeclaration.swornDeclaration,
    };

    userElementReport<ErrorsTheftElectronicValues, any>(
      errorsInputValues?.theftElectronic,
      triggerReportTheft(dataObj)
    );
  }
};

const userElementReportInjuredExtra = <U, V, K, R>(
  element: Partial<U>,
  report: Partial<V>,
  amountInjured: Partial<K>,
  trigger: R
): void => {
  const errorsArr = [
    Object.keys(element),
    Object.keys(report),
    Object.keys(amountInjured),
  ].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
    console.log("tamosss");
  }
};

const userElementReportInjured = <V, K, E>(
  report: Partial<V>,
  amountInjured: Partial<K>,
  trigger: E
): void => {
  const errorsArr = [Object.keys(amountInjured), Object.keys(report)].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
    console.log("tamosss");
  }
};

const userElementReportExtra = <V, E, R>(
  report: Partial<V>,
  extra: Partial<E>,
  trigger: R
): void => {
  const errorsArr = [Object.keys(report), Object.keys(extra)].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
    console.log("tamosss");
  }
};

const userElementReport = <V, E>(report: Partial<V>, trigger: E): void => {
  const errorsArr = [Object.keys(report)].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
    console.log("tamosss");
  }
};
