import { FormUploadImageReport } from "..";
import {
  FormCheckbox,
  FormCheckboxObj,
  FormInput,
  FormInputOptional,
} from "../../../../components";
import { useReportContext } from "../../context";

function FormThirdPartyVehiclesData({ vehicles }: { vehicles: number }) {
  const { register, errors, touchedFields, isCheckedOwnerObj, setIsCheckedOwnerObj } =
    useReportContext();

  const errorSchemaOwner = !isCheckedOwnerObj?.[`${vehicles - 1}IsCheckedOwner`]
    ? errors?.schemaVehicleCrashReportData?.thirdPartyVehicleInfo?.[
        vehicles - 1
      ]?.schemaThirdPartyVehicleReport
    : errors?.schemaVehicleCrashReportDataNotOwner?.thirdPartyVehicleInfo?.[
        vehicles - 1
      ]?.schemaThirdPartyVehicleReport;
    console.log(errorSchemaOwner)
  const touchedSchemaOwner = !isCheckedOwnerObj?.[`${vehicles - 1}IsCheckedOwner`]
    ? touchedFields?.schemaVehicleCrashReportData?.thirdPartyVehicleInfo?.[
        vehicles - 1
      ]?.schemaThirdPartyVehicleReport
    : touchedFields?.schemaVehicleCrashReportDataNotOwner
        ?.thirdPartyVehicleInfo?.[vehicles - 1]?.schemaThirdPartyVehicleReport;

  const schemaOwner = !isCheckedOwnerObj?.[`${vehicles - 1}IsCheckedOwner`]
    ? `schemaVehicleCrashReportData.thirdPartyVehicleInfo.${[
        vehicles - 1,
      ]}.schemaThirdPartyVehicleReport`
    : `schemaVehicleCrashReportDataNotOwner.thirdPartyVehicleInfo.${[
        vehicles - 1,
      ]}.schemaThirdPartyVehicleReport`;


  const schemaNotOwner = `schemaVehicleCrashReportDataNotOwner.thirdPartyVehicleInfo.${[
    vehicles - 1,
  ]}.schemaNotOwner`;

  const errorSchemaNotOwner =
    errors?.schemaVehicleCrashReportDataNotOwner?.thirdPartyVehicleInfo?.[
      vehicles - 1
    ]?.schemaNotOwner;
  
  const touchedSchemaNotOwner =
    touchedFields?.schemaVehicleCrashReportDataNotOwner
      ?.thirdPartyVehicleInfo?.[vehicles - 1]?.schemaNotOwner;

  return (
    <div className="border-b-2 border-violet-500">
      <h4 className="text-violet-500 text-lg my-5">{`Vehiculo ${vehicles}`}</h4>
      <FormInput
        register={register(`${schemaOwner}.year`, {
          valueAsNumber: true,
        })}
        error={errorSchemaOwner?.year?.message}
        type="number"
        id={`${schemaOwner}.year`}
        label="Año"
        placeholder="Año del vehiculo*"
        touched={touchedSchemaOwner?.year}
      />
      <FormInput
        register={register(`${schemaOwner}.brand`)}
        error={errorSchemaOwner?.brand?.message}
        type="text"
        id={`${schemaOwner}.brand`}
        label="Marca"
        placeholder="Ingresar marca*"
        touched={touchedSchemaOwner?.brand}
      />
      <FormInput
        register={register(`${schemaOwner}.model`)}
        error={errorSchemaOwner?.model?.message}
        type="text"
        id={`${schemaOwner}.model`}
        label="Modelo"
        placeholder="Ingresar modelo*"
        touched={touchedSchemaOwner?.model}
      />
      <FormInput
        register={register(`${schemaOwner}.plate`)}
        error={errorSchemaOwner?.plate?.message}
        type="text"
        id={`${schemaOwner}.plate`}
        label="Patente"
        placeholder="Ingrese la patente*"
        touched={touchedSchemaOwner?.plate}
      />
      <FormInput
        register={register(`${schemaOwner}.insauranceCompany`)}
        error={errorSchemaOwner?.insauranceCompany?.message}
        type="text"
        id={`${schemaOwner}.insauranceCompany`}
        label="Compania de seguros"
        placeholder="Ingrese la compania*"
        touched={touchedSchemaOwner?.insauranceCompany}
      />
      <FormInput
        register={register(`${schemaOwner}.insaurancePolicy`)}
        error={errorSchemaOwner?.insaurancePolicy?.message}
        type="text"
        id={`${schemaOwner}.insaurancePolicy`}
        label="Poliza de seguros"
        placeholder="Ingrese la poliza*"
        touched={touchedSchemaOwner?.insaurancePolicy}
      />
      <FormInput
        register={register(`${schemaOwner}.ownerName`)}
        error={errorSchemaOwner?.ownerName?.message}
        type="text"
        id={`${schemaOwner}.ownerName`}
        label="Nombre del propietario*"
        placeholder="Ingresar nombre"
        touched={touchedSchemaOwner?.ownerName}
      />
      <FormInput
        register={register(`${schemaOwner}.ownerDni`, {
          valueAsNumber: true,
        })}
        error={errorSchemaOwner?.ownerDni?.message}
        type="number"
        id={`${schemaOwner}.ownerDni`}
        label="DNI del propietario*"
        placeholder="Ingresar DNI"
        touched={touchedSchemaOwner?.ownerDni}
      />
      <FormInput
        register={register(`${schemaOwner}.address`)}
        error={errorSchemaOwner?.address?.message}
        type="text"
        id={`${schemaOwner}.address`}
        label="Residencia del conductor*"
        placeholder="Ingresar residencia"
        touched={touchedSchemaOwner?.address}
      />
      <FormInput
        register={register(`${schemaOwner}.phoneNumber`, {
          valueAsNumber: true,
        })}
        error={errorSchemaOwner?.phoneNumber?.message}
        type="number"
        id={`${schemaOwner}.phoneNumber`}
        label="Telefono del conductor*"
        placeholder="Ingresar numero telefonico"
        touched={touchedSchemaOwner?.phoneNumber}
      />
      <FormUploadImageReport
        schemaName={`${schemaOwner}.licencePhoto`}
        error={errorSchemaOwner?.licencePhoto?.message}
        id={`${schemaOwner}.licencePhoto`}
        name="licencePhoto"
        imagesType={"Agregue imagenes del registro"}
      />
      <FormInput
        register={register(`${schemaOwner}.email`)}
        error={errorSchemaOwner?.email?.message}
        type="text"
        id={`${schemaOwner}.email`}
        label="Email del conductor*"
        placeholder="Ingresar email"
        touched={touchedSchemaOwner?.email}
      />
      <FormCheckboxObj
        register={register(`${schemaOwner}.isOwner`)}
        setChecked={setIsCheckedOwnerObj}
        checkeds={isCheckedOwnerObj}
        thirdVehicle={vehicles - 1}
        id={`${schemaOwner}.isOwner`}
        label={"¿El conductor es el propoietario?"}
        instructions=""
      />
      <FormInputOptional
        register={register(`${schemaNotOwner}.name`)}
        error={errorSchemaNotOwner?.name?.message}
        checked={isCheckedOwnerObj?.[`${vehicles - 1}IsCheckedOwner`]}
        type="text"
        id={`${schemaNotOwner}.name`}
        label="Nombre del conductor*"
        placeholder="Ingresar nombre"
        touched={touchedSchemaNotOwner?.name}
      />
      <FormInputOptional
        register={register(`${schemaNotOwner}.dni`)}
        error={errorSchemaNotOwner?.dni?.message}
        checked={isCheckedOwnerObj?.[`${vehicles - 1}IsCheckedOwner`]}
        type="number"
        id={`${schemaNotOwner}.dni`}
        label="DNI del conductor*"
        placeholder="Ingresar DNI"
        touched={touchedSchemaNotOwner?.dni}
      />
    </div>
  );
}
export default FormThirdPartyVehiclesData;
