import { PrivateRoutes } from "@/models/types/routes";
import RoutesWithNotFound from "@/utilities/routes-with-not-found";
import { Navigate, Route } from "react-router-dom";

import {
  AdminUser,
} from "..";
import { AdminUsers } from "./AdminUsers";

function Admin() {
  return (
    <RoutesWithNotFound>
      <Route
        path="/"
        element={<Navigate replace to={`${PrivateRoutes.DASHBOARD}`} />}
      />
      <Route path={`${PrivateRoutes.DASHBOARD}`} element={<AdminUser />} />
      <Route
        path={`${PrivateRoutes.USERS_OF_ADMIN}`}
        element={<AdminUsers />}
      />
      {/* <Route
        path={`${PrivateRoutes.CLIENTS_OF_BROKER}`}
        element={<BrokerClients />}
      />
      <Route
        path={`${PrivateRoutes.SEARCH_CLIENT}`}
        element={<BrokerFindClients />}
      /> */}
    </RoutesWithNotFound>
  );
}
export default Admin;
