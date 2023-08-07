import { FormInput, FormSelect } from "../../../../components";
import { useReportContext } from "../../context";

function FormInjuredInfoData({ people }: { people: number }) {
  const { register, errors, touchedFields } = useReportContext();

  const errorSchema = errors?.schemaThirdInjured?.injuredInfo[people - 1];
  const touchedSchema =
    touchedFields?.schemaThirdInjured?.injuredInfo[people - 1];
  
  return (
    <div className="border-b-2 border-violet-500">
      <h4 className="text-violet-500 text-lg my-5">{`Persona ${people}`}</h4>

      <FormInput
        register={register(
          `schemaThirdInjured.injuredInfo.${[people - 1]}.firstName`
        )}
        error={errorSchema?.firstName?.message}
        type="text"
        id="name"
        label="Nombre"
        placeholder="Ingrese su nombre"
        touched={touchedSchema?.firstName}
      />
      <FormInput
        register={register(
          `schemaThirdInjured.injuredInfo.${[people - 1]}.lastName`
        )}
        error={errorSchema?.lastName?.message}
        type="text"
        id="lastName"
        label="Apellido"
        placeholder="Ingrese su Apellido"
        touched={touchedSchema?.lastName}
      />
      <FormInput
        register={register(
          `schemaThirdInjured.injuredInfo.${[people - 1]}.phoneNumber`,
          {
            valueAsNumber: true,
          }
        )}
        error={errorSchema?.phoneNumber?.message}
        type="number"
        id="phoneNumber"
        label="Numero de telefono"
        placeholder="Ingrese su numero de telefono"
        touched={touchedSchema?.phoneNumber}
      />
      <FormInput
        register={register(
          `schemaThirdInjured.injuredInfo.${[people - 1]}.email`
        )}
        error={errorSchema?.email?.message}
        type="text"
        id="email"
        label="Email"
        placeholder="Ingrese su email"
        touched={touchedSchema?.email}
      />
      <FormSelect
        register={register(
          `schemaThirdInjured.injuredInfo.${[people - 1]}.gender`
        )}
        error={errorSchema?.gender?.message}
        id="role"
        label="Genero"
        options={["hombre", "mujer", "otro"]}
        touched={touchedSchema?.gender}
      />
      <FormInput
        register={register(
          `schemaThirdInjured.injuredInfo.${[people - 1]}.dni`,
          {
            valueAsNumber: true,
          }
        )}
        error={errorSchema?.dni?.message}
        type="number"
        id="dni"
        label="DNI"
        placeholder="Ingrese su DNI"
        touched={touchedSchema?.dni}
      />
      <FormInput
        register={register(
          `schemaThirdInjured.injuredInfo.${[people - 1]}.injuries`
        )}
        error={errorSchema?.injuries?.message}
        type="text"
        id="injuries"
        label="Direccion"
        placeholder="Ingrese su direccion"
        touched={touchedSchema?.injuries}
      />
    </div>
  );
}
export default FormInjuredInfoData;
