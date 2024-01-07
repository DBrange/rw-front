import { Container } from "@/styledComponents";
import { LoaderImages, ModalError, ModalNotAccess, ModalSentLogin } from "@/components";
import { loaderImageService } from "@/services/sharing-information.service";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function BrokerCreateReportContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  // const { formNotFound } = useBrokerCreateReportContext();
  const [loaderImages, setLoaderImages] = useState<boolean>(false);

  useEffect(() => {
    loaderImageService.getSubject.subscribe((bol) => setLoaderImages(bol));
  }, []);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <LoaderImages modalActive={loaderImages} />
      {/* <ModalError modalActive={formNotFound} /> */}
      <Container>
        {!isMobile && <ModalNotAccess/>}
        {children}
      </Container>
    </>
  );
}
export default BrokerCreateReportContainer;
