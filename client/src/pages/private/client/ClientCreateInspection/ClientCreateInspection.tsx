import { ClientCreateInspectionContainer, ClientCreateInspectionBox } from "./components";
import { ClientCreateInspectionProvider } from "./context/ClientCreateInspection.context";

function ClientCreateInspection() {
  return (
    <ClientCreateInspectionProvider>
      <ClientCreateInspectionContainer>
        <ClientCreateInspectionBox />
      </ClientCreateInspectionContainer>
    </ClientCreateInspectionProvider>
  );
}
export default ClientCreateInspection