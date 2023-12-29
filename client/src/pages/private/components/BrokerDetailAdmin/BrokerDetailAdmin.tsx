import { useParams } from "react-router-dom";
import useSWR from "swr";
import { BrokerDetailAdminContainer, BrokerDetailAdminUrl, brokerDetailAdmin } from ".";
import { BrokerProfile, SidebarAdmin } from "..";

function BrokerDetailAdmin() {
  const { userId } = useParams();

  const { data: brokerData } = useSWR(
    BrokerDetailAdminUrl(userId),
    brokerDetailAdmin
  );

  return (
    <BrokerDetailAdminContainer>
      <SidebarAdmin />
      <BrokerProfile data={brokerData} />
    </BrokerDetailAdminContainer>
  );
}
export default BrokerDetailAdmin;
