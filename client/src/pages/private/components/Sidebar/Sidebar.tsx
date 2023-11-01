import { MainName } from "@/components";
import { sidebarService } from "@/services/sharing-information.service";
import { useEffect, useState } from "react";
import {
  DivSidebarWrapper,
  FooterSidebar,
  LiSidebarItem,
  SectionBgSidebar,
  UlSidebarList,
} from "./Sidebar.styled";
import { MdOutlineDashboard } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { BsShieldCheck } from "react-icons/bs";
import { LinkNavigate } from "@/styledComponents";
import LogOut from "../LogOut/LogOut";

function Sidebar() {
  const [stateOfSidebar, setStateOfSidebar] = useState<boolean>(false);

  useEffect(() => {
    sidebarService.setSubject(false);
  }, []);

  useEffect(() => {
    sidebarService.getSubject.subscribe((bol) => setStateOfSidebar(bol));
  }, [stateOfSidebar]);

  const toggleSidebar = () => {
    sidebarService.setSubject(!stateOfSidebar);
    setStateOfSidebar(!stateOfSidebar);
  };

  const handleSidebarClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => e.stopPropagation();

  return (
    <SectionBgSidebar $isOpen={stateOfSidebar} onClick={toggleSidebar}>
      <DivSidebarWrapper $isOpen={stateOfSidebar} onClick={handleSidebarClick}>
        <MainName />
        <UlSidebarList>
          <LinkNavigate to="/dashboard/cliente">
            <LiSidebarItem>
              <MdOutlineDashboard size={20} />
              Inicio
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate to="/dashboard/cliente/inspecciones">
            <LiSidebarItem>
              <TfiWrite size={20} />
              Inspecciones
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate to="/dashboard/cliente/denuncias">
            <LiSidebarItem>
              <IoNewspaperOutline size={20} />
              Denuncias
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate to="/dashboard/cliente/crear-inspeccion">
            <LiSidebarItem>
              <BsShieldCheck size={20} />
              Inspeccionar
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate to="/dashboard/cliente/crear-denuncia">
            <LiSidebarItem>
              <TbReportAnalytics size={20} />
              Denunciar
            </LiSidebarItem>
          </LinkNavigate>
        </UlSidebarList>
        <FooterSidebar>
          <UlSidebarList>
            <LinkNavigate to="/dashboard/cliente/perfil">
              <LiSidebarItem>
                <BsFillPersonFill size={20} />
                Mi perfil
              </LiSidebarItem>
            </LinkNavigate>
            <LogOut />
          </UlSidebarList>
        </FooterSidebar>
      </DivSidebarWrapper>
    </SectionBgSidebar>
  );
}
export default Sidebar;
