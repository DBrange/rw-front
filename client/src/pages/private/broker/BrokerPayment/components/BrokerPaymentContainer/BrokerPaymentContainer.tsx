import { ContainerLogin } from "@/styledComponents";

function BrokerPaymentContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default BrokerPaymentContainer