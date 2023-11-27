import { useParams } from "react-router-dom";
import useSWR from "swr";
import { ClientDetailContainer } from ".";
import { ClientProfile, SidebarBroker } from "..";
import {
  clientDetail,
  clientDetailUrl,
  clientSinisterDetail,
  clientSinisterDetailUrl,
} from "./services/user-detail.service";

function ClientDetail() {
  const { clientId } = useParams();

  const { data: clientData } = useSWR(clientDetailUrl(clientId), clientDetail);
    const { data: sinisterClientData } = useSWR(
      clientSinisterDetailUrl(clientId),
      clientSinisterDetail
    );
  return (
    <ClientDetailContainer>
      <SidebarBroker />
      <ClientProfile data={clientData} sinister={sinisterClientData} />
    </ClientDetailContainer>
  );
}
export default ClientDetail;
