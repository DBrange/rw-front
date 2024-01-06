import { ChangeEventType } from "@/pages";
import { AppStore } from "@/redux";
import {
  modalEditPassword,
  modalEditPasswordError,
  modalToast,
  modalToastError
} from "@/services/sharing-information.service";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import useSWRMutation from "swr/mutation";

import { FormInput, FormInputPassword, H3Modal, SectionModalBg } from "@/components";
import { P } from "@/styledComponents";
import { PiWarningCircleFill } from "react-icons/pi";
import {
  UpdatePasswordtUrl,
  updatePassword,
} from "../../services/modalUpdatePassword.service";
import {
  BtnModalUpdate,
  DivBtnModalUpdate,
  DivModalUpdate,
  SpanModalUpdate,
} from "../ModalUpdate/ModalUpdate.styled";
import {
  NewPassword,
  NewPasswordError,
  NewPasswordTouched,
} from "./newPassword.interface";

interface Props {
  modalActive: boolean;
}

function ModalUpdatePassword({ modalActive }: Props) {
  const [passwordCatchError, setPasswordCatchError] = useState<boolean>(false);
  const [password, setPassword] = useState<NewPassword>({
    oldPassword: "",
    newPassword: "",
  });

  const [passwordError, setPasswordError] = useState<
    Partial<NewPasswordError> | undefined
  >(undefined);
  const [passwordTouched, setPasswordTouched] = useState<NewPasswordTouched>({
    oldPassword: false,
    newPassword: false,
  });
  const userId = useSelector((store: AppStore) => store.user.user?.id);

  const { trigger } = useSWRMutation(
    UpdatePasswordtUrl(userId),
    updatePassword
  );

  const handlePasswordValue = (e: ChangeEventType) => {
    const { value, name } = e.target;

    setPassword({
      ...password,
      [name]: value,
    });

    setPasswordTouched({
      ...passwordTouched,
      [name]: value,
    });

    setPasswordError(
      validate({
        ...password,
        [name]: value,
      })
    );
  };

  const validate = ({ newPassword, oldPassword }: NewPasswordError) => {
    const errors: Partial<NewPasswordError> | undefined = {};

    const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!.])(.{10,})$/;
    if (!oldPassword?.trim().length)
      errors.oldPassword = "No puede estar vacio";
    if (!regexPassword.test(oldPassword))
      errors.oldPassword =
        "Debe contener al menos una mayuscula, un numero, un signo, y un minimo de 10 caracteres";
    if (!newPassword?.trim().length)
      errors.newPassword = "No puede estar vacio";
    if (!regexPassword.test(newPassword))
      errors.newPassword =
        "Debe contener al menos una mayuscula, un numero, un signo, y un minimo de 10 caracteres";

    return errors;
  };

  const send = () => {
    trigger(password);
    setPassword({
      oldPassword: "",
      newPassword: "",
    });
    setPasswordCatchError(false);
  };

  const close = () => {
    modalEditPassword.setSubject(false);
    setPassword({
      oldPassword: "",
      newPassword: "",
    });
    setPasswordError({ ...passwordError, newPassword: "-" });
    setPasswordTouched({
      newPassword: false,
      oldPassword: false,
    });
    setPasswordCatchError(false);
  };

  useEffect(() => {
    modalEditPasswordError.getSubject.subscribe((bol) =>
      setPasswordCatchError(bol)
    );
  }, []);

  useEffect(() => {
    setPasswordError({
      ...passwordError,
      newPassword: "-",
    });
  }, []);

  return (
    <SectionModalBg $modalActive={modalActive}>
      <DivModalUpdate $modalActive={modalActive}>
        <SpanModalUpdate onClick={close}>
          <IoClose size={20} />
        </SpanModalUpdate>
        <H3Modal>Actualice su informacion</H3Modal>
        <FormInputPassword
          label="Contraseña actual"
          value={password.oldPassword}
          touched={passwordTouched.oldPassword}
          handleChange={handlePasswordValue}
          name={"oldPassword"}
          id={"oldPassword"}
          type="text"
          placeholder="Ingresar contraseña"
          error={passwordError?.oldPassword}
        />
        <FormInputPassword
          label="Nueva contraseña"
          value={password.newPassword}
          touched={passwordTouched.newPassword}
          handleChange={handlePasswordValue}
          name={"newPassword"}
          id={"newPassword"}
          type="text"
          placeholder="Ingresar contraseña"
          error={passwordError?.newPassword}
        />
        <span>
          <P $error={passwordCatchError}>
            <PiWarningCircleFill />
            {"Su contraseña actual no es es la correcta" || "a"}
          </P>
        </span>
        <DivBtnModalUpdate>
          <BtnModalUpdate
            onClick={send}
            $error={
              !!(passwordError?.newPassword || passwordError?.oldPassword)
            }
          >
            Hecho
          </BtnModalUpdate>
        </DivBtnModalUpdate>
      </DivModalUpdate>
    </SectionModalBg>
  );
}
export default ModalUpdatePassword;
