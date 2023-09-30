import { LinkNavigate, theme } from "@/styledComponents";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const BtnLogin = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  background-color: ${theme.sColor};
  margin-right: 2rem;
  
  @media (min-width: 450px) {
    
    margin-right: 4rem;
  }
`;

function LoginBtn() {
  const path = useLocation().pathname;
  return (
    <>
      {!!(
        path === "/" ||
        path === "/denunciar" ||
        path === "/inspeccionar"
      ) && (
        <LinkNavigate to="/login">
          <BtnLogin>Login</BtnLogin>
        </LinkNavigate>
      )}
    </>
  );
}
export default LoginBtn;
