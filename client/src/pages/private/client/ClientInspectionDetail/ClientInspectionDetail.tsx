import useSWR from "swr";
import {
  ClientInspectionDetailContainer,
  InspectionDetail,
  Sidebar,
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
  const broker = useSelector((store: AppStore) => store.user).user.broker;

  const { insuredId } = useParams();

  const { data } = useSWR(detailAssetUrl(insuredId), inspectedDetail);

  return (
    <ClientInspectionDetailContainer>
      {broker ? <SidebarBroker /> : <Sidebar />}
      <InspectionDetail values={data} id={insuredId} />
    </ClientInspectionDetailContainer>
  );
}
export default ClientInspectionDetail;
