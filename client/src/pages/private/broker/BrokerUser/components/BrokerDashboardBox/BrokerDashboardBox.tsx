import { ClientCard, InspectionCard, ReportCard } from "@/pages";
import { useBrokerUserContext } from "../..";
import {
  BtnBrokerDashboardBox,
  BtnLinkBrokerDashboardBox,
  DivBtnsBrokerDashboardBox,
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
import { date } from "@/utilities/date.utility";
import { BsShieldCheck } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";

function BrokerDashboardBox() {
  const {
    dataToDashboard,
    newData,
    buttonActive,
    changeBtnActive,
    setButtonActive,
  } = useBrokerUserContext();

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
                    <InspectionCard
                      key={el.id}
                      type={el.vehicle.type}
                      keyName={el.vehicle.plate}
                      id={el.id}
                      dashboard={true}
                      newCard={newData(el.created_at)}
                    />
                  </>
                );
              } else if (el.electronic) {
                return (
                  <>
                    <InspectionCard
                      key={el.id}
                      type={el.electronic.type}
                      keyName={el.electronic.brand}
                      id={el.id}
                      dashboard={true}
                      newCard={newData(el.created_at)}
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
              if (el.asset?.vehicle) {
                return (
                  <>
                    <ReportCard
                      key={el.id}
                      type={el.asset.vehicle.type}
                      keyName={el.asset.vehicle.plate}
                      id={el.id}
                      dashboard={true}
                      newCard={newData(el.created_at)}
                    />
                  </>
                );
              } else if (el.asset?.electronic) {
                return (
                  <>
                    <ReportCard
                      key={el.id}
                      type={el.asset.electronic.type}
                      keyName={el.asset.electronic.brand}
                      id={el.id}
                      dashboard={true}
                      newCard={newData(el.created_at)}
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
                    <ClientCard
                      key={el.id}
                      name={el.personalUser?.name}
                      lastname={el.personalUser?.lastName}
                      keyName={el.personalUser?.dni}
                      id={el.id}
                      dashboard={true}
                      newCard={newData(el.created_at)}
                    />
                  </>
                );
              } else if (el.legalUser?.cuit) {
                return (
                  <>
                    <ClientCard
                      key={el.id}
                      companyName={el.legalUser?.companyName}
                      keyName={el.legalUser?.cuit}
                      id={el.id}
                      dashboard={true}
                      newCard={newData(el.created_at)}
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
        <DivBtnsBrokerDashboardBox>
          <BtnLinkBrokerDashboardBox
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_INSPECTION}`}
          >
            <BsShieldCheck size={30} />
            <h4>Inspeccionar</h4>
          </BtnLinkBrokerDashboardBox>
          <BtnLinkBrokerDashboardBox
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_SINISTER}`}
          >
            <TbReportAnalytics size={30} />
            <h4>Denunciar</h4>
          </BtnLinkBrokerDashboardBox>
        </DivBtnsBrokerDashboardBox>
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
