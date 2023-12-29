import { PrivateRoutes } from "@/models/types/routes";
import RoutesWithNotFound from "@/utilities/routes-with-not-found";
import { Navigate, Route } from "react-router-dom";

import {
  AdminUser, BrokerDetailAdmin, ClientDetail,
} from "..";
import { AdminUsers } from "./AdminUsers";
import { AdminInspections } from "./AdminInspections";
import AdminReports from "./AdminReports/AdminReports";

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
      <Route
        path={`${PrivateRoutes.INSPECTIONS}`}
        element={<AdminInspections />}
      />
      <Route
        path={`${PrivateRoutes.ALL_SINISTER}`}
        element={<AdminReports />}
      />
      <Route
        path={`${PrivateRoutes.USERS_OF_ADMIN}/:userId`}
        element={<BrokerDetailAdmin />}
      />
      <Route
        path={`${PrivateRoutes.USERS_OF_ADMIN}/:userId/:clientId`}
        element={<ClientDetail />}
      />

    </RoutesWithNotFound>
  );
}
export default Admin;
