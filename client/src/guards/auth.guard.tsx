import { PublicRoutes } from "@/models/types/routes";
import { AppStore } from "@/redux";
import ExpiresToken from "@/utilities/expires-token";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const clientState = useSelector((store: AppStore) => store.user);
  ExpiresToken();
  return clientState?.user?.id ? (
    <Outlet />
  ) : (
    <Navigate replace to={`/${PublicRoutes.PUBLIC}`} />
  );
};

export default AuthGuard;
