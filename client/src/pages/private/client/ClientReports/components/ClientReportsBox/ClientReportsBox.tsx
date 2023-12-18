import {
  AllClientSinisters,
  InspectLogin,
  ReportCard,
  Sidebar,
  SidebarBroker,
  allSinister,
} from "@/pages";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { useClientReportsContext } from "../../..";
import { date } from "@/utilities/date.utility";
import { ContainerBtnBrokerSelection, BtnBrokerSelection } from "@/pages/private/broker/BrokerInspections/components/BrokerInspectionsBox/BrokerInspectionsBox.styled";

function ClientReportsBox() {
  const {
    setSearchField,
    searchField,
    setTypeToFilter,
    assets,
    typeToFilter,
    setTypeToFilterReport,
    typeToFilterReport,
  } = useClientReportsContext();

  const userBroker = useSelector((store: AppStore) => store.user).user
    ?.userBroker;

  const cards: JSX.Element = (
    <>
      <ContainerBtnBrokerSelection>
        <BtnBrokerSelection
          $active={typeToFilter === "vehicle"}
          value="vehicle"
          onClick={(e) => setTypeToFilter(e.currentTarget.value as "vehicle")}
        >
          vehiculo
        </BtnBrokerSelection>
        <BtnBrokerSelection
          $active={typeToFilter === "electronic"}
          value="electronic"
          onClick={(e) =>
            setTypeToFilter(e.currentTarget.value as "electronic")
          }
        >
          electronico
        </BtnBrokerSelection>
      </ContainerBtnBrokerSelection>
      {typeToFilter === "vehicle" ? (
        <ContainerBtnBrokerSelection>
          <BtnBrokerSelection
            $active={typeToFilterReport === "theft"}
            value="theft"
            onClick={(e) =>
              setTypeToFilterReport(e.currentTarget.value as "theft")
            }
          >
            robo
          </BtnBrokerSelection>

          <BtnBrokerSelection
            $active={typeToFilterReport === "fire"}
            value="fire"
            onClick={(e) =>
              setTypeToFilterReport(e.currentTarget.value as "fire")
            }
          >
            incendio
          </BtnBrokerSelection>

          <BtnBrokerSelection
            $active={typeToFilterReport === "crash"}
            value="crash"
            onClick={(e) =>
              setTypeToFilterReport(e.currentTarget.value as "crash")
            }
          >
            choque
          </BtnBrokerSelection>

          <BtnBrokerSelection
            $active={typeToFilterReport === "damage"}
            value="damage"
            onClick={(e) =>
              setTypeToFilterReport(e.currentTarget.value as "damage")
            }
          >
            daño
          </BtnBrokerSelection>
        </ContainerBtnBrokerSelection>
      ) : (
        <ContainerBtnBrokerSelection>
          <BtnBrokerSelection
            $active={typeToFilterReport === "theft"}
            value="theft"
            onClick={(e) =>
              setTypeToFilterReport(e.currentTarget.value as "theft")
            }
          >
            robo
          </BtnBrokerSelection>

          <BtnBrokerSelection
            $active={typeToFilterReport === "damage"}
            value="damage"
            onClick={(e) =>
              setTypeToFilterReport(e.currentTarget.value as "damage")
            }
          >
            daño
          </BtnBrokerSelection>
        </ContainerBtnBrokerSelection>
      )}
      {[...assets]
        ?.sort((a, b) => date(b.created_at) - date(a.created_at))
        .map((el: AllClientSinisters) => {
          if (el.asset.vehicle) {
            return (
              <ReportCard
                key={el.id}
                type={el.asset.vehicle.type}
                keyName={el.asset.vehicle.plate}
                id={el.id}
                date={el.created_at}
              />
            );
          } else if (el.asset.electronic) {
            return (
              <ReportCard
                key={el.id}
                type={el.asset.electronic.type}
                keyName={el.asset.electronic.brand}
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
        sectionName="Siniestros"
        setSearchField={setSearchField}
        searchField={searchField}
        placeholder={
          typeToFilter === "vehicle" ? "Buscar patente" : "Buscar modelo o IMEI"
        }
        name="ClientReports"
        cards={cards}
      />
    </>
  );
}
export default ClientReportsBox;
