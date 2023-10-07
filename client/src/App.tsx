import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { GlobalLoader, MainName } from "./components";
import { AdminUser, BrokerUser, ClientUser, Login } from "./pages";
import { Body, Footer, Header, MainContent } from "./styledComponents";
import { ClientInspections } from "./pages/private/client/ClientInspections";
import LoginBtn from "./components/LoginBtn/LoginBtn";
import {
  ClientCreateInspection,
  ClientCreateReport,
  ClientInspectionDetail,
  ClientMyProfile,
  ClientReports,
  InspectionDetail,
} from "./pages/private";
import { Register } from "./pages/public/Register";
import { ClientInspectedCreateReport } from "./pages/private/client/ClientInspectedCreateReport";

const Home = lazy(() => import("./pages/public/Home/Home"));
const Inspect = lazy(() => import("./pages/public/Inspect/Inspect"));
const Report = lazy(() => import("./pages/public/Report/Report"));

function App() {
  const path = useLocation().pathname;

  return (
    <Suspense fallback={<GlobalLoader />}>
      <Body>
        <Header>
          <MainName />
          <LoginBtn />
        </Header>
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inspeccionar" element={<Inspect />} />
            <Route path="/denunciar" element={<Report />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrarse" element={<Register />} />
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
            <Route
              path="/dashboard/cliente/denuncias"
              element={<ClientReports />}
            />
            <Route
              path="/dashboard/cliente/perfil"
              element={<ClientMyProfile />}
            />
            <Route path="/dashboard/broker" element={<BrokerUser />} />
            <Route path="/dashboard/admin" element={<AdminUser />} />
          </Routes>
        </MainContent>
      </Body>
      <Footer
        $public={
          !!(
            path === "/" ||
            path === "/denunciar" ||
            path === "/inspeccionar" ||
            path === "/login" ||
            path === "/registrarse"
          )
        }
      />
    </Suspense>
  );
}

export default App;
