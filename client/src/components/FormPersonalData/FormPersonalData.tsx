import { SectionFormContainer } from "@/styledComponents";
import { FormInput, FormSelect } from "..";

interface Props {
  changeInputValues: any;
  inputValues: any;
  inputTouched: any;
  errorsInputValues: any;
  changeSelectValues: any;
}

function FormPersonalData({
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
        value={inputValues?.personal?.name}
        touched={inputTouched?.personal?.name}
        error={errorsInputValues?.personal?.name}
        handleChange={changeInputValues}
        name="personal.name"
        id="personal.name"
        type="text"
        placeholder="Ingresar nombre"
      />
      <FormInput
        label="Apellido"
        value={inputValues?.personal?.lastName}
        touched={inputTouched?.personal?.lastName}
        error={errorsInputValues?.personal?.lastName}
        handleChange={changeInputValues}
        name="personal.lastName"
        id="personal.lastName"
        type="text"
        placeholder="Ingresar apellido"
      />
      <FormInput
        label="Numero telefonico"
        value={inputValues?.personal?.phoneNumber}
        touched={inputTouched?.personal?.phoneNumber}
        error={errorsInputValues?.personal?.phoneNumber}
        handleChange={changeInputValues}
        name="personal.phoneNumber"
        id="personal.phoneNumber"
        type="text"
        placeholder="Ingresar numero telefonico"
      />
      <FormInput
        label="Email"
        value={inputValues?.personal?.email}
        touched={inputTouched?.personal?.email}
        error={errorsInputValues?.personal?.email}
        handleChange={changeInputValues}
        name="personal.email"
        id="personal.email"
        type="text"
        placeholder="Ingresar email"
      />
      <FormInput
        label="Email alternativo"
        value={inputValues?.personal?.altEmail}
        touched={inputTouched?.personal?.altEmail}
        error={errorsInputValues?.personal?.altEmail}
        handleChange={changeInputValues}
        name="personal.altEmail"
        id="personal.altEmail"
        type="text"
        placeholder="Ingresar email alternativo"
      />

      <FormSelect
        label="Sexo"
        value={inputValues?.personal?.gender}
        touched={inputTouched?.personal?.gender}
        error={errorsInputValues?.personal?.gender}
        handleChange={changeSelectValues}
        name="personal.gender"
        id="personal.gender"
        options={["HOMBRE", "MUJER", "OTRO"]}
      />
      <FormInput
        label="Fecha de nacimiento"
        value={inputValues?.personal?.birthDate}
        touched={inputTouched?.personal?.birthDate}
        error={errorsInputValues?.personal?.birthDate}
        handleChange={changeInputValues}
        name="personal.birthDate"
        id="personal.birthDate"
        type="date"
        placeholder="Ingresar fecha de nacimiento"
      />
      <FormInput
        label="DNI"
        value={inputValues?.personal?.dni}
        touched={inputTouched?.personal?.dni}
        error={errorsInputValues?.personal?.dni}
        handleChange={changeInputValues}
        name="personal.dni"
        id="personal.dni"
        type="text"
        placeholder="Ingresar DNI"
      />
      <FormInput
        label="Residencia"
        value={inputValues?.personal?.address}
        touched={inputTouched?.personal?.address}
        error={errorsInputValues?.personal?.address}
        handleChange={changeInputValues}
        name="personal.address"
        id="personal.address"
        type="text"
        placeholder="Ingresar residencia"
      />
    </SectionFormContainer>
  );
}
export default FormPersonalData;
