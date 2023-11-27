import { ContainerLogin } from "@/styledComponents";

function BrokerInspectionsContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default BrokerInspectionsContainer;
