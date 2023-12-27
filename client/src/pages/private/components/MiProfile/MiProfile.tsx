import { AppStore } from "@/redux";
import {
  modalEditMyProfile,
  modalEditPassword,
} from "@/services/sharing-information.service";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaGenderless } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdDateRange, MdOutlineEmail } from "react-icons/md";
import { TiBusinessCard } from "react-icons/ti";
import { useSelector } from "react-redux";
import { ClientCard, ModalUpdate, ModalUpdatePassword } from "../..";
import {
  BtonChangePassword,
  DivCardNoEvent,
  DivInformationMyProfile,
  DivInformationProfileDetail,
  MyProfileEditInformaction,
  SectionMyProfile,
  TitleName,
} from "./MiProfile.styled";

function MiProfile() {
  const user = useSelector((store: AppStore) => store.user.user);

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalPasswordActive, setModalPasswordActive] =
    useState<boolean>(false);
  const [label, setLabel] = useState<"address" | "phoneNumber" | undefined>(
    undefined
  );

  useEffect(() => {
    modalEditMyProfile.getSubject.subscribe((bol) => setModalActive(bol));
    modalEditPassword.getSubject.subscribe((bol) =>
      setModalPasswordActive(bol)
    );
  }, []);

  useEffect(() => {}, [user]);

  const updateData = (value: "address" | "phoneNumber") => {
    modalEditMyProfile.setSubject(true);
    setLabel(value);
  };

  const modalUpdatePassword = () => {
    modalEditPassword.setSubject(true);
  };

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
          <DivCardNoEvent>
            <h4>Broker</h4>
            <ClientCard
              name={user?.brokerUser?.personalUser.name}
              lastname={user?.brokerUser?.personalUser.lastName}
              companyName={user?.brokerUser?.legalUser?.companyName}
              keyName={
                (user?.brokerUser?.personalUser
                  ? user?.brokerUser?.personalUser?.dni
                  : user?.brokerUser?.legalUser?.cuit) as string
              }
              id={user?.brokerUser?.id}
            />
          </DivCardNoEvent>
        )}
        <DivInformationProfileDetail>
          <MdOutlineEmail size={30} />
          <p>{user?.email}</p>
        </DivInformationProfileDetail>
        <DivInformationProfileDetail>
          <FaGenderless size={30} />
          {/* <h4>Genero</h4> */}
          <p>{user?.personalUser?.gender}</p>
        </DivInformationProfileDetail>
        <DivInformationProfileDetail>
          <MdDateRange size={30} />
          <p>{user?.personalUser?.birthDate}</p>
        </DivInformationProfileDetail>
        {user?.personalUser?.dni ? (
          <DivInformationProfileDetail>
            <TiBusinessCard size={30} />
            <p>{user?.personalUser?.dni}</p>
          </DivInformationProfileDetail>
        ) : (
          <>
            <DivInformationProfileDetail>
              <TiBusinessCard size={30} />
              <p>{user?.legalUser?.cuit}</p>
            </DivInformationProfileDetail>
          </>
        )}
        <DivInformationProfileDetail>
          <FaPhone size={30} />
          <p>{user?.phoneNumber}</p>
          <MyProfileEditInformaction onClick={() => updateData("phoneNumber")}>
            Editar
          </MyProfileEditInformaction>
        </DivInformationProfileDetail>
        <DivInformationProfileDetail>
          <CiLocationOn size={30} />
          <p>{user?.address}</p>
          <MyProfileEditInformaction onClick={() => updateData("address")}>
            Editar
          </MyProfileEditInformaction>
        </DivInformationProfileDetail>
        <DivInformationProfileDetail>
          <BtonChangePassword onClick={modalUpdatePassword}>
            Cambiar contraseña
          </BtonChangePassword>
        </DivInformationProfileDetail>
      </DivInformationMyProfile>
    </SectionMyProfile>
  );
}
export default MiProfile;
