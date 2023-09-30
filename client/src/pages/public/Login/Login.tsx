import { LoginContainer, LoginBox } from ".";
import { LoginProvider } from "./context/Login.context";

function Login() {
  return (
    <LoginProvider>
      <LoginContainer>
        <LoginBox />
      </LoginContainer>
    </LoginProvider>
  );
}
export default Login