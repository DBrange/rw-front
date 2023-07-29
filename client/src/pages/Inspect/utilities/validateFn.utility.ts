export const validationFormDataInspect = (
  userActiveForm: string,
  activeForm: string,
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>,
  data: any
) => {
  if (userActiveForm === "person" && activeForm === "vehicle") {
    if (data?.schemaPersonal && data?.schemaVehicle) {
      setModalActive(true);
    } else {
      setModalActive(false);
    }
  } else if (userActiveForm === "person" && activeForm === "electronic") {
    if (data?.schemaPersonal && data?.schemaElectronic) {
      setModalActive(true);
    } else {
      setModalActive(false);
    }
  } else if (userActiveForm === "legal" && activeForm === "vehicle") {
    if (data?.schemaLegalPersonal && data?.schemaVehicle) {
      setModalActive(true);
    } else {
      setModalActive(false);
    }
  } else if (userActiveForm === "legal" && activeForm === "electronic") {
    if (data?.schemaLegalPersonal && data?.schemaElectronic) {
      setModalActive(true);
    } else {
      setModalActive(false);
    }
  }
};