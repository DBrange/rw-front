import { Loader } from "@/components";
import {
  ClientCard,
  InspectLogin,
  Sidebar,
  SidebarBroker,
  useClientChooseBrokerContext,
} from "@/pages";
import { ContainerBtnBrokerSelection, BtnBrokerSelection } from "@/pages/private/broker/BrokerInspections/components/BrokerInspectionsBox/BrokerInspectionsBox.styled";
import { AppStore } from "@/redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

function ClientChooseBrokerBox() {
  const {
    setSearchField,
    searchField,
    setTypeToFilter,
    brokers,
    typeToFilter,
    setSize,
    size,
    isReachedEnd,
  } = useClientChooseBrokerContext();

  const userBroker = useSelector((store: AppStore) => store.user).user
    ?.userBroker;

  const cards: JSX.Element = (
    <>
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
        dataLength={brokers.length ?? 0}
      >
        {brokers?.map((client, i) => {
          if (client.personalUser?.dni) {
            return (
              <ClientCard
                key={i}
                name={client.personalUser?.name}
                lastname={client.personalUser?.lastName}
                keyName={client.personalUser?.dni}
                id={client.id}
              />
            );
          } else if (client.legalUser?.cuit) {
            return (
              <ClientCard
                key={i}
                companyName={client.legalUser?.companyName}
                keyName={client.legalUser?.cuit}
                id={client.id}
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
      {userBroker ? <SidebarBroker /> : <Sidebar />}

      <InspectLogin
        sectionName="Elegir broker"
        setSearchField={setSearchField}
        searchField={searchField}
        placeholder={
          typeToFilter === "user" ? "Buscar por dni" : "Buscar por cuit"
        }
        name="ClientChooseBroker"
        cards={cards}
      />
    </>
  );
}
export default ClientChooseBrokerBox;