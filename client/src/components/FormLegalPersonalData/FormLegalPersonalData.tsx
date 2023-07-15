import { FormInput } from "..";
import { useInspectContext } from "../../pages";

function FormLegalPersonalData() {
  const { register, errors, touchedFields } = useInspectContext();
  return (
    <>
      <FormInput
        register={register("companyName")}
        error={errors.companyName?.message}
        type="text"
        id="companyName"
        label="Nombre de la compania"
        placeholder="Ingrese su nombre"
        touched={touchedFields.companyName}
      />
      <FormInput
        register={register("cuit")}
        error={errors.cuit?.message}
        type="text"
        id="cuit"
        label="CUIT"
        placeholder="Ingrese su CUIT"
        touched={touchedFields.cuit}
      />
      <FormInput
        register={register("phoneNumber", { valueAsNumber: true })}
        error={errors.phoneNumber?.message}
        type="number"
        id="phoneNumber"
        label="Numero de telefono"
        placeholder="Ingrese numero de telefonico"
        touched={touchedFields.phoneNumber}
      />
      <FormInput
        register={register("email")}
        error={errors.email?.message}
        type="text"
        id="email"
        label="Email"
        placeholder="Ingrese email"
        touched={touchedFields.email}
      />
      <FormInput
        register={register("altEmail")}
        error={errors.altEmail?.message}
        type="text"
        id="altEmail"
        label="Email alternativo"
        placeholder="Ingrese email alternativo"
        touched={touchedFields.altEmail}
      />
      <FormInput
        register={register("address")}
        error={errors.address?.message}
        type="text"
        id="address"
        label="Direccion"
        placeholder="Ingrese su direccion"
        touched={touchedFields.address}
      />
    </>
  );
}
export default FormLegalPersonalData