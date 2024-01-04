import { useNavigate } from "react-router-dom";
import { SectionVerified, BtnVerified } from ".";
import { PublicRoutes } from "@/models/types/routes";

function Verified() {
  const navigate  = useNavigate()
  return (
    <SectionVerified>
      <h2>Tu Cuenta a sido verificada</h2>
      <BtnVerified onClick={() => navigate(`/${PublicRoutes.PUBLIC}/${PublicRoutes.LOGIN}`)}>Ingresar a mi usuario</BtnVerified>
    </SectionVerified>
  );
}
export default Verified