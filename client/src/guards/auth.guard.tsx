import { PublicRoutes } from "@/models/types/routes";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const clientState = useSelector((store: AppStore) => store.user);
  // console.log(clientState)
  return clientState.user.id ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.HOME} />
  );
};

export default AuthGuard;
