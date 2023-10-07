import {
  ElementActive,
  ErrorsElectronicValues,
  ErrorsGncValues,
  ErrorsPhoneValues,
  ErrorsSwornDeclaration,
  ErrorsVehicleValues
} from "@/models";
import {
  validateElectronic,
  validateGnc,
  validatePhone,
  validateSwornDeclaration
} from "@/utilities";
import { validateVehicle } from "@/utilities/vehicle";
import { ClientCreateInspectionValues, ErrorsClientCreateInspectionValues } from "../..";

interface Params {
  inputValues: ClientCreateInspectionValues;
  elementActive: ElementActive;
}

export const validateClientCreateInspection = ({
  inputValues: {
    vehicle,
    electronic,
    gnc,
    phone,
    swornDeclaration,
  },
  elementActive: { vehicle: vehicleSelected, electronic: electronicEA },
}: Params) => {
  let vehicleErrors: Partial<ErrorsVehicleValues> | undefined;
  let electronicErrors: Partial<ErrorsElectronicValues> | undefined;
  let gncErrors: Partial<ErrorsGncValues> | undefined;
  let phoneErrors: Partial<ErrorsPhoneValues> | undefined;

  const swornDeclarationError: Partial<ErrorsSwornDeclaration> | undefined =
    validateSwornDeclaration(swornDeclaration);

  if (vehicleSelected) {
    if (vehicle) {
      vehicleErrors = validateVehicle(vehicle);
    }
  }

  if (electronicEA) {
    if (electronic) {
      electronicErrors = validateElectronic(electronic);
    }
  }

  if (vehicle.gnc) {
    if (gnc) {
      gncErrors = validateGnc(gnc);
    }
  }

  if (electronic.type === "CELULAR") {
    if (phone) {
      phoneErrors = validatePhone(phone);
    }
  }

  const errors: Partial<ErrorsClientCreateInspectionValues | null> = {
    vehicle: vehicleErrors,
    electronic: electronicErrors,
    gnc: gncErrors,
    phone: phoneErrors,
    swornDeclaration: swornDeclarationError,
  };

  return errors;
};
