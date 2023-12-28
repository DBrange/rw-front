import { ContainerLogin } from "@/styledComponents";

function AdminUsersContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default AdminUsersContainer;
