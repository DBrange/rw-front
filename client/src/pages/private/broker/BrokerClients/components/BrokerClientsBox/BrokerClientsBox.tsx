import { ClientCard, InspectLogin, Sidebar, SidebarBroker } from "@/pages";
import { useBrokerClientsContext } from "../..";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

function BrokerClientsBox() {
  const {
    setSearchField,
    searchField,
    setTypeToFilter,
    clients,
    typeToFilter,
  } = useBrokerClientsContext();

  const broker = useSelector((store: AppStore) => store.user).user.broker;

  const cards: JSX.Element = (
    <>
      <button
        value="user"
        onClick={(e) => setTypeToFilter(e.currentTarget.value as "user")}
      >
        particular
      </button>
      <button
        value="legalUser"
        onClick={(e) => setTypeToFilter(e.currentTarget.value as "legalUser")}
      >
        juridica
      </button>
      {clients?.map((client, i) => {
        if (client.dni) {
          return (
            <ClientCard
              key={i}
              name={client.name}
              lastname={client.lastName}
              keyName={client.dni}
              id={client.id}
            />
          );
        } else if (client.cuit) {
          return (
            <ClientCard
              key={i}
              companyName={client.companyName}
              keyName={client.cuit}
              id={client.id}
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
      {broker ? <SidebarBroker /> : <Sidebar />}

      <InspectLogin
        sectionName="Clientes"
        setSearchField={setSearchField}
        searchField={searchField}
        placeholder={
          typeToFilter === "user" ? "Buscar por dni" : "Buscar por cuit"
        }
        name="allInspected"
        cards={cards}
      />
    </>
  );
}
export default BrokerClientsBox;
