import { Container } from "@/styledComponents";
import { LoaderImages, ModalError, ModalSentLogin } from "@/components";
import {
  loaderImageService,
} from "@/services/sharing-information.service";
import { useState, useEffect } from "react";

function BrokerCreateInspectionContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  // const { formNotFound } = useBrokerCreateInspectionContext();
  const [loaderImages, setLoaderImages] = useState<boolean>(false);

  useEffect(() => {
    loaderImageService.getSubject.subscribe((bol) => setLoaderImages(bol));
  }, []);

  return (
    <>
      <LoaderImages modalActive={loaderImages} />
      {/* <ModalError modalActive={formNotFound} /> */}
      <Container>{children}</Container>
    </>
  );
}
export default BrokerCreateInspectionContainer;