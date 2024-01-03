import { PrivateRoutes } from "@/models/types/routes";
import {
  AllBrokerClients,
  AllClientAssets,
  AllClientSinisters,
  ClientCard,
  InspectionCard,
  ReportCard,
} from "@/pages";
import { date } from "@/utilities/date.utility";
import { BsShieldCheck } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";
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

function BrokerDashboardBox() {
  const {
    dataToDashboard,
    newData,
    buttonActive,
    changeBtnActive,
    setButtonActive,
  } = useBrokerUserContext();

  const assetsArr = (assetsLastWeek: AllClientAssets[]) => {
    const assets = [...assetsLastWeek]
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
                date={el.created_at}
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
                date={el.created_at}
              />
            </>
          );
        } else {
          return [];
        }
      });

    return !assets.length ? (
      <h5>No se han encontrado nuevas inspecciones</h5>
    ) : (
      assets
    );
  };

  const sinistersArr = (sinisterLastWeek: AllClientSinisters[]) => {
    const sinisters = [...sinisterLastWeek]
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
                date={el.created_at}
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
                date={el.created_at}
              />
            </>
          );
        } else {
          return [];
        }
      });
    return !sinisters.length ? (
      <h5>No se han encontrado nuevos siniestros</h5>
    ) : (
      sinisters
    );
  };

  const clientsArr = (clientsLastWeek: AllBrokerClients[]) => {
    const clients = [...clientsLastWeek]
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
      });

    return !clients.length ? (
      <h5>No se han encontrado nuevos clientes</h5>
    ) : (
      clients
    );
  };

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
        {dataToDashboard && assetsArr(dataToDashboard?.assetsLastWeek)}
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
        {dataToDashboard && sinistersArr(dataToDashboard?.sinistersLastWeek)}
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
        {dataToDashboard && clientsArr(dataToDashboard.clientsLastWeek)}
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
