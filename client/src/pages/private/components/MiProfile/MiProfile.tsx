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
          <H2NameLastname>Didier Brange</H2NameLastname>
        </div>
      </div>
      <DivInformationMyProfile>
        <DivInformationDetail>
          <h4>Email</h4>
          <p>didierbrange@gmail.com</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Email alternativo</h4>
          <p>brangedidier@hotmail.com</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Genero</h4>
          <p>HOMBRE</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Fecha de nacimiento</h4>
          <p>31/03/1998</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>DNI</h4>
          <p>41027406</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Numero telefonico</h4>
          <p>1149162968</p>
          <MyProfileEditInformaction>Editar</MyProfileEditInformaction>
        </DivInformationDetail>
        <DivInformationDetail>
          <h4>Residencia</h4>
          <p>Aristobulo del Valle 865</p>
          <MyProfileEditInformaction>Editar</MyProfileEditInformaction>
        </DivInformationDetail>
      </DivInformationMyProfile>
    </SectionMyProfile>
  );
}
export default MiProfile;
