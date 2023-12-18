import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { ClientUserProvider } from ".";
import { ClientDashboardBox, Sidebar, SidebarBroker } from "../..";
import { ClientUserContainer } from "./components";

const ClientUser = () => {
  const userBroker = useSelector((store: AppStore) => store.user).user
    ?.userBroker;

  return (
    <ClientUserProvider>
      <ClientUserContainer>
        {userBroker ? <SidebarBroker /> : <Sidebar />}
        <ClientDashboardBox />
      </ClientUserContainer>
    </ClientUserProvider>
  );
};

export default ClientUser;
