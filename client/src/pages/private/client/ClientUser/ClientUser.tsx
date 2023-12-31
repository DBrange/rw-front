import { ClientUserProvider } from ".";
import { ClientDashboardBox, Sidebar } from "../..";
import { ClientUserContainer } from "./components";

const ClientUser = () => {
  return (
    <ClientUserProvider>
      <ClientUserContainer>
         <Sidebar />
        <ClientDashboardBox />
      </ClientUserContainer>
    </ClientUserProvider>
  );
};

export default ClientUser;
