import { RegisterContainer, RegisterBox, RegisterProvider } from ".";

function Register() {
  return (
    <RegisterProvider>
      <RegisterContainer>
        <RegisterBox />
      </RegisterContainer>
    </RegisterProvider>
  );
}
export default Register