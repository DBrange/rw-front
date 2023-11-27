import { BrokerUserProvider, BrokerUserContainer } from ".";
import { SidebarBroker } from "../..";

function BrokerUser() {
  return (
    <BrokerUserProvider>
      <BrokerUserContainer>
        <SidebarBroker />
        {/* <InspectLogin sectionName="Inspecciones" /> */}
      </BrokerUserContainer>
    </BrokerUserProvider>
  );
}

export default BrokerUser;
