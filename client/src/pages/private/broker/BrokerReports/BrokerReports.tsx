import { BrokerReportsProvider, BrokerReportsContainer, BrokerReportsBox } from ".";

function brokerReports() {
    return (
      <BrokerReportsProvider>
        <BrokerReportsContainer>
          <BrokerReportsBox />
        </BrokerReportsContainer>
      </BrokerReportsProvider>
    );
}
export default brokerReports