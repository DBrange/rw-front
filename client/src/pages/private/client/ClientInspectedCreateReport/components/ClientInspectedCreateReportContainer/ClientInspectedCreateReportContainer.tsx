import { Container } from "@/styledComponents";
import { useClientInspectedCreateReportContext } from "../..";
import { LoaderImages, ModalSentLogin, ModalError } from "@/components";
import { modalSentService, loaderImageService } from "@/services/sharing-information.service";
import { useState, useEffect } from "react";

function ClientInspectedCreateReportContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
        const { formNotFound } = useClientInspectedCreateReportContext();
        const [modalSentActive, setModalSentActive] = useState<boolean>(false);
        const [loaderImages, setLoaderImages] = useState<boolean>(false);

        useEffect(() => {
          modalSentService.getSubject.subscribe((bol) =>
            setModalSentActive(bol)
          );
          loaderImageService.getSubject.subscribe((bol) =>
            setLoaderImages(bol)
          );
        }, []);

        return (
          <>
            <LoaderImages modalActive={loaderImages} />
            <ModalSentLogin type="denuncia" modalActive={modalSentActive} />
            <ModalError modalActive={formNotFound} />
            <Container>{children}</Container>
          </>
        );
}
export default ClientInspectedCreateReportContainer;
