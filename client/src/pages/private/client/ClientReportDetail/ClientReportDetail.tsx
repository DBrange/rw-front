import { useParams } from "react-router-dom";
import { ReportDetail, Sidebar } from "../..";
import ClientReportDetailContainer from "./components/ClientReportDetailContainer";
import useSWR from "swr";
import { detailSinisterUrl, sinisterDetail } from "./services/get-sinister-detail.service";

function ClientReportDetail() {

  const { sinisterId } = useParams();
  
  const { data } = useSWR(detailSinisterUrl(sinisterId), sinisterDetail);
  return (
    <ClientReportDetailContainer>
      <Sidebar />
      <ReportDetail values={data} id={sinisterId} />
    </ClientReportDetailContainer>
  );
}
export default ClientReportDetail;
