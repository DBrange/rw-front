import { AdminUsersProvider, AdminUsersContainer, AdminUsersBox } from ".";

function AdminUsers() {
  return (
    <AdminUsersProvider>
      <AdminUsersContainer>
        <AdminUsersBox />
      </AdminUsersContainer>
    </AdminUsersProvider>
  );
}
export default AdminUsers