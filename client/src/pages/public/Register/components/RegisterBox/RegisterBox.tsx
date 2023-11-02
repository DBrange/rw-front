import { PageBtn } from "@/components";
import { Form, P } from "@/styledComponents";
import { AllRegisterPages } from "..";
import { useRegisterContext } from "../..";
import { PiWarningCircleFill } from "react-icons/pi";

function RegisterBox() {
  const {
    changePage,
    page,
    partialErrors,
    markedTouches,
    submitValues,
    verifyInputs,
    userType,
    brokerActive,
    userActive
  } = useRegisterContext();

  return (
    <Form onSubmit={submitValues}>
      <AllRegisterPages />
      <span>
        <P $error={!!verifyInputs}>
          <PiWarningCircleFill />
          {userType.client && userActive.personal && "El email o dni ya existen"}
          {userType.client && userActive.legalPersonal && "El email o cuit ya existen"}
          {userType.broker && userActive.personal && "El email, dni o matricula ya existen"}
          {userType.broker && userActive.legalPersonal && "El email, cuit o matricula ya existen"}
        </P>
      </span>
      
      <PageBtn
        changePage={changePage}
        page={page}
        max={3}
        errorsInputValues={partialErrors() || verifyInputs}
        markedTouches={markedTouches}
      />
    </Form>
  );
}
export default RegisterBox;
