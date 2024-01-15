import { PrivateRoutes } from "@/models/types/routes";
import RoutesWithNotFound from "@/utilities/routes-with-not-found";
import { Route, Navigate } from "react-router-dom";
import { lazy } from "react";

const BrokerUser = lazy(() => import("./BrokerUser/BrokerUser"));
const BrokerReports = lazy(() => import("./BrokerReports/BrokerReports"));
const BrokerPayment = lazy(() => import("./BrokerPayment/BrokerPayment"));
const BrokerClients = lazy(() => import("./BrokerClients/BrokerClients"));
const ClientDetail = lazy(() => import("../components/ClientDetail/ClientDetail"));
const BrokerFindClients = lazy(() => import("./BrokerFindClients/BrokerFindClients"));
const BrokerInspections = lazy(() => import("./BrokerInspections/BrokerInspections"));
const ClientMyProfile = lazy(() => import("../client/ClientMyProfile/ClientMyProfile"));
const BrokerCreateReport = lazy(() => import("./BrokerCreateReport/BrokerCreateReport"));
const ClientReportDetail = lazy(() => import("../client/ClientReportDetail/ClientReportDetail"));
const ClientCreateReport = lazy(() => import("../client/ClientCreateReport/ClientCreateReport"));
const BrokerCreateReportLink = lazy(() => import("./BrokerCreateReportLink/BrokerCreateReportLink"));
const BrokerCreateInspection = lazy(() => import("./BrokerCreateInspection/BrokerCreateInspection"));
const ClientCreateInspection = lazy(() => import("../client/ClientCreateInspection/ClientCreateInspection"));
const ClientInspectionDetail = lazy(() => import("../client/ClientInspectionDetail/ClientInspectionDetail"));
const BrokerCreateInspectionLink = lazy(() => import("./BrokerCreateInspectionLink/BrokerCreateInspectionLink"));
const ClientInspectedCreateReport = lazy(() => import("../client/ClientInspectedCreateReport/ClientInspectedCreateReport"));


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
        element={<BrokerCreateInspectionLink />}
      />
      <Route
        path={`${PrivateRoutes.CREATE_INSPECTION_MANUAL}/:clientId`}
        element={<ClientCreateInspection />}
      />
      <Route
        path={`${PrivateRoutes.CREATE_SINISTER}`}
        element={<BrokerCreateReport />}
      />
      <Route
        path={`${PrivateRoutes.CREATE_SINISTER}/:clientId`}
        element={<BrokerCreateReportLink />}
      />
      <Route
        path={`${PrivateRoutes.CREATE_SINISTER_MANUAL}/:clientId`}
        element={<ClientCreateReport />}
      />
      <Route
        path={`${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/:clientId/:insuredId/:type`}
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
      <Route
        path={`${PrivateRoutes.PAYMENT}`}
        element={<BrokerPayment />}
      />
    </RoutesWithNotFound>
  );
}
export default Broker;
