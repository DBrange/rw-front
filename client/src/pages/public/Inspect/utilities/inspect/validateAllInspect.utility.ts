import { ErrorsPersonalValues, ErrorsLegalPersonalValues, ErrorsGncValues, ErrorsPhoneValues, ErrorsElectronicValues, ElementActive, ErrorsVehicleValues, UserActive, ErrorsSwornDeclaration } from "@/models";
import { validateSwornDeclaration, validatePersonal, validateLegalPersonal, validateGnc, validatePhone, validateElectronic } from "@/utilities";
import {
  AllInspectValues,
  ErrorsAllInspectValues,
} from "../..";
import { validateVehicle } from "@/utilities/vehicle";

interface Params {
  inputValues: AllInspectValues;
  userActive: UserActive;
  elementActive: ElementActive;
}

export const validateAllInspect = ({
  inputValues: {
    personal,
    legalPersonal,
    vehicle,
    electronic,
    gnc,
    phone,
    swornDeclaration,
  },
  userActive: {
    personal: personalSelected,
    legalPersonal: legalPersonalSelected,
  },
  elementActive: { vehicle: vehicleSelected, electronic: electronicEA },
}: Params) => {
  let personalErrors: Partial<ErrorsPersonalValues> | undefined;
  let legalPersonalErrors: Partial<ErrorsLegalPersonalValues> | undefined;
  let vehicleErrors: Partial<ErrorsVehicleValues> | undefined;
  let electronicErrors: Partial<ErrorsElectronicValues> | undefined;
  let gncErrors: Partial<ErrorsGncValues> | undefined;
  let phoneErrors: Partial<ErrorsPhoneValues> | undefined;
  
  const swornDeclarationError: Partial<ErrorsSwornDeclaration> | undefined = validateSwornDeclaration(swornDeclaration);

  if (personalSelected) {
    if (personal) {
      personalErrors = validatePersonal(personal);
    }
  }

  if (legalPersonalSelected) {
    if (legalPersonal) {
      legalPersonalErrors = validateLegalPersonal(legalPersonal);
    }
  }

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

  const errors: Partial<ErrorsAllInspectValues | null> = {
    personal: personalErrors,
    legalPersonal: legalPersonalErrors,
    vehicle: vehicleErrors,
    electronic: electronicErrors,
    gnc: gncErrors,
    phone: phoneErrors,
    swornDeclaration: swornDeclarationError,
  };

  return errors;
};
