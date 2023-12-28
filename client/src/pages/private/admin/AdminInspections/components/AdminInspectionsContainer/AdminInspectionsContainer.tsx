import { ContainerLogin } from "@/styledComponents";

function AdminInspectionsContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default AdminInspectionsContainer;
