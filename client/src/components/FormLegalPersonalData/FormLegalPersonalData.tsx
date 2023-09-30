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

function FormLegalPersonalData({
  changeInputValues,
  inputValues,
  inputTouched,
  errorsInputValues,
}: Props) {
  return (
    <SectionFormContainer>
      <FormInput
        label="Nombre de la compañia*"
        value={inputValues?.legalPersonal?.companyName}
        touched={inputTouched?.legalPersonal?.companyName}
        error={errorsInputValues?.legalPersonal?.companyName}
        handleChange={changeInputValues}
        name="legalPersonal.companyName"
        id="legalPersonal.companyName"
        type="text"
        placeholder="Ingresar nombre de la compañia"
      />
      <FormInput
        label="CUIT*"
        value={inputValues?.legalPersonal?.cuit}
        touched={inputTouched?.legalPersonal?.cuit}
        error={errorsInputValues?.legalPersonal?.cuit}
        handleChange={changeInputValues}
        name="legalPersonal.cuit"
        id="legalPersonal.cuit"
        type="text"
        placeholder="Ingresar CUIT"
      />
      <FormInput
        label="Numero telefonico*"
        value={inputValues?.legalPersonal?.phoneNumber}
        touched={inputTouched?.legalPersonal?.phoneNumber}
        error={errorsInputValues?.legalPersonal?.phoneNumber}
        handleChange={changeInputValues}
        name="legalPersonal.phoneNumber"
        id="legalPersonal.phoneNumber"
        type="text"
        placeholder="Ingresar numero telefonico"
      />
      <FormInput
        label="Email*"
        value={inputValues?.legalPersonal?.email}
        touched={inputTouched?.legalPersonal?.email}
        error={errorsInputValues?.legalPersonal?.email}
        handleChange={changeInputValues}
        name="legalPersonal.email"
        id="legalPersonal.email"
        type="text"
        placeholder="Ingresar email"
      />
      <FormInput
        label="Email alternativo"
        value={inputValues?.legalPersonal?.altEmail}
        touched={inputTouched?.legalPersonal?.altEmail}
        error={errorsInputValues?.legalPersonal?.altEmail}
        handleChange={changeInputValues}
        name="legalPersonal.altEmail"
        id="legalPersonal.altEmail"
        type="text"
        placeholder="Ingresar email alternativo"
      />
      <FormInput
        label="Direccion*"
        value={inputValues?.legalPersonal?.address}
        touched={inputTouched?.legalPersonal?.address}
        error={errorsInputValues?.legalPersonal?.address}
        handleChange={changeInputValues}
        name="legalPersonal.address"
        id="legalPersonal.address"
        type="text"
        placeholder="Ingresar direccion"
      />
    </SectionFormContainer>
  );
}
export default FormLegalPersonalData;
