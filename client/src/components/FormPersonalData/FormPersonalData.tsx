import { FormInput, FormSelect } from "..";
import { useInspectContext } from "../../pages";

function FormPersonalData() {
  const {register, errors} = useInspectContext()
  return (
    <>
      <FormInput
        register={register("firstName")}
        error={errors.firstName?.message}
        type="text"
        id="name"
        label="Nombre"
        placeholder="Ingrese su nombre"
      /> 
      <FormInput
        register={register("lastName")}
        error={errors.lastName?.message}
        type="text"
        id="lastName"
        label="Apellido"
        placeholder="Ingrese su Apellido"
      />
      <FormInput
        register={register("phoneNumber", { valueAsNumber: true })}
        error={errors.phoneNumber?.message}
        type="number"
        id="phoneNumber"
        label="Numero de telefono"
        placeholder="Ingrese su numero de telefono"
      />
      <FormInput
        register={register("email")}
        error={errors.email?.message}
        type="text"
        id="email"
        label="Email"
        placeholder="Ingrese su email"
      />
      <FormInput
        register={register("altEmail")}
        error={errors.altEmail?.message}
        type="text"
        id="altEmail"
        label="Email alternativo"
        placeholder="Ingrese su email"
      />
      <FormSelect
        register={register("gender")}
        error={errors.gender?.message}
        id="role"
        label="Genero"
        options={["hombre", "mujer", "otro"]}
      />
      <FormInput
        register={register("dni", { valueAsNumber: true })}
        error={errors.dni?.message}
        type="number"
        id="dni"
        label="DNI"
        placeholder="Ingrese su DNI"
      />
      <FormInput
        register={register("address")}
        error={errors.address?.message}
        type="text"
        id="address"
        label="Direccion"
        placeholder="Ingrese su direccion"
      />
    </>
  );
}
export default FormPersonalData;