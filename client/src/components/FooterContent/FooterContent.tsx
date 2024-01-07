import { MdOutlineEmail } from "react-icons/md";
import { TiBusinessCard } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";

import {
  DivFooter,
  DivContact,
  DivPFooter,
  PFooter,
  PFooterLink,
  DivInfo,
} from "./FooterContent.styled";
import { ContainerLogin } from "@/styledComponents";
import { PublicRoutes } from "@/models/types/routes";

function FooterContent() {
  return (
    <ContainerLogin>
      <DivFooter>
        <DivInfo>
          <PFooterLink to={`${PublicRoutes.PUBLIC}/${PublicRoutes.ABOUT_US}`}>
            ¿Quienes somos?
          </PFooterLink>
          <PFooterLink
            to={`${PublicRoutes.PUBLIC}/${PublicRoutes.FREQUENT_QUESTIONS}`}
          >
            Preguntas frecuentes
          </PFooterLink>
        </DivInfo>
        <DivContact>
          <h5>Contacto</h5>
          <DivPFooter>
            <MdOutlineEmail size={20} />
            <PFooter>algunmail@gmail.com</PFooter>
          </DivPFooter>
          <DivPFooter>
            <FaPhone size={20} />
            <PFooter>222222222222</PFooter>
          </DivPFooter>
        </DivContact>
        <PFooter>Reclamo Web todos los derechos reservados © 2024</PFooter>
      </DivFooter>
    </ContainerLogin>
  );
}
export default FooterContent;
