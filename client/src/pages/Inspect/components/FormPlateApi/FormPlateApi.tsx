import { useInspectContext } from "../..";
import { FormInputFetch, FormInputGet } from "../../../../components";

function FormPlateApi() {
  const { errors, register, touchedFields, vehicleApi, control} = useInspectContext();
  return (
    <div>
      <FormInputFetch
        register={register("schemaVehicle.plate")}
        error={errors.schemaVehicle?.plate?.message}
        type="text"
        id="schemaVehicle.plate"
        label="Patente*"
        placeholder="Ingrese la patente"
        touched={touchedFields.schemaVehicle?.plate}
      />
      <FormInputGet
        register={register("schemaVehicle.year", { valueAsNumber: true })}
        error={errors.schemaVehicle?.year?.message}
        type="number"
        id="schemaVehicle.year"
        label="Año*"
        placeholder="Ano del vehiculo"
        touched={touchedFields.schemaVehicle?.year}
        valueApi={vehicleApi.year || ''}
      />
      <FormInputGet
        register={register("schemaVehicle.make")}
        error={errors.schemaVehicle?.make?.message}
        type="text"
        id="schemaVehicle.make"
        label="Marca*"
        placeholder="Ingresar marca"
        touched={touchedFields.schemaVehicle?.make}
        valueApi={vehicleApi.carMake || ''}
      />
      <FormInputGet
        register={register("schemaVehicle.model")}
        error={errors.schemaVehicle?.model?.message}
        type="text"
        id="schemaVehicle.model"
        label="Modelo*"
        placeholder="Ingresar modelo"
        touched={touchedFields.schemaVehicle?.model}
        valueApi={vehicleApi.carModel || ''}
      />
    </div>
  );
}
export default FormPlateApi;
