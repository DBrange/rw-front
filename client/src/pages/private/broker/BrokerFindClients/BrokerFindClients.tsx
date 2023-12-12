import { BrokerFindClientsProvider, BrokerFindClientsContainer, BrokerFindClientsBox } from ".";

function BrokerFindClients() {
  return (
    <BrokerFindClientsProvider>
      <BrokerFindClientsContainer>
        <BrokerFindClientsBox />
      </BrokerFindClientsContainer>
    </BrokerFindClientsProvider>
  );
}
export default BrokerFindClients