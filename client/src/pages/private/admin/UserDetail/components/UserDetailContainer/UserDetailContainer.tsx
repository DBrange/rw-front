import { ContainerLogin } from "@/styledComponents";

function UserDetailContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default UserDetailContainer;
