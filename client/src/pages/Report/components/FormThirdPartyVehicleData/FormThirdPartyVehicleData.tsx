import { FormUploadImage } from "../../..";
import { FormInput } from "../../../../components";
import { useReportContext } from "../../context";

function FormThirdPartyVehicleData() {
  const { register, errors, touchedFields } = useReportContext();
  return (
    <>
      <FormInput
        register={register("year", { valueAsNumber: true })}
        error={errors.year?.message}
        type="number"
        id="year"
        label="Año"
        placeholder="Año del vehiculo"
        touched={touchedFields.year}
      />
      <FormInput
        register={register("brand")}
        error={errors.brand?.message}
        type="text"
        id="brand"
        label="Marca"
        placeholder="Ingresar marca"
        touched={touchedFields.brand}
      />
      <FormInput
        register={register("model")}
        error={errors.model?.message}
        type="text"
        id="model"
        label="Modelo"
        placeholder="Ingresar modelo"
        touched={touchedFields.model}
      />
      <FormInput
        register={register("plate")}
        error={errors.plate?.message}
        type="text"
        id="plate"
        label="Patente"
        placeholder="Ingrese la patente"
        touched={touchedFields.plate}
      />
      <FormInput
        register={register("insauranceCompany")}
        error={errors.insauranceCompany?.message}
        type="text"
        id="insauranceCompany"
        label="Compania de seguros"
        placeholder="Ingrese la compania"
        touched={touchedFields.insauranceCompany}
      />
      <FormInput
        register={register("insaurancePolicy")}
        error={errors.insaurancePolicy?.message}
        type="text"
        id="insaurancePolicy"
        label="Poliza de seguros"
        placeholder="Ingrese la poliza"
        touched={touchedFields.insaurancePolicy}
      />
      <FormInput
        register={register("ownerName")}
        error={errors.ownerName?.message}
        type="text"
        id="ownerName"
        label="Nombre del propietario"
        placeholder="Ingresar nombre"
        touched={touchedFields.ownerName}
      />
      <FormInput
        register={register("ownerDni")}
        error={errors.ownerDni?.message}
        type="number"
        id="ownerDni"
        label="DNI del propietario"
        placeholder="Ingresar DNI"
        touched={touchedFields.ownerDni}
      />
      <FormInput
        register={register("name")}
        error={errors.name?.message}
        type="text"
        id="name"
        label="Nombre del conductor"
        placeholder="Ingresar nombre"
        touched={touchedFields.name}
      />
      <FormInput
        register={register("dni")}
        error={errors.dni?.message}
        type="number"
        id="dni"
        label="DNI del conductor"
        placeholder="Ingresar DNI"
        touched={touchedFields.dni}
      />
      <FormInput
        register={register("address")}
        error={errors.address?.message}
        type="text"
        id="address"
        label="Residencia del conductor"
        placeholder="Ingresar residencia"
        touched={touchedFields.address}
      />
      <FormInput
        register={register("phoneNumber")}
        error={errors.phoneNumber?.message}
        type="number"
        id="phoneNumber"
        label="Telefono del conductor"
        placeholder="Ingresar numero telefonico"
        touched={touchedFields.phoneNumber}
      />

      <FormUploadImage register={register("licencePhoto")} />
      <FormInput
        register={register("email")}
        error={errors.email?.message}
        type="number"
        id="email"
        label="Email del conductor"
        placeholder="Ingresar email"
        touched={touchedFields.email}
      />
    </>
  );
}
export default FormThirdPartyVehicleData