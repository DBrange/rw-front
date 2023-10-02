import { FormPersonalDetail, FormLegalPersonalDetail } from "@/components";
import { RegisterValues } from "../..";
import { UserActive } from "@/models";
import { SectionFormDetailContainer } from "@/styledComponents";

interface Props {
  user: UserActive;
  inputValues: RegisterValues;
}

function FormAllDetailsRegister({ user, inputValues }: Props) {
  const fieldsToRender = (user: UserActive) => {
    let elementsToRender: JSX.Element[] = [];

    // if (user.personal) {
    //   elementsToRender = [
    //     ...elementsToRender,
    //     <FormPersonalDetail
    //       key={1}
    //       inputPersonalValues={inputValues.personal}
    //     />,
    //   ];
    // } else {
    //   elementsToRender = [
    //     ...elementsToRender,
    //     <FormLegalPersonalDetail
    //       key={2}
    //       inputLegalPersonalValues={inputValues.legalPersonal}
    //     />,
    //   ];
    // }

    return elementsToRender;
  };

  return (
    <SectionFormDetailContainer>
      {fieldsToRender(user)}
    </SectionFormDetailContainer>
  );
}
export default FormAllDetailsRegister;
