import { useEffect, useState } from "react";

import { LoaderImages, ModalError, ModalSent } from "@/components";
import { Container } from "@/styledComponents";
import { modalSentService, loaderImageService } from "@/services/sharing-information.service";
import { useInspectContext } from "../..";

function InspectContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
  }) {
  const {formNotFound} = useInspectContext()
  const [modalSentActive, setModalSentActive] = useState<boolean>(false);
  const [loaderImages, setLoaderImages] = useState<boolean>(false);

    useEffect(() => {
      modalSentService.getSubject.subscribe((bol) => setModalSentActive(bol));
      loaderImageService.getSubject.subscribe((bol) => setLoaderImages(bol));
    }, []);
  
  return (
    <>
      <LoaderImages modalActive={loaderImages} />
      <ModalSent modalActive={modalSentActive} />
      <ModalError modalActive={formNotFound} />
      <Container>{children}</Container>
    </>
  );
}
export default InspectContainer;
