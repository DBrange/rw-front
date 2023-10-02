import { ClientInspectedCreateReportContainer, ClientInspectedCreateReportBox, ClientInspectedCreateReportProvider } from ".";


function ClientInspectedCreateReport() {
  return (
    <ClientInspectedCreateReportProvider>
      <ClientInspectedCreateReportContainer>
        <ClientInspectedCreateReportBox />
      </ClientInspectedCreateReportContainer>
    </ClientInspectedCreateReportProvider>
  );
}
export default ClientInspectedCreateReport;
