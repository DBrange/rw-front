import { useHeaderContext } from "@/header/context";
import { AppStore } from "@/redux";
import { AiOutlineMessage } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { NotificationsBox } from "..";
import {
  BtnMessageBtnHeader,
  DivDivMessageBtnHeader,
  DivMessageBtnHeader,
  SectionMessageBtnHeader,
  SpanNewNotificationsNumber,
} from "./MessageBtnHeader.styled";

function MessageBtnHeader() {
  const path = useLocation().pathname;

  const {
    isReachedEnd,
    notifications,
    setSize,
    size,
    modal,
    setModal,
    refreshNotifications,
    mutate,
  } = useHeaderContext();

  // const notifications = useSelector((store: AppStore) => store.notification);

  const newNotification = notifications.filter((el) => !el.isRead).length;

  return (
    <>
      {!(
        path === "/public/home" ||
        path === "/public/denunciar" ||
        path === "/public/inspeccionar" ||
        path === "/public/login" ||
        path === "/public/registrarse" ||
        path === "/public/verificado" ||
        path === "/public/no-verificado" ||
        path === "/public/preguntas-frecuentes" ||
        path === "/public/sobre-nosotros" ||
        path === "/public/nueva-clave"
      ) && (
        <SectionMessageBtnHeader  >
          <DivDivMessageBtnHeader>
            <DivMessageBtnHeader
              onClick={() => setModal((mod) => !mod)}
              $public={
                !!(
                  path === "/public/home" ||
                  path === "/public/denunciar" ||
                  path === "/public/inspeccionar" ||
                  path === "/public/login" ||
                  path === "/public/registrarse" ||
                  path === "/public/verificado" ||
                  path === "/public/no-verificado" ||
                  path === "/public/preguntas-frecuentes" ||
                  path === "/public/sobre-nosotros" ||
                  path === "/public/nueva-clave"
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
                    path === "/public/registrarse" ||
                    path === "/public/verificado" ||
                    path === "/public/no-verificado" ||
                    path === "/public/preguntas-frecuentes" ||
                    path === "/public/sobre-nosotros" ||
                    path === "/public/nueva-clave"
                  )
                }
              >
                {newNotification !== 0 && (
                  <SpanNewNotificationsNumber>
                    {newNotification}
                  </SpanNewNotificationsNumber>
                )}
                <AiOutlineMessage size={25} />
              </BtnMessageBtnHeader>
            </DivMessageBtnHeader>
          </DivDivMessageBtnHeader>
          {modal && (
            <NotificationsBox
              notifications={notifications}
            
            />
          )}
        </SectionMessageBtnHeader>
      )}
    </>
  );
}

export default MessageBtnHeader;
