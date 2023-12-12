import { ContainerLogin } from "@/styledComponents";

function BrokerFindClientsContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default BrokerFindClientsContainer;
