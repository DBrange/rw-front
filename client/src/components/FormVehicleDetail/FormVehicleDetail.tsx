import {
  DivRenderPropertys,
  H3PropertyTitle,
  DivRenderProperty,
  H4PropertyValue,
  ImagesContainer,
  Image,
} from "@/components";
import { GncValues, VehicleValues } from "@/models";

interface Props {
  inputVehicleValues: VehicleValues;
  inputGncValues: GncValues;
}

function FormLegalVehicleDetail({ inputVehicleValues, inputGncValues }: Props) {
  const expireDate = inputGncValues.expireDate.split("-").reverse().join("-");

  return (
    <DivRenderPropertys>
      <H3PropertyTitle>Vehiculo</H3PropertyTitle>

      <DivRenderProperty>
        <H4PropertyValue>Patente: </H4PropertyValue>
        {inputVehicleValues.plate}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Año: </H4PropertyValue>
        {inputVehicleValues.year}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Marca: </H4PropertyValue>
        {inputVehicleValues.brand}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Modelo: </H4PropertyValue>
        {inputVehicleValues.model}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Color: </H4PropertyValue>
        {inputVehicleValues.color}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Daño: </H4PropertyValue>
        {inputVehicleValues.damage ? "Si" : "No"}
      </DivRenderProperty>

      {inputVehicleValues.damage && (
        <DivRenderProperty>
          <H4PropertyValue>Lugares dañados: </H4PropertyValue>
          {inputVehicleValues.damageLocation}
        </DivRenderProperty>
      )}

      <DivRenderProperty>
        <H4PropertyValue>Fotos del vehiculo: </H4PropertyValue>
        <ImagesContainer $detail>
          {inputVehicleValues.images.map((img, i) => (
            <Image key={i} src={img} />
          ))}
        </ImagesContainer>
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>0km: </H4PropertyValue>
        {inputVehicleValues.okm ? "Si" : "No"}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Marca de los neumaticos: </H4PropertyValue>
        {inputVehicleValues.tireBrand}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Tamaño de los neumaticos: </H4PropertyValue>
        {inputVehicleValues.tireSize}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Desgaste de los neumaticos: </H4PropertyValue>
        {inputVehicleValues.tireWear}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Tipo de combustible: </H4PropertyValue>
        {inputVehicleValues.fuel}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Tipo de vehiculo: </H4PropertyValue>
        {inputVehicleValues.type}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>GNC: </H4PropertyValue>
        {inputVehicleValues.gnc ? "Si" : "No"}
      </DivRenderProperty>

      {inputVehicleValues.gnc && (
        <>
          <DivRenderProperty>
            <H4PropertyValue>Fecha de vencimiento: </H4PropertyValue>
            {expireDate}
          </DivRenderProperty>

          <DivRenderProperty>
            <H4PropertyValue>OBLEA: </H4PropertyValue>
            {inputGncValues.oblea}
          </DivRenderProperty>

          <DivRenderProperty>
            <H4PropertyValue>Patente: </H4PropertyValue>
            {inputGncValues.plate}
          </DivRenderProperty>
        </>
      )}
    </DivRenderPropertys>
  );
}
export default FormLegalVehicleDetail;
