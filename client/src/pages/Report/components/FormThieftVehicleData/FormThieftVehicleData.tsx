import { FormTimeInput, FormUploadImageReport } from "../../..";
import {
  FormCheckbox,
  FormInput,
  FormInputOptional,
  FormInputRange,
} from "../../../../components";
import { useReportContext } from "../../context";

function FormThieftVehicleData() {
  const {
    register,
    errors,
    touchedFields,
    isTire,
    setIsTire,
    setValue,
    control,
    activeForm,
    trigger,
  } = useReportContext();

  return (
    <>
      <FormTimeInput schemaName={`schemaVehicleTheftReport.time`} />
      <FormInput
        register={register(`schemaVehicleTheftReport.date`)}
        error={errors[`schemaVehicleTheftReport`]?.date?.message}
        type="date"
        id={`schemaVehicleTheftReport.date`}
        label="Fecha del suceso*"
        placeholder="Ingresar fecha"
        touched={touchedFields[`schemaVehicleTheftReport`]?.date}
      />
      <FormInput
        register={register(`schemaVehicleTheftReport.location`)}
        error={errors[`schemaVehicleTheftReport`]?.location?.message}
        type="text"
        id={`schemaVehicleTheftReport.location`}
        label="Ubicacion del suceso*"
        placeholder="Ingresar ubicacion"
        touched={touchedFields[`schemaVehicleTheftReport`]?.location}
      />

      <div
        className={`${
          activeForm === "vehicle"
            ? "h-auto opacity-1 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        } `}
      >
        <FormCheckbox
          register={register(`schemaVehicleTheftReport.isTire`)}
          setChecked={setIsTire}
          id={`schemaVehicleTheftReport.isTire`}
          label={"¿Algun neumatico fue robado?"}
          instructions=""
          trigger={trigger}
        />
        <FormInputOptional checked={isTire}>
          <>
            <FormInput
              register={register("schemaIsTire.tireAmount")}
              error={errors.schemaIsTire?.tireAmount?.message}
              type="text"
              id="schemaIsTire.tireAmount"
              label="Cantidad*"
              placeholder="Ingresar cantidad"
              touched={touchedFields.schemaIsTire?.tireAmount}
            />
            <FormInputRange
              register={register("schemaIsTire.tireWear", {
                valueAsNumber: true,
              })}
              setValue={setValue}
              schemaName={"schemaIsTire.tireWear"}
              control={control}
              id={"schemaIsTire.tireWear"}
            />
          </>
        </FormInputOptional>
      </div>
      <FormUploadImageReport
        schemaName={`schemaVehicleTheftReport.reportPhoto`}
        error={errors[`schemaVehicleTheftReport`]?.reportPhoto?.message}
        id={`schemaVehicleTheftReport.reportPhoto`}
        name={`schemaVehicleTheftReport.reportPhoto`}
        imagesType="Agregar foto de la denuncia"
      />
    </>
  );
}
export default FormThieftVehicleData;
