import { Loader } from "@/components";
import {
  AllClientAssets,
  InspectLogin,
  InspectionCard,
  SidebarAdmin
} from "@/pages";
import { BtnBrokerSelection, ContainerBtnBrokerSelection } from "@/pages/private/broker/BrokerInspections/components/BrokerInspectionsBox/BrokerInspectionsBox.styled";
import { date } from "@/utilities/date.utility";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAdminInspectionsContext } from "../..";

function AdminInspectionsBox() {
  const {
    setSearchField,
    searchField,
    setTypeToFilter,
    typeToFilter,
    size,
    setSize,
    inspections,
    isReachedEnd,
  } = useAdminInspectionsContext();

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
      </InfiniteScroll>
    </>
  );

  return (
    <>
      <SidebarAdmin/>

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
export default AdminInspectionsBox;
