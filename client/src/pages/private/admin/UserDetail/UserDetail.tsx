import { useParams } from "react-router-dom";
import useSWR from "swr";
import {  SidebarBroker } from "..";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { BrokerDetailAdmin, ClientDetailContainer, SidebarAdmin } from "../..";
import UserDetailContainer from "./components/UserDetailContainer/UserDetailContainer";

function UserDetail() {
  const { clientId } = useParams();
  const user = useSelector((store: AppStore) => store.user);

  const { data: clientData } = useSWR(
    clientDetailUrl(user.user?.id, clientId),
    clientDetail
  );

  return (
    <UserDetailContainer>
      <SidebarAdmin />
      <BrokerDetailAdmin data={clientData} />
    </UserDetailContainer>
  );
}
export default UserDetail;
