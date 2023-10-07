import { ContainerLogin } from "@/styledComponents";

function ClientReportDetailContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default ClientReportDetailContainer;
