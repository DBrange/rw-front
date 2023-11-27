import { User } from "@/models/interfaces/userInfo/userInfo.interface";
import {
  AllClientSinisters,
  ClientDetailInBroker,
  InspectionCard,
  LegalUserDetail,
  ReportCard,
  SinisterDetail,
  UsersDetail,
} from "../..";
import {
  SectionMyProfile,
  DivImageMyProfile,
  ImgMyProfile,
  H2NameLastname,
  DivInformationMyProfile,
  DivInformationDetail,
  MyProfileEditInformaction,
} from "../MiProfile/MiProfile.styled";

interface Props {
  data: ClientDetailInBroker | undefined;
  sinister: AllClientSinisters[] | [] | undefined;
}

function ClientProfile({ data, sinister }: Props) {
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
          {data?.companyName ? (
            <H2NameLastname>{`${data?.companyName}`}</H2NameLastname>
          ) : (
            <H2NameLastname>{`${data?.name} ${data?.lastName}`}</H2NameLastname>
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
          <p>{data?.gender}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Fecha de nacimiento</h4>
          <p>{data?.birthDate}</p>
        </DivInformationDetail>
        {data?.dni ? (
          <DivInformationDetail>
            <h4>DNI</h4>
            <p>{data?.dni}</p>
          </DivInformationDetail>
        ) : (
          <>
            <DivInformationDetail>
              <h4>Nombre de compañia</h4>
              <p>{data?.companyName}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>CUIT</h4>
              <p>{data?.cuit}</p>
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
      {data && data?.asset.map((el) => {
        if (el?.vehicle) {
          return (
            <InspectionCard
              key={el.id}
              type={el.vehicle?.type}
              keyName={el.vehicle?.plate}
              id={el.id}
            />
          );
        } else if (el?.electronics) {
          return (
            <InspectionCard
              key={el.id}
              type={el.electronics?.type}
              keyName={el.electronics?.brand}
              id={el.id}
            />
          );
        } else {
          return [];
        }
      })}
      <h2>Siniestros</h2>
      {sinister && sinister?.map((el) => {
        if (el?.asset?.vehicle) {
          return (
            <ReportCard
              key={el.id}
              type={el.asset.vehicle.type}
              keyName={el.asset.vehicle.plate}
              id={el.id}
            />
          );
        } else if (el?.asset?.electronics) {
          return (
            <ReportCard
              key={el.id}
              type={el.asset.electronics.type}
              keyName={el.asset.electronics.brand}
              id={el.id}
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
