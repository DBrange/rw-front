import {
  DivRenderProperty,
  DivRenderPropertys,
  H3PropertyTitle,
  H4PropertyValue,
  Image,
  ImagesContainer,
} from "@/components";
import {
  IsTireValues,
  TheftVehiclesValues,
} from "@/models";

interface Props {
  inputTheftVehicleValues: TheftVehiclesValues;
  inputIsTireValues: IsTireValues;
}

function FormTheftVehicleDetail({
  inputTheftVehicleValues,
  inputIsTireValues,
}: Props) {
  const date = inputTheftVehicleValues.date.split("-").reverse().join("-");

  return (
    <DivRenderPropertys>
      <H3PropertyTitle>Robo</H3PropertyTitle>

      <DivRenderProperty>
        <H4PropertyValue>Horario del suceso: </H4PropertyValue>
        {inputTheftVehicleValues.time}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Ubicacion del suceso: </H4PropertyValue>
        {inputTheftVehicleValues.location}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Fecha del suceso: </H4PropertyValue>
        {date}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Neumatico robado: </H4PropertyValue>
        {inputTheftVehicleValues.isTire ? "Si" : "No"}
      </DivRenderProperty>

      {inputTheftVehicleValues.isTire && (
        <>
          <DivRenderProperty>
            <H4PropertyValue>Cantidad de neumaticos robados: </H4PropertyValue>
            {inputIsTireValues.tireAmount}
          </DivRenderProperty>

          <DivRenderProperty>
            <H4PropertyValue>Desgaste de neumaticos: </H4PropertyValue>
            {inputIsTireValues.tireWear}%
          </DivRenderProperty>

          <DivRenderProperty>
            <H4PropertyValue>Foto de neumatico: </H4PropertyValue>
            {inputIsTireValues.tirePhoto.map((img, i) => (
              <Image key={i} src={img} />
            ))}
          </DivRenderProperty>
        </>
      )}

      <DivRenderProperty>
        <H4PropertyValue>Fotos de la denuncia: </H4PropertyValue>
        <ImagesContainer $detail>
          {inputTheftVehicleValues.reportPhoto.map((img, i) => (
            <Image key={i} src={img} />
          ))}
        </ImagesContainer>
      </DivRenderProperty>
    </DivRenderPropertys>
  );
}
export default FormTheftVehicleDetail;
