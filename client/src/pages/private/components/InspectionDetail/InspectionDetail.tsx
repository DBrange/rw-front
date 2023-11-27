import { GncValues, VehicleValues } from "@/models";
import {
  DivInformationMyProfile,
  DivInformationDetail,
} from "../MiProfile/MiProfile.styled";
import { DivHeaderInspectionDetail } from "./InspectionDetail.styled";
import { Link, useParams } from "react-router-dom";
import { PrivateRoutes } from "../../../../models/types/routes";
import { AssetDetail } from "../..";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";

function InspectionDetail({
  values,
  id,
}: {
  values: AssetDetail | undefined;
  id: string | undefined;
  }) {
    const broker = useSelector((store: AppStore) => store.user.user.broker);

  const dataInHTML = () => {
    if (values?.vehicle) {
      const {
        vehicle: {
          plate,
          year,
          brand,
          model,
          color,
          tireBrand,
          tireSize,
          tireWear,
          damage,
          damageLocation,
          images,
          okm,
          explodedAirbag,
          noSpareTire,
          gnc,
          fuel,
          type,
          gncId
        },
      } = values;

      return (
        <>
          <DivHeaderInspectionDetail>
            <h2>{type}</h2>
            <h2>{`${brand} ${model}`}</h2>
            {/* <h2></h2> */}
            <h2>{plate}</h2>
          </DivHeaderInspectionDetail>
          <Link
            to={
              broker
                ? `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/${id}`
                : `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/${id}`
            }
          >
            Para denunciar
          </Link>
          <DivInformationMyProfile>
            <DivInformationDetail>
              <h4>Año</h4>
              <p>{year}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Color</h4>
              <p>{color}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Daño</h4>
              <p>{damage ? "Si" : "No"}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Marca de neumaticos</h4>
              <p>{tireBrand}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Tamaño de neumaticos</h4>
              <p>{tireSize}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Desgaste de neumaticos</h4>
              <p>{tireWear}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Lugar dañado</h4>
              <p>{damageLocation}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Fotos del vehiculo</h4>
              {images.map((el, i) => (
                <div key={el + i}>
                  <img src={el} />
                </div>
              ))}
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Okm</h4>
              <p>{okm ? "Si" : "No"}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Airbag explotado</h4>
              <p>{explodedAirbag ? "Si" : "No"}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Posee rueda de auxilio</h4>
              <p>{noSpareTire ? "No" : "Si"}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Combustible</h4>
              <p>{fuel}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>GNC</h4>
              <p>{gnc ? "Si" : "No"}</p>
            </DivInformationDetail>
            {gnc && (
              <>
                <DivInformationDetail>
                  <h4>OBLEA</h4>
                  <p>{gncId.oblea}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Fecha de vencimiento</h4>
                  <p>{gncId.expireDate}</p>
                </DivInformationDetail>
              </>
            )}
          </DivInformationMyProfile>
        </>
      );
    } else if (values?.electronics) {
      const {
        electronics: { brand, model, type,smartphones:{imei,phoneService,phoneNumber} },
      } = values;

      return (
        <>
          <DivHeaderInspectionDetail>
            <h2>{type}</h2>
            <h2>{`${brand} ${model}`}</h2>
            {/* <h2></h2> */}
            {/* <h2>{plate}</h2> */}
          </DivHeaderInspectionDetail>
          <Link
            to={
              broker
                ? `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/${id}`
                : `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/${id}`
            }
          >
            Para denunciar
          </Link>
          <DivInformationMyProfile>
            {" "}
            {type === "CELULAR" && (
              <>
                <DivInformationDetail>
                  <h4>IMEI</h4>
                  <p>{imei}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Servicio</h4>
                  <p>{phoneService}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Numero telefonico</h4>
                  <p>{phoneNumber}</p>
                </DivInformationDetail>
              </>
            )}
          </DivInformationMyProfile>
        </>
      );
    }
  };

  // const {
  //   plate,
  //   year,
  //   brand,
  //   model,
  //   color,
  //   tireBrand,
  //   tireSize,
  //   tireWear,
  //   damage,
  //   damageLocation,
  //   images,
  //   okm,
  //   explodedAirbag,
  //   noSpareTire,
  //   gnc,
  //   fuel,
  //   type,
  //   expireDate,
  //   oblea,
  // } = values;

  return <section>{dataInHTML()}</section>;
}
export default InspectionDetail;
