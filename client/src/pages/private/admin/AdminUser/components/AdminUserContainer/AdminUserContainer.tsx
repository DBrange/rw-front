import { ContainerLogin } from "@/styledComponents";

function AdminUserContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default AdminUserContainer;
