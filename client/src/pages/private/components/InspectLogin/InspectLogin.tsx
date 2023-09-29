import { FormTitle } from "@/components";
import useSWR from "swr";
import { useClientUserContext } from "..";
import { AllClientVehicles } from "../..";
import { AllVehiclesUrl, allInspectedVehicles } from "../../ClientUser/service";
import { InspectionCard } from "../InspectionCard";
import { FilterField, SectionCard } from "./InspectLogin.styled";

function InspectLogin({ sectionName }: { sectionName: string }) {
  const { filterData, setSearchField, searchField } = useClientUserContext();
  const { error: errorAllInspectedVehicles, data: AllInspectedVehicles } =
    useSWR(AllVehiclesUrl, allInspectedVehicles);

  
const vehicles: [] | AllClientVehicles[] | undefined =
  filterData<AllClientVehicles>(AllInspectedVehicles!, searchField);
  return (
    <>
      <FormTitle>{sectionName}</FormTitle>
      <FilterField
        type="text"
        name="searchInspection"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
        placeholder="Buscar patente"
      />
      <SectionCard>
        {vehicles?.map((vehicle) => (
          <InspectionCard
            key={vehicle.id}
            type={vehicle.type}
            keyName={vehicle.plate}
          />
        ))}
      </SectionCard>
    </>
  );
}
export default InspectLogin;
