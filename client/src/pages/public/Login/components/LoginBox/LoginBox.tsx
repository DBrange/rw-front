import { FormInput, FormTitle } from "@/components";
import { useLoginContext } from "@/pages";
import { Form } from "@/styledComponents";
import {
  BtnLogin,
  DivNoRegister,
  H6NoRegister,
  PNotFound,
  SectionLoginBox,
  SpanNoRegister,
} from "./LoginBox.styled";
import { PublicRoutes } from "@/models/types/routes";

function LoginBox() {
  const {
    inputValues,
    loginData,
    submitData,
    errorValues,
    touchedValues,
    formNotFound,
  } = useLoginContext();
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
          placeholder="Ingresar email"
        />
        <FormInput
          label="Contraseña"
          value={inputValues.password}
          error={errorValues?.password}
          touched={touchedValues.password}
          handleChange={loginData}
          name="password"
          id="password"
          type="password"
          placeholder="Ingresar contraseña"
        />
        <BtnLogin>Ingresar</BtnLogin>
        <PNotFound $notFound={formNotFound}>
          Verifique si el email o contraseña ingresados son correctos
        </PNotFound>
        <DivNoRegister>
          <H6NoRegister>
            ¿Aun no estas registrado?
            <SpanNoRegister
              to={`/${PublicRoutes.PUBLIC}/${PublicRoutes.REGISTER}`}
            >
              {" "}
              Registrate aqui
            </SpanNoRegister>
          </H6NoRegister>
        </DivNoRegister>
        <DivNoRegister>
          <H6NoRegister>
            <SpanNoRegister
              to={`/${PublicRoutes.PUBLIC}/${PublicRoutes.FORGOTTEM_PASSWORD}`}
            >
              He olvidado mi contraseña
            </SpanNoRegister>
          </H6NoRegister>
        </DivNoRegister>
      </SectionLoginBox>
    </Form>
  );
}
export default LoginBox;
