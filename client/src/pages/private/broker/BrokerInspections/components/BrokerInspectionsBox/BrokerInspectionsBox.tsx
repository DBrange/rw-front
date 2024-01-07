import {
  AllClientAssets,
  InspectLogin,
  InspectionCard,
  SectionCard,
  Sidebar,
  SidebarBroker,
} from "@/pages";
import { useBrokerInspectionsContext } from "../..";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { date } from "@/utilities/date.utility";
import {
  ContainerBtnBrokerSelection,
  BtnBrokerSelection,
} from "./BrokerInspectionsBox.styled";
import { Loader } from "@/components";
import InfiniteScroll from "react-infinite-scroll-component";

function BrokerInspectionsBox() {
  const {
    setSearchField,
    searchField,
    setTypeToFilter,
    typeToFilter,
    size,
    setSize,
    inspections,
    isReachedEnd,
  } = useBrokerInspectionsContext();

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
      <InfiniteScroll
        className="infiniteScroll"
        next={() => setSize(size + 1)}
        hasMore={!isReachedEnd}
        loader={<Loader />}
        dataLength={inspections.length ?? 0}
      >
        {[...inspections]
          ?.sort((a, b) => date(b.created_at) - date(a.created_at))
          .map((el: AllClientAssets) => {
            if (el.vehicle) {
              return (
                <InspectionCard
                  key={el.vehicle.id}
                  type={el.vehicle.type}
                  keyName={el.vehicle.plate}
                  id={el.id}
                  date={el.created_at}
                />
              );
            } else if (el.electronic) {
              return (
                <InspectionCard
                  key={el.electronic.id}
                  type={el.electronic.type}
                  keyName={el.electronic.brand}
                  id={el.id}
                  date={el.created_at}
                />
              );
            } else {
              return <>No se han encontrado inspecciones</>;
            }
          })}
      </InfiniteScroll>{" "}
      {!inspections?.length && (
        <>No se han encontrado inspecciones</>
      )}
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
        name="BrokerInspection"
        cards={cards}
      />
    </>
  );
}
export default BrokerInspectionsBox;
