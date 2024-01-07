import { ClientCard, InspectLogin, Sidebar, SidebarBroker } from "@/pages";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { useBrokerFindClientsContext } from "../..";
import ClientCardInFind from "@/pages/private/components/ClientCardInFind/ClientCardinFind";

function BrokerFindClientsBox() {
  const { setSearchField, searchField, client, modalActive, setModalActive } =
    useBrokerFindClientsContext();

  const userBroker = useSelector((store: AppStore) => store.user).user
    ?.userBroker;

  const cards = (): JSX.Element => {
    if (client?.personalUser?.dni) {
      return (
        <ClientCardInFind
          name={client?.personalUser?.name}
          lastname={client?.personalUser?.lastName}
          dni={client?.personalUser.dni}
          email={client?.email}
          id={client?.id}
        />
      );
    } else if (client?.legalUser?.cuit) {
      return (
        <ClientCardInFind
          companyName={client?.legalUser?.companyName}
          cuit={client?.legalUser.cuit}
          email={client?.email}
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
