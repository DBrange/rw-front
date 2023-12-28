import { ClientCard, InspectLogin, Sidebar, SidebarAdmin, SidebarBroker } from "@/pages";
import { useAdminUsersContext } from "../..";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { date } from "@/utilities/date.utility";
import { Loader } from "@/components";
import InfiniteScroll from "react-infinite-scroll-component";
import { ContainerBtnBrokerSelection, BtnBrokerSelection } from "@/pages/private/broker/BrokerInspections/components/BrokerInspectionsBox/BrokerInspectionsBox.styled";

function AdminUsersBox() {
  const {
    setSearchField,
    searchField,
    setTypeToFilter,
    clients,
    typeToFilter,
    setSize,
    size,
    isReachedEnd,
    typeToFilterUser,
    setTypeToFilterUser,
  } = useAdminUsersContext();

  const userBroker = useSelector((store: AppStore) => store.user).user
    ?.userBroker;

  const cards: JSX.Element = (
    <>
      <ContainerBtnBrokerSelection>
        <BtnBrokerSelection
          $active={typeToFilterUser === "broker"}
          value="broker"
          onClick={(e) => setTypeToFilterUser(e.currentTarget.value as "broker")}
        >
          Broker
        </BtnBrokerSelection>
        <BtnBrokerSelection
          $active={typeToFilterUser === "client"}
          value="client"
          onClick={(e) => setTypeToFilterUser(e.currentTarget.value as "client")}
        >
          Cliente
        </BtnBrokerSelection>
      </ContainerBtnBrokerSelection>
      <ContainerBtnBrokerSelection>
        <BtnBrokerSelection
          $active={typeToFilter === "user"}
          value="user"
          onClick={(e) => setTypeToFilter(e.currentTarget.value as "user")}
        >
          Particular
        </BtnBrokerSelection>
        <BtnBrokerSelection
          $active={typeToFilter === "legalUser"}
          value="legalUser"
          onClick={(e) => setTypeToFilter(e.currentTarget.value as "legalUser")}
        >
          Juridico
        </BtnBrokerSelection>
      </ContainerBtnBrokerSelection>
      <InfiniteScroll
        className="infiniteScroll"
        next={() => setSize(size + 1)}
        hasMore={!isReachedEnd}
        loader={<Loader />}
        dataLength={clients.length ?? 0}
      >
        {[...clients]
          ?.sort((a, b) => date(b.created_at) - date(a.created_at))
          .map((client, i) => {
            if (client.personalUser?.dni) {
              return (
                <ClientCard
                  key={i}
                  name={client.personalUser?.name}
                  lastname={client.personalUser?.lastName}
                  keyName={client.personalUser?.dni}
                  id={client?.id}
                />
              );
            } else if (client.legalUser?.cuit) {
              return (
                <ClientCard
                  key={i}
                  companyName={client.legalUser?.companyName}
                  keyName={client.legalUser?.cuit}
                  id={client?.id}
                />
              );
            } else {
              return [];
            }
          })}
      </InfiniteScroll>
    </>
  );

  return (
    <>
      <SidebarAdmin />

      <InspectLogin
        sectionName="Clientes"
        setSearchField={setSearchField}
        searchField={searchField}
        placeholder={
          typeToFilter === "user" ? "Buscar por dni" : "Buscar por cuit"
        }
        name="BrokerClients"
        cards={cards}
      />
    </>
  );
}
export default AdminUsersBox;
