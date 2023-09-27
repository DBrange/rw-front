import { PageBtn } from "@/components";
import { Form } from "@/styledComponents";
import { AllReportPages } from "..";
import { useReportContext } from "../..";

function FormReport() {
  const {
    submitValues,
    page,
    changePage,
    partialErrors,
    markedTouches,
    amountInjured,
    amountVehicles,
    reportActive,
  } = useReportContext();

 const correspondingPage =
   amountInjured > 0 && amountVehicles > 0 && reportActive.crash
     ? 8
     : amountInjured > 0 && reportActive.fire
     ? 7
     : amountInjured < 1 && amountVehicles > 0 && reportActive.crash
     ? 7
     : amountInjured > 0 && amountVehicles < 1 && reportActive.crash
     ? 7
     : 6;

  return (
    <Form onSubmit={submitValues}>
      <AllReportPages />

      <PageBtn
        changePage={changePage}
        page={page}
        max={correspondingPage}
        errorsInputValues={partialErrors()}
        markedTouches={markedTouches}
      />
    </Form>
  );
}
export default FormReport;
