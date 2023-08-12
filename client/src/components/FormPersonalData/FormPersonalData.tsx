import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FormInput, FormSelect } from "..";
import { AllInspectSchemas, AllReportSchemas, SchemaPersonalType } from "../../models";

interface Props {
  register: UseFormRegister<AllInspectSchemas | AllReportSchemas>;
  errors: FieldErrors<SchemaPersonalType>;
  touchedFields: FieldValues["touched"];
}

function FormPersonalData({ register, errors, touchedFields }: Props) {
  return (
    <>
      <FormInput
        register={register("schemaPersonal.firstName")}
        error={errors.schemaPersonal?.firstName?.message}
        type="text"
        id="schemaPersonal.firstName"
        label="Nombre*"
        placeholder="Ingrese su nombre"
        touched={touchedFields.schemaPersonal?.firstName}
      />
      <FormInput
        register={register("schemaPersonal.lastName")}
        error={errors.schemaPersonal?.lastName?.message}
        type="text"
        id="schemaPersonal.lastName"
        label="Apellido*"
        placeholder="Ingrese su Apellido"
        touched={touchedFields.schemaPersonal?.lastName}
      />
      <FormInput
        register={register("schemaPersonal.phoneNumber", {
          valueAsNumber: true,
        })}
        error={errors.schemaPersonal?.phoneNumber?.message}
        type="number"
        id="schemaPersonal.phoneNumber"
        label="Numero telefonico*"
        placeholder="Ingrese su numero de telefono"
        touched={touchedFields.schemaPersonal?.phoneNumber}
      />
      <FormInput
        register={register("schemaPersonal.email")}
        error={errors.schemaPersonal?.email?.message}
        type="text"
        id="schemaPersonal.email"
        label="Email*"
        placeholder="Ingrese su email"
        touched={touchedFields.schemaPersonal?.email}
      />
      <FormInput
        register={register("schemaPersonal.altEmail")}
        error={errors.schemaPersonal?.altEmail?.message}
        type="text"
        id="schemaPersonal.altEmail"
        label="Email alternativo"
        placeholder="Ingrese su email"
        touched={touchedFields.schemaPersonal?.altEmail}
      />
      <FormSelect
        register={register("schemaPersonal.gender")}
        error={errors.schemaPersonal?.gender?.message}
        id="schemaPersonal.gender"
        label="Genero*"
        options={["hombre", "mujer", "otro"]}
        touched={touchedFields.schemaPersonal?.gender}
      />
      <FormInput
        register={register(`schemaPersonal.birthDate`)}
        error={errors.schemaPersonal?.birthDate?.message}
        type="date"
        id="schemaPersonal.birthDate"
        label="Fecha del nacimiento*"
        placeholder="Ingresar fecha"
        touched={touchedFields.birthDate?.gender}
      />
      <FormInput
        register={register("schemaPersonal.dni")}
        error={errors.schemaPersonal?.dni?.message}
        type="number"
        id="schemaPersonal.dni"
        label="DNI*"
        placeholder="Ingrese su DNI"
        touched={touchedFields.schemaPersonal?.dni}
      />
      <FormInput
        register={register("schemaPersonal.address")}
        error={errors.schemaPersonal?.address?.message}
        type="text"
        id="schemaPersonal.address"
        label="Direccion*"
        placeholder="Ingrese su direccion"
        touched={touchedFields.schemaPersonal?.address}
      />
    </>
  );
}
export default FormPersonalData;
