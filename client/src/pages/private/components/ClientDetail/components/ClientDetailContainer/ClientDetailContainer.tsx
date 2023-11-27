import { ContainerLogin } from "@/styledComponents";

function ClientCardContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default ClientCardContainer;
