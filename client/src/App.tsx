import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { GlobalLoader, MainName } from "./components";
import { AdminUser, BrokerUser, ClientUser } from "./pages";
import {
  Body,
  Footer,
  Header,
  MainContent,
} from "./styledComponents";
import { ClientInspections } from "./pages/private/client/ClientInspections";

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
        </Header>
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inspeccion" element={<Inspect />} />
            <Route path="/denuncia" element={<Report />} />
            <Route path="/dashboard/client" element={<ClientUser />} />
            <Route
              path="/dashboard/client/inspecciones"
              element={<ClientInspections/>}
            />
            <Route path="/dashboard/broker" element={<BrokerUser />} />
            <Route path="/dashboard/admin" element={<AdminUser />} />
          </Routes>
        </MainContent>
      </Body>
      <Footer
        $public={
          !!(path === "/" || path === "/denuncia" || path === "/inspeccion")
        }
      />
    </Suspense>
  );
}

export default App;
