import { Form } from "@/styledComponents"
import { AllRegisterPages } from "..";
import { PageBtn } from "@/components";
import { useRegisterContext } from "../..";
import { useEffect } from "react";


function RegisterBox() {
  const { changePage, page, partialErrors, markedTouches, submitValues } =
    useRegisterContext();
  console.log(partialErrors())
  useEffect(() => {

  }, [page])
  
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