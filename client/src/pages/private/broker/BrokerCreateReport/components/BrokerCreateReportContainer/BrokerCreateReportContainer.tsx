import { LoaderImages } from "@/components";
import { loaderImageService } from "@/services/sharing-information.service";
import { ContainerLogin } from "@/styledComponents";
import { useEffect, useState } from "react";

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
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <LoaderImages modalActive={loaderImages} />
      {/* <ModalError modalActive={formNotFound} /> */}
      <ContainerLogin>
        {/* {!isMobile && <ModalNotAccess/>} */}
        {children}
      </ContainerLogin>
    </>
  );
}
export default BrokerCreateReportContainer;
