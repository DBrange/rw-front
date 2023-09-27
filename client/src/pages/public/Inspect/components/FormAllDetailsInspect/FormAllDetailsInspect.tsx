import { FormPersonalDetail, FormLegalPersonalDetail,FormVehicleDetail, FormElectronicDetail } from "@/components";
import {
  AllInspectValues,
  
} from "../..";
import { UserActive, ElementActive } from "@/models";
import { SectionFormDetailContainer } from "@/styledComponents";

interface Props {
  user: UserActive;
  element: ElementActive;
  inputValues: AllInspectValues;
}

function FormAllDetailsInspect({ user, element, inputValues }: Props) {
  const fieldsToRender = (user: UserActive, element: ElementActive) => {
    let elementsToRender: JSX.Element[] = [];

    if (user.personal) {
      elementsToRender = [
        ...elementsToRender,
        <FormPersonalDetail key={1} inputPersonalValues={inputValues.personal} />,
      ];
    } else {
      elementsToRender = [...elementsToRender, <FormLegalPersonalDetail key={2} inputLegalPersonalValues={inputValues.legalPersonal} />];
    }

    if (element.vehicle) {
      elementsToRender = [...elementsToRender, <FormVehicleDetail key={3} inputVehicleValues={inputValues.vehicle} inputGncValues={inputValues.gnc} />];
    } else {
      elementsToRender = [...elementsToRender, <FormElectronicDetail key={4} inputElectronicValues={inputValues.electronic} inputPhoneValues={inputValues.phone} />];
    }

    return elementsToRender;
  };

  return (
    <SectionFormDetailContainer>
      {fieldsToRender(user, element)}
    </SectionFormDetailContainer>
  );
}
export default FormAllDetailsInspect;
