import { useParams } from "react-router-dom";
import { ReportDetail, Sidebar, SidebarBroker } from "../..";
import ClientReportDetailContainer from "./components/ClientReportDetailContainer";
import useSWR from "swr";
import {
  detailSinisterUrl,
  sinisterDetail,
} from "./services/get-sinister-detail.service";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

function ClientReportDetail() {
  const broker = useSelector((store: AppStore) => store.user).user.broker;

  const { sinisterId } = useParams();

  const { data } = useSWR(detailSinisterUrl(sinisterId), sinisterDetail);

  return (
    <ClientReportDetailContainer>
      {broker ? <SidebarBroker /> : <Sidebar />}
      <ReportDetail values={data} id={sinisterId} />
    </ClientReportDetailContainer>
  );
}
export default ClientReportDetail;
