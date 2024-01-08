import ModalImage from "@/components/ModalImage/ModalImage";
import { AppStore } from "@/redux";
import { modalImage } from "@/services/sharing-information.service";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AssetDetail } from "../..";
import { PrivateRoutes } from "../../../../models/types/routes";
import {
  DivInformationDetail,
  DivInformationDetailImgsBox,
  DivInformationMyProfile,
  ImageDetail,
} from "../MiProfile/MiProfile.styled";
import {
  BtnInspectionDetail,
  DivHeaderInspectionDetail,
  H2InspectionDetail,
  SectionHeaderInspectionDetail,
} from "./InspectionDetail.styled";

function InspectionDetail({
  values,
  assetId,
  clientId,
}: {
  values: AssetDetail | undefined;
  assetId: string | undefined;
  clientId: string | undefined;
}) {
  const userBroker = useSelector(
    (store: AppStore) => store.user.user?.userBroker
  );

  const [modalActive, setModalActive] = useState<boolean>(false);

  useEffect(() => {
    modalImage.getSubject.subscribe((bol) => setModalActive(bol));
  }, []);

  const [imageIndex, setImageIndex] = useState<number>(0);

  const open = (i: number) => {
    setImageIndex(i);
    modalImage.setSubject(true);
  };

  const dataVehicleHTML = () => {
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
          gncId,
        },
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
          {userBroker ? (
            <Link
              to={
                userBroker
                  ? `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/${clientId}/${assetId}/vehicle`
                  : `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/${clientId}/${assetId}/vehicle`
              }
            >
              <BtnInspectionDetail>Denunciar</BtnInspectionDetail>
            </Link>
          ) : (
            <></>
          )}

          <DivInformationMyProfile>
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
                  <p>{gncId.oblea}</p>
                </DivInformationDetail>
                <DivInformationDetail>
                  <h4>Fecha de vencimiento</h4>
                  <p>
                    {gncId.expireDate
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("-")}
                  </p>
                </DivInformationDetail>
              </>
            )}
          </DivInformationMyProfile>
        </>
      );
    }
  };

  const dataElectronicHTML = () => {
    if (values?.electronic) {
      const {
        electronic: { brand, model, type, smartphone },
      } = values;

      return (
        <>
          <DivHeaderInspectionDetail>
            <h2>{type}</h2>
            <h2>{`${brand} ${model}`}</h2>
            {/* <h2></h2> */}
            {/* <h2>{plate}</h2> */}
          </DivHeaderInspectionDetail>
          {userBroker ? (
            <Link
              to={
                userBroker
                  ? `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/${clientId}/${assetId}/electronic`
                  : `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CREATE_SINISTER_IN_INSURED}/${clientId}/${assetId}/electronic`
              }
            >
              <BtnInspectionDetail>
                <p>Denunciar</p>
              </BtnInspectionDetail>
            </Link>
          ) : (
            <></>
          )}

          <DivInformationMyProfile>
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
          </DivInformationMyProfile>
        </>
      );
    }
  };

  const dataClientHTML = () => {
    if (values?.client) {
      const {
        client: {
          phoneNumber,
          email,
          altEmail,
          address,
          personalUser,
          legalUser,
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
    if (values?.vehicle) {
      return dataVehicleHTML();
    } else if (values?.electronic) {
      return dataElectronicHTML();
    }
  };

  return (
    <SectionHeaderInspectionDetail>
      {dataInHTML()}
      {/* <a href={values?.pdf}>Imprimir</a> */}
    </SectionHeaderInspectionDetail>
  );
}
export default InspectionDetail;
