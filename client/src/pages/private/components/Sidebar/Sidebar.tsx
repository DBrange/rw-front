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
import { LinkNavigate } from "@/styledComponents";

function Sidebar() {
  const [stateOfSidebar, setStateOfSidebar] = useState<boolean>(false);

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
          <LiSidebarItem>
            <MdOutlineDashboard size={20} />
            <LinkNavigate to="/dashboard_client/inspecciones">
              Inspecciones
            </LinkNavigate>
          </LiSidebarItem>
          <LiSidebarItem>
            <MdOutlineDashboard size={20} />
            <LinkNavigate to="">con</LinkNavigate>
          </LiSidebarItem>
          <LiSidebarItem>
            <MdOutlineDashboard size={20} />
            <LinkNavigate to="#">la mas</LinkNavigate>
          </LiSidebarItem>
          <LiSidebarItem>
            <MdOutlineDashboard size={20} />
            <LinkNavigate to="#">linda</LinkNavigate>
          </LiSidebarItem>
        </UlSidebarList>
        <FooterSidebar>
          <UlSidebarList>
            <LiSidebarItem>algo</LiSidebarItem>
            <LiSidebarItem>algo</LiSidebarItem>
          </UlSidebarList>
        </FooterSidebar>
      </DivSidebarWrapper>
    </SectionBgSidebar>
  );
}
export default Sidebar;
