import { FormInput, FormInputPassword, FormTitle } from "@/components";
import { ChangeEventType, useLoginContext } from "@/pages";
import { Form } from "@/styledComponents";
import {
  BrnLoginGoogle,
  BtnLogin,
  DivBtnLogin,
  DivKeepLoggedIn,
  DivNoRegister,
  H6NoRegister,
  PNotFound,
  SectionLoginBox,
  SpanNoRegister,
} from "./LoginBox.styled";
import { PublicRoutes } from "@/models/types/routes";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { storageType } from "@/utilities/storageType.utility";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux";
import { clientKey, resetClient } from "@/redux/slices/clientSlice";

function LoginBox() {
  const {
    inputValues,
    loginData,
    submitData,
    errorValues,
    touchedValues,
    formNotFound,
  } = useLoginContext();

  const handleGoogleLoginClick = () => {
    const newWindow = window.open(
      "http://localhost:3001/v1/auth/google",
      "_BLANK",
      "height=500,width=600,left=0,top=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no"
    );

    if (newWindow) {
      newWindow.onload = () => {
        newWindow.document.write(`
        <script>
          window.onload = function() {
            window.opener = null;
            window.open('', '_self');
            window.close();
            localStorage.setItem('tabClosed', 'true');
            sessionStorage.setItem(
        "keepLoggedIn",
        JSON.stringify({ value: checked })
      );
          };
        </script>
      `);
      };
    }
  };

  window.addEventListener("message", (event) => {
    if (event.data.type === "loginComplete") {
      const loginGoogleData = event.data.data;

      // Realiza la redirección en la ventana principal
      // Puedes usar el enlace proporcionado o cualquier otra lógica de redirección
      window.location.href = `http://localhost:5173/public/login`;
    }
  });
  const nose = (e: ChangeEventType) => {
    changeSession(e);
    // setKeepLoggedIn((el) => !el);
  };

  const changeSession = (e: ChangeEventType) => {
    const { checked } = e.target;
    if (checked) {
      sessionStorage.setItem(
        "keepLoggedIn",
        JSON.stringify({ value: checked })
      );
    } else {
      sessionStorage.removeItem("keepLoggedIn");
    }
  };

  const handleBeforeUnload = () => {
    const value  = JSON.parse(sessionStorage.getItem("keepLoggedIn") as string)?.value
    if (!value)
      localStorage.removeItem(clientKey);
    else return;
  };
  
  window.addEventListener("beforeunload", handleBeforeUnload);



  return (
    <Form onSubmit={submitData}>
      {/* <a href="http://localhost:3001/v1/auth/google" target="_BLANK">
        Google
      </a> */}
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
        <FormInputPassword
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
        <DivKeepLoggedIn>
          <label htmlFor="keepLoggedIn">Mantener sesion iniciada</label>
          <input
            type="checkbox"
            onChange={(e) => nose(e)}
            name="keepLoggedIn"
            id="keepLoggedIn"
          />
        </DivKeepLoggedIn>
        <DivBtnLogin>
          <BtnLogin>Ingresar</BtnLogin>
        </DivBtnLogin>
        <BrnLoginGoogle type="button" onClick={handleGoogleLoginClick}>
          <i>
            <FcGoogle size={20} />
          </i>
          <p>Iniciar con Google</p>
        </BrnLoginGoogle>
        <PNotFound $notFound={formNotFound}>
          Verifique si el email o contraseña ingresados son correctos
        </PNotFound>
        <DivNoRegister>
          <H6NoRegister>
            <SpanNoRegister
              to={`/${PublicRoutes.PUBLIC}/${PublicRoutes.FORGOTTEM_PASSWORD}`}
            >
              He olvidado mi contraseña
            </SpanNoRegister>
          </H6NoRegister>
        </DivNoRegister>
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
      </SectionLoginBox>
    </Form>
  );
}
export default LoginBox;
