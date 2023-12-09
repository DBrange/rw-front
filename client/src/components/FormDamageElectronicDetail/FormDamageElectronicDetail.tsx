import {
  DivRenderProperty,
  DivRenderPropertys,
  H3PropertyTitle,
  H4PropertyValue,
  Image,
  ImagesContainer,
} from "@/components";
import { DamageElectronicValues } from "@/models";

interface Props {
  inputDamageElectronicValues: DamageElectronicValues;
}

function FormDamageElectronicDetail({ inputDamageElectronicValues }: Props) {
  const date = inputDamageElectronicValues.date.split("-").reverse().join("-");

  return (
    <DivRenderPropertys>
      <H3PropertyTitle>Robo</H3PropertyTitle>

      <DivRenderProperty>
        <H4PropertyValue>Horario del suceso: </H4PropertyValue>
        {inputDamageElectronicValues.time}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Ubicacion del suceso: </H4PropertyValue>
        {inputDamageElectronicValues.location}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Fecha del suceso: </H4PropertyValue>
        {date}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Detalle del daño: </H4PropertyValue>
        {inputDamageElectronicValues.details}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Fotos de la denuncia: </H4PropertyValue>
        <ImagesContainer $detail>
          {inputDamageElectronicValues.reportPhoto.map((img, i) => (
            <Image key={i} src={img} />
          ))}
        </ImagesContainer>
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Monto de reparacion: </H4PropertyValue>
        {inputDamageElectronicValues.budget}
      </DivRenderProperty>
    </DivRenderPropertys>
  );
}
export default FormDamageElectronicDetail;
