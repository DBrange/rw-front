import { ClientCard, SidebarBroker, Sidebar, InspectLogin } from "@/pages";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { useBrokerCreateReportContext } from "../..";

function BrokerCreateReportBox() {
  const {
    setSearchField,
    searchField,
    setTypeToFilter,
    clients,
    typeToFilter,
  } = useBrokerCreateReportContext();

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
      {userBroker ? <SidebarBroker /> : <Sidebar />}

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
export default BrokerCreateReportBox