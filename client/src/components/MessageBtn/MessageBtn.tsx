import { AiOutlineMessage } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { DivMessageBtn, BtnMessageBtn } from "./MessageBtn.styled";

function MessageBtn() {
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
          <DivMessageBtn
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
            <BtnMessageBtn
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
            </BtnMessageBtn>
          </DivMessageBtn>
        </div>
      )}
    </>
  );
}

export default MessageBtn;
