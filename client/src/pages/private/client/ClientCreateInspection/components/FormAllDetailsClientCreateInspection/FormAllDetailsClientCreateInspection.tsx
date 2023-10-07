import {
  FormElectronicDetail,
  FormVehicleDetail
} from "@/components";
import { ElementActive } from "@/models";
import { ClientCreateInspectionValues } from "@/pages";
import { SectionFormDetailContainer } from "@/styledComponents";

interface Props {
  element: ElementActive;
  inputValues: ClientCreateInspectionValues;
}

function FormAllDetailsClientCreateInspection({ element, inputValues }: Props) {
  const fieldsToRender = (element: ElementActive) => {
    let elementsToRender: JSX.Element[] = [];

    if (element.vehicle) {
      elementsToRender = [
        ...elementsToRender,
        <FormVehicleDetail
          key={3}
          inputVehicleValues={inputValues.vehicle}
          inputGncValues={inputValues.gnc}
        />,
      ];
    } else {
      elementsToRender = [
        ...elementsToRender,
        <FormElectronicDetail
          key={4}
          inputElectronicValues={inputValues.electronic}
          inputPhoneValues={inputValues.phone}
        />,
      ];
    }

    return elementsToRender;
  };

  return (
    <SectionFormDetailContainer>
      {fieldsToRender(element)}
    </SectionFormDetailContainer>
  );
}
export default FormAllDetailsClientCreateInspection;
