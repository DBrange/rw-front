import { AppStore } from "@/redux";
import { modalEditMyProfile, modalEditPassword } from "@/services/sharing-information.service";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaGenderless } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdDateRange, MdOutlineEmail } from "react-icons/md";
import { TiBusinessCard } from "react-icons/ti";
import { useSelector } from "react-redux";
import {
  BtonChangePassword,
  DivInformationDetail,
  DivInformationMyProfile,
  MyProfileEditInformaction,
  SectionMyProfile,
  TitleName
} from "./MiProfile.styled";
import { ModalUpdate, ModalUpdatePassword } from "../..";

function MiProfile() {
  const user = useSelector((store: AppStore) => store.user.user);

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalPasswordActive, setModalPasswordActive] = useState<boolean>(false);
  const [label, setLabel] = useState<"address" | "phoneNumber" | undefined>(
    undefined
  );

  useEffect(() => {
    modalEditMyProfile.getSubject.subscribe((bol) => setModalActive(bol));
    modalEditPassword.getSubject.subscribe((bol) =>
      setModalPasswordActive(bol)
    );
  }, []);
  
  useEffect(() => {

  }, [user]);

  const updateData = (value: "address" | "phoneNumber") => {
    modalEditMyProfile.setSubject(true);
    setLabel(value);
  };
  
  const modalUpdatePassword = () => {
    modalEditPassword.setSubject(true);
    
  }

  return (
    <SectionMyProfile>
      <ModalUpdatePassword modalActive={modalPasswordActive} />
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
          <p>{user?.email}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <FaGenderless size={30} />
          {/* <h4>Genero</h4> */}
          <p>{user?.personalUser?.gender}</p>
        </DivInformationDetail>
        <DivInformationDetail>
          <MdDateRange size={30} />
          <p>{user?.personalUser?.birthDate}</p>
        </DivInformationDetail>
        {user?.personalUser?.dni ? (
          <DivInformationDetail>
            <TiBusinessCard size={30} />
            <p>{user?.personalUser?.dni}</p>
          </DivInformationDetail>
        ) : (
          <>
            <DivInformationDetail>
              <TiBusinessCard size={30} />
              <p>{user?.legalUser?.cuit}</p>
            </DivInformationDetail>
          </>
        )}
        <DivInformationDetail>
          <FaPhone size={30} />
          <p>{user?.phoneNumber}</p>
          <MyProfileEditInformaction onClick={() => updateData("phoneNumber")}>
            Editar
          </MyProfileEditInformaction>
        </DivInformationDetail>
        <DivInformationDetail>
          <CiLocationOn size={30} />
          <p>{user?.address}</p>
          <MyProfileEditInformaction onClick={() => updateData("address")}>
            Editar
          </MyProfileEditInformaction>
        </DivInformationDetail>
        <DivInformationDetail>
          <BtonChangePassword onClick={modalUpdatePassword}>Cambiar contraseña</BtonChangePassword>
        </DivInformationDetail>
      </DivInformationMyProfile>
    </SectionMyProfile>
  );
}
export default MiProfile;
