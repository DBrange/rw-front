import { BrokerPaymentProvider, BrokerPaymentContainer, BrokerPaymentBox } from ".";
import { SidebarBroker } from "../..";

function BrokerPayment() {
  return (
    <>
      <SidebarBroker/>
    <BrokerPaymentProvider>
      <BrokerPaymentContainer>
        <BrokerPaymentBox />
      </BrokerPaymentContainer>
    </BrokerPaymentProvider>
    </>
  );
}
export default BrokerPayment