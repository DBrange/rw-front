import { PageBtn } from "@/components";
import { Form } from "@/styledComponents";
import { AllRegisterPages } from "..";
import { useRegisterContext } from "../..";

function RegisterBox() {
  const { changePage, page, partialErrors, markedTouches, submitValues } =
    useRegisterContext();

  
  return (
    <Form onSubmit={submitValues}>
      <AllRegisterPages />

      <PageBtn
        changePage={changePage}
        page={page}
        max={3}
        errorsInputValues={partialErrors()}
        markedTouches={markedTouches}
      />
    </Form>
  );
}
export default RegisterBox