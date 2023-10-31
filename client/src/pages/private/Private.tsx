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
} from ".";
import { ClientReports } from "..";
import { PrivateRoutes } from "@/models/types/routes";

function Private() {
  return (
    <RoutesWithNotFound>
      <Route
        path="/"
        element={<Navigate replace to={PrivateRoutes.DASH} />}
      />
      <Route path="/dashboard/cliente" element={<ClientUser />} />
      <Route
        path="/dashboard/cliente/crear-inspeccion"
        element={<ClientCreateInspection />}
      />
      <Route
        path="/dashboard/cliente/crear-denuncia"
        element={<ClientCreateReport />}
      />
      <Route
        path="/dashboard/cliente/asegurado/crear-denuncia"
        element={<ClientInspectedCreateReport />}
      />
      <Route
        path="/dashboard/cliente/inspecciones"
        element={<ClientInspections />}
      />
      <Route
        path="/dashboard/cliente/inspeccion/:inspectionId"
        element={<ClientInspectionDetail />}
      />
      <Route path="/dashboard/cliente/denuncias" element={<ClientReports />} />
      <Route path="/dashboard/cliente/perfil" element={<ClientMyProfile />} />
      <Route path="/dashboard/broker" element={<BrokerUser />} />
      <Route path="/dashboard/admin" element={<AdminUser />} />
    </RoutesWithNotFound>
  );
}
export default Private;
