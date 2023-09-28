import { InspectLogin, Sidebar } from "../components";
import { ClientUserContainer } from "./components";

const ClientUser = () => {

  return (
    <ClientUserContainer>
      <Sidebar />
      <InspectLogin />
    </ClientUserContainer>
  );
};

export default ClientUser;
