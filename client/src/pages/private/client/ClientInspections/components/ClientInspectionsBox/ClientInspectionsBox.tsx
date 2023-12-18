import {
  AllClientAssets,
  InspectLogin,
  InspectionCard,
  Sidebar,
  SidebarBroker,
} from "@/pages";
import { useClientInspectionsContext } from "../..";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { date } from "@/utilities/date.utility";

function ClientInspectionsBox() {
  const { setSearchField, searchField, setTypeToFilter, assets, typeToFilter } =
    useClientInspectionsContext();

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
      {[...assets]
        ?.sort((a, b) => date(b.created_at) - date(a.created_at))
        .map((el: AllClientAssets) => {
          if (el.vehicle) {
            return (
              <InspectionCard
                key={el.id}
                type={el.vehicle.type}
                keyName={el.vehicle.plate}
                id={el.id}
                date={el.created_at}
              />
            );
          } else if (el.electronic) {
            return (
              <InspectionCard
                key={el.id}
                type={el.electronic.type}
                keyName={el.electronic.brand}
                id={el.id}
                date={el.created_at}
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
          typeToFilter === "vehicle" ? "Buscar patente" : "Buscar modelo o IMEI"
        }
        name="ClientInspections"
        cards={cards}
      />
    </>
  );
}
export default ClientInspectionsBox;
