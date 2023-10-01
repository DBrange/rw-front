import { SectionFormContainer } from "@/styledComponents";
import { FormInput, FormSelect } from "..";
import { ChangeEventType, SelectEventType } from "@/pages";
import { RegisterValues, TouchedRegisterValues, ErrorsRegisterValues } from "@/pages/public/Register";

interface Props {
  changeInputValues: (e: ChangeEventType) => void;
  inputValues: RegisterValues;
  inputTouched: TouchedRegisterValues;
  errorsInputValues: Partial<ErrorsRegisterValues> | undefined;
  changeSelectValues: (e: SelectEventType) => void;
}
function FormRegisterPersonalData({
  changeInputValues,
  inputValues,
  inputTouched,
  errorsInputValues,
  changeSelectValues,
}: Props) {
  return (
    <SectionFormContainer>
      <FormInput
        label="Nombre"
        value={inputValues?.registerPersonal?.name}
        touched={inputTouched?.registerPersonal?.name}
        error={errorsInputValues?.registerPersonal?.name}
        handleChange={changeInputValues}
        name="registerPersonal.name"
        id="registerPersonal.name"
        type="text"
        placeholder="Ingresar nombre"
      />
      <FormInput
        label="Apellido"
        value={inputValues?.registerPersonal?.lastName}
        touched={inputTouched?.registerPersonal?.lastName}
        error={errorsInputValues?.registerPersonal?.lastName}
        handleChange={changeInputValues}
        name="registerPersonal.lastName"
        id="registerPersonal.lastName"
        type="text"
        placeholder="Ingresar apellido"
      />
      <FormInput
        label="Numero telefonico"
        value={inputValues?.registerPersonal?.phoneNumber}
        touched={inputTouched?.registerPersonal?.phoneNumber}
        error={errorsInputValues?.registerPersonal?.phoneNumber}
        handleChange={changeInputValues}
        name="registerPersonal.phoneNumber"
        id="registerPersonal.phoneNumber"
        type="text"
        placeholder="Ingresar numero telefonico"
      />
      <FormSelect
        label="Sexo"
        value={inputValues?.registerPersonal?.gender}
        touched={inputTouched?.registerPersonal?.gender}
        error={errorsInputValues?.registerPersonal?.gender}
        handleChange={changeSelectValues}
        name="registerPersonal.gender"
        id="registerPersonal.gender"
        options={["HOMBRE", "MUJER", "OTRO"]}
      />
      <FormInput
        label="Fecha de nacimiento"
        value={inputValues?.registerPersonal?.birthDate}
        touched={inputTouched?.registerPersonal?.birthDate}
        error={errorsInputValues?.registerPersonal?.birthDate}
        handleChange={changeInputValues}
        name="registerPersonal.birthDate"
        id="registerPersonal.birthDate"
        type="date"
        placeholder="Ingresar fecha de nacimiento"
      />
      <FormInput
        label="DNI"
        value={inputValues?.registerPersonal?.dni}
        touched={inputTouched?.registerPersonal?.dni}
        error={errorsInputValues?.registerPersonal?.dni}
        handleChange={changeInputValues}
        name="registerPersonal.dni"
        id="registerPersonal.dni"
        type="text"
        placeholder="Ingresar DNI"
      />
      <FormInput
        label="Residencia"
        value={inputValues?.registerPersonal?.address}
        touched={inputTouched?.registerPersonal?.address}
        error={errorsInputValues?.registerPersonal?.address}
        handleChange={changeInputValues}
        name="registerPersonal.address"
        id="registerPersonal.address"
        type="text"
        placeholder="Ingresar residencia"
      />
      <FormInput
        label="Email"
        value={inputValues?.registerPersonal?.email}
        touched={inputTouched?.registerPersonal?.email}
        error={errorsInputValues?.registerPersonal?.email}
        handleChange={changeInputValues}
        name="registerPersonal.email"
        id="registerPersonal.email"
        type="text"
        placeholder="Ingresar email"
      />
      <FormInput
        label="Email alternativo"
        value={inputValues?.registerPersonal?.altEmail}
        touched={inputTouched?.registerPersonal?.altEmail}
        error={errorsInputValues?.registerPersonal?.altEmail}
        handleChange={changeInputValues}
        name="registerPersonal.altEmail"
        id="registerPersonal.altEmail"
        type="text"
        placeholder="Ingresar email alternativo"
      />
      <FormInput
        label="Contraseña"
        value={inputValues?.registerPersonal?.password}
        touched={inputTouched?.registerPersonal?.password}
        error={errorsInputValues?.registerPersonal?.password}
        handleChange={changeInputValues}
        name="registerPersonal.password"
        id="registerPersonal.password"
        type="password"
        placeholder="Ingresar contraseña"
      />
    </SectionFormContainer>
  );
}
export default FormRegisterPersonalData