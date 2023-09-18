import {
  DivRenderProperty,
  DivRenderPropertys,
  H3PropertyTitle,
  H4PropertyValue,
  Image,
  ImagesContainer,
} from "@/components";
import { TheftElectronicValues } from "@/models";

interface Props {
  inputTheftElectronicValues: TheftElectronicValues;
}

function FormTheftElectronicDetail({
  inputTheftElectronicValues,
}: Props) {
  const date = inputTheftElectronicValues.date.split("-").reverse().join("-");

  return (
    <DivRenderPropertys>
      <H3PropertyTitle>Robo</H3PropertyTitle>

      <DivRenderProperty>
        <H4PropertyValue>Horario del suceso: </H4PropertyValue>
        {inputTheftElectronicValues.time}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Ubicacion del suceso: </H4PropertyValue>
        {inputTheftElectronicValues.location}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Fecha del suceso: </H4PropertyValue>
        {date}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Fotos de la denuncia: </H4PropertyValue>
        <ImagesContainer $detail>
          {inputTheftElectronicValues.reportPhoto.map((img, i) => (
            <Image key={i} src={img} />
          ))}
        </ImagesContainer>
      </DivRenderProperty>
    </DivRenderPropertys>
  );
}
export default FormTheftElectronicDetail;
