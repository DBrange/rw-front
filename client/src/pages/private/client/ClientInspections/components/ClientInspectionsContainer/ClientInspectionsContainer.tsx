import { ContainerLogin } from "@/styledComponents";

function ClientInspectionsContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin $broad>{children}</ContainerLogin>;
}
export default ClientInspectionsContainer;
