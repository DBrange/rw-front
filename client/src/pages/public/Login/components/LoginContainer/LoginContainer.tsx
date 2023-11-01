import { LoaderImages, ModalSent, ModalError } from "@/components";
import { useLoginContext } from "@/pages";
import {
  modalSentService,
  loaderImageService,
} from "@/services/sharing-information.service";
import { Container } from "@/styledComponents";
import { useState, useEffect } from "react";

function LoginContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  // const { formNotFound } = useLoginContext();
  // const [modalSentActive, setModalSentActive] = useState<boolean>(false);
  const [loaderImages, setLoaderImages] = useState<boolean>(false);

  useEffect(() => {
    // modalSentService.getSubject.subscribe((bol) => setModalSentActive(bol));
    loaderImageService.getSubject.subscribe((bol) => setLoaderImages(bol));
  }, []);
  return (
    <>
      {" "}
      <LoaderImages modalActive={loaderImages} />
      {/* <ModalSent modalActive={modalSentActive} />
      <ModalError modalActive={formNotFound} /> */}
      <Container>{children}</Container>
    </>
  );
}
export default LoginContainer;
