import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import {
  DivImageMyProfile,
  DivInformationDetail,
  DivInformationMyProfile,
  H2NameLastname,
  ImgMyProfile,
  MyProfileEditInformaction,
  SectionMyProfile,
} from "./MiProfile.styled";

function MiProfile() {
  const user = useSelector((store: AppStore) => store.user.user);
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
          {user?.companyName ? (
            <H2NameLastname>{`${user?.companyName}`}</H2NameLastname>
          ) : (
            <H2NameLastname>{`${user?.name} ${user?.lastName}`}</H2NameLastname>
          )}
        </div>
      </div>
      <DivInformationMyProfile>
        <DivInformationDetail>
          <h4>Email</h4>
          <p>{user.email}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Email alternativo</h4>
          <p>{user.altEmail}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Genero</h4>
          <p>{user.gender}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Fecha de nacimiento</h4>
          <p>{user.birthDate}</p>
        </DivInformationDetail>
        {user.dni ? (
          <DivInformationDetail>
            <h4>DNI</h4>
            <p>{user.dni}</p>
          </DivInformationDetail>
        ) : (
          <>
            <DivInformationDetail>
              <h4>Nombre de compañia</h4>
              <p>{user.companyName}</p>
            </DivInformationDetail>
            <DivInformationDetail>
              <h4>CUIT</h4>
              <p>{user.cuit}</p>
            </DivInformationDetail>
          </>
        )}
        <DivInformationDetail>
          <h4>Numero telefonico</h4>
          <p>{user.phoneNumber}</p>
          <MyProfileEditInformaction>Editar</MyProfileEditInformaction>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Residencia</h4>
          <p>{user.address}</p>
          <MyProfileEditInformaction>Editar</MyProfileEditInformaction>
        </DivInformationDetail>
      </DivInformationMyProfile>
    </SectionMyProfile>
  );
}
export default MiProfile;
