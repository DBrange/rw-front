import { IUserType, UserActive } from "@/models";
import { SectionFormDetailContainer } from "@/styledComponents";
import {
  FormBrokerPersonalDetail,
  FormRegisterLegalPersonalDetail,
  FormRegisterPersonalDetail,
  RegisterValues,
} from "../..";
import FormBrokerLegalPersonalDetail from "../FormBrokerLegalPersonalDetail/FormBrokerLegalPersonalDetail";

interface Props {
  profile: IUserType;
  user: UserActive;
  brokerUser: UserActive;
  inputValues: RegisterValues;
}

function FormAllDetailsRegister({
  profile,
  user,
  brokerUser,
  inputValues,
}: Props) {
  const fieldsToRender = (user: UserActive) => {
    let elementsToRender: JSX.Element[] = [];

    if (profile.client) {
      if (user.personal) {
        elementsToRender = [
          ...elementsToRender,
          <FormRegisterPersonalDetail
            key={1}
            inputPersonalValues={inputValues.registerPersonal}
          />,
        ];
      } else {
        elementsToRender = [
          ...elementsToRender,
          <FormRegisterLegalPersonalDetail
            key={2}
            inputLegalPersonalValues={inputValues.registerLegalPersonal}
          />,
        ];
      }
    } else if (profile.broker) {
      if (brokerUser.personal) {
        elementsToRender = [
          ...elementsToRender,
          <FormBrokerPersonalDetail
            key={1}
            inputPersonalValues={inputValues.registerBrokerPersonal}
            inputValues={inputValues}
            />,
          ];
        } else {
          elementsToRender = [
            ...elementsToRender,
            <FormBrokerLegalPersonalDetail
            key={2}
            inputLegalPersonalValues={inputValues.registerBrokerLegalPersonal}
            inputValues={inputValues}
          />,
        ];
      }
    }

    return elementsToRender;
  };

  return (
    <SectionFormDetailContainer>
      {fieldsToRender(user)}
    </SectionFormDetailContainer>
  );
}
export default FormAllDetailsRegister;
