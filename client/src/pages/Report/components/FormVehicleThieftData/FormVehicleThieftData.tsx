import { FormUploadImage } from "../../..";
import { FormInput } from "../../../../components";
import { useReportContext } from "../../context";

function FormThieftData() {
  const { register, errors, touchedFields } = useReportContext();
  return (
    <>
      <FormInput
        register={register("time")}
        error={errors.time?.message}
        type="text"
        id="time"
        label="Horario del suceso"
        placeholder="Ingresar horario"
        touched={touchedFields.time}
      />
      <FormInput
        register={register("date")}
        error={errors.time?.message}
        type="date"
        id="time"
        label="Horario del suceso"
        placeholder="Ingresar horario"
        touched={touchedFields.time}
      />
      <FormInput
        register={register("location")}
        error={errors.location?.message}
        type="text"
        id="location"
        label="Ubicacion del suceso"
        placeholder="Ingresar ubicacion"
        touched={touchedFields.location}
      />

      <FormUploadImage register={register("reportPhoto")} />
    </>
  );
}
export default FormThieftData