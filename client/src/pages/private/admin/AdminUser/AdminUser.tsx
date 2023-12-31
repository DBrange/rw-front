import { AdminDashboardBox, AdminUserContainer, AdminUserProvider, SidebarAdmin } from "../.."

function AdminUser() {
  return (
    <>
      <AdminUserProvider>
        <AdminUserContainer>
          <SidebarAdmin />
          <AdminDashboardBox />
        </AdminUserContainer>
      </AdminUserProvider>
    </>
  );
}
export default AdminUser