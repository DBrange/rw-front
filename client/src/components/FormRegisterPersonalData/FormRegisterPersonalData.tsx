import { SectionFormContainer } from "@/styledComponents";
import { FormInput, FormInputPassword, FormSelect } from "..";
import { ChangeEventType, SelectEventType } from "@/pages";
import {
  RegisterValues,
  TouchedRegisterValues,
  ErrorsRegisterValues,
} from "@/pages/public/Register";

interface Props {
  changeInputValues: (e: ChangeEventType) => void;
  inputValues: RegisterValues;
  inputTouched: TouchedRegisterValues;
  errorsInputValues: Partial<ErrorsRegisterValues> | undefined;
  changeSelectValues: (e: SelectEventType) => void;
  objectName: "registerPersonal" | "registerBrokerPersonal";
  HTMLElement?: JSX.Element;
}
function FormRegisterPersonalData({
  changeInputValues,
  inputValues,
  inputTouched,
  errorsInputValues,
  changeSelectValues,
  objectName,
  HTMLElement,
}: Props) {
  return (
    <SectionFormContainer>
      <FormInput
        label="Nombre"
        value={inputValues?.[objectName]?.name}
        touched={inputTouched?.[objectName]?.name}
        error={errorsInputValues?.[objectName]?.name}
        handleChange={changeInputValues}
        name={`${objectName}.name`}
        id={`${objectName}.name`}
        type="text"
        placeholder="Ingresar nombre"
      />
      <FormInput
        label="Apellido"
        value={inputValues?.[objectName]?.lastName}
        touched={inputTouched?.[objectName]?.lastName}
        error={errorsInputValues?.[objectName]?.lastName}
        handleChange={changeInputValues}
        name={`${objectName}.lastName`}
        id={`${objectName}.lastName`}
        type="text"
        placeholder="Ingresar apellido"
      />
      <FormInput
        label="Numero telefonico"
        value={inputValues?.[objectName]?.phoneNumber}
        touched={inputTouched?.[objectName]?.phoneNumber}
        error={errorsInputValues?.[objectName]?.phoneNumber}
        handleChange={changeInputValues}
        name={`${objectName}.phoneNumber`}
        id={`${objectName}.phoneNumber`}
        type="text"
        placeholder="Ingresar numero telefonico"
      />
      <FormSelect
        label="Sexo"
        value={inputValues?.[objectName]?.gender}
        touched={inputTouched?.[objectName]?.gender}
        error={errorsInputValues?.[objectName]?.gender}
        handleChange={changeSelectValues}
        name={`${objectName}.gender`}
        id={`${objectName}.gender`}
        options={["HOMBRE", "MUJER", "OTRO"]}
      />
      <FormInput
        label="Fecha de nacimiento"
        value={inputValues?.[objectName]?.birthDate}
        touched={inputTouched?.[objectName]?.birthDate}
        error={errorsInputValues?.[objectName]?.birthDate}
        handleChange={changeInputValues}
        name={`${objectName}.birthDate`}
        id={`${objectName}.birthDate`}
        type="date"
        placeholder="Ingresar fecha de nacimiento"
      />
      <FormInput
        label="DNI"
        value={inputValues?.[objectName]?.dni}
        touched={inputTouched?.[objectName]?.dni}
        error={errorsInputValues?.[objectName]?.dni}
        handleChange={changeInputValues}
        name={`${objectName}.dni`}
        id={`${objectName}.dni`}
        type="text"
        placeholder="Ingresar DNI"
      />
      <FormInput
        label="Residencia"
        value={inputValues?.[objectName]?.address}
        touched={inputTouched?.[objectName]?.address}
        error={errorsInputValues?.[objectName]?.address}
        handleChange={changeInputValues}
        name={`${objectName}.address`}
        id={`${objectName}.address`}
        type="text"
        placeholder="Ingresar residencia"
      />
      {HTMLElement}
      <FormInput
        label="Email"
        value={inputValues?.[objectName]?.email}
        touched={inputTouched?.[objectName]?.email}
        error={errorsInputValues?.[objectName]?.email}
        handleChange={changeInputValues}
        name={`${objectName}.email`}
        id={`${objectName}.email`}
        type="text"
        placeholder="Ingresar email"
      />
      <FormInput
        label="Email alternativo"
        value={inputValues?.[objectName]?.altEmail}
        touched={inputTouched?.[objectName]?.altEmail}
        error={errorsInputValues?.[objectName]?.altEmail}
        handleChange={changeInputValues}
        name={`${objectName}.altEmail`}
        id={`${objectName}.altEmail`}
        type="text"
        placeholder="Ingresar email alternativo"
      />
      <FormInputPassword
        label="Contraseña"
        value={inputValues?.[objectName]?.password}
        touched={inputTouched?.[objectName]?.password}
        error={errorsInputValues?.[objectName]?.password}
        handleChange={changeInputValues}
        name={`${objectName}.password`}
        id={`${objectName}.password`}
        type="password"
        placeholder="Ingresar contraseña"
      />
    </SectionFormContainer>
  );
}
export default FormRegisterPersonalData;
