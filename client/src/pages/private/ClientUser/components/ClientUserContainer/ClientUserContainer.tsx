import { ContainerLogin } from "@/styledComponents";

function ClientUserContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin $broad>{children}</ContainerLogin>;
}
export default ClientUserContainer;
