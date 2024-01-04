import { CgLogOut } from "react-icons/cg";
import { LiSidebarItem } from "..";
import { clearLocalStorage } from "@/utilities";
import { clientKey } from "@/redux/slices/clientSlice";

function LogOut() {
  const logOut = () => clearLocalStorage(clientKey)
  return (
    <LiSidebarItem $active={false} onClick={logOut}>
      <CgLogOut size={20} />
      Salir
    </LiSidebarItem>
  );
}
export default LogOut;
