import { Container } from "@/styledComponents";

function ClientCreateInspectionContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <Container>{children}</Container>;
}
export default ClientCreateInspectionContainer;
