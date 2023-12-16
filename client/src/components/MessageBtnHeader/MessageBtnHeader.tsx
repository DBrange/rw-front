import { useHeaderContext } from "@/header/context";
import { AiOutlineMessage } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { NotificationsBox } from "..";
import {
  BtnMessageBtnHeader,
  DivDivMessageBtnHeader,
  DivMessageBtnHeader,
  SectionMessageBtnHeader,
} from "./MessageBtnHeader.styled";
import { AppStore } from "@/redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function MessageBtnHeader() {
  const path = useLocation().pathname;

  const {
    modal,
    newNotifications,
    setModal,
    refreshNotifications,
    setNewNotifications,
  } = useHeaderContext();

  const notifications = useSelector((store: AppStore) => store.notification);

  const s = notifications.map((el) => el.isRead).some((el) => !el);

  
  return (
    <>
      {!(
        path === "/public/home" ||
        path === "/public/denunciar" ||
        path === "/public/inspeccionar" ||
        path === "/public/login" ||
        path === "/public/registrarse"
      ) && (
        <SectionMessageBtnHeader>
          {s && <p>nuevoo</p>}
          <DivDivMessageBtnHeader onClick={refreshNotifications}>
            <DivMessageBtnHeader
              onClick={() => setModal((mod) => !mod)}
              $public={
                !!(
                  path === "/public/home" ||
                  path === "/public/denunciar" ||
                  path === "/public/inspeccionar" ||
                  path === "/public/login" ||
                  path === "/public/registrarse"
                )
              }
            >
              <BtnMessageBtnHeader
                $side={true}
                $public={
                  !!(
                    path === "/public/home" ||
                    path === "/public/denunciar" ||
                    path === "/public/inspeccionar" ||
                    path === "/public/login" ||
                    path === "/public/registrarse"
                  )
                }
              >
                <AiOutlineMessage size={25} />
              </BtnMessageBtnHeader>
            </DivMessageBtnHeader>
          </DivDivMessageBtnHeader>
          {modal && <NotificationsBox notifications={notifications} />}
        </SectionMessageBtnHeader>
      )}
    </>
  );
}

export default MessageBtnHeader;
