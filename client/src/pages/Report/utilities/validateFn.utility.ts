import { TypeComplaintForm } from "..";

type ValidationFormDataReport = {
  userActiveForm: string;
  activeForm: string;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  typeComplaintForm: TypeComplaintForm;
  data: any;
  amountValue?: number;
};

export const validationFormDataReport = ({
  userActiveForm,
  activeForm,
  setModalActive,
  typeComplaintForm,
  data,
  amountValue,
}: ValidationFormDataReport) => {


    if (amountValue as number > 0) {
      validationWithInjuries({
        userActiveForm,
        activeForm,
        setModalActive,
        typeComplaintForm,
        data,
      });
    } else {
      validationWithoutInjuries({
        userActiveForm,
        activeForm,
        setModalActive,
        typeComplaintForm,
        data,
      });
    }

};
  
const validationWithInjuries = ({
  userActiveForm,
  activeForm,
  setModalActive,
  typeComplaintForm,
  data,
}: ValidationFormDataReport) => {
  if (
    userActiveForm === "person" &&
    activeForm === "vehicle" &&
    typeComplaintForm.crash
  ) {
    if (
      data.schemaPersonal &&
      data.schemaVehicle &&
      data.schemaVehicleCrashReport &&
      data.schemaThirdInjured &&
      data.schemaThirdPartyVehicleReport
    ) {
      setModalActive(true);
      console.log("siii");
    } else {
      setModalActive(false);
      console.log("nooo");
    }
  } else if (
    userActiveForm === "person" &&
    activeForm === "vehicle" &&
    typeComplaintForm.fire
  ) {
    if (
      data.schemaPersonal &&
      data.schemaVehicle &&
      data.schemaVehicleFireReport &&
      data.schemaThirdInjured
    ) {
      setModalActive(true);
      console.log("siii");
    } else {
      setModalActive(false);
      console.log("nooo");
    }
  } else if (
    userActiveForm === "legal" &&
    activeForm === "vehicle" &&
    typeComplaintForm.crash
  ) {
    if (
      data.schemaPersonal &&
      data.schemaVehicle &&
      data.schemaVehicleCrashReport &&
      data.schemaThirdInjured &&
      data.schemaThirdPartyVehicleReport
    ) {
      setModalActive(true);
      console.log("siii");
    } else {
      setModalActive(false);
      console.log("nooo");
    }
  } else if (
    userActiveForm === "legal" &&
    activeForm === "vehicle" &&
    typeComplaintForm.fire
  ) {
    if (
      data.schemaPersonal &&
      data.schemaVehicle &&
      data.schemaVehicleFireReport &&
      data.schemaThirdInjured
    ) {
      setModalActive(true);
      console.log("siii");
    } else {
      setModalActive(false);
      console.log("nooo");
    }
  }
};

const validationWithoutInjuries = ({
  userActiveForm,
  activeForm,
  setModalActive,
  typeComplaintForm,
  data,
}: ValidationFormDataReport) => {
  if (activeForm === 'vehicle') {
    validationVehicle({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
    });
  } else if (activeForm === 'electronic') {
    validationElectronic({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
    });
  }
};

const validationVehicle = ({
  userActiveForm,
  activeForm,
  setModalActive,
  typeComplaintForm,
  data,
}: ValidationFormDataReport) => {
  if (userActiveForm === 'person') {
    validationPersonal({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
    });
  } else if(userActiveForm === 'legal') {
    validationLegalPersonal({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
    });
  }
};

const validationElectronic = ({
  userActiveForm,
  activeForm,
  setModalActive,
  typeComplaintForm,
  data,
}: ValidationFormDataReport) => {
  if (userActiveForm === "person") {
    validationPersonal({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
    });
  } else if (userActiveForm === "legal") {
    validationLegalPersonal({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
    });
  }
};

const validationPersonal = ({
  userActiveForm,
  activeForm,
  setModalActive,
  typeComplaintForm,
  data,
}: ValidationFormDataReport) => {
  if (
    userActiveForm === "person" &&
    activeForm === "vehicle" &&
    typeComplaintForm.crash
  ) {
    if (
      data.schemaPersonal &&
      data.schemaVehicle &&
      data.schemaVehicleCrashReport &&
      data.schemaThirdPartyVehicleReport
    ) {
      setModalActive(true);
      console.log("siii");
    } else {
      setModalActive(false);
      console.log("nooo");
    }
  } else if (
    userActiveForm === "person" &&
    activeForm === "vehicle" &&
    typeComplaintForm.theft
  ) {
    if (
      data.schemaPersonal &&
      data.schemaVehicle &&
      data.schemaVehicleTheftReport
    ) {
      setModalActive(true);
      console.log("siii");
    } else {
      setModalActive(false);
      console.log("nooo");
    }
  } else if (
    userActiveForm === "person" &&
    activeForm === "vehicle" &&
    typeComplaintForm.fire
  ) {
    if (
      data.schemaPersonal &&
      data.schemaVehicle &&
      data.schemaVehicleFireReport
    ) {
      setModalActive(true);
      console.log("siii");
    } else {
      setModalActive(false);
      console.log("nooo");
    }
  } else if (
    userActiveForm === "person" &&
    activeForm === "electronic" &&
    typeComplaintForm.theft
  ) {
    if (
      data.schemaPersonal &&
      data.schemaElectronic &&
      data.schemaElectronicTheftReport
    ) {
      setModalActive(true);
      console.log("siii");
    } else {
      setModalActive(false);
      console.log("nooo");
    }
  }
};

const validationLegalPersonal = ({
  userActiveForm,
  activeForm,
  setModalActive,
  typeComplaintForm,
  data,
}: ValidationFormDataReport) => {
  if (
    userActiveForm === "legal" &&
    activeForm === "vehicle" &&
    typeComplaintForm.crash
  ) {
    if (
      data.schemaPersonal &&
      data.schemaVehicle &&
      data.schemaVehicleCrashReport &&
      data.schemaThirdPartyVehicleReport
    ) {
      setModalActive(true);
      console.log("siii");
    } else {
      setModalActive(false);
      console.log("nooo");
    }
  } else if (
    userActiveForm === "legal" &&
    activeForm === "vehicle" &&
    typeComplaintForm.theft
  ) {
    if (
      data.schemaPersonal &&
      data.schemaVehicle &&
      data.schemaVehicleTheftReport
    ) {
      setModalActive(true);
      console.log("siii");
    } else {
      setModalActive(false);
      console.log("nooo");
    }
  } else if (
    userActiveForm === "legal" &&
    activeForm === "vehicle" &&
    typeComplaintForm.fire
  ) {
    if (
      data.schemaPersonal &&
      data.schemaVehicle &&
      data.schemaVehicleFireReport
    ) {
      setModalActive(true);
      console.log("siii");
    } else {
      setModalActive(false);
      console.log("nooo");
    }
  } else if (
    userActiveForm === "legal" &&
    activeForm === "electronic" &&
    typeComplaintForm.theft
  ) {
    if (
      data.schemaPersonal &&
      data.schemaElectronic &&
      data.schemaElectronicTheftReport
    ) {
      setModalActive(true);
      console.log("siii");
    } else {
      setModalActive(false);
      console.log("nooo");
    }
  }
};




