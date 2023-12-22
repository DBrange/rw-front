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
  TitleName,
} from "./MiProfile.styled";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { TiBusinessCard } from "react-icons/ti";
import { MdDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaGenderless } from "react-icons/fa";
import { ModalUpdate } from "@/components";
import { useEffect, useState } from "react";
import { modalEditMyProfile } from "@/services/sharing-information.service";

function MiProfile() {
  const user = useSelector((store: AppStore) => store.user.user);
  {
    /* <DivImageMyProfile>
    <ImgMyProfile
      src="https://i.pinimg.com/280x280_RS/42/03/a5/4203a57a78f6f1b1cc8ce5750f614656.jpg"
      alt=""
    />
  </DivImageMyProfile> */
  }
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [label, setLabel] = useState<"address" | "phoneNumber" | undefined>(
    undefined
  );

  useEffect(() => {
    modalEditMyProfile.getSubject.subscribe((bol) => setModalActive(bol));
  }, []);
  
  useEffect(() => {

  }, [user]);

  const updateData = (value: "address" | "phoneNumber") => {
    modalEditMyProfile.setSubject(true);
    setLabel(value);
  };

  return (
    <SectionMyProfile>
      <ModalUpdate modalActive={modalActive} label={label} />
      <TitleName>
        <div>
          {user?.legalUser
            ? `${user?.legalUser?.companyName}`
            : `${user?.personalUser?.name} ${user?.personalUser?.lastName}`}
        </div>
      </TitleName>
      <DivInformationMyProfile>
        {user?.brokerUser && (
          <>
            <DivInformationDetail>
              <h4>Broker</h4>
              <p>
                {user?.brokerUser?.personalUser
                  ? `${user?.brokerUser?.personalUser.name} ${user?.brokerUser?.personalUser.lastName}`
                  : `${user?.brokerUser?.legalUser?.companyName}`}
              </p>
            </DivInformationDetail>
          </>
        )}
        <DivInformationDetail>
          <MdOutlineEmail size={30} />
          {/* <h4>Email</h4> */}
          <p>{user?.email}</p>
        </DivInformationDetail>
        {/* <DivInformationDetail>
          <MdOutlineEmail size={30} />
          <h4>Email alternativo</h4>
          <p>{user?.altEmail}</p>
        </DivInformationDetail> */}
        <DivInformationDetail>
          <FaGenderless size={30} />
          {/* <h4>Genero</h4> */}
          <p>{user?.personalUser?.gender}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <MdDateRange size={30} />
          {/* <h4>Fecha de nacimiento</h4> */}
          <p>{user?.personalUser?.birthDate}</p>
        </DivInformationDetail>
        {user?.personalUser?.dni ? (
          <DivInformationDetail>
            <TiBusinessCard size={30} />
            {/* <h4>DNI</h4> */}
            <p>{user?.personalUser?.dni}</p>
          </DivInformationDetail>
        ) : (
          <>
            <DivInformationDetail>
              <TiBusinessCard size={30} />
              {/* <h4>CUIT</h4> */}
              <p>{user?.legalUser?.cuit}</p>
            </DivInformationDetail>
          </>
        )}
        <DivInformationDetail>
          <FaPhone size={30} />
          {/* <h4>Numero telefonico</h4> */}
          <p>{user?.phoneNumber}</p>
          <MyProfileEditInformaction onClick={() => updateData("phoneNumber")}>
            Editar
          </MyProfileEditInformaction>
        </DivInformationDetail>
        <DivInformationDetail>
          <CiLocationOn size={30} />
          {/* <h4>Residencia</h4> */}
          <p>{user?.address}</p>
          <MyProfileEditInformaction onClick={() => updateData("address")}>
            Editar
          </MyProfileEditInformaction>
        </DivInformationDetail>
      </DivInformationMyProfile>
    </SectionMyProfile>
  );
}
export default MiProfile;
