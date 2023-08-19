import {
  FormCheckbox,
  FormInput,
  FormInputOptional,
  FormInputRange,
  FormSelect,
} from "../../../../components";
import { useInspectContext } from "../../..";
import FormUploadImage from "../FormUploadImage/FormUploadImage";
import FormPlateApi from "../../../../components/FormPlateApi/FormPlateApi";

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
    setVehicleApi,
    vehicleApi,
  } = useInspectContext();

  return (
    <>
      <FormPlateApi
        schemaName="schemaVehicle"
        errors={errors}
        register={register}
        touchedFields={touchedFields}
        setVehicleApi={setVehicleApi}
        vehicleApi={vehicleApi}
      />

      <FormInput
        register={register("schemaVehicle.color")}
        error={errors.schemaVehicle?.color?.message}
        type="text"
        id="schemaVehicle.color"
        label="Color*"
        placeholder="Color del vehiculo"
        touched={touchedFields.schemaVehicle?.color}
      />
      <FormInput
        register={register("schemaVehicle.tireBrand")}
        error={errors.schemaVehicle?.tireBrand?.message}
        type="text"
        id="schemaVehicle.tireBrand"
        label="Marca de las ruedas*"
        placeholder="Ingrese la marca"
        touched={touchedFields.schemaVehicle?.tireBrand}
      />
      <FormInput
        register={register("schemaVehicle.tireSize")}
        error={errors.schemaVehicle?.tireSize?.message}
        type="text"
        id="schemaVehicle.tireSize"
        label="Tamaño de la rueda*"
        placeholder="Ingrese el tamaño"
        touched={touchedFields.schemaVehicle?.tireSize}
      />
      <FormInputRange
        register={register("schemaVehicle.tireWear", { valueAsNumber: true })}
        setValue={setValue}
        schemaName="schemaVehicle.tireWear"
        control={control}
        id="schemaVehicle.tireWear"
      />
      <FormCheckbox
        register={register("schemaVehicle.damage")}
        setChecked={setIsCheckedDamage}
        id="schemaVehicle.damage"
        label={"Daño"}
        instructions="Estable si el vehiculo sufrio algun daño"
      />
      <FormInputOptional checked={isCheckedDamage}>
        <>
          <FormInput
            register={register("schemaVehicle.damageLocation")}
            error={errors.schemaVehicle?.damageLocation?.message}
            type="text"
            id="schemaVehicle.damageLocation"
            label="Lugar dañado*"
            placeholder="Ingrese el lugar"
            touched={touchedFields.schemaVehicle?.damageLocation}
          />
        </>
      </FormInputOptional>
      <FormUploadImage
        schemaName={"schemaVehicle.images"}
        error={errors.schemaVehicle?.images?.message}
        id="schemaVehicle.images"
        imagesType={"Agregue fotos del vehiculo"}
      />
      <FormCheckbox
        register={register("schemaVehicle.okm")}
        setChecked={setIsCheckedOkm}
        id="schemaVehicle.okm"
        label={"¿Es 0 km?"}
        instructions="Estable si el vehiculo es 0 Km"
      />
      <FormCheckbox
        register={register("schemaVehicle.gnc")}
        setChecked={setIsCheckedGnc}
        id="schemaVehicle.gnc"
        label={"GNC"}
        instructions="Estable si el vehiculo lleva GNC"
      />
      <FormInputOptional checked={isCheckedGnc}>
        <>
          <FormInput
            register={register("schemaGnc.oblea")}
            error={errors.schemaGnc?.oblea?.message}
            type="text"
            id="schemaGnc.oblea"
            label="Numero de oblea*"
            placeholder="Ingrese el lugar"
            touched={touchedFields.schemaGnc?.oblea}
          />
          <FormInput
            register={register("schemaGnc.plate")}
            error={errors.schemaGnc?.plate?.message}
            type="text"
            id="schemaGnc.plate"
            label="Patente*"
            placeholder="Ingrse patente"
            touched={touchedFields.schemaGnc?.plate}
          />
          <FormInput
            register={register("schemaGnc.expireDate")}
            error={errors.schemaGnc?.expireDate?.message}
            type="date"
            id="schemaGnc.expireDate"
            label="Vencimiento*"
            placeholder="Ingrese el lugar"
            touched={touchedFields.schemaGnc?.expireDate}
          />
        </>
      </FormInputOptional>
      <FormSelect
        register={register("schemaVehicle.fuel")}
        error={errors.schemaVehicle?.fuel?.message}
        id="schemaVehicle.fuel"
        label="Combustible*"
        options={["DIESEL", "GASOLINA"]}
        touched={touchedFields.schemaVehicle?.fuel}
      />
      <FormSelect
        register={register("schemaVehicle.type")}
        error={errors.schemaVehicle?.type?.message}
        id="schemaVehicle.type"
        label="Tipo de vehiculo*"
        options={["CAMIONETA", "AUTOMOVIL", "MOTOCICLETA"]}
        touched={touchedFields.schemaVehicle?.type}
      />
    </>
  );
}
export default FormVehicleData;
