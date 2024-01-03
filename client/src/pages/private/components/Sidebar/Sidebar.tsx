import { MainName } from "@/components";
import { PrivateRoutes } from "@/models/types/routes";
import { AppDispatch, AppStore } from "@/redux";
import { resetClient } from "@/redux/slices/clientSlice";
import { addNotificationsAsync } from "@/redux/slices/notificationSlice";
import { sidebarService } from "@/services/sharing-information.service";
import { LinkNavigate } from "@/styledComponents";
import { useEffect, useState } from "react";
import { BsFillPersonFill, BsShieldCheck } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import LogOut from "../LogOut/LogOut";
import {
  DivSidebarWrapper,
  FooterSidebar,
  LiSidebarItem,
  SectionBgSidebar,
  UlSidebarList,
} from "./Sidebar.styled";

function Sidebar() {
  const path = useLocation().pathname;

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

  const dispatchAsync = useDispatch<AppDispatch>();
  const user = useSelector((store: AppStore) => store.user);
  const notis = () => {
    dispatchAsync(addNotificationsAsync(user.user?.id));
    sidebarService.setSubject(false);
  };

  return (
    <SectionBgSidebar $isOpen={stateOfSidebar} onClick={toggleSidebar}>
      <DivSidebarWrapper $isOpen={stateOfSidebar} onClick={handleSidebarClick}>
        <MainName />
        <UlSidebarList>
          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CLIENT}/${PrivateRoutes.DASHBOARD}`}
            onClick={notis}
          >
            <LiSidebarItem
              $active={
                !!(
                  path ===
                  `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CLIENT}/${PrivateRoutes.DASHBOARD}`
                )
              }
            >
              <MdOutlineDashboard size={20} />
              Inicio
            </LiSidebarItem>
          </LinkNavigate>

          {/* <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.ELEMENTS}`}
            onClick={()=>notis()}
          >
            <LiSidebarItem>
              <MdOutlineDashboard size={20} />
              Vehiculos y electronicos
            </LiSidebarItem>
          </LinkNavigate> */}

          {/* <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.ALL_INSURED}`}
            onClick={()=>notis()}
          >
            <LiSidebarItem>
              <TfiWrite size={20} />
              Inspecciones
            </LiSidebarItem>
          </LinkNavigate> */}

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CLIENT}/${PrivateRoutes.ALL_SINISTER}`}
            onClick={notis}
          >
            <LiSidebarItem
              $active={
                !!(
                  path ===
                  `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CLIENT}/${PrivateRoutes.ALL_SINISTER}`
                )
              }
            >
              <IoNewspaperOutline size={20} />
              Denuncias
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CLIENT}/${PrivateRoutes.CREATE_INSPECTION}`}
            onClick={notis}
          >
            <LiSidebarItem
              $active={
                !!(
                  path ===
                  `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CLIENT}/${PrivateRoutes.CREATE_INSPECTION}`
                )
              }
            >
              <BsShieldCheck size={20} />
              Inspeccionar
            </LiSidebarItem>
          </LinkNavigate>

          <LinkNavigate
            to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CLIENT}/${PrivateRoutes.CREATE_SINISTER}`}
            onClick={notis}
          >
            <LiSidebarItem
              $active={
                !!(
                  path ===
                  `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CLIENT}/${PrivateRoutes.CREATE_SINISTER}`
                )
              }
            >
              <TbReportAnalytics size={20} />
              Denunciar
            </LiSidebarItem>
          </LinkNavigate>
        </UlSidebarList>
        <FooterSidebar>
          <UlSidebarList>
            <LinkNavigate
              to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CLIENT}/${PrivateRoutes.MY_PROFILE}`}
              onClick={notis}
            >
              <LiSidebarItem
                $active={
                  !!(
                    path ===
                    `/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CLIENT}/${PrivateRoutes.MY_PROFILE}`
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
