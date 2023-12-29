import { ContainerLogin } from "@/styledComponents";

function BrokerDetailAdminContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default BrokerDetailAdminContainer;
