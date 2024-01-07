import { PrivateRoutes, PublicRoutes } from "@/models/types/routes";
import { AppStore } from "@/redux";
import { ContainerLogin } from "@/styledComponents";
import { useRef, useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SidebarBroker } from "../..";
import { H3InspectionDetail } from "../../admin/AdminUser/components/AdminDashboardBox/AdminDashboardBox.styled";
import { BtnBrokerCreateInspectionLink, BtnContainerBrokerCreateInspectionLink, BtnCreate, DivBrokerCreateInspectionLink, DivInfoBrokerCreateInspectionLink } from "./BrokerCreateInspectionLink.styled";

function BrokerCreateInspectionLink() {
  const { clientId } = useParams();
  const brokerId = useSelector((store: AppStore) => store.user).user?.id;

  const [copyPaste, setCopyPaste] = useState<boolean>(false);

  const link1 = `http://localhost:5173/${PublicRoutes.PUBLIC}/${PublicRoutes.CREATE_INSPECTION}/${brokerId}/${clientId}`;
  const link2 = `http://localhost:5173/${PrivateRoutes.CREATE_INSPECTION}/${PrivateRoutes.CLIENT}/${PrivateRoutes.CREATE_INSPECTION}/${brokerId}`;

  const divRef = useRef<HTMLDivElement>(null);

  const handleCopyClick = () => {

    setCopyPaste(true)
    const divContent = divRef.current?.innerText;
    const textToCopy = divContent;

    const tempTextArea = document.createElement("textarea");
    if (typeof textToCopy === "string") {
      tempTextArea.value = textToCopy;
      document.body.appendChild(tempTextArea);

      tempTextArea.select();
      document.execCommand("copy");

      document.body.removeChild(tempTextArea);
    }
    setTimeout(() => {
      setCopyPaste(false)
    }, 3000);
  };

  return (
    <>
      <SidebarBroker />
      <ContainerLogin>
        <H3InspectionDetail>Link a compartir</H3InspectionDetail>
        <DivBrokerCreateInspectionLink>
          <BtnContainerBrokerCreateInspectionLink>
            <BtnBrokerCreateInspectionLink onClick={handleCopyClick}>
              <MdContentCopy /> {!copyPaste ? <>Copiar</> : <>Copiado !</>}
            </BtnBrokerCreateInspectionLink>
          </BtnContainerBrokerCreateInspectionLink>
          <DivInfoBrokerCreateInspectionLink ref={divRef}>
            <p>Ingrese a este link:</p>
            <div>
              <a>{link1}</a>
            </div>
            <br />
            <p>
              En caso que el primer link no haya funcionado, aquí tiene una
              segunda opción:
            </p>
            <div>
              <a>{link2}</a>
            </div>
          </DivInfoBrokerCreateInspectionLink>
        </DivBrokerCreateInspectionLink>
        <Link
          to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_INSPECTION_MANUAL}/${clientId}`}
        >
          <BtnCreate>Crear sin link</BtnCreate>
        </Link>
      </ContainerLogin>
    </>
  );
}

export default BrokerCreateInspectionLink;
