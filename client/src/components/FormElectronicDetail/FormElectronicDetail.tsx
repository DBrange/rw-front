import { ElectronicValues, PhoneValues } from "@/models";
import { DivRenderPropertys, H3PropertyTitle, DivRenderProperty, H4PropertyValue } from "..";


interface Props {
  inputElectronicValues: ElectronicValues;
  inputPhoneValues: PhoneValues;
}

function FormElectronicDetail({
  inputElectronicValues,
  inputPhoneValues,
}: Props) {
  return (
    <DivRenderPropertys>
      <H3PropertyTitle>Electrodomestico</H3PropertyTitle>

      <DivRenderProperty>
        <H4PropertyValue>Tipo de electrodomestico: </H4PropertyValue>
        {inputElectronicValues.type}
      </DivRenderProperty>

      {inputElectronicValues.type === "CELULAR" && (
        <>
          <DivRenderProperty>
            <H4PropertyValue>Numero del movil: </H4PropertyValue>
            {inputPhoneValues.phoneNumber}
          </DivRenderProperty>

          <DivRenderProperty>
            <H4PropertyValue>Servicio del movil: </H4PropertyValue>
            {inputPhoneValues.phoneService}
          </DivRenderProperty>

          <DivRenderProperty>
            <H4PropertyValue>IMEI: </H4PropertyValue>
            {inputPhoneValues.imei}
          </DivRenderProperty>
        </>
      )}

      <DivRenderProperty>
        <H4PropertyValue>Marca: </H4PropertyValue>
        {inputElectronicValues.brand}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Modelo: </H4PropertyValue>
        {inputElectronicValues.model}
      </DivRenderProperty>
    </DivRenderPropertys>
  );
}
export default FormElectronicDetail;
