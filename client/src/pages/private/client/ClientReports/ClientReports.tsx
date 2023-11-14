import { ClientReportsProvider, ClientReportsContainer, ClientReportsBox } from "."

function ClientReports() {
  return (
    <ClientReportsProvider>
      <ClientReportsContainer>
        <ClientReportsBox />
      </ClientReportsContainer>
    </ClientReportsProvider>
  )
}

export default ClientReports