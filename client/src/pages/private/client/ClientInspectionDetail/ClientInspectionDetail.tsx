import useSWR from "swr";
import {
  ClientInspectionDetailContainer,
  InspectionDetail,
  Sidebar,
  SidebarAdmin,
  SidebarBroker,
} from "../..";
import {
  inspectedDetail,
  detailAssetUrl,
} from "./services/add-asset-detail.service";
import { useParams } from "react-router-dom";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

function ClientInspectionDetail() {
  const user = useSelector((store: AppStore) => store.user).user;

  const { insuredId } = useParams();

  const { data } = useSWR(detailAssetUrl(insuredId), inspectedDetail);

  return (
    <ClientInspectionDetailContainer>
      {user?.role === "CLIENT" ? <Sidebar /> : <></>}
      {user?.role === "BROKER" ? <SidebarBroker /> : <></>}
      {user?.role === "ADMIN" ? <SidebarAdmin /> : <></>}
      <InspectionDetail values={data} assetId={insuredId} clientId={data?.client.id} />
    </ClientInspectionDetailContainer>
  );
}
export default ClientInspectionDetail;
