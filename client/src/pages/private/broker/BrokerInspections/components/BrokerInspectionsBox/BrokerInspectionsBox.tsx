import {
  AllClientAssets,
  InspectLogin,
  InspectionCard,
  Sidebar,
  SidebarBroker,
} from "@/pages";
import { useBrokerInspectionsContext } from "../..";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

function BrokerInspectionsBox() {
  const { setSearchField, searchField, setTypeToFilter, assets, typeToFilter } =
    useBrokerInspectionsContext();

  const userBroker = useSelector((store: AppStore) => store.user).user
    ?.userBroker;

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
      {assets?.map((el: AllClientAssets) => {
        if (el.vehicle) {
          return (
            <InspectionCard
              key={el.id}
              type={el.vehicle.type}
              keyName={el.vehicle.plate}
              id={el.id}
            />
          );
        } else if (el.electronic) {
          return (
            <InspectionCard
              key={el.id}
              type={el.electronic.type}
              keyName={el.electronic.brand}
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
        sectionName="Inspecciones"
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
export default BrokerInspectionsBox;
