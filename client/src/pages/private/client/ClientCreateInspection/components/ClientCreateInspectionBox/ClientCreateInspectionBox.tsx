import { PageBtn } from "@/components";
import { Sidebar, SidebarBroker } from "@/pages";
import { AllClientCreateInspectionPages } from "..";
import { useClientCreateInspectionContext } from "../..";
import { Form } from "@/styledComponents";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

function ClientCreateInspectionBox() {
    const {
      changePage,
      page,
      partialErrors,
      markedTouches,
      submitValues,
  } = useClientCreateInspectionContext();
  const userBroker = useSelector((store: AppStore) => store.user).user
    ?.userBroker;
  
  
  return (
    <>
      {userBroker ? <SidebarBroker /> : <Sidebar />}

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