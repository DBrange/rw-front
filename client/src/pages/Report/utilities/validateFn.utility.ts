import { TypeComplaintForm } from "..";

type ValidationFormDataReport = {
  userActiveForm: string;
  activeForm: string;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  typeComplaintForm: TypeComplaintForm;
  data: any;
  amountValue?: number;
  triggers: any;
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
  triggers,
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
      data.schemaVehicleCrashReportData
    ) {
      setModalActive(true);
      triggers.triggerReportPersonalVehicleCrash(data);
    } else {
      setModalActive(false);
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
      triggers.triggerReportPersonalVehicleFire(data);
    } else {
      setModalActive(false);
    }
  } else if (
    userActiveForm === "legal" &&
    activeForm === "vehicle" &&
    typeComplaintForm.crash
  ) {
    if (
      data.schemaLegalPersonal &&
      data.schemaVehicleReport &&
      data.schemaVehicleCrashReport &&
      data.schemaThirdInjured &&
      data.schemaVehicleCrashReportData
    ) {
      setModalActive(true);
      triggers.triggerReportLegalVehicleCrash(data);
    } else {
      setModalActive(false);
    }
  } else if (
    userActiveForm === "legal" &&
    activeForm === "vehicle" &&
    typeComplaintForm.fire
  ) {
    if (
      data.schemaLegalPersonal &&
      data.schemaVehicleReport &&
      data.schemaVehicleFireReport &&
      data.schemaThirdInjured
    ) {
      setModalActive(true);
      triggers.triggerReportLegalVehicleFire(data);
    } else {
      setModalActive(false);
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
  triggers,
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
      data.schemaVehicleCrashReportData
    ) {
      setModalActive(true);
      triggers.triggerReportPersonalVehicleCrash(data);
    } else {
      setModalActive(false);
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
      triggers.triggerReportPersonalVehicleTheft(data);
    } else {
      setModalActive(false);
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
      triggers.triggerReportPersonalVehicleFire(data);
    } else {
      setModalActive(false);
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
      triggers.triggerReportPersonalElectronicTheft(data);
    } else {
      setModalActive(false);
    }
  }
};

const validationLegalPersonal = ({
  userActiveForm,
  activeForm,
  setModalActive,
  typeComplaintForm,
  data,
  triggers,
}: ValidationFormDataReport) => {
  if (
    userActiveForm === "legal" &&
    activeForm === "vehicle" &&
    typeComplaintForm.crash
  ) {
    if (
      data.schemaLegalPersonal &&
      data.schemaVehicleReport &&
      data.schemaVehicleCrashReport &&
      data.schemaVehicleCrashReportData
    ) {
      setModalActive(true);
      triggers.triggerReportLegalVehicleCrash(data);
    } else {
      setModalActive(false);
    }
  } else if (
    userActiveForm === "legal" &&
    activeForm === "vehicle" &&
    typeComplaintForm.theft
  ) {
    if (
      data.schemaLegalPersonal &&
      data.schemaVehicleReport &&
      data.schemaVehicleTheftReport
    ) {
      setModalActive(true);
      triggers.triggerReportLegalVehicleTheft(data);
    } else {
      setModalActive(false);
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
      triggers.triggerReportLegalVehicleFire(data);
    } else {
      setModalActive(false);
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
      triggers.triggerReportLegalElectronicTheft(data);
    } else {
      setModalActive(false);
    }
  }
};
