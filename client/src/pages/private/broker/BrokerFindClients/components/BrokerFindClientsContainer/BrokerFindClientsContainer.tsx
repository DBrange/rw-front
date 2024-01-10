import { ModalSendRequest } from "@/components";
import { modalSendRequest } from "@/services/sharing-information.service";
import { ContainerLogin } from "@/styledComponents";
import { useEffect, useState } from "react";
import { useBrokerFindClientsContext } from "../..";

function BrokerFindClientsContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  const [modalSendActive, setModalSendActive] = useState<boolean>(false);
  const { client } = useBrokerFindClientsContext();
  useEffect(() => {
    modalSendRequest.getSubject.subscribe((bol) => setModalSendActive(bol));
  }, []);

  return (
    <>
      <ModalSendRequest
        modalActive={modalSendActive}
        email={client?.email}
        dni={client?.personalUser?.dni}
        cuit={client?.legalUser?.cuit}
        name={client?.personalUser?.name}
        lastname={client?.personalUser?.lastName}
        companyName={client?.legalUser?.companyName}
      />
      <ContainerLogin>{children}</ContainerLogin>
    </>
  );
}
export default BrokerFindClientsContainer;
