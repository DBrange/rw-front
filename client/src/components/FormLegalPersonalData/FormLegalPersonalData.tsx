import { FormInput } from "..";
import { useInspectContext } from "../../pages";

function FormLegalPersonalData() {
  const { register, errors } = useInspectContext();
  return (
    <>
      <FormInput
        register={register("companyName")}
        error={errors.companyName?.message}
        type="text"
        id="companyName"
        label="Nombre de la compania"
        placeholder="Ingrese su nombre"
      />
      <FormInput
        register={register("cuit")}
        error={errors.cuit?.message}
        type="text"
        id="cuit"
        label="CUIT"
        placeholder="Ingrese su CUIT"
      />
      <FormInput
        register={register("phoneNumber", { valueAsNumber: true })}
        error={errors.phoneNumber?.message}
        type="number"
        id="phoneNumber"
        label="Numero de telefono"
        placeholder="Ingrese numero de telefonico"
      />
      <FormInput
        register={register("email")}
        error={errors.email?.message}
        type="text"
        id="email"
        label="Email"
        placeholder="Ingrese email"
      />
      <FormInput
        register={register("altEmail")}
        error={errors.altEmail?.message}
        type="text"
        id="altEmail"
        label="Email alternativo"
        placeholder="Ingrese email alternativo"
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
export default FormLegalPersonalData