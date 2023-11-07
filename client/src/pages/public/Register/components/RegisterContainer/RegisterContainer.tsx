import { Container } from "@/styledComponents";
import { useRegisterContext } from "../..";
import { LoaderImages, ModalError, ModalSuccessfulRegistration } from "@/components";
import {
  loaderImageService,
  modalSuccessfulRegistration,
} from "@/services/sharing-information.service";
import { useState, useEffect } from "react";

function RegisterContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  const { formNotFound } = useRegisterContext();
  const [modalSentActive, setModalSentActive] = useState<boolean>(false);
  const [loaderImages, setLoaderImages] = useState<boolean>(false);
  useEffect(() => {
    modalSuccessfulRegistration.getSubject.subscribe((bol) =>
      setModalSentActive(bol)
    );
    loaderImageService.getSubject.subscribe((bol) => setLoaderImages(bol));
  }, []);
  return (
    <>
      <LoaderImages modalActive={loaderImages} />
      <ModalSuccessfulRegistration modalActive={modalSentActive} />
      <ModalError modalActive={formNotFound} />
      <Container>{children}</Container>
    </>
  );
}
export default RegisterContainer;
