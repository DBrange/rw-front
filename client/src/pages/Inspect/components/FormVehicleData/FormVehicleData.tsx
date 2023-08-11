import { useState } from "react";
import {
  FormCheckbox,
  FormInput,
  FormInputOptional,
  FormInputRange,
  FormSelect,
} from "../../../../components";
import { FormSelectElecType, useInspectContext } from "../../..";
import FormUploadImage from "../FormUploadImage/FormUploadImage";

function FormVehicleData() {
  const {
    errors,
    register,
    touchedFields,
    setValue,
    control,
    setIsCheckedDamage,
    isCheckedDamage,
    setIsCheckedGnc,
    isCheckedGnc,
    setIsCheckedOkm,
    isCheckedOkm,
  } = useInspectContext();


  return (
    <>
      <FormInput
        register={register("schemaVehicle.year", { valueAsNumber: true })}
        error={errors.schemaVehicle?.year?.message}
        type="number"
        id="year"
        label="Año*"
        placeholder="Ano del vehiculo"
        touched={touchedFields.schemaVehicle?.year}
      />
      <FormInput
        register={register("schemaVehicle.color")}
        error={errors.schemaVehicle?.color?.message}
        type="text"
        id="color"
        label="Color*"
        placeholder="Color del vehiculo"
        touched={touchedFields.schemaVehicle?.color}
      />
      <FormInput
        register={register("schemaVehicle.tireBrand")}
        error={errors.schemaVehicle?.tireBrand?.message}
        type="text"
        id="tireBrand"
        label="Marca de las ruedas*"
        placeholder="Ingrese la marca"
        touched={touchedFields.schemaVehicle?.tireBrand}
      />
      <FormInput
        register={register("schemaVehicle.tireSize")}
        error={errors.schemaVehicle?.tireSize?.message}
        type="text"
        id="tireSize"
        label="Tamaño de la rueda*"
        placeholder="Ingrese el tamaño"
        touched={touchedFields.schemaVehicle?.tireSize}
      />

      <FormInputRange
        register={register("schemaVehicle.tireWear", { valueAsNumber: true })}
        setValue={setValue}
        schemaName={"schemaVehicle.tireWear"}
        control={control}
      />

      <FormCheckbox
        register={register("schemaVehicle.damage")}
        setChecked={setIsCheckedDamage}
        id={"damage"}
        label={"Daño"}
        instructions="Estable si el vehiculo sufrio algun daño"
      />

      <FormInputOptional
        register={register("schemaVehicle.damageLocation")}
        error={errors.schemaVehicle?.damageLocation?.message}
        checked={isCheckedDamage}
        type="text"
        id="damageLocation"
        label="Lugar dañado*"
        placeholder="Ingrese el lugar"
        touched={touchedFields.schemaVehicle?.damageLocation}
      />

      <FormUploadImage
        schemaName={"schemaVehicle.images"}
        error={errors.schemaVehicle?.images?.message}
        id={"images"}
        imagesType={"Agregue fotos del vehiculo"}
      />

      <FormInput
        register={register("schemaVehicle.plate")}
        error={errors.schemaVehicle?.plate?.message}
        type="text"
        id="plate"
        label="Patente*"
        placeholder="Ingrese la patente"
        touched={touchedFields.schemaVehicle?.plate}
      />

      <FormCheckbox
        register={register("schemaVehicle.okm")}
        setChecked={setIsCheckedOkm}
        id={"okm"}
        label={"¿Es 0 km?"}
        instructions="Estable si el vehiculo es 0 Km"
      />

      <FormCheckbox
        register={register("schemaVehicle.gnc")}
        setChecked={setIsCheckedGnc}
        id={"gnc"}
        label={"GNC"}
        instructions="Estable si el vehiculo lleva GNC"
      />

      <FormInputOptional
        register={register("schemaGnc.obleaNumber")}
        error={errors.schemaGnc?.obleaNumber?.message}
        checked={isCheckedGnc}
        type="text"
        id="obleaNumber"
        label="Numero de oblea*"
        placeholder="Ingrese el lugar"
        touched={touchedFields.schemaGnc?.obleaNumber}
      />
      <FormInputOptional
        register={register("schemaGnc.gncExpiration")}
        error={errors.schemaGnc?.gncExpiration?.message}
        checked={isCheckedGnc}
        type="date"
        id="gncExpiration"
        label="Vencimiento*"
        placeholder="Ingrese el lugar"
        touched={touchedFields.schemaGnc?.gncExpiration}
      />

      <FormInput
        register={register("schemaVehicle.brand")}
        error={errors.schemaVehicle?.brand?.message}
        type="text"
        id="brand"
        label="Marca*"
        placeholder="Ingresar marca"
        touched={touchedFields.schemaVehicle?.brand}
      />
      <FormInput
        register={register("schemaVehicle.model")}
        error={errors.schemaVehicle?.model?.message}
        type="text"
        id="model"
        label="Modelo*"
        placeholder="Ingresar modelo"
        touched={touchedFields.schemaVehicle?.model}
      />

      <FormSelect
        register={register("schemaVehicle.fuel")}
        error={errors.schemaVehicle?.fuel?.message}
        id="fuel"
        label="Combustible*"
        options={["DIESEL", "GASOLINE"]}
        touched={touchedFields.schemaVehicle?.fuel}
      />
      <FormSelect
        register={register("schemaVehicle.type")}
        error={errors.schemaVehicle?.type?.message}
        id="vehicleType"
        label="Tipo de vehiculo*"
        options={["CAMION", "AUTOMOVIL", "MOTOCICLETA"]}
        touched={touchedFields.schemaVehicle?.type}
      />
    </>
  );
}
export default FormVehicleData;
