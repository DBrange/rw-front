import {
  DivRenderProperty,
  DivRenderPropertys,
  H3PropertyTitle,
  H4PropertyValue,
} from "@/components";
import { AllThirdPartyInjuredValues, FireVehicleValues } from "@/models";
import { SectionFormDetailArrayContainer } from "@/styledComponents";

interface Props {
  inputFireValues: FireVehicleValues;
  thirdPartyInjured: AllThirdPartyInjuredValues;
}

function FormFireVehicleDetail({ inputFireValues, thirdPartyInjured }: Props) {
  const date = inputFireValues.date.split("-").reverse().join("-");

  return (
    <DivRenderPropertys>
      <H3PropertyTitle>Incendio</H3PropertyTitle>

      <DivRenderProperty>
        <H4PropertyValue>Horario del suceso: </H4PropertyValue>
        {inputFireValues.time}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Ubicacion del suceso: </H4PropertyValue>
        {inputFireValues.location}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Fecha del suceso: </H4PropertyValue>
        {date}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Detalles del suceso: </H4PropertyValue>
        {inputFireValues.details}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Tuve lesiones: </H4PropertyValue>
        {inputFireValues.injured ? "Si" : "No"}
      </DivRenderProperty>

      {inputFireValues.injured && (
        <DivRenderProperty>
          <H4PropertyValue>Tipo de lesion: </H4PropertyValue>
          {inputFireValues.injuries}
        </DivRenderProperty>
      )}

      <DivRenderProperty>
        <H4PropertyValue>Presencia de ambulancia: </H4PropertyValue>
        {inputFireValues.ambulance ? "Si" : "No"}
      </DivRenderProperty>

      {inputFireValues.injured && (
        <DivRenderProperty>
          <H4PropertyValue>Destino de la ambulancia: </H4PropertyValue>
          {inputFireValues.ambulanceTo}
        </DivRenderProperty>
      )}

      <DivRenderProperty>
        <H4PropertyValue>Terceros lesionados: </H4PropertyValue>
        {inputFireValues.thirdInjured ? "Si" : "No"}
      </DivRenderProperty>

      {inputFireValues?.thirdInjured && (
        <>
          <DivRenderProperty>
            <H4PropertyValue>Cantidad de lesionados: </H4PropertyValue>
            {inputFireValues.amount}
          </DivRenderProperty>

          <DivRenderProperty>
            {/* <H4PropertyValue>Detalles del suceso: </H4PropertyValue> */}
            {thirdPartyInjured?.injuredInfo?.map((person, i) => (
              <SectionFormDetailArrayContainer key={i}>
                <div>
                  <H3PropertyTitle>Lesionado n°{i + 1}</H3PropertyTitle>

                  <DivRenderProperty>
                    <H4PropertyValue>Nombre: </H4PropertyValue>
                    {person?.name}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Apellido: </H4PropertyValue>
                    {person?.lastName}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Fecha de nacimiento: </H4PropertyValue>
                    {person?.birthDate}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Numero telefonico: </H4PropertyValue>
                    {person?.phoneNumber}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Email: </H4PropertyValue>
                    {person?.email}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Sexo: </H4PropertyValue>
                    {person?.gender}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>DNI: </H4PropertyValue>
                    {person?.dni}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Residencia: </H4PropertyValue>
                    {person?.location}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Tipo de lesion: </H4PropertyValue>
                    {person?.injuries}
                  </DivRenderProperty>
                </div>
              </SectionFormDetailArrayContainer>
            ))}
          </DivRenderProperty>
        </>
      )}
    </DivRenderPropertys>
  );
}
export default FormFireVehicleDetail;
