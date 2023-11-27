import { BrokerClientsProvider, BrokerClientsContainer, BrokerClientsBox } from ".";

function BrokerClients() {
  return (
    <BrokerClientsProvider>
      <BrokerClientsContainer>
        <BrokerClientsBox />
      </BrokerClientsContainer>
    </BrokerClientsProvider>
  );
}
export default BrokerClients