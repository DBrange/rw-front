import { MainName, MessageBtnHeader } from "@/components";
import LoginBtn from "@/components/LoginBtn/LoginBtn";
import { HeaderStyle } from "@/styledComponents";
import { HeaderProvider } from "./context";

function Header() {
  return (
    <HeaderProvider>
      <HeaderStyle>
        <MainName />
        <LoginBtn />
        <MessageBtnHeader />
      </HeaderStyle>
    </HeaderProvider>
  );
}
export default Header;
