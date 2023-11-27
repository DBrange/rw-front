import { ContainerLogin } from "@/styledComponents";

function BrokerReportsContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default BrokerReportsContainer;
