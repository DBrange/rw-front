import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalLoader, MainName } from "./components";
import { AdminUser, BrokerUser, ClientUser } from "./pages";
import {
  Body,
  Footer,
  Header,
  MainContent
} from "./styledComponents";

const Home = lazy(() => import("./pages/public/Home/Home"));
const Inspect = lazy(() => import("./pages/public/Inspect/Inspect"));
const Report = lazy(() => import("./pages/public/Report/Report"));

function App() {
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
            <Route path="/dashboard_client" element={<ClientUser />} />
            <Route path="/dashboard_broker" element={<BrokerUser />} />
            <Route path="/dashboard_admin" element={<AdminUser />} />
          </Routes>
        </MainContent>
      </Body>
      <Footer />
    </Suspense>
  );
}

export default App;
