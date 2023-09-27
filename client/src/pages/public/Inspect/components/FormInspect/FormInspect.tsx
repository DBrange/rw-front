import { PageBtn } from "@/components";
import { Form } from "@/styledComponents";
import {
  AllInspectPages,
  useInspectContext,
} from "../..";

function FormInspect() {
  const {
    submitValues,
    page,
    changePage,
    partialErrors,
    markedTouches
  } = useInspectContext();



  return (
    <Form onSubmit={submitValues}>
      <AllInspectPages />

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
export default FormInspect;
