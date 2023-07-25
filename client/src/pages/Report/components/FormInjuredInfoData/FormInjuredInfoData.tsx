import { FormInput, FormSelect } from "../../../../components";
import { useReportContext } from "../../context";

function FormInjuredInfoData({person}: {person: number}) {
  const { register, errors, touchedFields } = useReportContext();
  return (
    <div className="border-b-2 border-violet-500">
      <h4 className="text-violet-500 text-lg my-5">{`Persona ${person}`}</h4>

      <FormInput
        register={register(
          `schemaThirdInjured.injuredInfo.${[person - 1]}.firstName`
        )}
        error={errors.firstName?.message}
        type="text"
        id="name"
        label="Nombre"
        placeholder="Ingrese su nombre"
        touched={touchedFields.firstName}
      />
      <FormInput
        register={register(
          `schemaThirdInjured.injuredInfo.${[person - 1]}.lastName`
        )}
        error={errors.lastName?.message}
        type="text"
        id="lastName"
        label="Apellido"
        placeholder="Ingrese su Apellido"
        touched={touchedFields.lastName}
      />
      <FormInput
        register={register(
          `schemaThirdInjured.injuredInfo.${[person - 1]}.phoneNumber`,
          {
            valueAsNumber: true,
          }
        )}
        error={errors.phoneNumber?.message}
        type="number"
        id="phoneNumber"
        label="Numero de telefono"
        placeholder="Ingrese su numero de telefono"
        touched={touchedFields.phoneNumber}
      />
      <FormInput
        register={register(
          `schemaThirdInjured.injuredInfo.${[person - 1]}.email`
        )}
        error={errors.email?.message}
        type="text"
        id="email"
        label="Email"
        placeholder="Ingrese su email"
        touched={touchedFields.email}
      />
      <FormSelect
        register={register(
          `schemaThirdInjured.injuredInfo.${[person - 1]}.gender`
        )}
        error={errors.gender?.message}
        id="role"
        label="Genero"
        options={["hombre", "mujer", "otro"]}
        touched={touchedFields.gender}
      />
      <FormInput
        register={register(
          `schemaThirdInjured.injuredInfo.${[person - 1]}.dni`,
          {
            valueAsNumber: true,
          }
        )}
        error={errors.dni?.message}
        type="number"
        id="dni"
        label="DNI"
        placeholder="Ingrese su DNI"
        touched={touchedFields.dni}
      />
      <FormInput
        register={register(
          `schemaThirdInjured.injuredInfo.${[person - 1]}.injuries`
        )}
        error={errors.injuries?.message}
        type="text"
        id="injuries"
        label="Direccion"
        placeholder="Ingrese su direccion"
        touched={touchedFields.injuries}
      />
    </div>
    //   <FormInput
    //     register={register("schemaThirdInjuredData.firstName")}
    //     error={errors.firstName?.message}
    //     type="text"
    //     id="name"
    //     label="Nombre"
    //     placeholder="Ingrese su nombre"
    //     touched={touchedFields.firstName}
    //   />
    //   <FormInput
    //     register={register("schemaThirdInjuredData.lastName")}
    //     error={errors.lastName?.message}
    //     type="text"
    //     id="lastName"
    //     label="Apellido"
    //     placeholder="Ingrese su Apellido"
    //     touched={touchedFields.lastName}
    //   />
    //   <FormInput
    //     register={register("schemaThirdInjuredData.phoneNumber", { valueAsNumber: true })}
    //     error={errors.phoneNumber?.message}
    //     type="number"
    //     id="phoneNumber"
    //     label="Numero de telefono"
    //     placeholder="Ingrese su numero de telefono"
    //     touched={touchedFields.phoneNumber}
    //   />
    //   <FormInput
    //     register={register("schemaThirdInjuredData.email")}
    //     error={errors.email?.message}
    //     type="text"
    //     id="email"
    //     label="Email"
    //     placeholder="Ingrese su email"
    //     touched={touchedFields.email}
    //   />
    //   <FormSelect
    //     register={register("schemaThirdInjuredData.gender")}
    //     error={errors.gender?.message}
    //     id="role"
    //     label="Genero"
    //     options={["hombre", "mujer", "otro"]}
    //     touched={touchedFields.gender}
    //   />
    //   <FormInput
    //     register={register("schemaThirdInjuredData.dni", { valueAsNumber: true })}
    //     error={errors.dni?.message}
    //     type="number"
    //     id="dni"
    //     label="DNI"
    //     placeholder="Ingrese su DNI"
    //     touched={touchedFields.dni}
    //   />
    //   <FormInput
    //     register={register("schemaThirdInjuredData.injuries")}
    //     error={errors.injuries?.message}
    //     type="text"
    //     id="injuries"
    //     label="Direccion"
    //     placeholder="Ingrese su direccion"
    //     touched={touchedFields.injuries}
    //   />
    // </div>
  );
}
export default FormInjuredInfoData