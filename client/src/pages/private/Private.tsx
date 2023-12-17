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
  ClientDetail,
  BrokerCreateReport,
  ClientsElements,
} from ".";
import { ClientReports } from "..";
import { PrivateRoutes } from "@/models/types/routes";
import { BrokerClients, BrokerCreateInspection, BrokerFindClients, BrokerInspections, BrokerReports } from "./broker";

function Private() {
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

      {/* ------------------------------------ */}

      <Route
        path="/"
        element={<Navigate replace to={`${PrivateRoutes.DASHBOARD}`} />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.DASHBOARD}`}
        element={<BrokerUser />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.CLIENTS_OF_BROKER}`}
        element={<BrokerClients />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.SEARCH_CLIENT}`}
        element={<BrokerFindClients />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_INSPECTION}`}
        element={<BrokerCreateInspection />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_INSPECTION}/:clientId`}
        element={<ClientCreateInspection />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_SINISTER}`}
        element={<BrokerCreateReport />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_SINISTER}/:clientId`}
        element={<ClientCreateReport />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/:insuredId/:type`}
        element={<ClientInspectedCreateReport />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.INSURED_DETAIL}/:insuredId`}
        element={<ClientInspectionDetail />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.SINISTER_DETAIL}/:sinisterId`}
        element={<ClientReportDetail />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.ALL_INSURED}`}
        element={<BrokerInspections />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.ALL_SINISTER}`}
        element={<BrokerReports />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.MY_PROFILE}`}
        element={<ClientMyProfile />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.CLIENTS_OF_BROKER}/:clientId`}
        element={<ClientDetail />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.CLIENTS_OF_BROKER}/:clientId/:insuredId`}
        element={<ClientInspectionDetail />}
      />
      <Route
        path={`${PrivateRoutes.BROKER}/${PrivateRoutes.CLIENTS_OF_BROKER}/:clientId/:sinisterId`}
        element={<ClientReportDetail />}
      />
      <Route path="/dashboard/broker" element={<BrokerUser />} />
      <Route path="/dashboard/admin" element={<AdminUser />} />
    </RoutesWithNotFound>
  );
}
export default Private;
