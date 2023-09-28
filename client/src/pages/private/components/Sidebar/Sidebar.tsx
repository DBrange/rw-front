import { MainName } from "@/components";
import { ClickEventType } from "@/pages";
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

function Sidebar() {
  const [stateOfSidebar, setStateOfSidebar] = useState<boolean>(true);

  useEffect(() => {
    sidebarService.getSubject.subscribe((bol) => setStateOfSidebar(bol));
  }, [stateOfSidebar]);

  const toggleSidebar = () => {
    sidebarService.setSubject(!stateOfSidebar);
    setStateOfSidebar(!stateOfSidebar);
  };

  const handleSidebarClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <SectionBgSidebar $isOpen={stateOfSidebar} onClick={toggleSidebar}>
      <DivSidebarWrapper $isOpen={stateOfSidebar} onClick={handleSidebarClick}>
        <MainName />
        <UlSidebarList>
          <LiSidebarItem><MdOutlineDashboard size={20}/>hablo</LiSidebarItem>
          <LiSidebarItem><MdOutlineDashboard size={20}/>con</LiSidebarItem>
          <LiSidebarItem><MdOutlineDashboard size={20}/>la mas</LiSidebarItem>
          <LiSidebarItem><MdOutlineDashboard size={20}/>linda</LiSidebarItem>
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
