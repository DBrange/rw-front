import { Container } from "@/styledComponents";
import { useClientCreateInspectionContext } from "../..";
import { LoaderImages, ModalError, ModalSentLogin } from "@/components";
import {
  modalSentService,
  loaderImageService,
} from "@/services/sharing-information.service";
import { useState, useEffect } from "react";
import { ModalAccessLevel } from "@/components/ModalAccessLevel";

function ClientCreateInspectionContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  const { formNotFound, modalAccessLevel } = useClientCreateInspectionContext();
  const [modalSentActive, setModalSentActive] = useState<boolean>(false);
  const [loaderImages, setLoaderImages] = useState<boolean>(false);

  useEffect(() => {
    modalSentService.getSubject.subscribe((bol) => setModalSentActive(bol));
    loaderImageService.getSubject.subscribe((bol) => setLoaderImages(bol));
  }, []);

  return (
    <>
      <LoaderImages modalActive={loaderImages} />
      <ModalSentLogin type="inspeccion" modalActive={modalSentActive} />
      <ModalError modalActive={formNotFound} />
      <ModalAccessLevel
        modalActive={modalAccessLevel}
        title={"No pueden realizar inspecciones"}
        text={
          "Su broker ha llegado a su maximo de inspecciones, por favor consulte este problema con el mismo"
        }
        broker={false}
      />
      <Container>{children}</Container>
    </>
  );
}
export default ClientCreateInspectionContainer;
