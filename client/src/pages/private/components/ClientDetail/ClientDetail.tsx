import { useParams } from "react-router-dom";
import useSWR from "swr";
import { ClientDetailContainer } from ".";
import { ClientProfile, SidebarBroker } from "..";
import { clientDetail, clientDetailUrl } from "./services/user-detail.service";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

function ClientDetail() {
  const { clientId } = useParams();
  const user = useSelector((store: AppStore) => store.user);

  const { data: clientData } = useSWR(
    clientDetailUrl(user.user?.id, clientId),
    clientDetail
  );

  return (
    <ClientDetailContainer>
      <SidebarBroker />
      <ClientProfile data={clientData} />
    </ClientDetailContainer>
  );
}
export default ClientDetail;
