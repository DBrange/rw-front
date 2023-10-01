import {
  DivRenderProperty,
  DivRenderPropertys,
  H3PropertyTitle,
  H4PropertyValue,
} from "@/components";
import { LegalPersonalValues } from "@/models";

interface Props {
  inputLegalPersonalValues: LegalPersonalValues;
}

function FormLegalPersonalDetail({ inputLegalPersonalValues }: Props) {
  return (
    <DivRenderPropertys>
      <H3PropertyTitle>Persona juridica</H3PropertyTitle>

      <DivRenderProperty>
        <H4PropertyValue>Nombre de la compañia: </H4PropertyValue>
        {inputLegalPersonalValues?.companyName}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>CUIT: </H4PropertyValue>
        {inputLegalPersonalValues?.cuit}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Numero telefonico: </H4PropertyValue>
        {inputLegalPersonalValues?.phoneNumber}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Residencia: </H4PropertyValue>
        {inputLegalPersonalValues?.address}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Email: </H4PropertyValue>
        {inputLegalPersonalValues?.email}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Email alternativo: </H4PropertyValue>
        {inputLegalPersonalValues?.altEmail}
      </DivRenderProperty>
    </DivRenderPropertys>
  );
}
export default FormLegalPersonalDetail;
