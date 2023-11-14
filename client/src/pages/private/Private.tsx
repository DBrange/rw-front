import RoutesWithNotFound from "@/utilities/routes-with-not-found";
import { Navigate, Route } from "react-router-dom";
import {
  ClientUser,
  ClientCreateInspection,
  ClientCreateReport,
  ClientInspectedCreateReport,
  ClientInspections,
  ClientInspectionDetail,
  ClientMyProfile,
  BrokerUser,
  AdminUser,
  ClientReportDetail,
} from ".";
import { ClientReports } from "..";
import { PrivateRoutes } from "@/models/types/routes";

function Private() {
  return (
    <RoutesWithNotFound>
      <Route
        path="/"
        element={<Navigate replace to={PrivateRoutes.DASHBOARD} />}
      />
      <Route path={PrivateRoutes.DASHBOARD} element={<ClientUser />} />
      <Route
        path={PrivateRoutes.CREATE_INSPECTION}
        element={<ClientCreateInspection />}
      />
      <Route
        path={PrivateRoutes.CREATE_SINISTER}
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
      <Route path="/dashboard/broker" element={<BrokerUser />} />
      <Route path="/dashboard/admin" element={<AdminUser />} />
    </RoutesWithNotFound>
  );
}
export default Private;
