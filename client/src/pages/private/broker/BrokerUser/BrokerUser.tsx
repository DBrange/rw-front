import { BrokerUserProvider, BrokerUserContainer } from ".";
import { BrokerDashboardBox, SidebarBroker } from "../..";

function BrokerUser() {
  return (
    <BrokerUserProvider>
      <BrokerUserContainer>
        <SidebarBroker />
        <BrokerDashboardBox />
      </BrokerUserContainer>
    </BrokerUserProvider>
  );
}

export default BrokerUser;
