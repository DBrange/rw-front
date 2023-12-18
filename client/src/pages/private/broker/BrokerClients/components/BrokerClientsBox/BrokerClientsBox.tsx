import { ClientCard, InspectLogin, Sidebar, SidebarBroker } from "@/pages";
import { useBrokerClientsContext } from "../..";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { date } from "@/utilities/date.utility";
import { ContainerBtnBrokerSelection, BtnBrokerSelection } from "../../../BrokerInspections/components/BrokerInspectionsBox/BrokerInspectionsBox.styled";

function BrokerClientsBox() {
  const {
    setSearchField,
    searchField,
    setTypeToFilter,
    clients,
    typeToFilter,
  } = useBrokerClientsContext();
  
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
    </>
  );

  return (
    <>
      {userBroker ? <SidebarBroker /> : <Sidebar />}

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
export default BrokerClientsBox;
