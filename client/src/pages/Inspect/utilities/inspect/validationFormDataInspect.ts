import {
  ErrorsPersonalValues,
  ErrorsGncValues,
  ErrorsLegalPersonalValues,
  ErrorsPhoneValues,
  ErrorsElectronicValues,
  ErrorsVehicleValues,
} from "@/models";
import { validate } from "@/utilities";
import { AllInspectValues, ErrorsAllInspectValues } from "../..";

interface Params {
  inputValues: AllInspectValues;
  errorsInputValues: Partial<ErrorsAllInspectValues> | undefined;
  triggers: any;
}

export const validationFormDataInspect = ({
  inputValues: {
    personal,
    legalPersonal,
    vehicle,
    electronic,
    gnc,
    phone,
    swornDeclaration,
  },
  errorsInputValues,
  triggers: {
    triggerInspectionPersonalVehicle,
    triggerInspectionPersonalElectronic,
    triggerInspectionLegalVehicle,
    triggerInspectionLegalElectronic,
  },
}: Params) => {
  if (swornDeclaration.swornDeclaration) {
    if (errorsInputValues?.personal && errorsInputValues?.vehicle) {
      if (vehicle.gnc) {
        if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
          const dataObj = {
            vehicleDTO: vehicle,
            userDTO: personal,
            gncDTO: gnc,
            swornDeclaration: swornDeclaration.swornDeclaration,
          };

          userElementExtra<
            ErrorsPersonalValues,
            ErrorsVehicleValues,
            ErrorsGncValues,
            any
          >(
            errorsInputValues?.personal,
            errorsInputValues?.vehicle,
            errorsInputValues?.gnc,
            triggerInspectionPersonalVehicle(dataObj)
          );
        }
      } else {
        const dataObj = {
          vehicleDTO: vehicle,
          userDTO: personal,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElement<ErrorsPersonalValues, ErrorsVehicleValues, any>(
          errorsInputValues?.personal,
          errorsInputValues?.vehicle,
          triggerInspectionPersonalVehicle(dataObj)
        );
      }
    } else if (errorsInputValues?.legalPersonal && errorsInputValues?.vehicle) {
      if (vehicle.gnc) {
        if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
          const dataObj = {
            vehicleDTO: vehicle,
            legalUserDTO: legalPersonal,
            gncDTO: gnc,
            swornDeclaration: swornDeclaration.swornDeclaration,
          };

          userElementExtra<
            ErrorsLegalPersonalValues,
            ErrorsVehicleValues,
            ErrorsGncValues,
            any
          >(
            errorsInputValues?.legalPersonal,
            errorsInputValues?.vehicle,
            errorsInputValues?.gnc,
            triggerInspectionLegalVehicle(dataObj)
          );
        }
      } else {
        const dataObj = {
          vehicleDTO: vehicle,
          legalUserDTO: legalPersonal,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElement<ErrorsLegalPersonalValues, ErrorsVehicleValues, any>(
          errorsInputValues?.legalPersonal,
          errorsInputValues?.vehicle,
          triggerInspectionLegalVehicle(dataObj)
        );
      }
    } else if (errorsInputValues?.personal && errorsInputValues?.electronic) {
      if (electronic.type === "CELULAR") {
        if (!validate(errorsInputValues?.phone) && errorsInputValues?.phone) {
          const dataObj = {
            electronicDTO: electronic,
            userDTO: personal,
            smartphoneDTO: phone,
            swornDeclaration: swornDeclaration.swornDeclaration,
          };

          userElementExtra<
            ErrorsPersonalValues,
            ErrorsElectronicValues,
            ErrorsPhoneValues,
            any
          >(
            errorsInputValues?.personal,
            errorsInputValues?.electronic,
            errorsInputValues?.phone,
            triggerInspectionPersonalElectronic(dataObj)
          );
        }
      } else {
        const dataObj = {
          electronicDTO: electronic,
          userDTO: personal,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElement<ErrorsPersonalValues, ErrorsElectronicValues, any>(
          errorsInputValues?.personal,
          errorsInputValues?.electronic,
          triggerInspectionPersonalElectronic(dataObj)
        );
      }
    } else if (
      errorsInputValues?.legalPersonal &&
      errorsInputValues?.electronic
    ) {
      if (electronic.type === "CELULAR") {
        if (!validate(errorsInputValues?.phone) && errorsInputValues?.phone) {
          const dataObj = {
            electronicDTO: electronic,
            legalUserDTO: legalPersonal,
            smartphoneDTO: phone,
            swornDeclaration: swornDeclaration.swornDeclaration,
          };

          userElementExtra<
            ErrorsLegalPersonalValues,
            ErrorsElectronicValues,
            ErrorsPhoneValues,
            any
          >(
            errorsInputValues?.legalPersonal,
            errorsInputValues?.electronic,
            errorsInputValues?.phone,
            triggerInspectionLegalElectronic(dataObj)
          );
        }
      } else {
        const dataObj = {
          electronicDTO: electronic,
          legalUserDTO: legalPersonal,
          swornDeclaration: swornDeclaration.swornDeclaration,
        };

        userElement<ErrorsLegalPersonalValues, ErrorsElectronicValues, any>(
          errorsInputValues?.legalPersonal,
          errorsInputValues?.electronic,
          triggerInspectionLegalElectronic(dataObj)
        );
      }
    }
  }
};

const userElementExtra = <T, U, V, K>(
  user: Partial<T>,
  element: Partial<U>,
  extra: Partial<V>,
  trigger: K
): void => {
  const errorsArr = [
    Object.keys(user),
    Object.keys(element),
    Object.keys(extra),
  ].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
  }
};

const userElement = <T, U, V>(
  user: Partial<T>,
  element: Partial<U>,
  trigger: V
): void => {
  const errorsArr = [Object.keys(user), Object.keys(element)].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
  }
};
