import { useState } from "react";
import {
  FormCheckbox,
  FormInput,
  FormInputOptional,
  FormInputRange,
  FormSelect,
} from "../../../../components";
import { FormUploadImageReport, useReportContext } from "../../..";

function FormVehicleDataReport() {
  const { errors, register, touchedFields, setValue, control } = useReportContext();
  const [isCheckedDamage, setIsCheckedDamage] = useState<boolean>(false);
  const [isCheckedGnc, setIsCheckedGnc] = useState<boolean>(false);

  return (
    <>
      <FormInput
        register={register("schemaVehicleReport.year", { valueAsNumber: true })}
        error={errors.schemaVehicleReport?.year?.message}
        type="number"
        id="year"
        label="Año*"
        placeholder="Ano del vehiculo"
        touched={touchedFields.year}
      />
      <FormInput
        register={register("schemaVehicleReport.color")}
        error={errors.schemaVehicleReport?.color?.message}
        type="text"
        id="color"
        label="Color*"
        placeholder="Color del vehiculo"
        touched={touchedFields.schemaVehicleReport?.color}
      />

      <FormCheckbox
        register={register("schemaVehicleReport.damage")}
        setChecked={setIsCheckedDamage}
        id={"damage"}
        label={"Daño"}
      />

      <FormInputOptional
        register={register("schemaVehicleReport.damageLocation")}
        error={errors.schemaVehicleReport?.damageLocation?.message}
        checked={isCheckedDamage}
        type="text"
        id="damageLocation"
        label="Lugar dañado"
        placeholder="Ingrese el lugar"
        touched={touchedFields.schemaVehicleReport?.damageLocation}
      />

      <FormUploadImageReport
        schemaName={"schemaVehicleReport.images"}
        error={errors.schemaVehicleReport?.images?.message}
        id="images"
        name="images"
        imagesType={"Subir imagenes del vehiculo"}
      />

      <FormInput
        register={register("schemaVehicleReport.plate")}
        error={errors.schemaVehicleReport?.plate?.message}
        type="text"
        id="plate"
        label="Patente*"
        placeholder="Ingrese la patente"
        touched={touchedFields.schemaVehicleReport?.plate}
      />

      <FormCheckbox
        register={register("schemaVehicleReport.gnc")}
        setChecked={setIsCheckedGnc}
        id={"gnc"}
        label={"GNC"}
      />

      <FormInputOptional
        register={register("schemaVehicleReport.obleaNumber", {
          valueAsNumber: true,
        })}
        error={errors.schemaVehicleReport?.obleaNumber?.message}
        checked={isCheckedGnc}
        type="text"
        id="obleaNumber"
        label="Numero de oblea*"
        placeholder="Ingrese el lugar"
        touched={touchedFields.schemaVehicleReport?.obleaNumber}
      />
      <FormInputOptional
        register={register("schemaVehicleReport.gncEpiration")}
        error={errors.schemaVehicleReport?.gncEpiration?.message}
        checked={isCheckedGnc}
        type="date"
        id="gncEpiration"
        label="Vencimiento*"
        placeholder="Ingrese el lugar"
        touched={touchedFields.schemaVehicleReport?.gncEpiration}
      />

      <FormInput
        register={register("schemaVehicleReport.brand")}
        error={errors.schemaVehicleReport?.brand?.message}
        type="text"
        id="brand"
        label="Marca*"
        placeholder="Ingresar marca"
        touched={touchedFields.schemaVehicleReport?.brand}
      />
      <FormInput
        register={register("schemaVehicleReport.model")}
        error={errors.schemaVehicleReport?.model?.message}
        type="text"
        id="model"
        label="Modelo*"
        placeholder="Ingresar modelo"
        touched={touchedFields.schemaVehicleReport?.model}
      />

      <FormSelect
        register={register("schemaVehicleReport.fuel")}
        error={errors.schemaVehicleReport?.fuel?.message}
        id="fuel"
        label="Combustible*"
        options={["diesel", "gasoline"]}
        touched={touchedFields.schemaVehicleReport?.fuel}
      />
      <FormSelect
        register={register("schemaVehicleReport.vehicleType")}
        error={errors.schemaVehicleReport?.vehicleType?.message}
        id="vehicleType"
        label="Tipo de vehiculo*"
        options={["camion", "automovil", "motocicleta"]}
        touched={touchedFields.schemaVehicleReport?.vehicleType}
      />
    </>
  );
}
export default FormVehicleDataReport;
