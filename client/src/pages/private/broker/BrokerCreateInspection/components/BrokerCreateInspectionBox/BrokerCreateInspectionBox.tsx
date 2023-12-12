import { ClientCard, InspectLogin, Sidebar, SidebarBroker, useBrokerCreateInspectionContext } from "@/pages"
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

function BrokerCreateInspectionBox() {
  const {
    setSearchField,
    searchField,
    setTypeToFilter,
    clients,
    typeToFilter,
  } = useBrokerCreateInspectionContext();

  const userBroker = useSelector((store: AppStore) => store.user).user
    ?.userBroker;

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
        name="BrokerCreateInspection"
        cards={cards}
      />
    </>
  );
}
export default BrokerCreateInspectionBox