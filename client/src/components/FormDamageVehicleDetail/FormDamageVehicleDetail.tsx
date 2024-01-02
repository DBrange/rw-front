import {
  DivRenderProperty,
  DivRenderPropertys,
  H3PropertyTitle,
  H4PropertyValue,
  Image,
  ImagesContainer,
} from "@/components";
import { DamageVehiclesValues } from "@/models";

interface Props {
  inputDamageVehicleValues: DamageVehiclesValues;
}

function FormDamageVehicleDetail({ inputDamageVehicleValues }: Props) {
  const date = inputDamageVehicleValues.date.split("-").reverse().join("/");

  return (
    <DivRenderPropertys>
      <H3PropertyTitle>Robo</H3PropertyTitle>

      <DivRenderProperty>
        <H4PropertyValue>Horario del suceso: </H4PropertyValue>
        {inputDamageVehicleValues.time}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Ubicacion del suceso: </H4PropertyValue>
        {inputDamageVehicleValues.location}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Fecha del suceso: </H4PropertyValue>
        {date}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Detalle del daño: </H4PropertyValue>
        {inputDamageVehicleValues.details}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Fotos de la denuncia: </H4PropertyValue>
        <ImagesContainer $detail>
          {inputDamageVehicleValues.reportPhoto.map((img, i) => (
            <Image key={i} src={img} />
          ))}
        </ImagesContainer>
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Monto de reparacion: </H4PropertyValue>
        {inputDamageVehicleValues.budget}
      </DivRenderProperty>
    </DivRenderPropertys>
  );
}
export default FormDamageVehicleDetail;
