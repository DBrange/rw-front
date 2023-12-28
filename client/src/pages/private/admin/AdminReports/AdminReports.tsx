import { AdminReportsProvider, AdminReportsContainer, AdminReportsBox } from ".";

function AdminReports() {
  return (
      <AdminReportsProvider>
        <AdminReportsContainer>
          <AdminReportsBox />
        </AdminReportsContainer>
      </AdminReportsProvider>
  );
}
export default AdminReports