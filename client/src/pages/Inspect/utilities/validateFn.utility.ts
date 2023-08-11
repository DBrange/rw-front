type ValidationFormDataInspect = {
  userActiveForm: string;
  activeForm: string;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  data: any
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
      triggers.triggerInspectionPersonal(data.schemaPersonal);
      triggers.triggerInspectionVehicle(data.schemaVehicle);
    } else {
      setModalActive(false);
    }
  } else if (userActiveForm === "person" && activeForm === "electronic") {
    if (data?.schemaPersonal && data?.schemaElectronic) {
      setModalActive(true);
      triggers.triggerInspectionPersonal(data.schemaPersonal);
      triggers.triggerInspectionVehicle(data.schemaElectronic);
    } else {
      setModalActive(false);
    }
  } else if (userActiveForm === "legal" && activeForm === "vehicle") {
    if (data?.schemaLegalPersonal && data?.schemaVehicle) {
      setModalActive(true);
      triggers.triggerInspectionPersonal(data.schemaLegalPersonal);
      triggers.triggerInspectionVehicle(data.schemaVehicle);
    } else {
      setModalActive(false);
    }
  } else if (userActiveForm === "legal" && activeForm === "electronic") {
    if (data?.schemaLegalPersonal && data?.schemaElectronic) {
      setModalActive(true);
      triggers.triggerInspectionPersonal(data.schemaLegalPersonal);
      triggers.triggerInspectionVehicle(data.schemaElectronic);
    } else {
      setModalActive(false);
    }
  }
};
