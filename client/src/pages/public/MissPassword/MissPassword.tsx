import { SectionModalBg, H3Modal, FormInput, LoaderImages } from "@/components";
import {
  DivModalUpdate,
  SpanModalUpdate,
  DivBtnModalUpdate,
  BtnModalUpdate,
} from "@/pages";
import { AppDispatch, AppStore } from "@/redux";
import { updateMyProfileAsync } from "@/redux/slices/clientSlice";
import {
  loaderImageService,
  modalEditMyProfile,
} from "@/services/sharing-information.service";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEventType, ClickEventType } from "..";
import { Container } from "@/styledComponents";
import useSWRMutation from "swr/mutation";
import {
  FogottemPasswordUrl,
  forgottemPassword,
} from "./services/miss-password.service";
import { PForgottemPassword } from "./ForgottemPassword.styled";

function MissPassword() {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string | undefined>("a");
  const [emailTouched, setEmailTouched] = useState<boolean>(false);

  const handleEmailValue = (e: ChangeEventType) => {
    const { value } = e.target;

    setEmail(value);

    setEmailError(validate(value));

    setEmailTouched(true);
  };

  const validate = (value: string) => {
    let error: string | undefined;

    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!value?.trim().length) error = "No puede estar vacio";
    if (!regexEmail.test(value)) error = "Debe tener un formato de email";

    return error;
  };

  const { trigger } = useSWRMutation(
    FogottemPasswordUrl(email),
    forgottemPassword
  );

  const send = () => {
    trigger();
  };

  const [loaderImages, setLoaderImages] = useState<boolean>(false);
  useEffect(() => {
    loaderImageService.getSubject.subscribe((bol) => setLoaderImages(bol));
  }, []);
  return (
    <>
      <LoaderImages modalActive={loaderImages} />
      <Container>
        <SpanModalUpdate onClick={() => modalEditMyProfile.setSubject(false)}>
          <IoClose size={20} />
        </SpanModalUpdate>
        <H3Modal>Reestablecer contraseña</H3Modal>
        <FormInput
          label={"Email de su cuenta asociada"}
          value={email}
          touched={emailTouched}
          handleChange={handleEmailValue}
          name={"missPassword"}
          id={"missPassword"}
          type="text"
          placeholder="Ingresar email"
          error={emailError}
        />
        <DivBtnModalUpdate $right>
          <BtnModalUpdate onClick={send} $error={emailError ? true : false}>
            Enviar
          </BtnModalUpdate>
        </DivBtnModalUpdate>
        <PForgottemPassword>
          *Se le enviara un mail con una nueva contraseña
        </PForgottemPassword>
      </Container>
    </>
  );
}
export default MissPassword;
