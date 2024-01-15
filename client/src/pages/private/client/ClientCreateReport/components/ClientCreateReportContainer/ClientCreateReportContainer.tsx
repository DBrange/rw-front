import { Container } from "@/styledComponents";
import { useClientCreateReportContext } from "../..";
import {
  LoaderImages,
  ModalSentLogin,
  ModalError,
  ModalAccessLevel,
} from "@/components";
import {
  modalSentService,
  loaderImageService,
} from "@/services/sharing-information.service";
import { useState, useEffect } from "react";

function ClientCreateReportContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  const { formNotFound, modalAccessLevel } = useClientCreateReportContext();
  const [modalSentActive, setModalSentActive] = useState<boolean>(false);
  const [loaderImages, setLoaderImages] = useState<boolean>(false);

  useEffect(() => {
    modalSentService.getSubject.subscribe((bol) => setModalSentActive(bol));
    loaderImageService.getSubject.subscribe((bol) => setLoaderImages(bol));
  }, []);

  return (
    <>
      <LoaderImages modalActive={loaderImages} />
      <ModalSentLogin type="denuncia" modalActive={modalSentActive} />
      <ModalError modalActive={formNotFound} />
      <ModalAccessLevel
        modalActive={modalAccessLevel}
        title={"No pueden realizar denuncias"}
        text={
          "Su broker ha llegado a su maximo de denuncias, por favor consulte este problema con el mismo"
        }
        broker={false}
      />
      <Container>{children}</Container>
    </>
  );
}
export default ClientCreateReportContainer;
