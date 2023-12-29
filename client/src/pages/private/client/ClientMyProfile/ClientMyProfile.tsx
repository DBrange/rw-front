import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import {
  ClientMyProfileContainer,
  MiProfile,
  Sidebar,
  SidebarBroker,
} from "../..";

function ClientMyProfile() {
  const userBroker = useSelector((store: AppStore) => store.user).user
    ?.userBroker;
  
  return (
    <ClientMyProfileContainer>
      {userBroker ? <SidebarBroker /> : <Sidebar />}
      <MiProfile />
    </ClientMyProfileContainer>
  );
}
export default ClientMyProfile;
