import {
  AllClientSinisters,
  InspectLogin,
  ReportCard,
  Sidebar,
  SidebarBroker,
  allSinister,
} from "@/pages";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { useClientReportsContext } from "../../..";

function ClientReportsBox() {
  const { setSearchField, searchField, setTypeToFilter, assets, typeToFilter } =
    useClientReportsContext();

  const userBroker = useSelector((store: AppStore) => store.user).user?.userBroker;

  const cards: JSX.Element = (
    <>
      <button
        value="vehicle"
        onClick={(e) => setTypeToFilter(e.currentTarget.value as "vehicle")}
      >
        vehiculo
      </button>
      <button
        value="electronic"
        onClick={(e) => setTypeToFilter(e.currentTarget.value as "electronic")}
      >
        electronico
      </button>
      {assets?.map((el: AllClientSinisters) => {
        if (el.asset.vehicle) {
          return (
            <ReportCard
              key={el.id}
              type={el.asset.vehicle.type}
              keyName={el.asset.vehicle.plate}
              id={el.id}
            />
          );
        } else if (el.asset.electronic) {
          return (
            <ReportCard
              key={el.id}
              type={el.asset.electronic.type}
              keyName={el.asset.electronic.brand}
              id={el.id}
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
        sectionName="Siniestros"
        setSearchField={setSearchField}
        searchField={searchField}
        placeholder={
          typeToFilter === "vehicle" ? "Buscar patente" : "Buscar modelo"
        }
        name="ClientReports"
        cards={cards}
      />
    </>
  );
}
export default ClientReportsBox;
