import { Container } from "@/styledComponents";
import { useRegisterContext } from "../..";
import { ModalError, ModalSuccessfulRegistration } from "@/components";
import { modalSuccessfulRegistration } from "@/services/sharing-information.service";
import { useState, useEffect } from "react";

function RegisterContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  const { formNotFound } = useRegisterContext();
  const [modalSentActive, setModalSentActive] = useState<boolean>(false);

  useEffect(() => {
    modalSuccessfulRegistration.getSubject.subscribe((bol) =>
      setModalSentActive(bol)
    );
  }, []);
  return (
    <>
      <ModalSuccessfulRegistration modalActive={modalSentActive} />
      <ModalError modalActive={formNotFound} />
      <Container>{children}</Container>
    </>
  );
}
export default RegisterContainer;
