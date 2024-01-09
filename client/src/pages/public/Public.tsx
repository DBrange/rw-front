import RoutesWithNotFound from "@/utilities/routes-with-not-found";
import { Navigate, Route } from "react-router-dom";
import { PublicRoutes } from "@/models/types/routes";
import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const Login = lazy(() => import("./Login/Login"));
const Report = lazy(() => import("./Report/Report"));
const AboutUs = lazy(() => import("./AboutUs/AboutUs"));
const Inspect = lazy(() => import("./Inspect/Inspect"));
const Register = lazy(() => import("./Register/Register"));
const Verified = lazy(() => import("./Verified/Verified"));
const NotVerified = lazy(() => import("./NotVerified/NotVerified"));
const MissPassword = lazy(() => import("./MissPassword/MissPassword"));
const FrequentsQuestions = lazy(
  () => import("./FrequentsQuestions/FrequentsQuestions")
);
const ClientCreateReport = lazy(
  () => import("../private/client/ClientCreateReport/ClientCreateReport")
);
const ClientCreateInspection = lazy(
  () =>
    import("../private/client/ClientCreateInspection/ClientCreateInspection")
);

function Public() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate replace to={PublicRoutes.HOME} />} />
      <Route path={PublicRoutes.HOME} element={<Home />} />
      <Route path={PublicRoutes.INSPECT} element={<Inspect />} />
      <Route path={PublicRoutes.REPORT} element={<Report />} />
      <Route path={PublicRoutes.LOGIN} element={<Login />} />
      {/* <Route path={`${PublicRoutes.LOGIN}/:googleLoginData`} element={<Login />} /> */}
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
      <Route path={`${PublicRoutes.ABOUT_US}`} element={<AboutUs />} />
      <Route
        path={`${PublicRoutes.FREQUENT_QUESTIONS}`}
        element={<FrequentsQuestions />}
      />
      <Route path={`${PublicRoutes.VERIFIED}`} element={<Verified />} />
      <Route path={`${PublicRoutes.NOT_VERIFIED}`} element={<NotVerified />} />
    </RoutesWithNotFound>
  );
}
export default Public;
