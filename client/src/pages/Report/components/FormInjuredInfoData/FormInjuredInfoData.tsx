import { FormInput, FormSelect } from "../../../../components";
import { useReportContext } from "../../context";

function FormInjuredInfoData({ people }: { people: number }) {
  const { register, errors, touchedFields } = useReportContext();

  const errorSchema = errors?.schemaThirdInjured?.injuredInfo[people - 1];
  const touchedSchema =
    touchedFields?.schemaThirdInjured?.injuredInfo[people - 1];
  const schema = `schemaThirdInjured.injuredInfo.${[people - 1]}`;
  
  return (
    <div className="border-b-2 border-violet-500">
      <h4 className="text-violet-500 text-lg my-5">{`Persona ${people}`}</h4>

      <FormInput
        register={register(`${schema}.name`)}
        error={errorSchema?.name?.message}
        type="text"
        id={`${schema}.name`}
        label="Nombre"
        placeholder="Ingrese su nombre"
        touched={touchedSchema?.name}
      />
      <FormInput
        register={register(`${schema}.lastName`)}
        error={errorSchema?.lastName?.message}
        type="text"
        id={`${schema}.lastName`}
        label="Apellido"
        placeholder="Ingrese su Apellido"
        touched={touchedSchema?.lastName}
      />
      <FormInput
        register={register(`${schema}.birthDate`)}
        error={errorSchema?.birthDate?.message}
        type="date"
        id={`${schema}.birthDate`}
        label="Fecha de nacimiento"
        placeholder="Ingrese fecha de nacimiento"
        touched={touchedSchema?.birthDate}
      />
      <FormInput
        register={register(`${schema}.phoneNumber`)}
        error={errorSchema?.phoneNumber?.message}
        type="number"
        id={`${schema}.phoneNumber`}
        label="Numero de telefono"
        placeholder="Ingrese su numero de telefono"
        touched={touchedSchema?.phoneNumber}
      />
      <FormInput
        register={register(`${schema}.email`)}
        error={errorSchema?.email?.message}
        type="text"
        id={`${schema}.email`}
        label="Email"
        placeholder="Ingrese su email"
        touched={touchedSchema?.email}
      />
      <FormSelect
        register={register(`${schema}.gender`)}
        error={errorSchema?.gender?.message}
        id={`${schema}.gender`}
        label="Genero"
        options={["HOMBRE", "MUJER", "OTRO"]}
        touched={touchedSchema?.gender}
      />
      <FormInput
        register={register(`${schema}.dni`)}
        error={errorSchema?.dni?.message}
        type="text"
        id={`${schema}.dni`}
        label="DNI"
        placeholder="Ingrese su DNI"
        touched={touchedSchema?.dni}
      />
      <FormInput
        register={register(`${schema}.injuries`)}
        error={errorSchema?.injuries?.message}
        type="text"
        id={`${schema}.injuries`}
        label="Direccion"
        placeholder="Ingrese su direccion"
        touched={touchedSchema?.injuries}
      />
      <FormInput
        register={register(`${schema}.date`)}
        error={errorSchema?.date?.message}
        type="date"
        id={`${schema}.date`}
        label="Fecha del suceso"
        placeholder="Ingrese la fecha"
        touched={touchedSchema?.injuries}
      />
      <FormInput
        register={register(`${schema}.injuries`)}
        error={errorSchema?.injuries?.message}
        type="text"
        id={`${schema}.injuries`}
        label="Lesiones"
        placeholder="Tipo de lesiones"
        touched={touchedSchema?.injuries}
      />
    </div>
  );
}
export default FormInjuredInfoData;
