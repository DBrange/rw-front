import {
  AllClientSinisters,
  AllLegalUserSinisterUrl,
  InspectLogin,
  ReportCard,
  Sidebar,
  SidebarBroker,
} from "@/pages";

import { useBrokerReportsContext } from "../..";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

function BrokerReportsBox() {
  const { setSearchField, searchField, setTypeToFilter, assets, typeToFilter } =
    useBrokerReportsContext();
  const broker = useSelector((store: AppStore) => store.user).user.broker;
  
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
          } else if (el.asset.electronics) {
            return (
              <ReportCard
              key={el.id}
              type={el.asset.electronics.type}
              keyName={el.asset.electronics.brand}
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
    {
      broker ? <SidebarBroker /> : <Sidebar />
    }
      <InspectLogin
        sectionName="Siniestros"
        setSearchField={setSearchField}
        searchField={searchField}
        placeholder={
          typeToFilter === "vehicle" ? "Buscar patente" : "Buscar modelo"
        }
        name="allInspected"
        cards={cards}
      />
    </>
  );
}
export default BrokerReportsBox;
