import { BrokerInspectionsProvider, BrokerInspectionsContainer, BrokerInspectionsBox } from ".";

function BrokerInspections() {
  return (
    <BrokerInspectionsProvider>
      <BrokerInspectionsContainer>
        <BrokerInspectionsBox />
      </BrokerInspectionsContainer>
    </BrokerInspectionsProvider>
  );
}
export default BrokerInspections