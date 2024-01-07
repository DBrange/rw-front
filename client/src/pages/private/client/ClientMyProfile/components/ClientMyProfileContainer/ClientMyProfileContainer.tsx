import ModalDeleteBroker from "@/components/ModalDeleteBroker/ModalDeleteBroker";
import { modalDeleteBroker } from "@/services/sharing-information.service";
import { ContainerLogin } from "@/styledComponents";
import { useEffect, useState } from "react";

function ClientMyProfileContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
  }) {
  
  const [modalDeleteBrokerActive, setModalDeleteBrokerActive] = useState<boolean>(false);
  
  useEffect(() => {
modalDeleteBroker.getSubject.subscribe((el) => setModalDeleteBrokerActive(el));
  },[])
  return (
    <>
      <ModalDeleteBroker modalActive={modalDeleteBrokerActive} />
      <ContainerLogin>{children}</ContainerLogin>
    </>
  );
}
export default ClientMyProfileContainer;
