import {
  DivRenderPropertys,
  H3PropertyTitle,
  DivRenderProperty,
  H4PropertyValue,
  ImagesContainer,
  Image,
} from "@/components";
import { GncValues, VehicleReportValues } from "@/models";

interface Props {
  inputVehicleReportValues: VehicleReportValues;
  inputGncValues: GncValues;
}

function FormLegalVehicleReportDetail({
  inputVehicleReportValues,
  inputGncValues,
}: Props) {
  const expireDate = inputGncValues.expireDate.split("-").reverse().join("/");

  return (
    <DivRenderPropertys>
      <H3PropertyTitle>Vehiculo</H3PropertyTitle>

      <DivRenderProperty>
        <H4PropertyValue>Patente: </H4PropertyValue>
        {inputVehicleReportValues?.plate}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Año: </H4PropertyValue>
        {inputVehicleReportValues?.year}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Marca: </H4PropertyValue>
        {inputVehicleReportValues?.brand}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Modelo: </H4PropertyValue>
        {inputVehicleReportValues?.model}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Color: </H4PropertyValue>
        {inputVehicleReportValues?.color}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Daño: </H4PropertyValue>
        {inputVehicleReportValues?.damage ? "Si" : "No"}
      </DivRenderProperty>

      {inputVehicleReportValues?.damage && (
        <DivRenderProperty>
          <H4PropertyValue>Lugares dañados: </H4PropertyValue>
          {inputVehicleReportValues?.damageLocation}
        </DivRenderProperty>
      )}

      <DivRenderProperty>
        <H4PropertyValue>Fotos del vehiculo: </H4PropertyValue>
        <ImagesContainer $detail>
          {inputVehicleReportValues?.images?.map((img, i) => (
            <Image key={i} src={img} />
          ))}
        </ImagesContainer>
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>0km: </H4PropertyValue>
        {inputVehicleReportValues?.okm ? "Si" : "No"}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Tipo de combustible: </H4PropertyValue>
        {inputVehicleReportValues?.fuel}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Tipo de vehiculo: </H4PropertyValue>
        {inputVehicleReportValues?.type}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>GNC: </H4PropertyValue>
        {inputVehicleReportValues?.gnc ? "Si" : "No"}
      </DivRenderProperty>

      {inputVehicleReportValues?.gnc && (
        <>
          <DivRenderProperty>
            <H4PropertyValue>Fecha de vencimiento: </H4PropertyValue>
            {expireDate}
          </DivRenderProperty>

          <DivRenderProperty>
            <H4PropertyValue>OBLEA: </H4PropertyValue>
            {inputGncValues?.oblea}
          </DivRenderProperty>

          <DivRenderProperty>
            <H4PropertyValue>Patente: </H4PropertyValue>
            {inputGncValues?.plate}
          </DivRenderProperty>
        </>
      )}
    </DivRenderPropertys>
  );
}
export default FormLegalVehicleReportDetail;
