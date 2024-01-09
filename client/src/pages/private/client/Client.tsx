import { PrivateRoutes } from "@/models/types/routes";
import RoutesWithNotFound from "@/utilities/routes-with-not-found";
import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

const ClientUser = lazy(() => import("./ClientUser/ClientUser"));
const ClientReports = lazy(() => import("./ClientReports/ClientReports"));
const ClientMyProfile = lazy(() => import("./ClientMyProfile/ClientMyProfile"));
const ClientInspections = lazy(
  () => import("./ClientInspections/ClientInspections")
);
const ClientReportDetail = lazy(
  () => import("./ClientReportDetail/ClientReportDetail")
);
const ClientChooseBroker = lazy(
  () => import("./ClientChooseBroker/ClientChooseBroker")
);
const ClientCreateReport = lazy(
  () => import("./ClientCreateReport/ClientCreateReport")
);
const ClientInspectionDetail = lazy(
  () => import("./ClientInspectionDetail/ClientInspectionDetail")
);
const ClientCreateInspection = lazy(
  () => import("./ClientCreateInspection/ClientCreateInspection")
);
const ClientInspectedCreateReport = lazy(
  () => import("./ClientInspectedCreateReport/ClientInspectedCreateReport")
);

function Client() {
  return (
    <RoutesWithNotFound>
      <Route
        path="/"
        element={<Navigate replace to={PrivateRoutes.DASHBOARD} />}
      />
      <Route path={PrivateRoutes.DASHBOARD} element={<ClientUser />} />
      {/* <Route path={PrivateRoutes.ELEMENTS} element={<ClientsElements />} /> */}
      <Route
        path={PrivateRoutes.CREATE_INSPECTION}
        element={<ClientChooseBroker />}
      />
      <Route
        path={`${PrivateRoutes.CREATE_INSPECTION}/:brokerId`}
        element={<ClientCreateInspection />}
      />
      <Route
        path={PrivateRoutes.CREATE_SINISTER}
        element={<ClientChooseBroker />}
      />
      <Route
        path={`${PrivateRoutes.CREATE_SINISTER}/:brokerId`}
        element={<ClientCreateReport />}
      />
      <Route
        path={`${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/:insuredId`}
        element={<ClientInspectedCreateReport />}
      />
      <Route
        path={`${PrivateRoutes.INSURED_DETAIL}/:insuredId`}
        element={<ClientInspectionDetail />}
      />
      <Route
        path={`${PrivateRoutes.SINISTER_DETAIL}/:sinisterId`}
        element={<ClientReportDetail />}
      />
      <Route path={PrivateRoutes.ALL_INSURED} element={<ClientInspections />} />
      <Route path={PrivateRoutes.ALL_SINISTER} element={<ClientReports />} />
      <Route path={PrivateRoutes.MY_PROFILE} element={<ClientMyProfile />} />
      <Route
        path={`${PrivateRoutes.MY_PROFILE}/:userBrokerId`}
        element={<ClientMyProfile />}
      />
    </RoutesWithNotFound>
  );
}
export default Client;
