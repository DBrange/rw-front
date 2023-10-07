import { ReportDetail, Sidebar } from "../.."
import ClientReportDetailContainer from "./components/ClientReportDetailContainer/ClientReportDetailContainer"

function ClientReportDetail() {
  return (
    <ClientReportDetailContainer>
      <Sidebar />
      <ReportDetail />
    </ClientReportDetailContainer>
  )
}
export default ClientReportDetail