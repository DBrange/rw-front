import { PrivateRoutes } from "@/models/types/routes";
import { USER_ROLES } from "@/models/types/users-roles.type";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  role: USER_ROLES;
}

function RoleGuard({ role }: Props) {
  const clientState = useSelector((store: AppStore) => store.user);
  return clientState.user?.role === role ? (
    <Outlet />
  ) : (
    <Navigate replace to={PrivateRoutes.PRIVATE} />
  );
}
export default RoleGuard;
