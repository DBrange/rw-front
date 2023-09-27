import { useEffect, useState } from "react";

import { LoaderImages, ModalError, ModalSent } from "@/components";
import { Container } from "@/styledComponents";
import { useReportContext } from "../..";
import { loaderImageService, modalSentService } from "@/services/sharing-information.service";

function ReportContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  const { formNotFound } = useReportContext();
  const [modalSentActive, setModalSentActive] = useState<boolean>(false);
  const [loaderImages, setLoaderImages] = useState<boolean>(false);

  useEffect(() => {
    modalSentService.getSubject.subscribe((bol) => setModalSentActive(bol));
    loaderImageService.getSubject.subscribe((bol) => setLoaderImages(bol));
  }, []);
  
  // useEffect(() => {
  //   modalSentService.getSubject.subscribe((bol) => setModalSentActive(bol));
  // }, []);

  return (
    <>
      <LoaderImages modalActive={loaderImages} />
      <ModalSent modalActive={modalSentActive} />
      <ModalError modalActive={formNotFound} />
      <Container>{children}</Container>
    </>
  );
}
export default ReportContainer;
