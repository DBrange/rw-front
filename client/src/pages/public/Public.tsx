import RoutesWithNotFound from "@/utilities/routes-with-not-found";
import { Navigate, Route } from "react-router-dom";
import { ClientCreateInspection, ClientCreateReport, Home, Inspect, Login, MissPassword, Register, Report } from "..";
import { PublicRoutes } from "@/models/types/routes";

function Public() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate replace to={PublicRoutes.HOME} />} />
      <Route path={PublicRoutes.HOME} element={<Home />} />
      <Route path={PublicRoutes.INSPECT} element={<Inspect />} />
      <Route path={PublicRoutes.REPORT} element={<Report />} />
      <Route path={PublicRoutes.LOGIN} element={<Login />} />
      <Route path={PublicRoutes.REGISTER} element={<Register />} />
      <Route
        path={PublicRoutes.FORGOTTEM_PASSWORD}
        element={<MissPassword />}
      />
      <Route
        path={`${PublicRoutes.CREATE_INSPECTION}/:brokerId/:clientId`}
        element={<ClientCreateInspection />}
      />
      <Route
        path={`${PublicRoutes.CREATE_SINISTER}/:brokerId/:clientId`}
        element={<ClientCreateReport />}
      />
    </RoutesWithNotFound>
  );
}
export default Public;
