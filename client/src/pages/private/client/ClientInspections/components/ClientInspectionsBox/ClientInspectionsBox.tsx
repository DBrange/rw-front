import {
  AllClientVehicles,
  InspectLogin,
  InspectionCard,
  Sidebar,
} from "@/pages";
import useSWR from "swr";
import {
  AllVehiclesUrl,
  allInspectedVehicles,
  useClientInspectionsContext,
} from "../..";

function ClientInspectionsBox() {
  const { filterData, setSearchField, searchField } =
    useClientInspectionsContext();

  const { error: errorAllInspectedVehicles, data: AllInspectedVehicles } =
    useSWR(AllVehiclesUrl, allInspectedVehicles);

  const searchedVehicles: AllClientVehicles[] = filterData<AllClientVehicles>(
    AllInspectedVehicles!,
    searchField
  );

  const cards: JSX.Element = (
    <>
      {searchedVehicles?.map((vehicle) => (
        <InspectionCard
          key={vehicle.id}
          type={vehicle.type}
          keyName={vehicle.plate}
        />
      ))}
    </>
  );
  
  return (
    <>
      <Sidebar />
      <InspectLogin
        sectionName="Inspecciones"
        error={errorAllInspectedVehicles}
        setSearchField={setSearchField}
        searchField={searchField}
        placeholder="Buscar patente"
        name="AllInspectedVehicles"
        cards={cards}
      />
    </>
  );
}
export default ClientInspectionsBox;
