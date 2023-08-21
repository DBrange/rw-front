import {
  FormCheckbox,
  FormInput,
  FormInputOptional,
  FormSelect,
} from "../../../../components";
import { FormUploadImageReport, useReportContext } from "../../..";
import { FormPlateApi } from "../../../../components/FormPlateApi";

function FormVehicleDataReport() {
  const {
    errors,
    register,
    touchedFields,
    setIsCheckedDamage,
    isCheckedDamage,
    setIsCheckedGnc,
    isCheckedGnc,
    vehicleApi,
    setVehicleApi,trigger
  } = useReportContext();

  return (
    <>
      <FormPlateApi
        schemaName="schemaVehicleReport"
        errors={errors}
        register={register}
        touchedFields={touchedFields}
        setVehicleApi={setVehicleApi}
        vehicleApi={vehicleApi}
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
        trigger={trigger}
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

      <FormCheckbox
        register={register("schemaVehicleReport.gnc")}
        setChecked={setIsCheckedGnc}
        id="schemaVehicleReport.gnc"
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
        register={register("schemaVehicleReport.fuel")}
        error={errors.schemaVehicleReport?.fuel?.message}
        id="schemaVehicleReport.fuel"
        label="Combustible*"
        options={["DIESEL", "GASOLINA"]}
        touched={touchedFields.schemaVehicleReport?.fuel}
      />
      <FormSelect
        register={register("schemaVehicleReport.type")}
        error={errors.schemaVehicleReport?.type?.message}
        id="schemaVehicleReport.type"
        label="Tipo de vehiculo*"
        options={["CAMIONETA", "AUTOMOVIL", "MOTOCICLETA"]}
        touched={touchedFields.schemaVehicleReport?.type}
      />
    </>
  );
}
export default FormVehicleDataReport;
