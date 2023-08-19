import { TypeComplaintForm } from "..";

type ValidationFormDataReport = {
  userActiveForm: string;
  activeForm: string;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  typeComplaintForm: TypeComplaintForm;
  data: any;
  amountValue?: number;
  triggers: any
};

export const validationFormDataReport = ({
  userActiveForm,
  activeForm,
  setModalActive,
  typeComplaintForm,
  data,
  amountValue,
  triggers,
}: ValidationFormDataReport) => {
  if ((amountValue as number) > 0) {
    validationWithInjuries({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
      triggers,
    });
  } else {
    validationWithoutInjuries({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
      triggers,
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
      data.schemaVehicleReport &&
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
      data.schemaVehicleReport &&
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
      data.schemaVehicleReport &&
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
      data.schemaVehicleReport &&
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
  triggers,
}: ValidationFormDataReport) => {
  if (activeForm === "vehicle") {
    validationVehicle({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
      triggers,
    });
  } else if (activeForm === "electronic") {
    validationElectronic({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
      triggers,
    });
  }
};

const validationVehicle = ({
  userActiveForm,
  activeForm,
  setModalActive,
  typeComplaintForm,
  data,
  triggers,
}: ValidationFormDataReport) => {
  if (userActiveForm === "person") {
    validationPersonal({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
      triggers,
    });
  } else if (userActiveForm === "legal") {
    validationLegalPersonal({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
      triggers,
    });
  }
};

const validationElectronic = ({
  userActiveForm,
  activeForm,
  setModalActive,
  typeComplaintForm,
  data,
  triggers,
}: ValidationFormDataReport) => {
  if (userActiveForm === "person") {
    validationPersonal({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
      triggers,
    });
  } else if (userActiveForm === "legal") {
    validationLegalPersonal({
      userActiveForm,
      activeForm,
      setModalActive,
      typeComplaintForm,
      data,
      triggers,
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
      data.schemaVehicleReport &&
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
      data.schemaVehicleReport &&
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
      data.schemaVehicleReport &&
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
      data.schemaVehicleReport &&
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
      data.schemaVehicleReport &&
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
      data.schemaVehicleReport &&
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




