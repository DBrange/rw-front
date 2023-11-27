import { BrokerCreateReportContainer, BrokerCreateReportBox, BrokerCreateReportProvider } from ".";

function BrokerCreateReport() {
  return (
    <BrokerCreateReportProvider>
      <BrokerCreateReportContainer>
        <BrokerCreateReportBox />
      </BrokerCreateReportContainer>
    </BrokerCreateReportProvider>
  );
}
export default BrokerCreateReport