import { PersonalValues } from "@/models";
import {
  DivRenderProperty,
  DivRenderPropertys,
  H3PropertyTitle,
  H4PropertyValue,
} from "./FormPersonalDetail.styled";

interface Props {
  inputPersonalValues: PersonalValues;
}

function FormPersonalDetail({ inputPersonalValues }: Props) {
  const birthDate = inputPersonalValues.birthDate
    .split("-")
    .reverse()
    .join("-");

  return (
    <DivRenderPropertys>
      <H3PropertyTitle>Persona particular</H3PropertyTitle>

      <DivRenderProperty>
        <H4PropertyValue>Nombre: </H4PropertyValue>
        {inputPersonalValues.name}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Apellido: </H4PropertyValue>
        {inputPersonalValues.lastName}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Numero telefonico: </H4PropertyValue>
        {inputPersonalValues.phoneNumber}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Sexo: </H4PropertyValue>
        {inputPersonalValues.gender}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Email: </H4PropertyValue>
        {inputPersonalValues.email}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Email alternativo: </H4PropertyValue>
        {inputPersonalValues.altEmail}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Fecha de nacimiento: </H4PropertyValue>
        {birthDate}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>DNI: </H4PropertyValue>
        {inputPersonalValues.dni}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Residencia: </H4PropertyValue>
        {inputPersonalValues.address}
      </DivRenderProperty>
    </DivRenderPropertys>
  );
}
export default FormPersonalDetail;
