import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import {
  ClientMyProfileContainer,
  MiProfile,
  Sidebar,
  SidebarAdmin,
  SidebarBroker,
} from "../..";

function ClientMyProfile() {
  const user = useSelector((store: AppStore) => store.user).user
  
  return (
    <ClientMyProfileContainer>
      {user?.role === "CLIENT" ? <Sidebar /> : <></>}
      {user?.role === "BROKER" ? <SidebarBroker /> : <></>}
      {user?.role === "ADMIN" ? <SidebarAdmin /> : <></>}
      <MiProfile />
    </ClientMyProfileContainer>
  );
}
export default ClientMyProfile;
