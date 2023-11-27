import { MainName } from "@/components";
import { sidebarService } from "@/services/sharing-information.service";
import { useEffect, useState } from "react";

import { MdOutlineDashboard } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { IoPeople } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { TfiWrite } from "react-icons/tfi";
import { BsShieldCheck } from "react-icons/bs";
import { LinkNavigate } from "@/styledComponents";
import LogOut from "../LogOut/LogOut";
import { PrivateRoutes } from "@/models/types/routes";
import {
  SectionBgSidebar,
  DivSidebarWrapper,
  UlSidebarList,
  LiSidebarItem,
  FooterSidebar,
} from "..";
import { useDispatch } from "react-redux";
import { resetClient } from "@/redux/slices/clientSlice";

function Sidebar() {
  const [stateOfSidebar, setStateOfSidebar] = useState<boolean>(false);
  const dispatch = useDispatch();
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
          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.DASHBOARD}`}
          >
            <LiSidebarItem>
              <MdOutlineDashboard size={20} />
              Inicio
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CLIENTS_OF_BROKER}`}
          >
            <LiSidebarItem>
              <IoPeople size={20} />
              Clientes
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.ALL_INSURED}`}
          >
            <LiSidebarItem>
              <TfiWrite size={20} />
              Inspecciones
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.ALL_SINISTER}`}
          >
            <LiSidebarItem>
              <IoNewspaperOutline size={20} />
              Denuncias
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_INSPECTION}`}
          >
            <LiSidebarItem>
              <BsShieldCheck size={20} />
              Inspeccionar
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_SINISTER}`}
          >
            <LiSidebarItem>
              <TbReportAnalytics size={20} />
              Denunciar
            </LiSidebarItem>
          </LinkNavigate>
        </UlSidebarList>
        <FooterSidebar>
          <UlSidebarList>
            <LinkNavigate
              to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.MY_PROFILE}`}
            >
              <LiSidebarItem>
                <BsFillPersonFill size={20} />
                Mi perfil
              </LiSidebarItem>
            </LinkNavigate>
            <span onClick={() => dispatch(resetClient())}>
              <LogOut />
            </span>
          </UlSidebarList>
        </FooterSidebar>
      </DivSidebarWrapper>
    </SectionBgSidebar>
  );
}
export default Sidebar;
