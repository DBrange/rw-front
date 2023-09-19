import { Route, Routes } from "react-router-dom";
import {
  Body,
  Footer,
  Header,
  LinkNavigate,
  LogoText,
  MainContent,
} from "./styledComponents";
import { Suspense, lazy } from "react";
import { GlobalLoader } from "./components";

const Home = lazy(() => import('./pages/Home/Home'))
const Inspect = lazy(() => import('./pages/Inspect/Inspect'))
const Report = lazy(() => import('./pages/Report/Report'))

function App() {
  return (
    <Suspense fallback={<GlobalLoader />}>
      <Body>
        <Header>
          <LinkNavigate to="/">
            <LogoText>ReclamoWeb</LogoText>
          </LinkNavigate>
        </Header>
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inspeccion" element={<Inspect />} />
            <Route path="/denuncia" element={<Report />} />
          </Routes>
        </MainContent>
      </Body>
        <Footer></Footer>
    </Suspense>
  );
}

export default App;
