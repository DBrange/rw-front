import { LoaderImages, ModalNotAccess } from "@/components";
import { loaderImageService } from "@/services/sharing-information.service";
import { Container } from "@/styledComponents";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function ClientChooseBrokerContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  // const { formNotFound } = useClientChooseBrokerContext();
  const [loaderImages, setLoaderImages] = useState<boolean>(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  useEffect(() => {
    loaderImageService.getSubject.subscribe((bol) => setLoaderImages(bol));
  }, []);

  return (
    <>
      {!isMobile && <ModalNotAccess />}
      <LoaderImages modalActive={loaderImages} />
      {/* <ModalError modalActive={formNotFound} /> */}
      <Container>{children}</Container>
    </>
  );
}
export default ClientChooseBrokerContainer;
