import { ContainerLogin } from "@/styledComponents";

function ClientCreateReportContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  return <ContainerLogin>{children}</ContainerLogin>;
}
export default ClientCreateReportContainer;
