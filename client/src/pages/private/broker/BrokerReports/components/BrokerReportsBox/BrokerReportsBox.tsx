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
import { date } from "@/utilities/date.utility";
import {
  ContainerBtnBrokerSelection,
  BtnBrokerSelection,
} from "../../../BrokerInspections/components/BrokerInspectionsBox/BrokerInspectionsBox.styled";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "@/components";

function BrokerReportsBox() {
  const {
    setSearchField,
    searchField,
    setTypeToFilter,
    setTypeToFilterReport,
    typeToFilterReport,
    sinisters,
    typeToFilter,
    setSize,
    size,
    isReachedEnd,
  } = useBrokerReportsContext();
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
      <InfiniteScroll
        className="infiniteScroll"
        next={() => setSize(size + 1)}
        hasMore={!isReachedEnd}
        loader={<Loader />}
        dataLength={sinisters.length ?? 0}
      >
        {[...sinisters]
          ?.sort((a, b) => date(b.created_at) - date(a.created_at))
          .map((el: AllClientSinisters) => {
            if (el?.asset?.vehicle) {
              return (
                <ReportCard
                  key={el?.id}
                  type={el?.asset?.vehicle?.type}
                  keyName={el?.asset?.vehicle?.plate}
                  id={el?.id}
                  date={el?.created_at}
                />
              );
            } else if (el?.asset?.electronic) {
              return (
                <ReportCard
                  key={el?.id}
                  type={el?.asset?.electronic?.type}
                  keyName={el?.asset?.electronic?.brand}
                  id={el?.id}
                  date={el?.created_at}
                />
              );
            } else {
              return [];
            }
          })}
      </InfiniteScroll>
      {!sinisters?.length && <>No se han encontrado siniestros</>}
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
        name="BrokerReports"
        cards={cards}
      />
    </>
  );
}
export default BrokerReportsBox;
