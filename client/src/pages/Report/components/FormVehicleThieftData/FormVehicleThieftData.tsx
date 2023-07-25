import { FormUploadImageReport } from "../../..";
import { FormInput } from "../../../../components";
import { useReportContext } from "../../context";

function FormThieftData() {
  const { register, errors, touchedFields } = useReportContext();
  return (
    <>
      <FormInput
        register={register("schemaVehicleTheftReport.time")}
        error={errors.schemaVehicleTheftReport?.time?.message}
        type="text"
        id="time"
        label="Horario del suceso"
        placeholder="Ingresar horario"
        touched={touchedFields.schemaVehicleTheftReport?.time}
      />
      <FormInput
        register={register("schemaVehicleTheftReport.date")}
        error={errors.schemaVehicleTheftReport?.date?.message}
        type="date"
        id="date"
        label="Fecha del suceso"
        placeholder="Ingresar fecha"
        touched={touchedFields.schemaVehicleTheftReport?.date}
      />
      <FormInput
        register={register("schemaVehicleTheftReport.location")}
        error={errors.schemaVehicleTheftReport?.location?.message}
        type="text"
        id="location"
        label="Ubicacion del suceso"
        placeholder="Ingresar ubicacion"
        touched={touchedFields.schemaVehicleTheftReport?.location}
      />

      <FormUploadImageReport
        register={register("schemaVehicleTheftReport.images")}
      />
    </>
  );
}
export default FormThieftData