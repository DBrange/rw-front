import { AllClientSinisters, AllLegalUserSinisterUrl, InspectLogin, ReportCard, Sidebar, allSinister } from "@/pages";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { useClientReportsContext } from "../../..";

function ClientReportsBox() {
  const { setSearchField, searchField, setTypeToFilter, assets, typeToFilter } =
    useClientReportsContext();

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
      <Sidebar />
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
export default ClientReportsBox