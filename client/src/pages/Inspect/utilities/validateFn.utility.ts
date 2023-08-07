import useSWRMutation from "swr/mutation"
import { addInspectionLegalElectronic, addInspectionLegalVehicle, addInspectionPersonalElectronic, addInspectionPersonalVehicle, baseUrlLegalElectronic, baseUrlLegalVehicle, baseUrlPersonalElectronic, baseUrlPersonalVehicle } from "..";

type ValidationFormDataInspect = {
  userActiveForm: string;
  activeForm: string;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
  triggerInspectionPersonalVehicle: any
};

// const {
//   error: errorInspectionPersonalVehicle,
//   trigger: triggerInspectionPersonalVehicle,
// } = useSWRMutation(baseUrlPersonalVehicle, addInspectionPersonalVehicle);

// const {
//   error: errorInspectionPersonalElectronic,
//   trigger: triggerInspectionPersonalElectronic,
// } = useSWRMutation(baseUrlPersonalElectronic, addInspectionPersonalElectronic);

// const {
//   error: errorInspectionLegalVehicle,
//   trigger: triggerInspectionLegalVehicle,
// } = useSWRMutation(baseUrlLegalVehicle, addInspectionLegalVehicle);

// const {
//   error: errorInspectionLegalElectronic,
//   trigger: triggerInspectionLegalElectronic,
// } = useSWRMutation(baseUrlLegalElectronic, addInspectionLegalElectronic);

// console.log(errorInspectionPersonalVehicle);
// console.log(errorInspectionPersonalElectronic);
// console.log(errorInspectionLegalVehicle);
// console.log(errorInspectionLegalVehicle);

export const validationFormDataInspect = ({
  userActiveForm,
  activeForm,
  setModalActive,
  data,
  triggerInspectionPersonalVehicle,
}: ValidationFormDataInspect) => {
  if (userActiveForm === "person" && activeForm === "vehicle") {
    if (data?.schemaPersonal && data?.schemaVehicle) {
      setModalActive(true);
      triggerInspectionPersonalVehicle(data)
    } else {
      setModalActive(false);
      // console.log(errorInspectionPersonalVehicle);
    }
  } else if (userActiveForm === "person" && activeForm === "electronic") {
    if (data?.schemaPersonal && data?.schemaElectronic) {
      setModalActive(true);
      // triggerInspectionPersonalElectronic(data)
    } else {
      setModalActive(false);
      // console.log(errorInspectionPersonalElectronic);
    }
  } else if (userActiveForm === "legal" && activeForm === "vehicle") {
    if (data?.schemaLegalPersonal && data?.schemaVehicle) {
      setModalActive(true);
      // triggerInspectionLegalVehicle(data)
    } else {
      setModalActive(false);
      // console.log(errorInspectionLegalVehicle);
    }
  } else if (userActiveForm === "legal" && activeForm === "electronic") {
    if (data?.schemaLegalPersonal && data?.schemaElectronic) {
      setModalActive(true);
      // triggerInspectionLegalElectronic(data)
    } else {
      setModalActive(false);
      // console.log(errorInspectionLegalElectronic);
    }
  }
};