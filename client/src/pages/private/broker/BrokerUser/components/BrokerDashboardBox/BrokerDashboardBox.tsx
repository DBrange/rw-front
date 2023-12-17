import { ClientCard, InspectionCard, ReportCard } from "@/pages";
import { useBrokerUserContext } from "../..";

function BrokerDashboardBox() {
  const { dataToDashboard, newData } = useBrokerUserContext();

  const HTMLAssetData = () => (
    <>
      <h2>assets</h2>
      {dataToDashboard &&
        dataToDashboard?.assetsLastWeek.map((el) => {
          if (el.vehicle) {
            return (
              <>
                {newData(el.created_at) && <h5>nuevoooo</h5>}
                <InspectionCard
                  key={el.id}
                  type={el.vehicle.type}
                  keyName={el.vehicle.plate}
                  id={el.id}
                />
              </>
            );
          } else if (el.electronic) {
            return (
              <>
                {newData(el.created_at) && <h5>nuevoooo</h5>}
                <InspectionCard
                  key={el.id}
                  type={el.electronic.type}
                  keyName={el.electronic.brand}
                  id={el.id}
                />
              </>
            );
          } else {
            return [];
          }
        })}
    </>
  );
  const HTMLSinisterData = () => (
    <>
      <h2>sinisters</h2>
      {dataToDashboard &&
        dataToDashboard?.sinistersLastWeek.map((el) => {
          if (el.vehicle) {
            return (
              <>
                {newData(el.created_at) && <h5>nuevoooo</h5>}
                <ReportCard
                  key={el.id}
                  type={el.vehicle.type}
                  keyName={el.vehicle.plate}
                  id={el.id}
                />
              </>
            );
          } else if (el.electronic) {
            return (
              <>
                {newData(el.created_at) && <h5>nuevoooo</h5>}
                <ReportCard
                  key={el.id}
                  type={el.electronic.type}
                  keyName={el.electronic.brand}
                  id={el.id}
                />
              </>
            );
          } else {
            return [];
          }
        })}
    </>
  );
  const HTMLClientData = () => (
    <>
      <h2>clients</h2>
      {dataToDashboard &&
        dataToDashboard?.clientsLastWeek?.map((el) => {
          if (el.personalUser?.dni) {
            return (
              <>
                {newData(el.created_at) && <h5>nuevoooo</h5>}
                <ClientCard
                  key={el.id}
                  name={el.personalUser?.name}
                  lastname={el.personalUser?.lastName}
                  keyName={el.personalUser?.dni}
                  id={el.id}
                />
              </>
            );
          } else if (el.legalUser?.cuit) {
            return (
              <>
                {newData(el.created_at) && <h5>nuevoooo</h5>}
                <ClientCard
                  key={el.id}
                  companyName={el.legalUser?.companyName}
                  keyName={el.legalUser?.cuit}
                  id={el.id}
                />
              </>
            );
          } else {
            return [];
          }
        })}
    </>
  );

  const HTLMData = () => {
    return (
      <>
        {<details>{HTMLAssetData()}</details>}
        {HTMLSinisterData()}
        {HTMLClientData()}
      </>
    );
  };
  return HTLMData();
}
export default BrokerDashboardBox;
