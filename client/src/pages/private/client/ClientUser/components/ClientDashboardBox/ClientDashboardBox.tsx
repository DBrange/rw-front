import { BtnClientDashboardBox, DivClientDashboardBox } from "./ClientDashboardBox.styled";
import { TbReportAnalytics } from "react-icons/tb";
import { BsShieldCheck } from "react-icons/bs";
import { PrivateRoutes } from "@/models/types/routes";

function ClientDashboardBox() {
  return (
    <DivClientDashboardBox>
      <BtnClientDashboardBox
        to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CREATE_INSPECTION}`}
      >
        <BsShieldCheck size={50} />
        <h4>Inspeccionar</h4>
      </BtnClientDashboardBox>
      <BtnClientDashboardBox
        to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CREATE_SINISTER}`}
      >
        <TbReportAnalytics size={50} />
        <h4>Denunciar</h4>
      </BtnClientDashboardBox>
    </DivClientDashboardBox>
  );
}
export default ClientDashboardBox