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
      if (data.schemaGnc) {
        const dataObj = {
          userDTO: data.schemaPersonal,
          vehicleDTO: data.schemaVehicleReport,
          gncDTO: data.schemaGnc,
          crashDTO: data.schemaVehicleCrashReport,
          injuredDTO: data.schemaThirdInjured,
          thirdPartyVehicleDTO: data.schemaVehicleCrashReportData,
        };
        triggers.triggerReportPersonalVehicleCrash(dataObj);
      } else {
        const dataObj = {
          userDTO: data.schemaPersonal,
          vehicleDTO: data.schemaVehicleReport,
          crashDTO: data.schemaVehicleCrashReport,
          injuredDTO: data.schemaThirdInjured,
          thirdPartyVehicleDTO: data.schemaVehicleCrashReportData,
        };

        triggers.triggerReportPersonalVehicleCrash(dataObj);
      }
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
      if (data.schemaGnc) {
        const dataObj = {
          userDTO: data.schemaPersonal,
          vehicleDTO: data.schemaVehicleReport,
          gncDTO: data.schemaGnc,
          fireDTO: data.schemaVehicleFireReport,
          injuredDTO: data.schemaThirdInjured,
        };

        triggers.triggerReportPersonalVehicleFire(dataObj);
      } else {
        const dataObj = {
          userDTO: data.schemaPersonal,
          vehicleDTO: data.schemaVehicleReport,
          fireDTO: data.schemaVehicleFireReport,
          injuredDTO: data.schemaThirdInjured,
        };

        triggers.triggerReportPersonalVehicleFire(dataObj);
      }
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
      if (data.schemaGnc) {
        const dataObj = {
          legalUserDTO: data.schemaLegalPersonal,
          vehicleDTO: data.schemaVehicleReport,
          gncDTO: data.schemaGnc,
          crashDTO: data.schemaVehicleCrashReport,
          injuredDTO: data.schemaThirdInjured,
          thirdPartyVehicleDTO: data.schemaVehicleCrashReportData,
        };

        triggers.triggerReportLegalVehicleCrash(dataObj);
      } else {
        const dataObj = {
          legalUserDTO: data.schemaLegalPersonal,
          vehicleDTO: data.schemaVehicleReport,
          crashDTO: data.schemaVehicleCrashReport,
          injuredDTO: data.schemaThirdInjured,
          thirdPartyVehicleDTO: data.schemaVehicleCrashReportData,
        };

        triggers.triggerReportLegalVehicleCrash(dataObj);
      }
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
      if (data.schemaGnc) {
        const dataObj = {
          legalUserDTO: data.schemaLegalPersonal,
          vehicleDTO: data.schemaVehicleReport,
          gncDTO: data.schemaGnc,
          fireDTO: data.schemaVehicleFireReport,
          injuredDTO: data.schemaThirdInjured,
        };

        triggers.triggerReportLegalVehicleFire(dataObj);
      } else {
        const dataObj = {
          legalUserDTO: data.schemaLegalPersonal,
          vehicleDTO: data.schemaVehicleReport,
          fireDTO: data.schemaVehicleFireReport,
          injuredDTO: data.schemaThirdInjured,
        };

        triggers.triggerReportLegalVehicleFire(dataObj);
      }
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
      if (data.schemaGnc) {
        const dataObj = {
          userDTO: data.schemaPersonal,
          vehicleDTO: data.schemaVehicleReport,
          gncDTO: data.schemaGnc,
          crashDTO: data.schemaVehicleCrashReport,
          thirdPartyVehicleDTO: data.schemaVehicleCrashReportData
        };

        triggers.triggerReportPersonalVehicleCrash(dataObj);
      } else {
        const dataObj = {
          userDTO: data.schemaPersonal,
          vehicleDTO: data.schemaVehicleReport,
          crashDTO: data.schemaVehicleCrashReport,
          thirdPartyVehicleDTO: data.schemaVehicleCrashReportData,
        }

        triggers.triggerReportPersonalVehicleCrash(dataObj);
      }
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
      if (data.schemaGnc) {
        if (data?.schemaVehicleTheftReport?.isTire) {
          const dataObj = {
            userDTO: data.schemaPersonal,
            vehicleDTO: data.schemaVehicleReport,
            gncDTO: data.schemaGnc,
            theftDTO: data.schemaVehicleTheftReport,
            theftTireDTO: data.schemaIsTire,
          };
          triggers.triggerReportPersonalVehicleTheft(dataObj);
        } else {
          const dataObj = {
            userDTO: data.schemaPersonal,
            vehicleDTO: data.schemaVehicleReport,
            gncDTO: data.schemaGnc,
            theftDTO: data.schemaVehicleTheftReport,
          };
          triggers.triggerReportPersonalVehicleTheft(dataObj);
        }
      } else {
        if (data?.schemaVehicleTheftReport?.isTire) {
          const dataObj = {
            userDTO: data.schemaPersonal,
            vehicleDTO: data.schemaVehicleReport,
            theftDTO: data.schemaVehicleTheftReport,
            theftTireDTO: data.schemaIsTire,
          };
          triggers.triggerReportPersonalVehicleTheft(dataObj);
        } else {
          const dataObj = {
            userDTO: data.schemaPersonal,
            vehicleDTO: data.schemaVehicleReport,
            theftDTO: data.schemaVehicleTheftReport,

          };
          triggers.triggerReportPersonalVehicleTheft(dataObj);
        }
      }
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
      if (data.schemaGnc) {
        const dataObj = {
          userDTO: data.schemaPersonal,
          vehicleDTO: data.schemaVehicleReport,
          gncDTO: data.schemaGnc,
          fireDTO: data.schemaVehicleFireReport,
        };

        triggers.triggerReportPersonalVehicleFire(dataObj);
      } else {
        const dataObj = {
          userDTO: data.schemaPersonal,
          vehicleDTO: data.schemaVehicleReport,
          fireDTO: data.schemaVehicleFireReport,
        };

        triggers.triggerReportPersonalVehicleFire(dataObj);
      }
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
      if (data.schemaPhone) {
        const dataObj = {
          userDTO: data.schemaPersonal,
          electronicDTO: data.schemaElectronic,
          theftDTO: data.schemaElectronicTheftReport,
          smartPhoneDTO: data.schemaPhone,
        };
        triggers.triggerReportPersonalElectronicTheft(dataObj);
      } else {
        const dataObj = {
          userDTO: data.schemaPersonal,
          electronicDTO: data.schemaElectronic,
          theftDTO: data.schemaElectronicTheftReport,
        };
        triggers.triggerReportPersonalElectronicTheft(dataObj);
      }
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

      if (data.schemaGnc) {
        const dataObj = {
          legalUserDTO: data.schemaLegalPersonal,
          vehicleDTO: data.schemaVehicleReport,
          gncDTO: data.schemaGnc,
          crashDTO: data.schemaVehicleCrashReport,
          thirdPartyVehicleDTO: data.schemaVehicleCrashReportData,
        };

        triggers.triggerReportLegalVehicleCrash(dataObj);
      } else {
        const dataObj = {
          legalUserDTO: data.schemaLegalPersonal,
          vehicleDTO: data.schemaVehicleReport,
          crashDTO: data.schemaVehicleCrashReport,
          thirdPartyVehicleDTO: data.schemaVehicleCrashReportData,
        };

        triggers.triggerReportLegalVehicleCrash(dataObj);
      }
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
      if (data.schemaGnc) {
        if (data?.schemaVehicleTheftReport?.isTire) {
          const dataObj = {
            legalUserDTO: data.schemaLegalPersonal,
            vehicleDTO: data.schemaVehicleReport,
            gncDTO: data.schemaGnc,
            theftDTO: data.schemaVehicleTheftReport,
            theftTireDTO: data.schemaIsTire,
          };
          triggers.triggerReportLegalVehicleTheft(dataObj);
        } else {
          const dataObj = {
            legalUserDTO: data.schemaLegalPersonal,
            vehicleDTO: data.schemaVehicleReport,
            gncDTO: data.schemaGnc,
            theftDTO: data.schemaVehicleTheftReport,
          };
          triggers.triggerReportLegalVehicleTheft(dataObj);
        }
      } else {
        if (data?.schemaVehicleTheftReport?.isTire) {
          const dataObj = {
            legalUserDTO: data.schemaLegalPersonal,
            vehicleDTO: data.schemaVehicleReport,
            theftDTO: data.schemaVehicleTheftReport,
            theftTireDTO: data.schemaIsTire,
          };
          triggers.triggerReportLegalVehicleTheft(dataObj);
        } else {
          const dataObj = {
            legalUserDTO: data.schemaLegalPersonal,
            vehicleDTO: data.schemaVehicleReport,
            theftDTO: data.schemaVehicleTheftReport,
          };
          triggers.triggerReportLegalVehicleTheft(dataObj);
        }
      }
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
      data.schemaVehicleFireReport
    ) {
      setModalActive(true);
      if (data.schemaGnc) {
        const dataObj = {
          legalUserDTO: data.schemaLegalPersonal,
          vehicleDTO: data.schemaVehicleReport,
          gncDTO: data.schemaGnc,
          fireDTO: data.schemaVehicleFireReport,
        };

        triggers.triggerReportLegalVehicleFire(dataObj);
      } else {
        const dataObj = {
          legalUserDTO: data.schemaLegalPersonal,
          vehicleDTO: data.schemaVehicleReport,
          fireDTO: data.schemaVehicleFireReport,
        };

        triggers.triggerReportLegalVehicleFire(dataObj);
      }
    } else {
      setModalActive(false);
    }
  } else if (
    userActiveForm === "legal" &&
    activeForm === "electronic" &&
    typeComplaintForm.theft
  ) {
    if (
      data.schemaLegalPersonal &&
      data.schemaElectronic &&
      data.schemaElectronicTheftReport
    ) {
      setModalActive(true);
      if (data.schemaPhone) {
        const dataObj = {
          legalUserDTO: data.schemaLegalPersonal,
          electronicDTO: data.schemaElectronic,
          theftDTO: data.schemaElectronicTheftReport,
          smartPhoneDTO: data.schemaPhone,
        };
        triggers.triggerReportLegalElectronicTheft(dataObj);
      } else {
        const dataObj = {
          legalUserDTO: data.schemaLegalPersonal,
          electronicDTO: data.schemaElectronic,
          theftDTO: data.schemaElectronicTheftReport,
        };
        triggers.triggerReportLegalElectronicTheft(dataObj);
      }
    } else {
      setModalActive(false);
    }
  }
};
