import { ContainerLogin } from "@/styledComponents";

function ClientElementsContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default ClientElementsContainer;
