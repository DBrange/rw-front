import { PageBtn } from "@/components";
import { Sidebar } from "@/pages";
import { AllClientCreateInspectionPages } from "..";
import { useClientCreateInspectionContext } from "../..";
import { Form } from "@/styledComponents";

function ClientCreateInspectionBox() {
    const {
      changePage,
      page,
      partialErrors,
      markedTouches,
      submitValues,
    } = useClientCreateInspectionContext();
  return (
    <>
      <Sidebar />

      <Form onSubmit={submitValues}>
        <AllClientCreateInspectionPages />

        <PageBtn
          changePage={changePage}
          page={page}
          max={2}
          errorsInputValues={partialErrors()}
          markedTouches={markedTouches}
        />
      </Form>
    </>
  );
}
export default ClientCreateInspectionBox