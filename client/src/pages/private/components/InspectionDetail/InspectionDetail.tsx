import { GncValues, VehicleValues } from "@/models";
import {
  DivInformationMyProfile,
  DivInformationDetail,
} from "../MiProfile/MiProfile.styled";
import { DivHeaderInspectionDetail } from "./InspectionDetail.styled";
import { Link, useParams } from "react-router-dom";
import { PrivateRoutes } from '../../../../models/types/routes';

function InspectionDetail(values: VehicleValues & GncValues) {
  
  const {
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
    expireDate,
    oblea,
  } = values

  const { insuredId } = useParams();

  return (
    <section>
      <DivHeaderInspectionDetail>
        <h2>{type}</h2>
        <h2>{`${brand} ${model}`}</h2>
        {/* <h2></h2> */}
        <h2>{plate}</h2>
      </DivHeaderInspectionDetail>
      <DivInformationMyProfile>
        <Link to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/${insuredId}`}>Para denunciar</Link>
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
          {images.map((el) => (
            <div>
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
              <p>{oblea}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Fecha de vencimiento</h4>
              <p>{expireDate}</p>
            </DivInformationDetail>
          </>
        )}
      </DivInformationMyProfile>
    </section>
  );
}
export default InspectionDetail;
