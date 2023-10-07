import { Container } from "@/styledComponents";

function ClientCreateReportContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <Container>{children}</Container>;
}
export default ClientCreateReportContainer;
