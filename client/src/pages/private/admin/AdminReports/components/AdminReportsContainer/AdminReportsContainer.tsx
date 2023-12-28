import { ContainerLogin } from "@/styledComponents";

function AdminReportsContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default AdminReportsContainer;
