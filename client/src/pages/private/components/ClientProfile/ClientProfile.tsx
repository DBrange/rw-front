import {
  AllClientSinisters,
  ClientDetailInBroker,
  InspectionCard,
  ReportCard
} from "../..";
import {
  DivImageMyProfile,
  DivInformationDetail,
  DivInformationMyProfile,
  H2NameLastname,
  ImgMyProfile,
  SectionMyProfile
} from "../MiProfile/MiProfile.styled";

interface Props {
  data: ClientDetailInBroker | undefined;
}

function ClientProfile({ data }: Props) {
  return (
    <SectionMyProfile>
      <div>
        <DivImageMyProfile>
          <ImgMyProfile
            src="https://i.pinimg.com/280x280_RS/42/03/a5/4203a57a78f6f1b1cc8ce5750f614656.jpg"
            alt=""
          />
        </DivImageMyProfile>
        <div>
          {data?.legalUser?.companyName ? (
            <H2NameLastname>{`${data?.legalUser?.companyName}`}</H2NameLastname>
          ) : (
            <H2NameLastname>{`${data?.personalUser?.name} ${data?.personalUser?.lastName}`}</H2NameLastname>
          )}
        </div>
      </div>
      <DivInformationMyProfile>
        <DivInformationDetail>
          <h4>Email</h4>
          <p>{data?.email}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Email alternativo</h4>
          <p>{data?.altEmail}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Genero</h4>
          <p>{data?.personalUser?.gender}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Fecha de nacimiento</h4>
          <p>{data?.personalUser?.birthDate}</p>
        </DivInformationDetail>
        {data?.personalUser?.dni ? (
          <DivInformationDetail>
            <h4>DNI</h4>
            <p>{data?.personalUser?.dni}</p>
          </DivInformationDetail>
        ) : (
          <>
            <DivInformationDetail>
              <h4>Nombre de compañia</h4>
              <p>{data?.legalUser?.companyName}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>CUIT</h4>
              <p>{data?.legalUser?.cuit}</p>
            </DivInformationDetail>
          </>
        )}
        <DivInformationDetail>
          <h4>Numero telefonico</h4>
          <p>{data?.phoneNumber}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Residencia</h4>
          <p>{data?.address}</p>
        </DivInformationDetail>
      </DivInformationMyProfile>
      <h2>Seguros</h2>
      {data &&
        data?.assets?.map((el) => {
          if (el?.vehicle) {
            return (
              <InspectionCard
                key={el.id}
                type={el.vehicle?.type}
                keyName={el.vehicle?.plate}
                id={el.id}
              />
            );
          } else if (el?.electronic) {
            return (
              <InspectionCard
                key={el.id}
                type={el.electronic?.type}
                keyName={el.electronic?.brand}
                id={el.id}
              />
            );
          } else {
            return [];
          }
        })}
      <h2>Siniestros</h2>
      {data?.sinisters &&
        data?.sinisters?.map((el) => {
          if (el?.asset.vehicle) {
            return (
              <ReportCard
                key={el.id}
                type={el.asset.vehicle.type}
                keyName={el.asset.vehicle.plate}
                id={el.id}
                dashboard={true}
                />
                );
              } else if (el?.asset.electronic) {
                return (
                  <ReportCard
                  key={el.id}
                  type={el.asset.electronic.type}
                  keyName={el.asset.electronic.brand}
                  id={el.id}
                  dashboard={true}
              />
            );
          } else {
            return [];
          }
        })}
    </SectionMyProfile>
  );
}
export default ClientProfile;
