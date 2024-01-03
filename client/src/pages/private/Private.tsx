import RoleGuard from "@/guards/role.guard";
import { PrivateRoutes } from "@/models/types/routes";
import { USER_ROLES } from "@/models/types/users-roles.type";
import { AppDispatch, AppStore } from "@/redux";
import RoutesWithNotFound from "@/utilities/routes-with-not-found";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import { Client } from ".";
import { Broker } from "./broker";
import Admin from "./admin/Admin";
import { updateTokenAsync } from "@/redux/slices/clientSlice";
import { useEffect } from "react";

function Private() {
  const path = useSelector((store: AppStore) => store.user.user?.role);
  const user = useSelector((store: AppStore) => store.user);
  const dispatchAsync = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatchAsync(updateTokenAsync(user.user?.id as string));
  },[])

  return (
    <RoutesWithNotFound>
      {path === USER_ROLES.BROKER ? (
        <>
          <Route
            path="/"
            element={<Navigate replace to={PrivateRoutes.BROKER} />}
          />
          <Route element={<RoleGuard role={USER_ROLES.BROKER} />}>
            <Route path={`${PrivateRoutes.BROKER}/*`} element={<Broker />} />
          </Route>
        </>
      ) : (
        <></>
      )}
      {path === USER_ROLES.CLIENT ? (
        <>
          <Route
            path="/"
            element={<Navigate replace to={PrivateRoutes.CLIENT} />}
          />
          <Route element={<RoleGuard role={USER_ROLES.CLIENT} />}>
            <Route path={`${PrivateRoutes.CLIENT}/*`} element={<Client />} />
          </Route>
        </>
      ) : (
        <></>
      )}
      {path === USER_ROLES.ADMIN ? (
        <>
          <Route
            path="/"
            element={<Navigate replace to={PrivateRoutes.ADMIN} />}
          />
          <Route element={<RoleGuard role={USER_ROLES.ADMIN} />}>
            <Route path={`${PrivateRoutes.ADMIN}/*`} element={<Admin />} />
          </Route>
        </>
      ) : (
        <></>
      )}
    </RoutesWithNotFound>
  );
}
export default Private;
