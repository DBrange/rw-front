import { FormTitle } from "@/components";
import useSWR from "swr";
import { AllVehiclesUrl, allInspectedVehicles } from "../../ClientUser/service";
import { InspectionCard } from "../InspectionCard";
import { SectionCard } from "./InspectLogin.styled";

function InspectLogin({ sectionName }: { sectionName: string }) {
  const { error: errorAllInspectedVehicles, data: AllInspectedVehicles } =
    useSWR(AllVehiclesUrl, allInspectedVehicles);

  return (
    <>
      <FormTitle>{sectionName}</FormTitle>
      <SectionCard>
        {AllInspectedVehicles?.map((vehicle) => (
          <InspectionCard type={vehicle.type} keyName={vehicle.plate} />
        ))}
      </SectionCard>
    </>
  );
}
export default InspectLogin;
