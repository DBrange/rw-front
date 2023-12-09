import { AiOutlineMessage } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { DivMainName, BtnMainName } from "..";
import { DivMessageBtnHeader, BtnMessageBtnHeader } from "./MessageBtnHeader.styled";

function MessageBtnHeader() {
  const path = useLocation().pathname;
  return (
    <>
      {!(
        path === "/public/home" ||
        path === "/public/denunciar" ||
        path === "/public/inspeccionar" ||
        path === "/public/login" ||
        path === "/public/registrarse"
      ) && (
        <div>
          <DivMessageBtnHeader
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
        </div>
      )}
    </>
  );
}

export default MessageBtnHeader;
