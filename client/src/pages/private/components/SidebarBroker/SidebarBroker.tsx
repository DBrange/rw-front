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
import { useDispatch, useSelector } from "react-redux";
import { resetClient } from "@/redux/slices/clientSlice";
import { AppDispatch, AppStore } from "@/redux";
import { addNotificationsAsync } from "@/redux/slices/notificationSlice";
import { useLocation } from "react-router-dom";

function Sidebar() {
const path = useLocation().pathname;

  const [stateOfSidebar, setStateOfSidebar] = useState<boolean>(false);
  const dispatch = useDispatch();
  const dispatchAsync = useDispatch<AppDispatch>();
  const user = useSelector((store: AppStore) => store.user);

  useEffect(() => {
    sidebarService.setSubject(false);
    dispatchAsync(addNotificationsAsync(user.user?.id));
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

  const notis = () => {
    dispatchAsync(addNotificationsAsync(user.user?.id));
    sidebarService.setSubject(false);
  }
  return (
    <SectionBgSidebar $isOpen={stateOfSidebar} onClick={toggleSidebar}>
      <DivSidebarWrapper $isOpen={stateOfSidebar} onClick={handleSidebarClick}>
        <MainName />
        <UlSidebarList>
          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.DASHBOARD}`}
            onClick={notis}
          >
            <LiSidebarItem
              $active={
                !!(
                  path ===
                  `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.DASHBOARD}`
                )
              }
            >
              <MdOutlineDashboard size={20} />
              Inicio
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CLIENTS_OF_BROKER}`}
            onClick={notis}
          >
            <LiSidebarItem
              $active={
                !!(
                  path ===
                  `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CLIENTS_OF_BROKER}`
                )
              }
            >
              <IoPeople size={20} />
              Clientes
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.ALL_INSURED}`}
            onClick={notis}
          >
            <LiSidebarItem
              $active={
                !!(
                  path ===
                  `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.ALL_INSURED}`
                )
              }
            >
              <TfiWrite size={20} />
              Inspecciones
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.ALL_SINISTER}`}
            onClick={notis}
          >
            <LiSidebarItem
              $active={
                !!(
                  path ===
                  `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.ALL_SINISTER}`
                )
              }
            >
              <IoNewspaperOutline size={20} />
              Denuncias
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_INSPECTION}`}
            onClick={notis}
          >
            <LiSidebarItem
              $active={
                !!(
                  path ===
                  `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_INSPECTION}`
                )
              }
            >
              <BsShieldCheck size={20} />
              Inspeccionar
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_SINISTER}`}
            onClick={notis}
          >
            <LiSidebarItem
              $active={
                !!(
                  path ===
                  `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.CREATE_SINISTER}`
                )
              }
            >
              <TbReportAnalytics size={20} />
              Denunciar
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.SEARCH_CLIENT}`}
            onClick={notis}
          >
            <LiSidebarItem
              $active={
                !!(
                  path ===
                  `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.SEARCH_CLIENT}`
                )
              }
            >
              <IoPeople size={20} />
              Buscar Clientes
            </LiSidebarItem>
          </LinkNavigate>
        </UlSidebarList>
        <FooterSidebar>
          <UlSidebarList>
            <LinkNavigate
              to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.MY_PROFILE}`}
              onClick={notis}
            >
              <LiSidebarItem
                $active={
                  !!(
                    path ===
                    `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.BROKER}/${PrivateRoutes.MY_PROFILE}`
                  )
                }
              >
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
