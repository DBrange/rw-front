import { FormUploadImageReport } from "..";
import { FormCheckboxObj, FormInput, FormInputOptional } from "../../../../components";
import { useReportContext } from "../../context";

function FormThirdPartyVehiclesData({ vehicles }: { vehicles: number }) {
  const { register, errors, touchedFields, isCheckedOwner, setIsCheckedOwner } =
    useReportContext();

    const errorSchema =
    errors?.schemaVehicleCrashReportData?.thirdPartyVehicleInfo?.[vehicles - 1]?.schemaThirdPartyVehicleReport;
  
    const touchedSchema =
    touchedFields?.schemaVehicleCrashReportData?.thirdPartyVehicleInfo?.[vehicles - 1]?.schemaThirdPartyVehicleReport;
  
    const schema = `schemaVehicleCrashReportData.thirdPartyVehicleInfo.${[vehicles - 1]}.schemaThirdPartyVehicleReport`;

  const isCheckedOwnerObj = isCheckedOwner?.[`${vehicles - 1}IsCheckedOwner`]

  
  return (
    <div className="border-b-2 border-violet-500">
      <h4 className="text-violet-500 text-lg my-5">{`Vehiculo ${vehicles}`}</h4>
      <FormInput
        register={register(`${schema}.year`, {
          valueAsNumber: true,
        })}
        error={errorSchema?.year?.message}
        type="number"
        id={`${schema}.year`}
        label="Año"
        placeholder="Año del vehiculo*"
        touched={touchedSchema?.year}
      />
      <FormInput
        register={register(`${schema}.brand`)}
        error={errorSchema?.brand?.message}
        type="text"
        id={`${schema}.brand`}
        label="Marca"
        placeholder="Ingresar marca*"
        touched={touchedSchema?.brand}
      />
      <FormInput
        register={register(`${schema}.model`)}
        error={errorSchema?.model?.message}
        type="text"
        id={`${schema}.model`}
        label="Modelo"
        placeholder="Ingresar modelo*"
        touched={touchedSchema?.model}
      />
      <FormInput
        register={register(`${schema}.plate`)}
        error={errorSchema?.plate?.message}
        type="text"
        id={`${schema}.plate`}
        label="Patente"
        placeholder="Ingrese la patente*"
        touched={touchedSchema?.plate}
      />
      <FormInput
        register={register(`${schema}.insauranceCompany`)}
        error={errorSchema?.insauranceCompany?.message}
        type="text"
        id={`${schema}.insauranceCompany`}
        label="Compania de seguros"
        placeholder="Ingrese la compania*"
        touched={touchedSchema?.insauranceCompany}
      />
      <FormInput
        register={register(`${schema}.insaurancePolicy`)}
        error={errorSchema?.insaurancePolicy?.message}
        type="text"
        id={`${schema}.insaurancePolicy`}
        label="Poliza de seguros"
        placeholder="Ingrese la poliza*"
        touched={touchedSchema?.insaurancePolicy}
      />
      <FormInput
        register={register(`${schema}.ownerName`)}
        error={errorSchema?.ownerName?.message}
        type="text"
        id={`${schema}.ownerName`}
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
        id={`${schema}.ownerDni`}
        label="DNI del propietario*"
        placeholder="Ingresar DNI"
        touched={touchedSchema?.ownerDni}
      />
      <FormInput
        register={register(`${schema}.address`)}
        error={errorSchema?.address?.message}
        type="text"
        id={`${schema}.address`}
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
        id={`${schema}.phoneNumber`}
        label="Telefono del conductor*"
        placeholder="Ingresar numero telefonico"
        touched={touchedSchema?.phoneNumber}
      />
      <FormUploadImageReport
        schemaName={`${schema}.licencePhoto`}
        error={errorSchema?.licencePhoto?.message}
        id={`${schema}.licencePhoto`}
        name="licencePhoto"
        imagesType={"Agregue imagenes del registro"}
      />
      <FormInput
        register={register(`${schema}.email`)}
        error={errorSchema?.email?.message}
        type="text"
        id={`${schema}.email`}
        label="Email del conductor*"
        placeholder="Ingresar email"
        touched={touchedSchema?.email}
      />
      <FormCheckboxObj
        register={register(`${schema}.isOwner`)}
        setChecked={setIsCheckedOwner}
        checkeds={isCheckedOwner}
        thirdVehicle={vehicles - 1}
        id={`${schema}.isOwner`}
        label={"¿El conductor es el propietario?"}
        instructions=""
      />
      <FormInputOptional checked={isCheckedOwnerObj}>
        <>
          <FormInput
            register={register(`${schema}.name`)}
            error={errors.schemaThirdPartyVehicleReport?.name?.message}
            type="text"
            id={`${schema}.name`}
            label="Nombre del conductor*"
            placeholder="Ingresar nombre"
            touched={touchedFields.schemaThirdPartyVehicleReport?.name}
          />
          <FormInput
            register={register(`${schema}.dni`)}
            error={errors.schemaThirdPartyVehicleReport?.dni?.message}
            type="number"
            id={`${schema}.dni`}
            label="DNI del conductor*"
            placeholder="Ingresar DNI"
            touched={touchedFields.schemaThirdPartyVehicleReport?.dni}
          />
        </>
      </FormInputOptional>

    </div>
  );
}
export default FormThirdPartyVehiclesData;
