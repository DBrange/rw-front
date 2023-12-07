import { PageBtn } from "@/components";
import { Sidebar, SidebarBroker } from "@/pages";
import { Form } from "@/styledComponents";
import { AllClientInspectedCreateReportPages, useClientInspectedCreateReportContext } from "../..";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

function ClientInspectedCreateReportBox() {
  const {
    changePage,
    page,
    partialErrors,
    markedTouches,
    submitValues,
    reportActive,
    amountVehicles,
    amountInjured,
  } = useClientInspectedCreateReportContext();

  const userBroker = useSelector((store: AppStore) => store.user).user
    ?.userBroker;
  
  const correspondingPage =
    amountInjured > 0 && amountVehicles > 0 && reportActive.crash
      ? 4
      : amountInjured > 0 && reportActive.fire
      ? 3
      : amountInjured < 1 && amountVehicles > 0 && reportActive.crash
      ? 3
      : amountInjured > 0 && amountVehicles < 1 && reportActive.crash
      ? 3
      : 2;
  return (
    <>
      {userBroker ? <SidebarBroker /> : <Sidebar />}

      <Form onSubmit={submitValues}>
        <AllClientInspectedCreateReportPages />

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
export default ClientInspectedCreateReportBox;
