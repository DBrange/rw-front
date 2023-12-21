import { PrivateRoutes, PublicRoutes } from "@/models/types/routes";
import { AppStore } from "@/redux";
import ExpiresToken from "@/utilities/expires-token";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface Props{
  privateValidation: boolean
}

const PrivateValidationFragment = (
  <Navigate replace to={`/${PrivateRoutes.PRIVATE}`} />
);
const PublicValidationFragment = (
  <Navigate replace to={`/${PublicRoutes.PUBLIC}`} />
);

export const AuthGuard = ({privateValidation}: Props) => {
  const clientState = useSelector((store: AppStore) => store.user);
  ExpiresToken();
  return clientState?.user?.id ? (
    privateValidation ? (
      <Outlet />
    ) : (
      PrivateValidationFragment
    )
  ) : (
    PublicValidationFragment
  );
};

export default AuthGuard;
