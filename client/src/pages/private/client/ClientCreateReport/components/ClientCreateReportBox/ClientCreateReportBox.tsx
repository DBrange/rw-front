import { PageBtn } from "@/components";
import {
  AllClientCreateReportPages,
  Sidebar,
  useClientCreateReportContext,
} from "@/pages";
import { Form } from "@/styledComponents";

function ClientCreateReportBox() {
  const {
    changePage,
    page,
    partialErrors,
    markedTouches,
    submitValues,
    reportActive,
    amountVehicles,
    amountInjured,
  } = useClientCreateReportContext();

  const correspondingPage =
    amountInjured > 0 && amountVehicles > 0 && reportActive.crash
      ? 6
      : amountInjured > 0 && reportActive.fire
      ? 5
      : amountInjured < 1 && amountVehicles > 0 && reportActive.crash
      ? 5
      : amountInjured > 0 && amountVehicles < 1 && reportActive.crash
      ? 5
      : 4;
  return (
    <>
      <Sidebar />

      <Form onSubmit={submitValues}>
        <AllClientCreateReportPages />

        <PageBtn
          changePage={changePage}
          page={page}
          max={correspondingPage}
          errorsInputValues={partialErrors()}
          markedTouches={markedTouches}
        />
      </Form>
    </>
  );
}
export default ClientCreateReportBox;