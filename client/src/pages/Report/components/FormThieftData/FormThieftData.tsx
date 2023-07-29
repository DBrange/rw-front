import { FormUploadImageReport } from "../../..";
import { FormInput } from "../../../../components";
import { useReportContext } from "../../context";

function FormThieftData({ objectType }: { objectType: string }) {
  const { register, errors, touchedFields } = useReportContext();

  return (
    <>
      <FormInput
        register={register(`${objectType}.time`)}
        error={errors[`${objectType}`]?.time?.message}
        type="text"
        id="time"
        label="Horario del suceso"
        placeholder="Ingresar horario"
        touched={touchedFields[`${objectType}`]?.time}
      />
      <FormInput
        register={register(`${objectType}.date`)}
        error={errors[`${objectType}`]?.date?.message}
        type="date"
        id="date"
        label="Fecha del suceso"
        placeholder="Ingresar fecha"
        touched={touchedFields[`${objectType}`]?.date}
      />
      <FormInput
        register={register(`${objectType}.location`)}
        error={errors[`${objectType}`]?.location?.message}
        type="text"
        id="location"
        label="Ubicacion del suceso"
        placeholder="Ingresar ubicacion"
        touched={touchedFields[`${objectType}`]?.location}
      />

      <FormUploadImageReport
        schemaName={`${objectType}.images`}
        error={errors.objectType?.images?.message}
      />
    </>
  );
}
export default FormThieftData