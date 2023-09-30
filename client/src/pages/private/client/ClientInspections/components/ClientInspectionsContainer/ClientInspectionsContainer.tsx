import { ContainerLogin } from "@/styledComponents";

function ClientInspectionsContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin >{children}</ContainerLogin>;
}
export default ClientInspectionsContainer;
