import { PrivateRoutes } from "@/models/types/routes";
import RoutesWithNotFound from "@/utilities/routes-with-not-found";
import { Route, Navigate } from "react-router-dom";
import {
  ClientUser,
  ClientsElements,
  ClientCreateInspection,
  ClientCreateReport,
  ClientInspectedCreateReport,
  ClientInspectionDetail,
  ClientReportDetail,
  ClientInspections,
  ClientReports,
  ClientMyProfile,
  ClientChooseBroker,
} from ".";

function Client() {
  return (
    <RoutesWithNotFound>
      <Route
        path="/"
        element={<Navigate replace to={PrivateRoutes.DASHBOARD} />}
      />
      <Route path={PrivateRoutes.DASHBOARD} element={<ClientUser />} />
      <Route path={PrivateRoutes.ELEMENTS} element={<ClientsElements />} />
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
    </RoutesWithNotFound>
  );
}
export default Client;
