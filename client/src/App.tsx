import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";
import {
  FooterContent,
  GlobalLoader,
  MessageBtn,
  ModalToast,
  ModalToastError,
} from "./components";
import AuthGuard from "./guards/auth.guard";
import Header from "./header/Header";
import { PrivateRoutes, PublicRoutes } from "./models/types/routes";
import { USER_ROLES } from "./models/types/users-roles.type";
import { AppStore } from "./redux";
import { Body, Footer, MainContent } from "./styledComponents";
import RoutesWithNotFound from "./utilities/routes-with-not-found";

const Public = lazy(() => import("./pages/public/Public"));
const Private = lazy(() => import("./pages/private/Private"));

function App() {
  const path = useLocation().pathname;
  const role = useSelector((store: AppStore) => store.user.user?.role);

  return (
    <Suspense fallback={<GlobalLoader />}>
      <Body>
        <ModalToast />
        <ModalToastError />
        <Header />
        <MainContent>
          <MessageBtn />
          <RoutesWithNotFound>
            {/* <Route
              path={`${PublicRoutes.PUBLIC}/payment`}
              element={<BrokerPayment />}
            /> */}
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            {role === USER_ROLES.CLIENT ||
            role === USER_ROLES.BROKER ||
            role === USER_ROLES.ADMIN ? (
              <></>
            ) : (
              <>
                <Route path={`${PublicRoutes.PUBLIC}/*`} element={<Public />} />
              </>
            )}
            <Route element={<AuthGuard privateValidation={false} />}>
              <Route path={`${PublicRoutes.PUBLIC}/*`} element={<Public />} />
            </Route>
            <Route element={<AuthGuard privateValidation={true} />}>
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
            path === "/public/registrarse" ||
            path === "/public/contraseña"
          )
        }
      >
        <FooterContent />
      </Footer>
    </Suspense>
  );
}

export default App;
