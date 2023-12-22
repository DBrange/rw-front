import { LinkNavigate } from "@/styledComponents";
import person2 from "../../../assets/person2.svg";
import { PrivateRoutes } from "@/models/types/routes";
import {
  SectionModalBg,
  DivModalSent,
  ImgModal,
  H3Modal,
  H4Modal,
  BtnModal,
  FormInput,
} from "..";
import { ChangeEventType } from "@/pages";
import { useEffect, useState } from "react";
import {
  BtnModalUpdate,
  DivBtnModalUpdate,
  DivModalUpdate,
  SpanModalUpdate,
} from "./ModalUpdate.styled";
import { IoClose } from "react-icons/io5";
import { modalEditMyProfile } from "@/services/sharing-information.service";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppStore } from "@/redux";
import { updateMyProfileAsync } from "@/redux/slices/clientSlice";

interface Props {
  modalActive: boolean;
  label: "address" | "phoneNumber" | undefined;
}
function ModalUpdate({ modalActive, label }: Props) {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string | undefined>(undefined);
  const [nameTouched, setNameTouched] = useState<boolean>(false);
  const dispactAsync = useDispatch<AppDispatch>();
  const userId = useSelector((store: AppStore) => store.user.user?.id);

  const handleNameValue = (e: ChangeEventType) => {
    const { value } = e.target;
    const regexNumber = /^\d+$/;
    setName(value);
    setNameTouched(true);
    if (label === "phoneNumber") {
      if (!value?.trim().length) setNameError("No puede estar vacio");
      else if (!regexNumber.test(value))
        setNameError("Solo puede contener numeros");
      else setNameError(undefined);
    } else if (label === "address") {
      if (!value?.trim().length) setNameError("No puede estar vacio")
      else setNameError(undefined)
    }
  };

  const send = () => {
    const phoneNumber = label === "phoneNumber" ? name : undefined;
    const address = label === "address" ? name : undefined;
    dispactAsync(
      updateMyProfileAsync({
        userId,
        phoneNumber,
        address,
      })
    );
    modalEditMyProfile.setSubject(false);
    setName('')
    setNameError(undefined)
    setNameTouched(false)
  };

  useEffect(() => {
    setNameError("-");
  }, []);

  return (
    <SectionModalBg $modalActive={modalActive}>
      <DivModalUpdate $modalActive={modalActive}>
        <SpanModalUpdate onClick={() => modalEditMyProfile.setSubject(false)}>
          <IoClose size={20} />
        </SpanModalUpdate>
        <H3Modal>Actualice su informacion</H3Modal>
        <FormInput
          label={label === "phoneNumber" ? "Numero telefonico" : "Domicilio"}
          value={name}
          touched={nameTouched}
          handleChange={handleNameValue}
          name={label as string}
          id={label as string}
          type="text"
          placeholder="Nueva informacion"
          error={nameError}
        />
        <DivBtnModalUpdate>
          <BtnModalUpdate onClick={send} $error={nameError ? true : false}>
            Hecho
          </BtnModalUpdate>
        </DivBtnModalUpdate>
      </DivModalUpdate>
    </SectionModalBg>
  );
}
export default ModalUpdate;
