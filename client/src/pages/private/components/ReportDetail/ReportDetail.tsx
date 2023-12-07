import { Link } from "react-router-dom";
import { Crash, Fire, Injuredd, SinisterDetail } from "../..";
import { PrivateRoutes } from "../../../../models/types/routes";
import { DivHeaderInspectionDetail } from "../InspectionDetail/InspectionDetail.styled";
import {
  DivInformationDetail,
  DivInformationMyProfile,
} from "../MiProfile/MiProfile.styled";

function ReportnDetail({
  values,
  id,
}: {
  values: SinisterDetail | undefined;
  id: string | undefined;
}) {
  // const { data } = useSWR(detailAssetUrl(insuredId), inspectedDetail);

  // const vehicle

  const thirdInjuredHTML = (injuredd: Injuredd[]) =>
    injuredd.length && (
      <>
        <h2>Terceros heridos</h2>
        {injuredd.map((el) => (
          <>
            <DivInformationDetail>
              <h4>Cantidad</h4>
              <p>{el.amount}</p>
            </DivInformationDetail>
            {el.injuredsInfo.map((injured, i) => (
              <>
                <h2>Herido n° {i + 1}</h2>
                <DivInformationDetail>
                  <h4>Nombre</h4>
                  <p>{injured?.name}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Apellido</h4>
                  <p>{injured?.lastName}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>DNI</h4>
                  <p>{injured?.dni}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Genero</h4>
                  <p>{injured?.gender}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Email</h4>
                  <p>{injured?.email}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Fecha de nacimiento</h4>
                  <p>{injured?.birthDate}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Numero telefonico</h4>
                  <p>{injured?.phoneNumber}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Heridas</h4>
                  <p>{injured?.injuries}</p>
                </DivInformationDetail>
              </>
            ))}
          </>
        ))}
      </>
    );

  const FireCrashHTML = (injuredd: Injuredd[], crash?: Crash, fire?: Fire) => {
    const type = crash ? crash : fire;
    return (
      <>
        {" "}
        <h2>{"Incendio"}</h2>
        <DivInformationDetail>
          <h4>Ubicacion</h4>
          <p>{type?.location}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Horario</h4>
          <p>{type?.time}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Fecha</h4>
          <p>{type?.date}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Detalles del accidente</h4>
          <p>{type?.details}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Herido</h4>
          <p>{type?.injured ? "Si" : "No"}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Heridas</h4>
          <p>{type?.injuries}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Heridas</h4>
          <p>{type?.ambulance ? "Si" : "No"}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Heridas</h4>
          <p>{type?.ambulanceTo}</p>
        </DivInformationDetail>
        {/* <DivInformationDetail>
                  <h4>Detalles del accidente</h4>
                  <p>{type?.thirdInjured}</p>
                </DivInformationDetail> */}
        {type?.thirdInjured && thirdInjuredHTML(injuredd)}
      </>
    );
  };

  const dataInHTML = () => {
    if (values?.asset?.vehicle) {
      const {
        asset: {
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
        },
        sinisterType: { theft, fire, crash },
        injuredd,
        thirdPartyVehicle,
        date,
        location,
        time,
      } = values;

      return (
        <>
          <DivHeaderInspectionDetail>
            <h2>{type}</h2>
            <h2>{`${brand} ${model}`}</h2>
            {/* <h2></h2> */}
            <h2>{plate}</h2>
          </DivHeaderInspectionDetail>
          {/* <Link
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/${id}`}
          >
            Para denunciar
          </Link> */}
          <DivInformationMyProfile>
            <h2>Siniestro</h2>
            <DivInformationDetail>
              <h4>Fecha de siniestro</h4>
              <p>{date}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Ubicacion de siniestro</h4>
              <p>{location}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Horario de siniestro</h4>
              <p>{time}</p>
            </DivInformationDetail>
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
                <div key={el+i}>
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
            {theft && (
              <>
                <h2>{"Robo"}</h2>
                <DivInformationDetail>
                  <h4>Ubicacion</h4>
                  <p>{theft?.location}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Fecha</h4>
                  <p>{theft?.date}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Horario</h4>
                  <p>{theft?.time}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Foto de denuncia</h4>
                  {theft?.reportPhoto.map((el, i) => (
                    <div key={el+i}>
                      <img src={el} />
                    </div>
                  ))}
                </DivInformationDetail>
                {/* <DivInformationDetail>
                  <h4>Robo de neumaticos</h4>
                  <p>{theft?.isTire ? "Si" : "No"}</p>
                </DivInformationDetail> */}
                {theft?.isTire && (
                  <>
                    <h2>Robo de neumaticos</h2>
                    <DivInformationDetail>
                      <h4>Cantidad</h4>
                      <p>{theft?.theftTire?.tireAmount}</p>
                    </DivInformationDetail>
                    <DivInformationDetail>
                      <h4>Tamaño de neumatico</h4>
                      <p>{theft?.theftTire?.tireWear}</p>
                    </DivInformationDetail>
                    <DivInformationDetail>
                      <h4>Fotos del neumatico</h4>
                      
                        {theft?.theftTire?.tirePhoto.map((el,i) => (
                          <div key={el+i}>
                            <img src={el} />
                          </div>
                        ))}
                      
                    </DivInformationDetail>
                    <DivInformationDetail>
                      <h4>Ubicacion de reemplazo</h4>
                      <p>{theft?.theftTire?.replacementLocation}</p>
                    </DivInformationDetail>
                  </>
                )}
              </>
            )}
            {fire && FireCrashHTML(injuredd, undefined, fire)}
            {crash && (
              <>
                {FireCrashHTML(injuredd, undefined, crash)}{" "}
                {thirdPartyVehicle.length && (
                  <>
                    {thirdPartyVehicle.map((el, i) => (
                      <>
                        <h2>Vehiculo n° {i + 1}</h2>
                        <DivInformationDetail>
                          <h4>Nombre del propietario</h4>
                          <p>{el.ownerName}</p>
                        </DivInformationDetail>
                        <DivInformationDetail>
                          <h4>Apellido del propietario</h4>
                          <p>{el.ownerLastName}</p>
                        </DivInformationDetail>
                        <DivInformationDetail>
                          <h4>DNI del propietario</h4>
                          <p>{el.ownerDni}</p>
                        </DivInformationDetail>
                        <DivInformationDetail>
                          <h4>Marca</h4>
                          <p>{el.brand}</p>
                        </DivInformationDetail>
                        <DivInformationDetail>
                          <h4>Modelo</h4>
                          <p>{el.model}</p>
                        </DivInformationDetail>
                        <DivInformationDetail>
                          <h4>Año</h4>
                          <p>{el.year}</p>
                        </DivInformationDetail>
                        <DivInformationDetail>
                          <h4>Patente</h4>
                          <p>{el.plate}</p>
                        </DivInformationDetail>
                        <DivInformationDetail>
                          <h4>Compañia de seguros</h4>
                          <p>{el.insuranceCompany}</p>
                        </DivInformationDetail>
                        <DivInformationDetail>
                          <h4>Poliza de seguros</h4>
                          <p>{el.insurancePolicy}</p>
                        </DivInformationDetail>
                        {el.thirdPartyDriver.name.length && (
                          <DivInformationDetail>
                            <h4>Nombre del conductor</h4>
                            <p>{el.thirdPartyDriver.name}</p>
                          </DivInformationDetail>
                        )}
                        {el.thirdPartyDriver.lastName.length && (
                          <DivInformationDetail>
                            <h4>Apellido del conductor</h4>
                            <p>{el.thirdPartyDriver.lastName}</p>
                          </DivInformationDetail>
                        )}
                        {el.thirdPartyDriver.dni.length && (
                          <DivInformationDetail>
                            <h4>DNI del conductor</h4>
                            <p>{el.thirdPartyDriver.dni}</p>
                          </DivInformationDetail>
                        )}
                        <DivInformationDetail>
                          <h4>Email</h4>
                          <p>{el.thirdPartyDriver.email}</p>
                        </DivInformationDetail>
                        <DivInformationDetail>
                          <h4>Direccion</h4>
                          <p>{el.thirdPartyDriver.address}</p>
                        </DivInformationDetail>
                        <DivInformationDetail>
                          <h4>Numero telefonico</h4>
                          <p>{el.thirdPartyDriver.phoneNumber}</p>
                        </DivInformationDetail>
                        <DivInformationDetail>
                          <h4>Fotos de licencia</h4>
                          
                            {el.thirdPartyDriver.licensePhoto.map((el) => (
                              <div key={el+i}>
                                <img src={el} />
                              </div>
                            ))}
                          
                        </DivInformationDetail>
                      </>
                    ))}
                  </>
                )}
              </>
            )}
          </DivInformationMyProfile>
        </>
      );
    } else if (values?.asset?.electronic) {
      const {
        asset: {
          electronic: {
            brand,
            model,
            type,
            smartphones: { imei, phoneService, phoneNumber },
          },
        },
        sinisterType: { theft },
      } = values;

      return (
        <>
          <DivHeaderInspectionDetail>
            <h2>{type}</h2>
            <h2>{`${brand} ${model}`}</h2>
            {/* <h2></h2> */}
            {/* <h2>{plate}</h2> */}
          </DivHeaderInspectionDetail>
          {/* <Link
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/${id}`}
          >
            Para denunciar
          </Link> */}
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
            {theft && (
              <>
                <h2>{"Robo"}</h2>
                <DivInformationDetail>
                  <h4>Ubicacion</h4>
                  <p>{theft?.location}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Fecha</h4>
                  <p>{theft?.date}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Horario</h4>
                  <p>{theft?.time}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Foto de denuncia</h4>
                  {theft?.reportPhoto.map((el,i) => (
                    <div key={el+i}>
                      <img src={el} />
                    </div>
                  ))}
                </DivInformationDetail>
              </>
            )}
          </DivInformationMyProfile>
        </>
      );
    }
  };

  return <section>{dataInHTML()}</section>;
}
export default ReportnDetail;
