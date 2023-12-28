import { AdminInspectionsProvider, AdminInspectionsContainer, AdminInspectionsBox } from ".";

function AdminInspections() {
  return (<>
    <AdminInspectionsProvider>
      <AdminInspectionsContainer>
        <AdminInspectionsBox />
      </AdminInspectionsContainer>
    </AdminInspectionsProvider>
  </>
  );
}
export default AdminInspections