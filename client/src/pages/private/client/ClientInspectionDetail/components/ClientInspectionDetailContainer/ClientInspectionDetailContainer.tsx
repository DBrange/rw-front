import { ContainerLogin } from "@/styledComponents";

function ClientInspectionDetailContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default ClientInspectionDetailContainer;
