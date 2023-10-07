import { ContainerLogin } from "@/styledComponents";

function ClientMyProfileContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default ClientMyProfileContainer;
