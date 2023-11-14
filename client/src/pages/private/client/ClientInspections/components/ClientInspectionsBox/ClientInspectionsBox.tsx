import {
  AllClientAssets,
  InspectLogin,
  InspectionCard,
  Sidebar,
} from "@/pages";
import {
  useClientInspectionsContext
} from "../..";

function ClientInspectionsBox() {
  const {
    setSearchField,
    searchField,
    setTypeToFilter,
    assets,
    typeToFilter,
  } = useClientInspectionsContext();

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
        } else if (el.electronics) {
          return (
            <InspectionCard
              key={el.id}
              type={el.electronics.type}
              keyName={el.electronics.brand}
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
      <Sidebar />
      <InspectLogin
        sectionName="Inspecciones"
        setSearchField={setSearchField}
        searchField={searchField}
        placeholder={typeToFilter === 'vehicle' ? "Buscar patente" : 'Buscar modelo' }
        name="allInspected"
        cards={cards}
      />
    </>
  );
}
export default ClientInspectionsBox;
