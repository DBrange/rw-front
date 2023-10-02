import { LogoText } from "@/styledComponents";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo2 } from "..";
import {
  BtnMainName,
  DivMainName,
  IconMainName,
  LinkMainName,
} from "./MainName.styled";
import { useEffect, useState } from "react";
import { sidebarService } from "@/services/sharing-information.service";
import { useLocation } from "react-router-dom";

function MainName() {
  const path = useLocation().pathname;
  const [stateOfSidebar, setStateOfSidebar] = useState<boolean>(false);

  useEffect(() => {
    sidebarService.getSubject.subscribe((bol) => setStateOfSidebar(bol));
  }, [stateOfSidebar]);

  const toggleSidebar = () => {
    sidebarService.setSubject(!stateOfSidebar);
    setStateOfSidebar(!stateOfSidebar);
  };

  return (
    <DivMainName
      $public={
        !!(
          path === "/" ||
          path === "/denunciar" ||
          path === "/inspeccionar" ||
          path === "/login" ||
          path === "/registrarse"
        )
      }
    >
      <BtnMainName
        $public={
          !!(
            path === "/" ||
            path === "/denunciar" ||
            path === "/inspeccionar" ||
            path === "/login" ||
            path === "/registrarse"
          )
        }
        onClick={toggleSidebar}
      >
        <IconMainName>
          <RxHamburgerMenu size={25} />
        </IconMainName>
      </BtnMainName>
      <LinkMainName to="/">
        <Logo2 />
        <LogoText>ReclamoWeb</LogoText>
      </LinkMainName>
    </DivMainName>
  );
}
export default MainName;
