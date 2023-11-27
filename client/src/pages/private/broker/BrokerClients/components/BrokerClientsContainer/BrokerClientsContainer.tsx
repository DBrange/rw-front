import { ContainerLogin } from "@/styledComponents";

function ClientUserContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default ClientUserContainer;
