import {
  AllClientSinisters,
  InspectLogin,
  ReportCard,
  Sidebar,
  SidebarBroker,
} from "@/pages";

import { useBrokerReportsContext } from "../..";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

function BrokerReportsBox() {
  const {
    setSearchField,
    searchField,
    setTypeToFilter,
    setTypeToFilterReport,
    assets,
    typeToFilter,
  } = useBrokerReportsContext();
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
      {typeToFilter === "vehicle" ? (
        <>
          <span>
            <button
              value="theft"
              onClick={(e) =>
                setTypeToFilterReport(e.currentTarget.value as "theft")
              }
            >
              robo
            </button>
          </span>
          <span>
            <button
              value="fire"
              onClick={(e) =>
                setTypeToFilterReport(e.currentTarget.value as "fire")
              }
            >
              incendio
            </button>
          </span>
          <span>
            <button
              value="crash"
              onClick={(e) =>
                setTypeToFilterReport(e.currentTarget.value as "crash")
              }
            >
              choque
            </button>
          </span>
          <span>
            <button
              value="damage"
              onClick={(e) =>
                setTypeToFilterReport(e.currentTarget.value as "damage")
              }
            >
              daño
            </button>
          </span>
        </>
      ) : (
        <>
          <span>
            <button
              value="theft"
              onClick={(e) =>
                setTypeToFilterReport(e.currentTarget.value as "theft")
              }
            >
              robo
            </button>
          </span>
          <span>
            <button
              value="damage"
              onClick={(e) =>
                setTypeToFilterReport(e.currentTarget.value as "damage")
              }
            >
              daño
            </button>
          </span>
        </>
      )}

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
        name="BrokerReports"
        cards={cards}
      />
    </>
  );
}
export default BrokerReportsBox;
