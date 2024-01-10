import { resetClient } from "@/redux/slices/clientSlice";
import { CgLogOut } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { LiSidebarItem } from "..";

function LogOut() {
  const dispatch = useDispatch()
  
  const logOut = () => {
    dispatch(resetClient())
  }
  
  return (
    <LiSidebarItem $active={false} onClick={logOut}>
      <CgLogOut size={20} />
      Salir
    </LiSidebarItem>
  );
}
export default LogOut;
