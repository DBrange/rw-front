import { useParams } from "react-router-dom";
import useSWR from "swr";
import { ClientDetailContainer } from ".";
import { ClientProfile, Sidebar, SidebarAdmin, SidebarBroker } from "..";
import { clientDetail, clientDetailUrl } from "./services/user-detail.service";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

function ClientDetail() {
  const { userId, clientId } = useParams();
  const user = useSelector((store: AppStore) => store.user.user);

  const { data: clientData } = useSWR(
    clientDetailUrl(userId || user?.id, clientId),
    clientDetail
  );

  return (
    <ClientDetailContainer>
      {user?.role === "CLIENT" ? <Sidebar /> : <></>}
      {user?.role === "BROKER" ? <SidebarBroker /> : <></>}
      {user?.role === "ADMIN" ? <SidebarAdmin /> : <></>}
      <ClientProfile data={clientData} />
    </ClientDetailContainer>
  );
}
export default ClientDetail;
