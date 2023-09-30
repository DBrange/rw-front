import { Form } from "@/styledComponents"
import { AllRegisterPages } from "..";
import { PageBtn } from "@/components";
import { useRegisterContext } from "../..";


function RegisterBox() {
  const { changePage, page, partialErrors, markedTouches } =
    useRegisterContext();
  return (
    <Form>
      <AllRegisterPages />

      <PageBtn
        changePage={changePage}
        page={page}
        max={4}
        errorsInputValues={partialErrors()}
        markedTouches={markedTouches}
      />
    </Form>
  );
}
export default RegisterBox