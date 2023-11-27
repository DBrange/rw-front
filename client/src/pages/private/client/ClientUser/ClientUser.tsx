import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { ClientUserProvider } from ".";
import { Sidebar, SidebarBroker } from "../..";
import { ClientUserContainer } from "./components";

const ClientUser = () => {
  const broker = useSelector((store: AppStore) => store.user).user.broker;

  return (
    <ClientUserProvider>
      <ClientUserContainer>
        {broker ? <SidebarBroker /> : <Sidebar />}
        {/* <InspectLogin sectionName="Inspecciones" /> */}
      </ClientUserContainer>
    </ClientUserProvider>
  );
};

export default ClientUser;
