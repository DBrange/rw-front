import { FormInput, FormTitle } from "@/components";
import { useLoginContext } from "@/pages";
import { Form } from "@/styledComponents";
import { BtnLogin, DivNoRegister, H6NoRegister, SectionLoginBox, SpanNoRegister } from "./LoginBox.styled";

function LoginBox() {
  const {inputValues,loginData,submitData,errorValues,touchedValues} = useLoginContext()
  return (
    <Form onSubmit={submitData}>
      <SectionLoginBox>
        <FormTitle>Ingresa a tu perfil</FormTitle>
        <FormInput
          label="Email"
          value={inputValues.email}
          error={errorValues?.email}
          touched={touchedValues.email}
          handleChange={loginData}
          name="email"
          id="email"
          type="text"
          placeholder="Email"
        />
        <FormInput
          label="Contraseña"
          value={inputValues.password}
          error={errorValues?.password}
          touched={touchedValues.password}
          handleChange={loginData}
          name="password"
          id="password"
          type="text"
          placeholder="Contraseña"
        />
        <BtnLogin>Ingresar</BtnLogin>
        <DivNoRegister>
          <H6NoRegister> 
            ¿Aun no estas registrado? <SpanNoRegister to='/registrarse'>Registrate aqui</SpanNoRegister>
          </H6NoRegister>
        </DivNoRegister>
      </SectionLoginBox>
    </Form>
  );
}
export default LoginBox;
