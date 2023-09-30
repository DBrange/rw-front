import { Container } from "@/styledComponents";

function LoginContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <Container>{children}</Container>;
}
export default LoginContainer;
