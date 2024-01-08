import ModalImage from "@/components/ModalImage/ModalImage";
import { modalImage } from "@/services/sharing-information.service";
import { useEffect, useState } from "react";
import { Crash, Fire, Injuredd, SinisterDetail } from "../..";
import {
  DivHeaderInspectionDetail,
  H2InspectionDetail,
  SectionHeaderInspectionDetail,
} from "../InspectionDetail/InspectionDetail.styled";
import {
  DivInformationDetail,
  DivInformationDetailImgsBox,
  DivInformationMyProfile,
  ImageDetail,
} from "../MiProfile/MiProfile.styled";

function ReportnDetail({
  values,
}: {
  values: SinisterDetail | undefined;
  id?: string | undefined;
}) {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const open = (i: number) => {
    setImageIndex(i);
    modalImage.setSubject(true);
  };

  const [modalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => {
    modalImage.getSubject.subscribe((bol) => setModalActive(bol));
  }, []);

  const thirdInjuredHTML = (injuredd: Injuredd[]) =>
    injuredd.length && (
      <>
        <H2InspectionDetail>Terceros heridos</H2InspectionDetail>
        {injuredd.map((el) => (
          <>
            <DivInformationDetail>
              <h4>Cantidad</h4>
              <p>{el.amount}</p>
            </DivInformationDetail>
            {el.injuredsInfo.map((injured, i) => (
              <>
                <H2InspectionDetail>Herido n° {i + 1}</H2InspectionDetail>
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
                  <p>
                    {injured?.birthDate
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("-")}
                  </p>
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
        <H2InspectionDetail>Incendio</H2InspectionDetail>
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

  const dataClientHTML = () => {
    if (values?.asset?.client) {
      const {
        asset: {
          client: {
            phoneNumber,
            email,
            altEmail,
            address,
            personalUser,
            legalUser,
          },
        },
      } = values;

      return (
        <>
          <DivInformationMyProfile>
            <H2InspectionDetail>Persona</H2InspectionDetail>
            <DivInformationDetail>
              <h4>Numero telefonico</h4>
              <p>{phoneNumber}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Email</h4>
              <p>{email}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Email alternativo</h4>
              <p>{altEmail}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Domicilio</h4>
              <p>{address}</p>
            </DivInformationDetail>
            {personalUser && (
              <>
                <DivInformationDetail>
                  <h4>Nombre</h4>
                  <p>{personalUser?.name}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Apellido</h4>
                  <p>{personalUser?.lastName}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Fecha de nacimiento</h4>
                  <p>
                    {personalUser?.birthDate
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("-")}
                  </p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Genero</h4>
                  <p>{personalUser?.gender}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>DNI</h4>
                  <p>{personalUser?.dni}</p>
                </DivInformationDetail>
              </>
            )}
            {legalUser && (
              <>
                {" "}
                <DivInformationDetail>
                  <h4>Compañia</h4>
                  <p>{legalUser?.companyName}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>CUIT</h4>
                  <p>{legalUser?.cuit}</p>
                </DivInformationDetail>
              </>
            )}
          </DivInformationMyProfile>
        </>
      );
    }
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
            gncId,
          },
        },
        sinisterType: { theft, fire, crash, damage: damageSinister },
        injuredd,
        thirdPartyVehicle,
        date,
        location,
        time,
      } = values;

      return (
        <>
          <ModalImage
            modalActive={modalActive}
            images={images}
            imageIndex={imageIndex}
          />
          <DivHeaderInspectionDetail>
            <h2>{type}</h2>
            <h2>{`${brand} ${model}`}</h2>
            {/* <h2></h2> */}
            <h2>{plate}</h2>
          </DivHeaderInspectionDetail>
          <DivInformationMyProfile>
            <H2InspectionDetail>Siniestro</H2InspectionDetail>
            <DivInformationDetail>
              <h4>Fecha de siniestro</h4>
              <p>{date.slice(0, 10).split("-").reverse().join("/")}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Ubicacion de siniestro</h4>
              <p>{location}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Horario de siniestro</h4>
              <p>{time}</p>
            </DivInformationDetail>
            {dataClientHTML()}
            <H2InspectionDetail>Vehiculo</H2InspectionDetail>
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
              <DivInformationDetailImgsBox>
                {images.map((el: string, i: number) => (
                  <div key={el + i}>
                    <ImageDetail onClick={() => open(i)} src={el} />
                  </div>
                ))}
              </DivInformationDetailImgsBox>
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
                  <p>{gncId?.oblea}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Fecha de vencimiento</h4>
                  <p>
                    {gncId?.expireDate
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("-")}
                  </p>
                </DivInformationDetail>
              </>
            )}
            {theft && (
              <>
                <ModalImage
                  modalActive={modalActive}
                  images={theft?.reportPhoto}
                  imageIndex={imageIndex}
                />
                <H2InspectionDetail>Robo</H2InspectionDetail>
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
                  <DivInformationDetailImgsBox>
                    {theft?.reportPhoto.map((el: string, i: number) => (
                      <div key={el + i}>
                        <ImageDetail onClick={() => open(i)} src={el} />
                      </div>
                    ))}
                  </DivInformationDetailImgsBox>
                </DivInformationDetail>
                {theft?.isTire && (
                  <>
                    <ModalImage
                      modalActive={modalActive}
                      images={theft?.theftTire?.tirePhoto as string[]}
                      imageIndex={imageIndex}
                    />
                    <H2InspectionDetail>Robo de neumaticos</H2InspectionDetail>
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
                      <DivInformationDetailImgsBox>
                        {theft?.theftTire?.tirePhoto.map(
                          (el: string, i: number) => (
                            <div key={el + i}>
                              <ImageDetail onClick={() => open(i)} src={el} />
                            </div>
                          )
                        )}
                      </DivInformationDetailImgsBox>
                    </DivInformationDetail>
                    <DivInformationDetail>
                      <h4>Ubicacion de reemplazo</h4>
                      <p>{theft?.theftTire?.replacementLocation}</p>
                    </DivInformationDetail>
                  </>
                )}
              </>
            )}
            {damageSinister && (
              <>
                <ModalImage
                  modalActive={modalActive}
                  images={damageSinister?.reportPhoto}
                  imageIndex={imageIndex}
                />
                <H2InspectionDetail>Daño</H2InspectionDetail>
                <DivInformationDetail>
                  <h4>Ubicacion</h4>
                  <p>{damageSinister?.location}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Fecha</h4>
                  <p>{damageSinister?.date}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Horario</h4>
                  <p>{damageSinister?.time}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Detalle del dano</h4>
                  <p>{damageSinister?.details}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Foto de denuncia</h4>
                  <DivInformationDetailImgsBox>
                    {damageSinister?.reportPhoto.map(
                      (el: string, i: number) => (
                        <div key={el + i}>
                          <ImageDetail onClick={() => open(i)} src={el} />
                        </div>
                      )
                    )}
                  </DivInformationDetailImgsBox>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Monto de reparacion</h4>
                  <p>{damageSinister?.budget}</p>
                </DivInformationDetail>
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
                        <ModalImage
                          modalActive={modalActive}
                          images={el.thirdPartyDriver.licensePhoto}
                          imageIndex={imageIndex}
                        />
                        <H2InspectionDetail>
                          Vehiculo n° {i + 1}
                        </H2InspectionDetail>
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
                          <DivInformationDetailImgsBox>
                            {el.thirdPartyDriver.licensePhoto.map(
                              (el: string, i: number) => (
                                <div key={el + i}>
                                  <ImageDetail
                                    onClick={() => open(i)}
                                    src={el}
                                  />
                                </div>
                              )
                            )}
                          </DivInformationDetailImgsBox>
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
          electronic: { brand, model, type, smartphone },
        },
        sinisterType: { theft, damage: damageSinister },
        date,
        location,
        time,
      } = values;

      return (
        <>
          <DivHeaderInspectionDetail>
            <h2>{type}</h2>
            <h2>{`${brand} ${model}`}</h2>
          </DivHeaderInspectionDetail>

          <DivInformationMyProfile>
            <H2InspectionDetail>Siniestro</H2InspectionDetail>
            <DivInformationDetail>
              <h4>Fecha de siniestro</h4>
              <p>{date.slice(0, 10).split("-").reverse().join("/")}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Ubicacion de siniestro</h4>
              <p>{location}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>Horario de siniestro</h4>
              <p>{time}</p>
            </DivInformationDetail>
            {dataClientHTML()}
            {type === "CELULAR" && (
              <>
                <H2InspectionDetail>Electrodomestico</H2InspectionDetail>
                <DivInformationDetail>
                  <h4>IMEI</h4>
                  <p>{smartphone?.imei}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Servicio</h4>
                  <p>{smartphone?.phoneService}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Numero telefonico</h4>
                  <p>{smartphone?.phoneNumber}</p>
                </DivInformationDetail>
              </>
            )}
            {theft && (
              <>
                <ModalImage
                  modalActive={modalActive}
                  images={theft?.reportPhoto}
                  imageIndex={imageIndex}
                />
                <H2InspectionDetail>Robo</H2InspectionDetail>
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
                  <DivInformationDetailImgsBox>
                    {theft?.reportPhoto.map((el: string, i: number) => (
                      <div key={el + i}>
                        <ImageDetail onClick={() => open(i)} src={el} />
                      </div>
                    ))}
                  </DivInformationDetailImgsBox>
                </DivInformationDetail>
              </>
            )}
            {damageSinister && (
              <>
                <ModalImage
                  modalActive={modalActive}
                  images={damageSinister?.reportPhoto as string[]}
                  imageIndex={imageIndex}
                />
                <H2InspectionDetail>Daño</H2InspectionDetail>
                <DivInformationDetail>
                  <h4>Ubicacion</h4>
                  <p>{damageSinister?.location}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Fecha</h4>
                  <p>{damageSinister?.date}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Horario</h4>
                  <p>{damageSinister?.time}</p>
                </DivInformationDetail>{" "}
                <DivInformationDetail>
                  <h4>Detalle del daño</h4>
                  <p>{damageSinister?.details}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Foto de denuncia</h4>
                  <DivInformationDetailImgsBox>
                    {damageSinister?.reportPhoto.map(
                      (el: string, i: number) => (
                        <div key={el + i}>
                          <ImageDetail onClick={() => open(i)} src={el} />
                        </div>
                      )
                    )}
                  </DivInformationDetailImgsBox>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Monto de reparacion</h4>
                  <p>{damageSinister?.budget}</p>
                </DivInformationDetail>
              </>
            )}
          </DivInformationMyProfile>
        </>
      );
    }
  };

  return (
    <SectionHeaderInspectionDetail>
      {dataInHTML()}
      {/* <a href={values?.pdf}>Imprimir</a> */}
    </SectionHeaderInspectionDetail>
  );
}
export default ReportnDetail;
