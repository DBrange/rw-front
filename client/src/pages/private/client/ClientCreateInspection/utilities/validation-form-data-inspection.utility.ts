import {
  ErrorsElectronicValues,
  ErrorsGncValues,
  ErrorsPhoneValues,
  ErrorsVehicleValues
} from "@/models";
import { ClientInfo } from "@/models/interfaces/userInfo/userInfo.interface";
import {
  ClientCreateInspectionValues,
  ErrorsClientCreateInspectionValues,
} from "@/pages";
import { validate } from "@/utilities";

interface Params {
  inputValues: ClientCreateInspectionValues;
  errorsInputValues: Partial<ErrorsClientCreateInspectionValues> | undefined;
  triggers: any;
  user: ClientInfo
}

export const validationFormDataInspection = ({
  inputValues: { vehicle, electronic, gnc, phone, swornDeclaration },
  errorsInputValues,
  triggers: { triggerInspectionPersonal },user
}: Params) => {
  if (swornDeclaration.swornDeclaration) {
    if (user.user?.personalUser?.dni && errorsInputValues?.vehicle) {
      if (vehicle.gnc) {
        if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
          const dataObj = {
            vehicleDTO: vehicle,
            gncDTO: gnc,
            electronicDTO: null,
            smartphoneDTO: null,
            swornDeclaration: swornDeclaration,
          };

          userElementExtra<ErrorsVehicleValues, ErrorsGncValues, any>(
            errorsInputValues?.vehicle,
            errorsInputValues?.gnc,
            triggerInspectionPersonal(dataObj)
          );
        }
      } else {
        const dataObj = {
          vehicleDTO: vehicle,
          gncDTO: null,
          electronicDTO: null,
          smartphoneDTO: null,
          swornDeclaration: swornDeclaration,
        };

        userElement<ErrorsVehicleValues, any>(
          errorsInputValues?.vehicle,
          triggerInspectionPersonal(dataObj)
        );
      }
    } else if (user.user?.legalUser?.cuit && errorsInputValues?.vehicle) {
      if (vehicle.gnc) {
        if (!validate(errorsInputValues?.gnc) && errorsInputValues?.gnc) {
          const dataObj = {
            vehicleDTO: vehicle,
            gncDTO: gnc,
            electronicDTO: null,
            smartphoneDTO: null,
            swornDeclaration: swornDeclaration,
          };

          userElementExtra<ErrorsVehicleValues, ErrorsGncValues, any>(
            errorsInputValues?.vehicle,
            errorsInputValues?.gnc,
            triggerInspectionPersonal(dataObj)
          );
        }
      } else {
        const dataObj = {
          vehicleDTO: vehicle,
          gncDTO: null,
          electronicDTO: null,
          smartphoneDTO: null,
          swornDeclaration: swornDeclaration,
        };

        userElement<ErrorsVehicleValues, any>(
          errorsInputValues?.vehicle,
          triggerInspectionPersonal(dataObj)
        );
      }
    } else if (user.user?.personalUser?.dni && errorsInputValues?.electronic) {
      if (electronic.type === "CELULAR") {
        if (!validate(errorsInputValues?.phone) && errorsInputValues?.phone) {
          const dataObj = {
            vehicleDTO: null,
            gncDTO: null,
            electronicDTO: electronic,
            smartphoneDTO: phone,
            swornDeclaration: swornDeclaration,
          };

          userElementExtra<ErrorsElectronicValues, ErrorsPhoneValues, any>(
            errorsInputValues?.electronic,
            errorsInputValues?.phone,
            triggerInspectionPersonal(dataObj)
          );
        }
      } else {
        const dataObj = {
          vehicleDTO: null,
          gncDTO: null,
          electronicDTO: electronic,
          smartphoneDTO: null,
          swornDeclaration: swornDeclaration,
        };

        userElement<ErrorsElectronicValues, any>(
          errorsInputValues?.electronic,
          triggerInspectionPersonal(dataObj)
        );
      }
    } else if (user.user?.legalUser?.cuit && errorsInputValues?.electronic) {
      if (electronic.type === "CELULAR") {
        if (!validate(errorsInputValues?.phone) && errorsInputValues?.phone) {
          const dataObj = {
            vehicleDTO: null,
            gncDTO: null,
            electronicDTO: electronic,
            smartphoneDTO: phone,
            swornDeclaration: swornDeclaration,
          };

          userElementExtra<ErrorsElectronicValues, ErrorsPhoneValues, any>(
            errorsInputValues?.electronic,
            errorsInputValues?.phone,
            triggerInspectionPersonal(dataObj)
          );
        }
      } else {
        const dataObj = {
          vehicleDTO: null,
          gncDTO: null,
          electronicDTO: electronic,
          smartphoneDTO: null,
          swornDeclaration: swornDeclaration,
        };

        userElement<ErrorsElectronicValues, any>(
          errorsInputValues?.electronic,
          triggerInspectionPersonal(dataObj)
        );
      }
    }
  }
};

const userElementExtra = <U, V, K>(
  element: Partial<U>,
  extra: Partial<V>,
  trigger: K
): void => {
  const errorsArr = [Object.keys(element), Object.keys(extra)].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
  }
};

const userElement = <U, V>(element: Partial<U>, trigger: V): void => {
  const errorsArr = [Object.keys(element)].flat();

  if (!Object.keys(errorsArr).length) {
    trigger;
  }
};
