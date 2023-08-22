import { FormInputFetch, FormInputGet } from "..";
import { VehicleApi } from "../../models/interfaces";

interface Props {
  schemaName: string;
  errors: any;
  register: any;
  touchedFields: any;
  setVehicleApi: React.Dispatch<React.SetStateAction<VehicleApi>>;
  setValue: any;
  control:any
}
function FormPlateApi({
  schemaName,
  errors,
  register,
  touchedFields,
  setVehicleApi,
  setValue,
  control
}: Props) {
  return (
    <div>
      <FormInputFetch
        register={register(`${schemaName}.plate`)}
        error={errors[schemaName]?.plate?.message}
        type="text"
        id={`${schemaName}.plate`}
        label="Patente*"
        placeholder="Ingrese la patente"
        touched={touchedFields[schemaName]?.plate}
        setVehicleApi={setVehicleApi}
        setValue={setValue}
        schemaName={schemaName}
      />
      <FormInputGet
        register={register(`${schemaName}.year`, { valueAsNumber: true })}
        error={errors[schemaName]?.year?.message}
        type="text"
        id={`${schemaName}.year`}
        label="Año*"
        placeholder="Ano del vehiculo"
        touched={touchedFields[schemaName]?.year}
        schemaName={`${schemaName}.year`}
        control={control}
      />
      <FormInputGet
        register={register(`${schemaName}.brand`)}
        error={errors[schemaName]?.brand?.message}
        type="text"
        id={`${schemaName}.brand`}
        label="Marca*"
        placeholder="Ingresar marca"
        touched={touchedFields[schemaName]?.brand}
        schemaName={`${schemaName}.brand`}
        control={control}
      />
      <FormInputGet
        register={register(`${schemaName}.model`)}
        error={errors[schemaName]?.model?.message}
        type="text"
        id={`${schemaName}.model`}
        label="Modelo*"
        placeholder="Ingresar modelo"
        touched={touchedFields[schemaName]?.model}
        schemaName={`${schemaName}.model`}
        control={control}
      />
    </div>
  );
}
export default FormPlateApi;
