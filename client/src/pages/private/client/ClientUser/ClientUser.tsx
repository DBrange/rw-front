import { ClientUserProvider } from ".";
import { Sidebar } from "../..";
import { ClientUserContainer } from "./components";

const ClientUser = () => {
  return (
    <ClientUserProvider>
      <ClientUserContainer>
        <Sidebar />
        {/* <InspectLogin sectionName="Inspecciones" /> */}
      </ClientUserContainer>
    </ClientUserProvider>
  );
};

export default ClientUser;
