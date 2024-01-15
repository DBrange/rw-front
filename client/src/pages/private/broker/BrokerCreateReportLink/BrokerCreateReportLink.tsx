import { PrivateRoutes, PublicRoutes } from "@/models/types/routes";
import { AppStore } from "@/redux";
import { ContainerLogin } from "@/styledComponents";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { H3InspectionDetail } from "../../admin/AdminUser/components/AdminDashboardBox/AdminDashboardBox.styled";

import { MdContentCopy } from "react-icons/md";
import { SidebarBroker } from "../..";
import { BtnBrokerCreateInspectionLink, BtnContainerBrokerCreateInspectionLink, BtnCreate, DivBrokerCreateInspectionLink, DivInfoBrokerCreateInspectionLink } from "../BrokerCreateInspectionLink/BrokerCreateInspectionLink.styled";
import { ModalAccessLevel } from "@/components";
import useSWR from "swr";
import { ReportQuantityLinkUrl, reportQuantityLink } from "./services/reportQuantity-get.service";

function BrokerCreateReportLink() {
  const { clientId } = useParams();
  const brokerId = useSelector((store: AppStore) => store.user).user?.id;

  const [copyPaste, setCopyPaste] = useState<boolean>(false);

  const link1 = `http://localhost:5173/${PublicRoutes.PUBLIC}/${PublicRoutes.CREATE_SINISTER}/${brokerId}/${clientId}`;
  const link2 = `http://localhost:5173/${PrivateRoutes.CREATE_SINISTER}/${PrivateRoutes.CLIENT}/${PrivateRoutes.CREATE_INSPECTION}/${brokerId}`;

  const divRef = useRef<HTMLDivElement>(null);

  const handleCopyClick = () => {
    setCopyPaste(true);
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
      setCopyPaste(false);
    }, 3000);
  };
  const user = useSelector((store: AppStore) => store.user);

    const { data: sinisQuantity } = useSWR(
      ReportQuantityLinkUrl(user.user?.id),
      reportQuantityLink
    );

  const accessLevelVerify = () => {
    console.log('1')
    if (sinisQuantity?.quantity && user.user?.accessLevel?.toString().length) {
      console.log(user.user?.accessLevel);
      if (sinisQuantity?.quantity > 5 && user.user?.accessLevel === 0) {
        console.log('3')
        setModalAccessLevel(true);
      } else if (
        sinisQuantity?.quantity > 10 &&
        user.user?.accessLevel === 10
      ) {
        setModalAccessLevel(true);
      } else if (
        sinisQuantity?.quantity > 15 &&
        user.user?.accessLevel === 20
      ) {
        setModalAccessLevel(true);
      } else {
        setModalAccessLevel(false);
      }
    }
  };
  useEffect(() => {
    accessLevelVerify();
  }, [sinisQuantity]);

  const [modalAccessLevel, setModalAccessLevel] = useState<boolean>(false);

  return (
    <>
      <ModalAccessLevel
        modalActive={modalAccessLevel}
        title={"No pueden realizar denuncias"}
        text={
          "Su nivel de cuenta ha llegado al limite de denuncias posibles"
        }
        broker={true}
      />
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
          to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_SINISTER_MANUAL}/${clientId}`}
        >
          <BtnCreate>Crear sin link</BtnCreate>
        </Link>
      </ContainerLogin>
    </>
  );
}

export default BrokerCreateReportLink;
