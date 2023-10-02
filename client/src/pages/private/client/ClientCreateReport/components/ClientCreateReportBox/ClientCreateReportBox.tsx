import { PageBtn } from "@/components";
import {
  AllClientCreateReportPages,
  Sidebar,
  useClientCreateReportContext,
} from "@/pages";
import { Form } from "@/styledComponents";

function ClientCreateReportBox() {
  const { changePage, page, partialErrors, markedTouches, submitValues } =
    useClientCreateReportContext();
  return (
    <>
      <Sidebar />

      <Form onSubmit={submitValues}>
        <AllClientCreateReportPages />

        <PageBtn
          changePage={changePage}
          page={page}
          max={8}
          errorsInputValues={partialErrors()}
          markedTouches={markedTouches}
        />
      </Form>
    </>
  );
}
export default ClientCreateReportBox;
