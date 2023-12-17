import { ClientCard, InspectionCard, ReportCard } from "@/pages";
import { useBrokerUserContext } from "../..";
import {
  BtnBrokerDashboardBox,
  DivContentBrokerDashboardBox,
  DivContentTitleBrokerDashboardBox,
  H2BrokerDashboardBox,
  SectionBrokerDashboardBox,
  SpanBrokerDashboardBox,
} from "./BrokerDashboardBox.styled";
import { IoIosMore } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "@/models/types/routes";

function BrokerDashboardBox() {
  const { dataToDashboard, newData } = useBrokerUserContext();
  const [buttonActive, setButtonActive] = useState({
    inspection: false,
    sinister: false,
    client: false,
  });

  const changeBtnActive = (value: string) => {
    if (value === "inspection") {
      setButtonActive({ inspection: true, sinister: false, client: false });
    } else if (value === "sinister") {
      setButtonActive({ inspection: false, sinister: true, client: false });
    } else if (value === "client") {
      setButtonActive({ inspection: false, sinister: false, client: true });
    }

    if (value === "inspection" && buttonActive.inspection) {
      setButtonActive({ inspection: false, sinister: false, client: false });
    } else if (value === "sinister" && buttonActive.sinister) {
      setButtonActive({ inspection: false, sinister: false, client: false });
    } else if (value === "client" && buttonActive.client) {
      setButtonActive({ inspection: false, sinister: false, client: false });
    }
  };

  const date = (date: Date) => new Date(date).getTime();

  const HTMLAssetData = () => (
    <div>
      <DivContentTitleBrokerDashboardBox>
        <H2BrokerDashboardBox>Ultimas inspecciones</H2BrokerDashboardBox>
        <BtnBrokerDashboardBox
          value="inspection"
          onClick={(e) => changeBtnActive(e.currentTarget.value)}
        >
          {buttonActive.inspection && (
            <Link
              to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.ALL_INSURED}`}
            >
              <SpanBrokerDashboardBox>Buscar inspeccion</SpanBrokerDashboardBox>
            </Link>
          )}
          <IoIosMore size={25} />
        </BtnBrokerDashboardBox>
      </DivContentTitleBrokerDashboardBox>
      <DivContentBrokerDashboardBox>
        {dataToDashboard &&
          [...dataToDashboard?.assetsLastWeek]
            .sort((a, b) => date(b.created_at) - date(a.created_at))
            .map((el) => {
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
      </DivContentBrokerDashboardBox>
    </div>
  );

  const HTMLSinisterData = () => (
    <div>
      <DivContentTitleBrokerDashboardBox>
        <H2BrokerDashboardBox>Ultimos siniestros</H2BrokerDashboardBox>
        <BtnBrokerDashboardBox
          value="sinister"
          onClick={(e) => changeBtnActive(e.currentTarget.value)}
        >
          {buttonActive.sinister && (
            <Link
              to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.ALL_SINISTER}`}
            >
              <SpanBrokerDashboardBox>Buscar siniestro</SpanBrokerDashboardBox>
            </Link>
          )}
          <IoIosMore size={25} />
        </BtnBrokerDashboardBox>
      </DivContentTitleBrokerDashboardBox>
      <DivContentBrokerDashboardBox>
        {dataToDashboard &&
          [...dataToDashboard?.sinistersLastWeek]
            .sort((a, b) => date(b.created_at) - date(a.created_at))
            .map((el) => {
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
      </DivContentBrokerDashboardBox>
    </div>
  );

  const HTMLClientData = () => (
    <div>
      <DivContentTitleBrokerDashboardBox>
        <H2BrokerDashboardBox>Ultimos clientes</H2BrokerDashboardBox>
        <BtnBrokerDashboardBox
          value="client"
          onClick={(e) => changeBtnActive(e.currentTarget.value)}
        >
          {buttonActive.client && (
            <Link
              to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CLIENTS_OF_BROKER}`}
            >
              <SpanBrokerDashboardBox>Buscar cliente</SpanBrokerDashboardBox>
            </Link>
          )}
          <IoIosMore size={25} />
        </BtnBrokerDashboardBox>
      </DivContentTitleBrokerDashboardBox>
      <DivContentBrokerDashboardBox>
        {dataToDashboard &&
          [...dataToDashboard?.clientsLastWeek]
            ?.sort((a, b) => date(b.created_at) - date(a.created_at))
            .map((el) => {
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
      </DivContentBrokerDashboardBox>
    </div>
  );

  const HTLMData = () => {
    return (
      <>
        <SectionBrokerDashboardBox>
          {HTMLClientData()}
          {HTMLAssetData()}
          {HTMLSinisterData()}
        </SectionBrokerDashboardBox>
      </>
    );
  };
  return HTLMData();
}
export default BrokerDashboardBox;
