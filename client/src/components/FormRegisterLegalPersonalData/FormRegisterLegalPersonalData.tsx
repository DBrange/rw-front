import { SectionFormContainer } from "@/styledComponents";
import { FormInput } from "..";
import { ChangeEventType } from "@/pages";
import { RegisterValues, TouchedRegisterValues, ErrorsRegisterValues } from "@/pages/public/Register";
interface Props {
  changeInputValues: (e: ChangeEventType) => void;
  inputValues: RegisterValues;
  inputTouched: TouchedRegisterValues;
  errorsInputValues: Partial<ErrorsRegisterValues> | undefined;
  objectName: "registerLegalPersonal" | "registerBrokerLegalPersonal";
  HTMLElement?: JSX.Element
}

function FormRegisterLegalPersonalData({
  changeInputValues,
  inputValues,
  inputTouched,
  errorsInputValues,
  objectName,
  HTMLElement,
}: Props) {
  return (
    <SectionFormContainer>
      <FormInput
        label="Nombre de la compañia*"
        value={inputValues?.[objectName]?.companyName}
        touched={inputTouched?.[objectName]?.companyName}
        error={errorsInputValues?.[objectName]?.companyName}
        handleChange={changeInputValues}
        name={`${objectName}.companyName`}
        id={`${objectName}.companyName`}
        type="text"
        placeholder="Ingresar nombre de la compañia"
      />
      <FormInput
        label="CUIT*"
        value={inputValues?.[objectName]?.cuit}
        touched={inputTouched?.[objectName]?.cuit}
        error={errorsInputValues?.[objectName]?.cuit}
        handleChange={changeInputValues}
        name={`${objectName}.cuit`}
        id={`${objectName}.cuit`}
        type="text"
        placeholder="Ingresar CUIT"
      />
      <FormInput
        label="Numero telefonico*"
        value={inputValues?.[objectName]?.phoneNumber}
        touched={inputTouched?.[objectName]?.phoneNumber}
        error={errorsInputValues?.[objectName]?.phoneNumber}
        handleChange={changeInputValues}
        name={`${objectName}.phoneNumber`}
        id={`${objectName}.phoneNumber`}
        type="text"
        placeholder="Ingresar numero telefonico"
      />
      <FormInput
        label="Direccion*"
        value={inputValues?.[objectName]?.address}
        touched={inputTouched?.[objectName]?.address}
        error={errorsInputValues?.[objectName]?.address}
        handleChange={changeInputValues}
        name={`${objectName}.address`}
        id={`${objectName}.address`}
        type="text"
        placeholder="Ingresar direccion"
      />
      {HTMLElement}
      <FormInput
        label="Email*"
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
      <FormInput
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
export default FormRegisterLegalPersonalData