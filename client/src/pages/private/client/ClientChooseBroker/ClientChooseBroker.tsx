import { ClientChooseBrokerProvider, ClientChooseBrokerContainer, ClientChooseBrokerBox } from ".";

function ClientChooseBroker() {
  return (
    <ClientChooseBrokerProvider>
      <ClientChooseBrokerContainer>
        <ClientChooseBrokerBox />
      </ClientChooseBrokerContainer>
    </ClientChooseBrokerProvider>
  );
}
export default ClientChooseBroker