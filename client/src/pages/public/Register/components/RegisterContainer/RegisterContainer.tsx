import { Container } from "@/styledComponents";

function RegisterContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <Container>{children}</Container>;
}
export default RegisterContainer;
