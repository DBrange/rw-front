import { ContainerLogin } from "@/styledComponents";

function ClientReportsContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default ClientReportsContainer;
