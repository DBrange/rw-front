import { FormUploadImageReport } from "../../..";
import { FormInput } from "../../../../components";
import { useReportContext } from "../../context";

function FormThieftData() {
  const { register, errors, touchedFields } = useReportContext();
  return (
    <>
      <FormInput
        register={register("schemaElectronicTheftReport.time")}
        error={errors.schemaElectronicTheftReport?.time?.message}
        type="text"
        id="time"
        label="Horario del suceso"
        placeholder="Ingresar horario"
        touched={touchedFields.schemaElectronicTheftReport?.time}
      />
      <FormInput
        register={register("schemaElectronicTheftReport.date")}
        error={errors.schemaElectronicTheftReport?.date?.message}
        type="date"
        id="date"
        label="Fecha del suceso"
        placeholder="Ingresar fecha"
        touched={touchedFields.schemaElectronicTheftReport?.date}
      />
      <FormInput
        register={register("schemaElectronicTheftReport.location")}
        error={errors.schemaElectronicTheftReport?.location?.message}
        type="text"
        id="location"
        label="Ubicacion del suceso"
        placeholder="Ingresar ubicacion"
        touched={touchedFields.schemaElectronicTheftReport?.location}
      />

      <FormUploadImageReport register={register("schemaVehicle.images")} />
    </>
  );
}
export default FormThieftData