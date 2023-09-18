import { Route, Routes } from "react-router-dom";
import { Home, Inspect, Report } from "./pages";
import { Body, Header, LinkNavigate, LogoText, MainContent } from "./styledComponents";

function App() {
  return (
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
  );
}

export default App;
