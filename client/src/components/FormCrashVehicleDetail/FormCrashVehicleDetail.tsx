import {
  DivRenderProperty,
  DivRenderPropertys,
  H3PropertyTitle,
  H4PropertyValue,
  Image,
} from "@/components";
import {
  AllCrashVehiclesValues,
  AllThirdPartyInjuredValues,
  CrashVehicleValues,
} from "@/models";
import { SectionFormDetailArrayContainer } from "@/styledComponents";

interface Props {
  inputCrashValues: CrashVehicleValues;
  thirdPartyInjured: AllThirdPartyInjuredValues;
  thirdPartyVehicle: AllCrashVehiclesValues;
}

function FormCrashVehicleDetail({
  inputCrashValues,
  thirdPartyInjured,
  thirdPartyVehicle,
}: Props) {
  const date = inputCrashValues?.date.split("-").reverse().join("-");

  return (
    <DivRenderPropertys>
      <H3PropertyTitle>Incendio</H3PropertyTitle>

      <DivRenderProperty>
        <H4PropertyValue>Horario del suceso: </H4PropertyValue>
        {inputCrashValues?.time}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Ubicacion del suceso: </H4PropertyValue>
        {inputCrashValues?.location}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Fecha del suceso: </H4PropertyValue>
        {date}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Detalles del suceso: </H4PropertyValue>
        {inputCrashValues?.details}
      </DivRenderProperty>

      <DivRenderProperty>
        <H4PropertyValue>Tuve lesiones: </H4PropertyValue>
        {inputCrashValues?.injured ? "Si" : "No"}
      </DivRenderProperty>

      {inputCrashValues?.injured && (
        <DivRenderProperty>
          <H4PropertyValue>Tipo de lesion: </H4PropertyValue>
          {inputCrashValues?.injuries}
        </DivRenderProperty>
      )}

      <DivRenderProperty>
        <H4PropertyValue>Presencia de ambulancia: </H4PropertyValue>
        {inputCrashValues?.ambulance ? "Si" : "No"}
      </DivRenderProperty>

      {inputCrashValues?.injured && (
        <DivRenderProperty>
          <H4PropertyValue>Destino de la ambulancia: </H4PropertyValue>
          {inputCrashValues?.ambulanceTo}
        </DivRenderProperty>
      )}

      <DivRenderProperty>
        <H4PropertyValue>Terceros lesionados: </H4PropertyValue>
        {inputCrashValues?.thirdInjured ? "Si" : "No"}
      </DivRenderProperty>

      {inputCrashValues?.thirdInjured && (
        <>
          <DivRenderProperty>
            <H4PropertyValue>Cantidad: </H4PropertyValue>
            {inputCrashValues.amount}
          </DivRenderProperty>

          <DivRenderProperty>
            <H4PropertyValue>Detalles del suceso: </H4PropertyValue>
            {thirdPartyInjured.injuredInfo.map((person, i) => (
              <SectionFormDetailArrayContainer key={i}>
                <div>
                  <H3PropertyTitle>Lesionado n°{i + 1}</H3PropertyTitle>

                  <DivRenderProperty>
                    <H4PropertyValue>Nombre: </H4PropertyValue>
                    {person.name}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Apellido: </H4PropertyValue>
                    {person.lastName}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Fecha de nacimiento: </H4PropertyValue>
                    {person.birthDate}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Numero telefonico: </H4PropertyValue>
                    {person.phoneNumber}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Email: </H4PropertyValue>
                    {person.email}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Sexo: </H4PropertyValue>
                    {person.gender}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>DNI: </H4PropertyValue>
                    {person.dni}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Residencia: </H4PropertyValue>
                    {person.location}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Tipo de lesion: </H4PropertyValue>
                    {person.injuries}
                  </DivRenderProperty>
                </div>
              </SectionFormDetailArrayContainer>
            ))}
          </DivRenderProperty>
        </>
      )}

      <DivRenderProperty>
        <H4PropertyValue>Terceros lesionados: </H4PropertyValue>
        {inputCrashValues?.amountVehicles > 0 ? "Si" : "No"}
      </DivRenderProperty>

      {inputCrashValues?.amountVehicles > 0 && (
        <>
          <DivRenderProperty>
            <H4PropertyValue>
              Cantidad de vehiculos implicados:{" "}
            </H4PropertyValue>
            {inputCrashValues?.amountVehicles}
          </DivRenderProperty>

          <DivRenderProperty>
            <H4PropertyValue>
              Cantidad de vehiculos implicados:{" "}
            </H4PropertyValue>
            {thirdPartyVehicle?.thirdPartyVehicleInfo?.map((vehicle, i) => (
              <SectionFormDetailArrayContainer key={i}>
                <div>
                  <H3PropertyTitle>Vehiculo n°{i + 1}</H3PropertyTitle>

                  <DivRenderProperty>
                    <H4PropertyValue>Patente: </H4PropertyValue>
                    {vehicle?.plate}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Año: </H4PropertyValue>
                    {vehicle?.year}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Marca: </H4PropertyValue>
                    {vehicle?.brand}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Modelo: </H4PropertyValue>
                    {vehicle?.model}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Compañia de seguros: </H4PropertyValue>
                    {vehicle?.insuranceCompany}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Poliza de seguros: </H4PropertyValue>
                    {vehicle?.insurancePolicy}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Nombre del propietario: </H4PropertyValue>
                    {vehicle?.ownerName}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>
                      Apellido del propietario:{" "}
                    </H4PropertyValue>
                    {vehicle?.ownerLastName}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>DNI del propietario: </H4PropertyValue>
                    {vehicle?.ownerDni}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>
                      Residencia del propietario:{" "}
                    </H4PropertyValue>
                    {vehicle?.address}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Numero telefonico: </H4PropertyValue>
                    {vehicle?.phoneNumber}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Fotos del registro: </H4PropertyValue>
                    {vehicle?.licensePhoto?.map((img, i) => (
                      <Image key={i} src={img} />
                    ))}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>Email: </H4PropertyValue>
                    {vehicle?.email}
                  </DivRenderProperty>

                  <DivRenderProperty>
                    <H4PropertyValue>
                      El conductor es el propietario del vehiculo:{" "}
                    </H4PropertyValue>
                    {vehicle?.owner ? "Si" : "No"}
                  </DivRenderProperty>

                  {!vehicle?.owner && (
                    <>
                      <DivRenderProperty>
                        <H4PropertyValue>
                          Nombre del conductor o propietario:{" "}
                        </H4PropertyValue>
                        {vehicle?.name}
                      </DivRenderProperty>

                      <DivRenderProperty>
                        <H4PropertyValue>
                          Apellido del conductor:{" "}
                        </H4PropertyValue>
                        {vehicle?.lastName}
                      </DivRenderProperty>

                      <DivRenderProperty>
                        <H4PropertyValue>DNI del conductor: </H4PropertyValue>
                        {vehicle?.dni}
                      </DivRenderProperty>
                    </>
                  )}
                </div>
              </SectionFormDetailArrayContainer>
            ))}
          </DivRenderProperty>
        </>
      )}
    </DivRenderPropertys>
  );
}
export default FormCrashVehicleDetail;
