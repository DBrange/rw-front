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
    trigger,
    setIsSwornDeclaration,
  } = useInspectContext();

  return (
    <>
      <FormPlateApi
        schemaName="schemaVehicle"
        errors={errors}
        register={register}
        touchedFields={touchedFields}
        setVehicleApi={setVehicleApi}
        setValue={setValue}
        control={control}
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
        label="Marca de los neumaticos*"
        placeholder="Ingrese la marca"
        touched={touchedFields.schemaVehicle?.tireBrand}
      />
      <FormInput
        register={register("schemaVehicle.tireSize")}
        error={errors.schemaVehicle?.tireSize?.message}
        type="text"
        id="schemaVehicle.tireSize"
        label="Tamaño del neumatico*"
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
        trigger={trigger}
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
        trigger={trigger}
      />
      <FormCheckbox
        register={register("schemaVehicle.gnc")}
        setChecked={setIsCheckedGnc}
        id="schemaVehicle.gnc"
        label={"GNC"}
        instructions="Estable si el vehiculo lleva GNC"
        trigger={trigger}
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
      <FormCheckbox
        register={register(`swornDeclaration`)}
        setChecked={setIsSwornDeclaration}
        id={`swornDeclaration`}
        label="Aceptar declaracion jurada"
        instructions=""
        trigger={trigger}
      />
    </>
  );
}
export default FormVehicleData;
