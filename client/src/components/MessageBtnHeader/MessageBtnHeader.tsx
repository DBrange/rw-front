import { AiOutlineMessage } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { DivMainName, BtnMainName, NotificationsBox } from "..";
import {
  DivMessageBtnHeader,
  BtnMessageBtnHeader,
  SectionMessageBtnHeader,
} from "./MessageBtnHeader.styled";
import { useState } from "react";
import { AppStore } from '../../redux/store';
import { useSelector } from "react-redux";

function MessageBtnHeader() {
  const path = useLocation().pathname;
  const [modal, setModal] = useState<boolean>(false)

  const notifications = useSelector((store: AppStore) => store?.notification?.receivedNotifications)

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
          <DivMessageBtnHeader
            onClick={() => setModal(mod => !mod)}
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
          {modal && <NotificationsBox notifications={notifications} />}
        </SectionMessageBtnHeader>
      )}
    </>
  );
}

export default MessageBtnHeader;
