import {
  AllReportValues,
  ChangeEventType,
  ClientCreateReportValues,
  ErrorsAllReportValues,
  ErrorsClientCreateReportValues,
  SelectEventType,
  TouchedAllReportValues,
  TouchedClientCreateReportValues,
} from "@/pages";
import { FormInput, FormSelect, FormTitle } from "..";
import { DivSeparator } from "./FormThirdPartyInjured.styled";
import { SectionFormContainer } from "@/styledComponents";

interface Props {
  inputValues: AllReportValues | ClientCreateReportValues;
  inputTouched: TouchedAllReportValues | TouchedClientCreateReportValues;
  errorsInputValues:
    | Partial<ErrorsAllReportValues>
    | Partial<ErrorsClientCreateReportValues>
    | undefined;
  changeInputValues: (e: ChangeEventType) => void;
  changeSelectValues: (e: SelectEventType) => void;
  amountInjured: number;
  index: number;
}

function FormThirdPartyInjured({
  inputValues,
  inputTouched,
  errorsInputValues,
  changeInputValues,
  changeSelectValues,
  amountInjured,
  index,
}: Props) {
  const objectValues = inputValues?.thirdPartyInjured?.injuredInfo?.[index] || {};
  const objectTouched = inputTouched?.thirdPartyInjured?.injuredInfo?.[index] || {};
  const objectError =
    errorsInputValues?.thirdPartyInjured?.injuredInfo?.[index] || {};
  const stringValues = `thirdPartyInjured.injuredInfo.${index}`;

  return (
    <SectionFormContainer>
      <FormTitle>{`Lesionado n° ${index + 1}`}</FormTitle>

      <FormInput
        label="Nombre*"
        value={objectValues?.name}
        touched={objectTouched?.name}
        error={objectError?.name}
        handleChange={changeInputValues}
        name={`${stringValues}.name`}
        id={`${stringValues}.name`}
        type="text"
        placeholder="Ingresar nombre"
      />
      <FormInput
        label="Apellido*"
        value={objectValues?.lastName}
        touched={objectTouched?.lastName}
        error={objectError?.lastName}
        handleChange={changeInputValues}
        name={`${stringValues}.lastName`}
        id={`${stringValues}.lastName`}
        type="text"
        placeholder="Ingresar apellido"
      />
      <FormInput
        label="Fecha de nacimiento*"
        value={objectValues?.birthDate}
        touched={objectTouched?.birthDate}
        error={objectError?.birthDate}
        handleChange={changeInputValues}
        name={`${stringValues}.birthDate`}
        id={`${stringValues}.birthDate`}
        type="date"
        placeholder="Ingresar fecha de nacimiento"
      />
      <FormInput
        label="Numero telefonico*"
        value={objectValues?.phoneNumber}
        touched={objectTouched?.phoneNumber}
        error={objectError?.phoneNumber}
        handleChange={changeInputValues}
        name={`${stringValues}.phoneNumber`}
        id={`${stringValues}.phoneNumber`}
        type="text"
        placeholder="Ingresar numero telefonico"
      />
      <FormInput
        label="Email*"
        value={objectValues?.email}
        touched={objectTouched?.email}
        error={objectError?.email}
        handleChange={changeInputValues}
        name={`${stringValues}.email`}
        id={`${stringValues}.email`}
        type="text"
        placeholder="Ingresar email"
      />
      <FormSelect
        label="Sexo"
        value={objectValues?.gender}
        touched={objectTouched?.gender}
        error={objectError?.gender}
        handleChange={changeSelectValues}
        name={`${stringValues}.gender`}
        id={`${stringValues}.gender`}
        options={["HOMBRE", "MUJER", "OTRO"]}
      />
      <FormInput
        label="DNI*"
        value={objectValues?.dni}
        touched={objectTouched?.dni}
        error={objectError?.dni}
        handleChange={changeInputValues}
        name={`${stringValues}.dni`}
        id={`${stringValues}.dni`}
        type="text"
        placeholder="Ingresar dni"
      />
      <FormInput
        label="Residencia*"
        value={objectValues?.location}
        touched={objectTouched?.location}
        error={objectError?.location}
        handleChange={changeInputValues}
        name={`${stringValues}.location`}
        id={`${stringValues}.location`}
        type="text"
        placeholder="Ingresar residencia"
      />
      <FormInput
        label="Tipo de lesion*"
        value={objectValues?.injuries}
        touched={objectTouched?.injuries}
        error={objectError?.injuries}
        handleChange={changeInputValues}
        name={`${stringValues}.injuries`}
        id={`${stringValues}.injuries`}
        type="text"
        placeholder="Ingresar residencia"
      />

      {index + 1 === amountInjured ? <></> : <DivSeparator></DivSeparator>}
    </SectionFormContainer>
  );
}
export default FormThirdPartyInjured;
