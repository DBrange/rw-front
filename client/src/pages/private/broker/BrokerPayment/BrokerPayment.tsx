import { BrokerPaymentProvider, BrokerPaymentContainer, BrokerPaymentBox } from ".";

function BrokerPayment() {
  return (
    <BrokerPaymentProvider>
      <BrokerPaymentContainer>
        <BrokerPaymentBox />
      </BrokerPaymentContainer>
    </BrokerPaymentProvider>
  );
}
export default BrokerPayment