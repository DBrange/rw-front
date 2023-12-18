import {
  AllClientAssets,
  InspectLogin,
  InspectionCard,
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

function BrokerInspectionsBox() {
  const { setSearchField, searchField, setTypeToFilter, assets, typeToFilter } =
    useBrokerInspectionsContext();

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
      {[...assets]
        ?.sort((a, b) => date(b.created_at) - date(a.created_at))
        .map((el: AllClientAssets) => {
          if (el.vehicle) {
            return (
              <InspectionCard
                key={el.id}
                type={el.vehicle.type}
                keyName={el.vehicle.plate}
                id={el.id}
                date={el.created_at}
              />
            );
          } else if (el.electronic) {
            return (
              <InspectionCard
                key={el.id}
                type={el.electronic.type}
                keyName={el.electronic.brand}
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
