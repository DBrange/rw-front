import useSWR from "swr";
import {
  ClientInspectionDetailContainer,
  InspectionDetail,
  Sidebar,
} from "../..";
import {
  inspectedDetail,
  detailAssetUrl,
} from "./services/add-asset-detail.service";
import { useParams } from "react-router-dom";

function ClientInspectionDetail() {
  const { insuredId } = useParams();

  const { data } = useSWR(detailAssetUrl(insuredId), inspectedDetail);
  return (
    <ClientInspectionDetailContainer>
      <Sidebar />
      <InspectionDetail values={data} id={insuredId} />
    </ClientInspectionDetailContainer>
  );
}
export default ClientInspectionDetail;
