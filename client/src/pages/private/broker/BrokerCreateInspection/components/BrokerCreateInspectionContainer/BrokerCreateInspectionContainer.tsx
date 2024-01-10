import { LoaderImages } from "@/components";
import {
  loaderImageService,
} from "@/services/sharing-information.service";
import { ContainerLogin } from "@/styledComponents";
import { useEffect, useState } from "react";

function BrokerCreateInspectionContainer({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  // const { formNotFound } = useBrokerCreateInspectionContext();
  const [loaderImages, setLoaderImages] = useState<boolean>(false);
// const isMobile = useMediaQuery({ maxWidth: 768 });
  useEffect(() => {
    loaderImageService.getSubject.subscribe((bol) => setLoaderImages(bol));
  }, []);

  return (
    <>
      {/* {!isMobile && <ModalNotAccess />} */}
      <LoaderImages modalActive={loaderImages} />
      {/* <ModalError modalActive={formNotFound} /> */}
      <ContainerLogin>{children}</ContainerLogin>
    </>
  );
}
export default BrokerCreateInspectionContainer;
