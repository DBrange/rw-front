import { Suspense, lazy } from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import { GlobalLoader, MainName, MessageBtn, MessageBtnHeader } from "./components";
import LoginBtn from "./components/LoginBtn/LoginBtn";
import { PrivateRoutes, PublicRoutes } from './models/types/routes';
import { Private } from "./pages/private";
import Public from "./pages/public/Public";
import { Body, Footer, MainContent } from "./styledComponents";
import RoutesWithNotFound from "./utilities/routes-with-not-found";
import AuthGuard from "./guards/auth.guard";
import Header from "./header/Header";

const Home = lazy(() => import("./pages/public/Home/Home"));
const Inspect = lazy(() => import("./pages/public/Inspect/Inspect"));
const Report = lazy(() => import("./pages/public/Report/Report"));

function App() {
  const path = useLocation().pathname;

  return (
    <Suspense fallback={<GlobalLoader />}>
      <Body>
        <Header />
        <MainContent>
          <MessageBtn/>
          <RoutesWithNotFound>
            <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={`${PublicRoutes.PUBLIC}/*`} element={<Public />} />
            <Route element={<AuthGuard />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
          </RoutesWithNotFound>
        </MainContent>
      </Body>
      <Footer
        $public={
          !!(
            path === "/public/home" ||
            path === "/public/denunciar" ||
            path === "/public/inspeccionar" ||
            path === "/public/login" ||
            path === "/public/registrarse"
          )
        }
      />
    </Suspense>
  );
}

export default App;
