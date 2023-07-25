import { FormInput, FormSelect } from "..";

interface Props {
  register: any;
  errors: any;
  touchedFields: any;
}

function FormPersonalData({ register, errors, touchedFields }: Props) {
  return (
    <>
      <FormInput
        register={register("schemaPersonal.firstName")}
        error={errors.schemaPersonal?.firstName?.message}
        type="text"
        id="name"
        label="Nombre"
        placeholder="Ingrese su nombre"
        touched={touchedFields.schemaPersonal?.firstName}
      />
      <FormInput
        register={register("schemaPersonal.lastName")}
        error={errors.schemaPersonal?.lastName?.message}
        type="text"
        id="lastName"
        label="Apellido"
        placeholder="Ingrese su Apellido"
        touched={touchedFields.schemaPersonal?.lastName}
      />
      <FormInput
        register={register("schemaPersonal.phoneNumber", {
          valueAsNumber: true,
        })}
        error={errors.schemaPersonal?.phoneNumber?.message}
        type="number"
        id="phoneNumber"
        label="Numero de telefono"
        placeholder="Ingrese su numero de telefono"
        touched={touchedFields.schemaPersonal?.phoneNumber}
      />
      <FormInput
        register={register("schemaPersonal.email")}
        error={errors.schemaPersonal?.email?.message}
        type="text"
        id="email"
        label="Email"
        placeholder="Ingrese su email"
        touched={touchedFields.schemaPersonal?.email}
      />
      <FormInput
        register={register("schemaPersonal.altEmail")}
        error={errors.schemaPersonal?.altEmail?.message}
        type="text"
        id="altEmail"
        label="Email alternativo"
        placeholder="Ingrese su email"
        touched={touchedFields.schemaPersonal?.altEmail}
      />
      <FormSelect
        register={register("schemaPersonal.gender")}
        error={errors.schemaPersonal?.gender?.message}
        id="role"
        label="Genero"
        options={["hombre", "mujer", "otro"]}
        touched={touchedFields.schemaPersonal?.gender}
      />
      <FormInput
        register={register("schemaPersonal.dni")}
        error={errors.schemaPersonal?.dni?.message}
        type="number"
        id="dni"
        label="DNI"
        placeholder="Ingrese su DNI"
        touched={touchedFields.schemaPersonal?.dni}
      />
      <FormInput
        register={register("schemaPersonal.address")}
        error={errors.schemaPersonal?.address?.message}
        type="text"
        id="address"
        label="Direccion"
        placeholder="Ingrese su direccion"
        touched={touchedFields.schemaPersonal?.address}
      />
    </>
  );
}
export default FormPersonalData;
