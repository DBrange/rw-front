import { useParams } from "react-router-dom";
import { ReportDetail, Sidebar, SidebarAdmin, SidebarBroker } from "../..";
import ClientReportDetailContainer from "./components/ClientReportDetailContainer";
import useSWR from "swr";
import {
  detailSinisterUrl,
  sinisterDetail,
} from "./services/get-sinister-detail.service";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

function ClientReportDetail() {
  const user = useSelector((store: AppStore) => store.user).user

  const { sinisterId } = useParams();

  const { data } = useSWR(detailSinisterUrl(sinisterId), sinisterDetail);

  return (
    <ClientReportDetailContainer>
      {user?.role === "CLIENT" ? <Sidebar /> : <></>}
      {user?.role === "BROKER" ? <SidebarBroker /> : <></>}
      {user?.role === "ADMIN" ? <SidebarAdmin /> : <></>}
      <ReportDetail values={data} id={sinisterId} />
    </ClientReportDetailContainer>
  );
}
export default ClientReportDetail;
