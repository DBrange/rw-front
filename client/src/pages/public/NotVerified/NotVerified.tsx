import { PublicRoutes } from "@/models/types/routes";
import { SectionVerified, BtnVerified } from "..";
import { useNavigate } from "react-router-dom";

function NotVerified() {
  const navigate = useNavigate();
  return (
    <SectionVerified>
      <h2>La verificacion ha fallado</h2>
      <BtnVerified onClick={() => navigate(`/${PublicRoutes.PUBLIC}/${PublicRoutes.REGISTER}`)}>
        Volver a registrarse
      </BtnVerified>
    </SectionVerified>
  );
}
export default NotVerified;
