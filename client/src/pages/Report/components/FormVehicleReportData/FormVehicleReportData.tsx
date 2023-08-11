import { useState } from "react";
import {
  FormCheckbox,
  FormInput,
  FormInputOptional,
  FormSelect,
} from "../../../../components";
import { FormUploadImageReport, useReportContext } from "../../..";

function FormVehicleDataReport() {
  const {
    errors,
    register,
    touchedFields,
    setIsCheckedDamage,
    isCheckedDamage,
    setIsCheckedGnc,
    isCheckedGnc,
  } = useReportContext();

  return (
    <>
      <FormInput
        register={register("schemaVehicleReport.year", { valueAsNumber: true })}
        error={errors.schemaVehicleReport?.year?.message}
        type="number"
        id="schemaVehicleReport.year"
        label="Año*"
        placeholder="Ano del vehiculo"
        touched={touchedFields.year}
      />
      <FormInput
        register={register("schemaVehicleReport.color")}
        error={errors.schemaVehicleReport?.color?.message}
        type="text"
        id="schemaVehicleReport.color"
        label="Color*"
        placeholder="Color del vehiculo"
        touched={touchedFields.schemaVehicleReport?.color}
      />

      <FormCheckbox
        register={register("schemaVehicleReport.damage")}
        setChecked={setIsCheckedDamage}
        id="schemaVehicleReport.damage"
        label={"Daño"}
        instructions="Estable si el vehiculo sufrio algun daño"
      />

      <FormInputOptional checked={isCheckedDamage}>
        <FormInput
          register={register("schemaVehicleReport.damageLocation")}
          error={errors.schemaVehicleReport?.damageLocation?.message}
          type="text"
          id="schemaVehicleReport.damageLocation"
          label="Lugar dañado"
          placeholder="Ingrese el lugar"
          touched={touchedFields.schemaVehicleReport?.damageLocation}
        />
      </FormInputOptional>

      <FormUploadImageReport
        schemaName={"schemaVehicleReport.images"}
        error={errors.schemaVehicleReport?.images?.message}
        id="schemaVehicleReport.images"
        name="images"
        imagesType={"Subir imagenes del vehiculo"}
      />

      <FormInput
        register={register("schemaVehicleReport.plate")}
        error={errors.schemaVehicleReport?.plate?.message}
        type="text"
        id="schemaVehicleReport.plate"
        label="Patente*"
        placeholder="Ingrese la patente"
        touched={touchedFields.schemaVehicleReport?.plate}
      />

      <FormCheckbox
        register={register("schemaVehicleReport.gnc")}
        setChecked={setIsCheckedGnc}
        id="schemaVehicleReport.gnc"
        label={"GNC"}
        instructions="Estable si el vehiculo lleva GNC"
      />

      <FormInputOptional checked={isCheckedGnc}>
        <>
          <FormInput
            register={register("schemaGnc.obleaNumber")}
            error={errors.schemaGnc?.obleaNumber?.message}
            type="text"
            id="schemaGnc.obleaNumber"
            label="Numero de oblea*"
            placeholder="Ingrese el lugar"
            touched={touchedFields.schemaGnc?.obleaNumber}
          />
          <FormInput
            register={register("schemaGnc.gncExpiration")}
            error={errors.schemaGnc?.gncExpiration?.message}
            type="date"
            id="schemaGnc.gncExpiration"
            label="Vencimiento*"
            placeholder="Ingrese el lugar"
            touched={touchedFields.schemaGnc?.gncExpiration}
          />
        </>
      </FormInputOptional>
      <FormInput
        register={register("schemaVehicleReport.brand")}
        error={errors.schemaVehicleReport?.brand?.message}
        type="text"
        id="schemaVehicleReport.brand"
        label="Marca*"
        placeholder="Ingresar marca"
        touched={touchedFields.schemaVehicleReport?.brand}
      />
      <FormInput
        register={register("schemaVehicleReport.model")}
        error={errors.schemaVehicleReport?.model?.message}
        type="text"
        id="schemaVehicleReport.model"
        label="Modelo*"
        placeholder="Ingresar modelo"
        touched={touchedFields.schemaVehicleReport?.model}
      />

      <FormSelect
        register={register("schemaVehicleReport.fuel")}
        error={errors.schemaVehicleReport?.fuel?.message}
        id="schemaVehicleReport.fuel"
        label="Combustible*"
        options={["DIESEL", "GASOLINE"]}
        touched={touchedFields.schemaVehicleReport?.fuel}
      />
      <FormSelect
        register={register("schemaVehicleReport.type")}
        error={errors.schemaVehicleReport?.type?.message}
        id="schemaVehicleReport.type"
        label="Tipo de vehiculo*"
        options={["CAMION", "AUTOMOVIL", "MOTOCICLETA"]}
        touched={touchedFields.schemaVehicleReport?.type}
      />
    </>
  );
}
export default FormVehicleDataReport;
