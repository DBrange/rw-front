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
    modal,
    newNotifications,
    setModal,
    refreshNotifications,
    setNewNotifications,
  } = useHeaderContext();

  const notifications = useSelector((store: AppStore) => store.notification);

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
        path === "/public/contraseña"
      ) && (
        <SectionMessageBtnHeader>
          <DivDivMessageBtnHeader onClick={refreshNotifications}>
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
                  path === "/public/contraseña"
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
                    path === "/public/contraseña"
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
          {modal && <NotificationsBox notifications={notifications} />}
        </SectionMessageBtnHeader>
      )}
    </>
  );
}

export default MessageBtnHeader;
