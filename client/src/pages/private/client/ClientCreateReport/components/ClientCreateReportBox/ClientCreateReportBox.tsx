import { PageBtn } from "@/components";
import { Sidebar, SidebarBroker } from "@/pages";
import { Form } from "@/styledComponents";
import { AllClientCreateReportPages } from "..";
import { useClientCreateReportContext } from "../..";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

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

  const broker = useSelector((store: AppStore) => store.user).user.broker;

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
      {broker ? <SidebarBroker /> : <Sidebar />}

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
