import { ClientCreateReportProvider, ClientCreateReportBox, ClientCreateReportContainer } from ".";

function ClientCreateReport() {
  return (
    <ClientCreateReportProvider>
      <ClientCreateReportContainer>
        <ClientCreateReportBox />
      </ClientCreateReportContainer>
    </ClientCreateReportProvider>
  );
}
export default ClientCreateReport;
