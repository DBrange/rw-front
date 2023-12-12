import { ClientCard, InspectLogin, Sidebar, SidebarBroker } from "@/pages";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { useBrokerFindClientsContext } from "../..";

function BrokerFindClientsBox() {
  const { setSearchField, searchField, client } = useBrokerFindClientsContext();

  const userBroker = useSelector((store: AppStore) => store.user).user
    ?.userBroker;

  const cards = (): JSX.Element => {
    if (client.personalUser?.dni) {
      return (
        <ClientCard
          name={client.personalUser?.name}
          lastname={client.personalUser?.lastName}
          keyName={client.personalUser?.dni}
          id={client?.id}
        />
      );
    } else if (client.legalUser?.cuit) {
      return (
        <ClientCard
          companyName={client.legalUser?.companyName}
          keyName={client.legalUser?.cuit}
          id={client?.id}
        />
      );
    } else {
      return <>No se ha encontrado el cliente</>;
    }
  };

  return (
    <>
      {userBroker ? <SidebarBroker /> : <Sidebar />}

      <InspectLogin
        sectionName="Clientes"
        setSearchField={setSearchField}
        searchField={searchField}
        placeholder="Buscar por email"
        name="getClient"
        cards={cards()}
      />
    </>
  );
}
export default BrokerFindClientsBox;
