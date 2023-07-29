import { FormUploadImageReport } from "..";
import { FormInput } from "../../../../components";
import { useReportContext } from "../../context";

function FormThirdPartyVehicleData() {
  const { register, errors, touchedFields } = useReportContext();
  return (
    <>
      <FormInput
        register={register("schemaThirdPartyVehicleReport.year", {
          valueAsNumber: true,
        })}
        error={errors.schemaThirdPartyVehicleReport?.year?.message}
        type="number"
        id="year"
        label="Año"
        placeholder="Año del vehiculo"
        touched={touchedFields.schemaThirdPartyVehicleReport?.year}
      />
      <FormInput
        register={register("schemaThirdPartyVehicleReport.brand")}
        error={errors.schemaThirdPartyVehicleReport?.brand?.message}
        type="text"
        id="brand"
        label="Marca"
        placeholder="Ingresar marca"
        touched={touchedFields.schemaThirdPartyVehicleReport?.brand}
      />
      <FormInput
        register={register("schemaThirdPartyVehicleReport.model")}
        error={errors.schemaThirdPartyVehicleReport?.model?.message}
        type="text"
        id="model"
        label="Modelo"
        placeholder="Ingresar modelo"
        touched={touchedFields.schemaThirdPartyVehicleReport?.model}
      />
      <FormInput
        register={register("schemaThirdPartyVehicleReport.plate")}
        error={errors.schemaThirdPartyVehicleReport?.plate?.message}
        type="text"
        id="plate"
        label="Patente"
        placeholder="Ingrese la patente"
        touched={touchedFields.schemaThirdPartyVehicleReport?.plate}
      />
      <FormInput
        register={register("schemaThirdPartyVehicleReport.insauranceCompany")}
        error={errors.schemaThirdPartyVehicleReport?.insauranceCompany?.message}
        type="text"
        id="insauranceCompany"
        label="Compania de seguros"
        placeholder="Ingrese la compania"
        touched={touchedFields.schemaThirdPartyVehicleReport?.insauranceCompany}
      />
      <FormInput
        register={register("schemaThirdPartyVehicleReport.insaurancePolicy")}
        error={errors.schemaThirdPartyVehicleReport?.insaurancePolicy?.message}
        type="text"
        id="insaurancePolicy"
        label="Poliza de seguros"
        placeholder="Ingrese la poliza"
        touched={touchedFields.schemaThirdPartyVehicleReport?.insaurancePolicy}
      />
      <FormInput
        register={register("schemaThirdPartyVehicleReport.ownerName")}
        error={errors.schemaThirdPartyVehicleReport?.ownerName?.message}
        type="text"
        id="ownerName"
        label="Nombre del propietario"
        placeholder="Ingresar nombre"
        touched={touchedFields.schemaThirdPartyVehicleReport?.ownerName}
      />
      <FormInput
        register={register("schemaThirdPartyVehicleReport.ownerDni", {
          valueAsNumber: true,
        })}
        error={errors.schemaThirdPartyVehicleReport?.ownerDni?.message}
        type="number"
        id="ownerDni"
        label="DNI del propietario"
        placeholder="Ingresar DNI"
        touched={touchedFields.schemaThirdPartyVehicleReport?.ownerDni}
      />
      <FormInput
        register={register("schemaThirdPartyVehicleReport.name")}
        error={errors.schemaThirdPartyVehicleReport?.name?.message}
        type="text"
        id="name"
        label="Nombre del conductor"
        placeholder="Ingresar nombre"
        touched={touchedFields.schemaThirdPartyVehicleReport?.name}
      />
      <FormInput
        register={register("schemaThirdPartyVehicleReport.dni", {
          valueAsNumber: true,
        })}
        error={errors.schemaThirdPartyVehicleReport?.dni?.message}
        type="number"
        id="dni"
        label="DNI del conductor"
        placeholder="Ingresar DNI"
        touched={touchedFields.schemaThirdPartyVehicleReport?.dni}
      />
      <FormInput
        register={register("schemaThirdPartyVehicleReport.address")}
        error={errors.schemaThirdPartyVehicleReport?.address?.message}
        type="text"
        id="address"
        label="Residencia del conductor"
        placeholder="Ingresar residencia"
        touched={touchedFields.schemaThirdPartyVehicleReport?.address}
      />
      <FormInput
        register={register("schemaThirdPartyVehicleReport.phoneNumber", {
          valueAsNumber: true,
        })}
        error={errors.schemaThirdPartyVehicleReport?.phoneNumber?.message}
        type="number"
        id="phoneNumber"
        label="Telefono del conductor"
        placeholder="Ingresar numero telefonico"
        touched={touchedFields.schemaThirdPartyVehicleReport?.phoneNumber}
      />
      <FormUploadImageReport
        schemaName={"schemaThirdPartyVehicleReport.licencePhoto"}
        error={errors.schemaThirdPartyVehicleReport?.licencePhoto?.message}
      />
      <FormInput
        register={register("schemaThirdPartyVehicleReport.email")}
        error={errors.schemaThirdPartyVehicleReport?.email?.message}
        type="text"
        id="email"
        label="Email del conductor"
        placeholder="Ingresar email"
        touched={touchedFields.schemaThirdPartyVehicleReport?.email}
      />
    </>
  );
}
export default FormThirdPartyVehicleData