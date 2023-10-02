import {
  DivRenderProperty,
  DivRenderPropertys,
  H3PropertyTitle,
  H4PropertyValue,
} from "@/components";
import {
  BrokerLegalPersonalValues,
  RegisterLegalPersonalValues,
} from "@/models";

interface Props {
  inputLegalPersonalValues: RegisterLegalPersonalValues;
  brokerValues?: BrokerLegalPersonalValues;
}

function FormRegisterLegalPersonalDetail({
  inputLegalPersonalValues,
  brokerValues,
}: Props) {
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
      {brokerValues && (
        <>
          <DivRenderProperty>
            <H4PropertyValue>Matricula: </H4PropertyValue>
            {brokerValues?.enrollment}
          </DivRenderProperty>

          <DivRenderProperty>
            <H4PropertyValue>Razon social: </H4PropertyValue>
            {brokerValues?.businessName}
          </DivRenderProperty>
        </>
      )}
    </DivRenderPropertys>
  );
}
export default FormRegisterLegalPersonalDetail;
