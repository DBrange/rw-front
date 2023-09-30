import { ClientInspectionsProvider, ClientInspectionsContainer } from ".";
import { ClientInspectionsBox } from "../..";

function ClientInspections() {
  return (
    <ClientInspectionsProvider>
      <ClientInspectionsContainer>
        <ClientInspectionsBox />
      </ClientInspectionsContainer>
    </ClientInspectionsProvider>
  );
}
export default ClientInspections;
