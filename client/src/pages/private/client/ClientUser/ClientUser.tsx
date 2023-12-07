import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { ClientUserProvider } from ".";
import { Sidebar, SidebarBroker } from "../..";
import { ClientUserContainer } from "./components";

const ClientUser = () => {
  const userBroker = useSelector((store: AppStore) => store.user).user
    ?.userBroker;

  return (
    <ClientUserProvider>
      <ClientUserContainer>
        {userBroker ? <SidebarBroker /> : <Sidebar />}
        {/* <InspectLogin sectionName="Inspecciones" /> */}
      </ClientUserContainer>
    </ClientUserProvider>
  );
};

export default ClientUser;
