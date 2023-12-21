import { PrivateRoutes } from "@/models/types/routes";
import RoutesWithNotFound from "@/utilities/routes-with-not-found";
import { Route, Navigate } from "react-router-dom";
import {
  BrokerUser,
  BrokerClients,
  BrokerFindClients,
  BrokerCreateInspection,
  BrokerCreateReport,
  BrokerInspections,
  BrokerReports,
} from ".";
import {
  ClientCreateInspection,
  ClientCreateReport,
  ClientInspectedCreateReport,
  ClientInspectionDetail,
  ClientReportDetail,
  ClientMyProfile,
  ClientDetail,
} from "..";

function Broker() {
  return (
    <RoutesWithNotFound>
      <Route
        path="/"
        element={<Navigate replace to={`${PrivateRoutes.DASHBOARD}`} />}
      />
      <Route path={`${PrivateRoutes.DASHBOARD}`} element={<BrokerUser />} />
      <Route
        path={`${PrivateRoutes.CLIENTS_OF_BROKER}`}
        element={<BrokerClients />}
      />
      <Route
        path={`${PrivateRoutes.SEARCH_CLIENT}`}
        element={<BrokerFindClients />}
      />
      <Route
        path={`${PrivateRoutes.CREATE_INSPECTION}`}
        element={<BrokerCreateInspection />}
      />
      <Route
        path={`${PrivateRoutes.CREATE_INSPECTION}/:clientId`}
        element={<ClientCreateInspection />}
      />
      <Route
        path={`${PrivateRoutes.CREATE_SINISTER}`}
        element={<BrokerCreateReport />}
      />
      <Route
        path={`${PrivateRoutes.CREATE_SINISTER}/:clientId`}
        element={<ClientCreateReport />}
      />
      <Route
        path={`${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/:insuredId/:type`}
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
      <Route
        path={`${PrivateRoutes.ALL_INSURED}`}
        element={<BrokerInspections />}
      />
      <Route
        path={`${PrivateRoutes.ALL_SINISTER}`}
        element={<BrokerReports />}
      />
      <Route
        path={`${PrivateRoutes.MY_PROFILE}`}
        element={<ClientMyProfile />}
      />
      <Route
        path={`${PrivateRoutes.CLIENTS_OF_BROKER}/:clientId`}
        element={<ClientDetail />}
      />
      <Route
        path={`${PrivateRoutes.CLIENTS_OF_BROKER}/:clientId/:insuredId`}
        element={<ClientInspectionDetail />}
      />
      <Route
        path={`${PrivateRoutes.CLIENTS_OF_BROKER}/:clientId/:sinisterId`}
        element={<ClientReportDetail />}
      />
    </RoutesWithNotFound>
  );
}
export default Broker;
