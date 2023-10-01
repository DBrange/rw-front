import { SectionFormContainer } from "@/styledComponents";
import { FormInput } from "..";
import { ChangeEventType } from "@/pages";
import { RegisterValues, TouchedRegisterValues, ErrorsRegisterValues } from "@/pages/public/Register";
interface Props {
  changeInputValues: (e: ChangeEventType) => void;
  inputValues: RegisterValues;
  inputTouched: TouchedRegisterValues;
  errorsInputValues: Partial<ErrorsRegisterValues> | undefined;
}

function FormRegisterLegalPersonalData({
  changeInputValues,
  inputValues,
  inputTouched,
  errorsInputValues,
}: Props) {
  return (
    <SectionFormContainer>
      <FormInput
        label="Nombre de la compañia*"
        value={inputValues?.registerLegalPersonal?.companyName}
        touched={inputTouched?.registerLegalPersonal?.companyName}
        error={errorsInputValues?.registerLegalPersonal?.companyName}
        handleChange={changeInputValues}
        name="registerLegalPersonal.companyName"
        id="registerLegalPersonal.companyName"
        type="text"
        placeholder="Ingresar nombre de la compañia"
      />
      <FormInput
        label="CUIT*"
        value={inputValues?.registerLegalPersonal?.cuit}
        touched={inputTouched?.registerLegalPersonal?.cuit}
        error={errorsInputValues?.registerLegalPersonal?.cuit}
        handleChange={changeInputValues}
        name="registerLegalPersonal.cuit"
        id="registerLegalPersonal.cuit"
        type="text"
        placeholder="Ingresar CUIT"
      />
      <FormInput
        label="Numero telefonico*"
        value={inputValues?.registerLegalPersonal?.phoneNumber}
        touched={inputTouched?.registerLegalPersonal?.phoneNumber}
        error={errorsInputValues?.registerLegalPersonal?.phoneNumber}
        handleChange={changeInputValues}
        name="registerLegalPersonal.phoneNumber"
        id="registerLegalPersonal.phoneNumber"
        type="text"
        placeholder="Ingresar numero telefonico"
      />
      <FormInput
        label="Direccion*"
        value={inputValues?.registerLegalPersonal?.address}
        touched={inputTouched?.registerLegalPersonal?.address}
        error={errorsInputValues?.registerLegalPersonal?.address}
        handleChange={changeInputValues}
        name="registerLegalPersonal.address"
        id="registerLegalPersonal.address"
        type="text"
        placeholder="Ingresar direccion"
      />{" "}
      <FormInput
        label="Email*"
        value={inputValues?.registerLegalPersonal?.email}
        touched={inputTouched?.registerLegalPersonal?.email}
        error={errorsInputValues?.registerLegalPersonal?.email}
        handleChange={changeInputValues}
        name="registerLegalPersonal.email"
        id="registerLegalPersonal.email"
        type="text"
        placeholder="Ingresar email"
      />
      <FormInput
        label="Email alternativo"
        value={inputValues?.registerLegalPersonal?.altEmail}
        touched={inputTouched?.registerLegalPersonal?.altEmail}
        error={errorsInputValues?.registerLegalPersonal?.altEmail}
        handleChange={changeInputValues}
        name="registerLegalPersonal.altEmail"
        id="registerLegalPersonal.altEmail"
        type="text"
        placeholder="Ingresar email alternativo"
      />
      <FormInput
        label="Contraseña"
        value={inputValues?.registerLegalPersonal?.password}
        touched={inputTouched?.registerLegalPersonal?.password}
        error={errorsInputValues?.registerLegalPersonal?.password}
        handleChange={changeInputValues}
        name="registerLegalPersonal.password"
        id="registerLegalPersonal.password"
        type="password"
        placeholder="Ingresar contraseña"
      />
    </SectionFormContainer>
  );
}
export default FormRegisterLegalPersonalData