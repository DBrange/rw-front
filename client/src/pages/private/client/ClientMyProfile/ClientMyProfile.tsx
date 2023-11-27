import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import {
  ClientMyProfileContainer,
  MiProfile,
  Sidebar,
  SidebarBroker,
} from "../..";

function ClientMyProfile() {
  const broker = useSelector((store: AppStore) => store.user).user.broker;
  return (
    <ClientMyProfileContainer>
      {broker ? <SidebarBroker /> : <Sidebar />}
      <MiProfile />
    </ClientMyProfileContainer>
  );
}
export default ClientMyProfile;
