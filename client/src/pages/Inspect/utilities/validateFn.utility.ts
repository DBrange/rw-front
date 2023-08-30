type ValidationFormDataInspect = {
  userActiveForm: string;
  activeForm: string;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  triggers: any;
};

export const validationFormDataInspect = ({
  userActiveForm,
  activeForm,
  setModalActive,
  data,
  triggers,
}: ValidationFormDataInspect) => {
  if (userActiveForm === "person" && activeForm === "vehicle") {
    if (data?.schemaPersonal && data?.schemaVehicle) {
      setModalActive(true);
      if (data.schemaGnc) {
        const dataObj = {
          vehicleDTO: data.schemaVehicle,
          userDTO: data.schemaPersonal,
          gncDTO: data.schemaGnc,
          swornDeclaration: data.schemaVehicle.swornDeclaration,
        };
        triggers.triggerInspectionPersonalVehicle(dataObj);
      } else {
        const dataObj = {
          vehicleDTO: data.schemaVehicle,
          userDTO: data.schemaPersonal,
          swornDeclaration: data.schemaVehicle.swornDeclaration,
        };
        triggers.triggerInspectionPersonalVehicle(dataObj);
      }
    } else {
      setModalActive(false);
    }
  } else if (userActiveForm === "person" && activeForm === "electronic") {
    if (data?.schemaPersonal && data?.schemaElectronic) {
      setModalActive(true);
      if (data.schemaPhone) {
        const dataObj = {
          electronicDTO: data.schemaElectronic,
          userDTO: data.schemaPersonal,
          smartphoneDTO: data.schemaPhone,
          swornDeclaration: data.schemaVehicle.swornDeclaration,
        };
        triggers.triggerInspectionPersonalElectronic(dataObj);
      } else {
        const dataObj = {
          electronicDTO: data.schemaElectronic,
          userDTO: data.schemaPersonal,
          swornDeclaration: data.schemaVehicle.swornDeclaration,
        };
        triggers.triggerInspectionPersonalElectronic(dataObj);
      }
    } else {
      setModalActive(false);
    }
  } else if (userActiveForm === "legal" && activeForm === "vehicle") {
    if (data?.schemaLegalPersonal && data?.schemaVehicle) {
      setModalActive(true);
      if (data.schemaGnc) {
        const dataObj = {
          vehicleDTO: data.schemaVehicle,
          legalUserDTO: data.schemaLegalPersonal,
          gncDTO: data.schemaGnc,
          swornDeclaration: data.schemaVehicle.swornDeclaration,
        };
        triggers.triggerInspectionLegalVehicle(dataObj);
      } else {
        const dataObj = {
          vehicleDTO: data.schemaVehicle,
          legalUserDTO: data.schemaLegalPersonal,
          swornDeclaration: data.schemaVehicle.swornDeclaration,
        };
        triggers.triggerInspectionLegalVehicle(dataObj);
      }
    } else {
      setModalActive(false);
    }
  } else if (userActiveForm === "legal" && activeForm === "electronic") {
    if (data?.schemaLegalPersonal && data?.schemaElectronic) {
      setModalActive(true);
      if (data.schemaPhone) {
        const dataObj = {
          electronicDTO: data.schemaElectronic,
          legalUserDTO: data.schemaLegalPersonal,
          smartphoneDTO: data.schemaPhone,
          swornDeclaration: data.schemaVehicle.swornDeclaration,
        };
        triggers.triggerInspectionLegalElectronic(dataObj);
      } else {
        const dataObj = {
          electronicDTO: data.schemaElectronic,
          legalUserDTO: data.schemaLegalPersonal,
          swornDeclaration: data.schemaVehicle.swornDeclaration,
        };
        triggers.triggerInspectionLegalElectronic(dataObj);
      }
    } else {
      setModalActive(false);
    }
  }
};
