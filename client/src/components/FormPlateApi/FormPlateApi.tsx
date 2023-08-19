import { FormInputFetch, FormInputGet } from "..";
import { VehicleApi } from "../../interfaces";

interface Props {
  schemaName: string;
  errors: any;
  register: any;
  touchedFields: any;
  setVehicleApi: React.Dispatch<React.SetStateAction<VehicleApi>>;
  vehicleApi: VehicleApi;
}
function FormPlateApi({
  schemaName,
  errors,
  register,
  touchedFields,
  setVehicleApi,
  vehicleApi,
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
      />
      <FormInputGet
        register={register(`${schemaName}.year`, { valueAsNumber: true })}
        error={errors[schemaName]?.year?.message}
        type="number"
        id={`${schemaName}.year`}
        label="Año*"
        placeholder="Ano del vehiculo"
        touched={touchedFields[schemaName]?.year}
        valueApi={vehicleApi.year || ""}
      />
      <FormInputGet
        register={register(`${schemaName}.brand`)}
        error={errors[schemaName]?.brand?.message}
        type="text"
        id={`${schemaName}.brand`}
        label="Marca*"
        placeholder="Ingresar marca"
        touched={touchedFields[schemaName]?.brand}
        valueApi={vehicleApi.carMake || ""}
      />
      <FormInputGet
        register={register(`${schemaName}.model`)}
        error={errors[schemaName]?.model?.message}
        type="text"
        id={`${schemaName}.model`}
        label="Modelo*"
        placeholder="Ingresar modelo"
        touched={touchedFields[schemaName]?.model}
        valueApi={vehicleApi.carModel || ""}
      />
    </div>
  );
}
export default FormPlateApi;
