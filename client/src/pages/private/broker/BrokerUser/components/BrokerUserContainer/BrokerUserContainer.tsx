import { ContainerLogin } from "@/styledComponents";

function BrokerUserContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default BrokerUserContainer;
