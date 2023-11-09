import {
  AllClientAssets,
  InspectLogin,
  InspectionCard,
  Sidebar,
} from "@/pages";
import useSWR from "swr";
import {
  AllAssetsLegalUserUrl,
  AllAssetsUserUrl,
  allInspectedVehicles,
  useClientInspectionsContext,
} from "../..";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

function ClientInspectionsBox() {
  const { filterData, setSearchField, searchField } =
    useClientInspectionsContext();

    const user = useSelector((store: AppStore) => store.user);

  const { error: errorAllInspectedVehicles, data: AllInspectedVehicles } =
    useSWR(AllAssetsLegalUserUrl(user.user.id), allInspectedVehicles);

  const searchedVehicles: AllClientAssets[] = filterData<AllClientAssets>(
    AllInspectedVehicles!,
    searchField
  );

  const cards: JSX.Element = (
    <>
      {searchedVehicles?.map((el) => {
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
