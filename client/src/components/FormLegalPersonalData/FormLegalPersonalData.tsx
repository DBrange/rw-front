import { FormInput } from "..";

interface Props {
  register: any;
  errors: any;
  touchedFields: any;
}

function FormLegalPersonalData({ register, errors, touchedFields }: Props) {
  return (
    <>
      <FormInput
        register={register("schemaLegalPersonal.companyName")}
        error={errors.schemaLegalPersonal?.companyName?.message}
        type="text"
        id="companyName"
        label="Nombre de la compania*"
        placeholder="Ingrese su nombre"
        touched={touchedFields.schemaLegalPersonal?.companyName}
      />
      <FormInput
        register={register("schemaLegalPersonal.cuit")}
        error={errors.schemaLegalPersonal?.cuit?.message}
        type="number"
        id="cuit"
        label="CUIT*"
        placeholder="Ingrese su CUIT"
        touched={touchedFields.schemaLegalPersonal?.cuit}
      />
      <FormInput
        register={register("schemaLegalPersonal.phoneNumber", { valueAsNumber: true })}
        error={errors.schemaLegalPersonal?.phoneNumber?.message}
        type="number"
        id="phoneNumber"
        label="Numero de telefono*"
        placeholder="Ingrese numero de telefonico"
        touched={touchedFields.schemaLegalPersonal?.phoneNumber}
      />
      <FormInput
        register={register("schemaLegalPersonal.email")}
        error={errors.schemaLegalPersonal?.email?.message}
        type="text"
        id="email"
        label="Email"
        placeholder="Ingrese email*"
        touched={touchedFields.schemaLegalPersonal?.email}
      />
      <FormInput
        register={register("schemaLegalPersonal.altEmail")}
        error={errors.schemaLegalPersonal?.altEmail?.message}
        type="text"
        id="altEmail"
        label="Email alternativo"
        placeholder="Ingrese email alternativo"
        touched={touchedFields.schemaLegalPersonal?.altEmail}
      />
      <FormInput
        register={register("schemaLegalPersonal.address")}
        error={errors.schemaLegalPersonal?.address?.message}
        type="text"
        id="address"
        label="Direccion*"
        placeholder="Ingrese su direccion"
        touched={touchedFields.schemaLegalPersonal?.address}
      />
    </>
  );
}
export default FormLegalPersonalData