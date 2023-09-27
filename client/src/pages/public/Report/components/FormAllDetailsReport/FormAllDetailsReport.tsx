import {
  FormPersonalDetail,
  FormLegalPersonalDetail,
  FormElectronicDetail,
  FormVehicleReportDetail,
  FormTheftVehicleDetail,
  FormTheftElectronicDetail,
  FormFireVehicleDetail,
  FormCrashVehicleDetail,
} from "@/components";
import { UserActive, ElementReportActive, ReportActive } from "@/models";
import { AllReportValues } from "../..";
import { SectionFormDetailContainer } from "@/styledComponents";

interface Props {
  user: UserActive;
  element: ElementReportActive;
  report: ReportActive;
  inputValues: AllReportValues;
}

function FormAllDetailsReport({ user, element, report, inputValues }: Props) {
  const fieldsToRender = (
    user: UserActive,
    element: ElementReportActive,
    report: ReportActive
  ) => {
    let elementsToRender: JSX.Element[] = [];

    if (user.personal) {
      elementsToRender = [
        ...elementsToRender,
        <FormPersonalDetail
          key={1}
          inputPersonalValues={inputValues.personal}
        />,
      ];
    } else {
      elementsToRender = [
        ...elementsToRender,
        <FormLegalPersonalDetail
          key={1}
          inputLegalPersonalValues={inputValues.legalPersonal}
        />,
      ];
    }

    if (element.vehicleReport) {
      elementsToRender = [
        ...elementsToRender,
        <FormVehicleReportDetail
          key={2}
          inputVehicleReportValues={inputValues.vehicleReport}
          inputGncValues={inputValues.gnc}
        />,
      ];
    } else {
      elementsToRender = [
        ...elementsToRender,
        <FormElectronicDetail
          key={2}
          inputElectronicValues={inputValues.electronic}
          inputPhoneValues={inputValues.phone}
        />,
      ];
    }

    if (report.theft && element.vehicleReport) {
      elementsToRender = [
        ...elementsToRender,
        <FormTheftVehicleDetail
          key={3}
          inputTheftVehicleValues={inputValues.theftVehicle}
          inputIsTireValues={inputValues.isTire}
        />,
      ];
    } else if (report.theft && element.electronic) {
      elementsToRender = [
        ...elementsToRender,
        <FormTheftElectronicDetail
          key={3}
          inputTheftElectronicValues={inputValues.theftElectronic}
        />,
      ];
    } else if (report.fire) {
      elementsToRender = [
        ...elementsToRender,
        <FormFireVehicleDetail
          key={3}
          inputFireValues={inputValues.fire}
          thirdPartyInjured={inputValues.thirdPartyInjured}
        />,
      ];
    } else if (report.crash) {
      elementsToRender = [
        ...elementsToRender,
        <FormCrashVehicleDetail
          key={3}
          inputCrashValues={inputValues.crash}
          thirdPartyInjured={inputValues.thirdPartyInjured}
          thirdPartyVehicle={inputValues.thirdPartyVehicle}
        />,
      ];
    }

    return elementsToRender;
  };

  return (
    <SectionFormDetailContainer>
      {fieldsToRender(user, element, report)}
    </SectionFormDetailContainer>
  );
}
export default FormAllDetailsReport;
