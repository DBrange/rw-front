import { PrivateRoutes } from "@/models/types/routes";
import RoutesWithNotFound from "@/utilities/routes-with-not-found";
import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

const AdminUser = lazy(() => import("./AdminUser/AdminUser"));
const AdminUsers = lazy(() => import("./AdminUsers/AdminUsers"));
const AdminReports = lazy(() => import("./AdminReports/AdminReports"));
const AdminInspections = lazy(
  () => import("./AdminInspections/AdminInspections")
);
const ClientDetail = lazy(
  () => import("../components/ClientDetail/ClientDetail")
);
const ClientMyProfile = lazy(
  () => import("../client/ClientMyProfile/ClientMyProfile")
);
const BrokerDetailAdmin = lazy(
  () => import("../components/BrokerDetailAdmin/BrokerDetailAdmin")
);
const ClientReportDetail = lazy(
  () => import("../client/ClientReportDetail/ClientReportDetail")
);
const ClientInspectionDetail = lazy(
  () => import("../client/ClientInspectionDetail/ClientInspectionDetail")
);

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
        path={`${PrivateRoutes.INSPECTIONS}/:insuredId`}
        element={<ClientInspectionDetail />}
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
      <Route
        path={`${PrivateRoutes.SINISTER_DETAIL}/:sinisterId`}
        element={<ClientReportDetail />}
      />
      <Route
        path={`${PrivateRoutes.MY_PROFILE}`}
        element={<ClientMyProfile />}
      />
    </RoutesWithNotFound>
  );
}
export default Admin;
