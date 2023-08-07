import { FormUploadImageReport } from "..";
import { FormInput } from "../../../../components";
import { useReportContext } from "../../context";

function FormThirdPartyVehiclesData({ vehicles }: { vehicles: number }) {
  const { register, errors, touchedFields } = useReportContext();

    const errorSchema =
      errors?.schemaVehicleCrashReportData?.thirdPartyVehicleInfo?.[vehicles - 1]?.schemaThirdPartyVehicleReport;
    const touchedSchema =
      touchedFields?.schemaVehicleCrashReportData?.thirdPartyVehicleInfo?.[vehicles - 1]?.schemaThirdPartyVehicleReport;
    const schema = `schemaVehicleCrashReportData.thirdPartyVehicleInfo.${[vehicles - 1]}.schemaThirdPartyVehicleReport`;

  return (
    <div className="border-b-2 border-violet-500">
      <h4 className="text-violet-500 text-lg my-5">{`Vehiculo ${vehicles}`}</h4>
      
      <FormInput
        register={register(`${schema}.year`, {
          valueAsNumber: true,
        })}
        error={errorSchema?.year?.message}
        type="number"
        id="year"
        label="Año"
        placeholder="Año del vehiculo*"
        touched={touchedSchema?.year}
      />
      <FormInput
        register={register(`${schema}.brand`)}
        error={errorSchema?.brand?.message}
        type="text"
        id="brand"
        label="Marca"
        placeholder="Ingresar marca*"
        touched={touchedSchema?.brand}
      />
      <FormInput
        register={register(`${schema}.model`)}
        error={errorSchema?.model?.message}
        type="text"
        id="model"
        label="Modelo"
        placeholder="Ingresar modelo*"
        touched={touchedSchema?.model}
      />
      <FormInput
        register={register(`${schema}.plate`)}
        error={errorSchema?.plate?.message}
        type="text"
        id="plate"
        label="Patente"
        placeholder="Ingrese la patente*"
        touched={touchedSchema?.plate}
      />
      <FormInput
        register={register(`${schema}.insauranceCompany`)}
        error={errorSchema?.insauranceCompany?.message}
        type="text"
        id="insauranceCompany"
        label="Compania de seguros"
        placeholder="Ingrese la compania*"
        touched={touchedSchema?.insauranceCompany}
      />
      <FormInput
        register={register(`${schema}.insaurancePolicy`)}
        error={errorSchema?.insaurancePolicy?.message}
        type="text"
        id="insaurancePolicy"
        label="Poliza de seguros"
        placeholder="Ingrese la poliza*"
        touched={touchedSchema?.insaurancePolicy}
      />
      <FormInput
        register={register(`${schema}.ownerName`)}
        error={errorSchema?.ownerName?.message}
        type="text"
        id="ownerName"
        label="Nombre del propietario*"
        placeholder="Ingresar nombre"
        touched={touchedSchema?.ownerName}
      />
      <FormInput
        register={register(`${schema}.ownerDni`, {
          valueAsNumber: true,
        })}
        error={errorSchema?.ownerDni?.message}
        type="number"
        id="ownerDni"
        label="DNI del propietario*"
        placeholder="Ingresar DNI"
        touched={touchedSchema?.ownerDni}
      />
      <FormInput
        register={register(`${schema}.name`)}
        error={errorSchema?.name?.message}
        type="text"
        id="name"
        label="Nombre del conductor*"
        placeholder="Ingresar nombre"
        touched={touchedSchema?.name}
      />
      <FormInput
        register={register(`${schema}.dni`, {
          valueAsNumber: true,
        })}
        error={errorSchema?.dni?.message}
        type="number"
        id="dni"
        label="DNI del conductor*"
        placeholder="Ingresar DNI"
        touched={touchedSchema?.dni}
      />
      <FormInput
        register={register(`${schema}.address`)}
        error={errorSchema?.address?.message}
        type="text"
        id="address"
        label="Residencia del conductor*"
        placeholder="Ingresar residencia"
        touched={touchedSchema?.address}
      />
      <FormInput
        register={register(`${schema}.phoneNumber`, {
          valueAsNumber: true,
        })}
        error={errorSchema?.phoneNumber?.message}
        type="number"
        id="phoneNumber"
        label="Telefono del conductor*"
        placeholder="Ingresar numero telefonico"
        touched={touchedSchema?.phoneNumber}
      />
      <FormUploadImageReport
        schemaName={`${schema}.licencePhoto`}
        error={errorSchema?.licencePhoto?.message}
        id="licencePhoto"
        name="licencePhoto"
        imagesType={"Agregue imagenes del registro"}
      />
      <FormInput
        register={register(`${schema}.email`)}
        error={errorSchema?.email?.message}
        type="text"
        id="email"
        label="Email del conductor*"
        placeholder="Ingresar email"
        touched={touchedSchema?.email}
      />
    </div>
  );
}
export default FormThirdPartyVehiclesData;
