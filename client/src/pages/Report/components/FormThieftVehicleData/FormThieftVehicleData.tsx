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
    // setIsSwornDeclaration,
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
            <FormUploadImageReport
              schemaName={`schemaIsTire.reportPhoto`}
              error={errors[`schemaIsTire`]?.reportPhoto?.message}
              id={`schemaIsTire.reportPhoto`}
              name={`schemaIsTire.reportPhoto`}
              imagesType="Agregar foto de la denuncia"
            />
            <FormInput
              register={register(`schemaIsTire.replacementLocation`)}
              error={errors[`schemaIsTire`]?.replacementLocation?.message}
              type="text"
              id={`schemaIsTire.replacementLocation`}
              label="Ubicacion del suceso*"
              placeholder="Ingresar ubicacion"
              touched={touchedFields[`schemaIsTire`]?.replacementLocation}
            />
          </>
        </FormInputOptional>
      </div>
      <FormUploadImageReport
        schemaName={`schemaVehicleTheftReport.tirePhoto`}
        error={errors[`schemaVehicleTheftReport`]?.tirePhoto?.message}
        id={`schemaVehicleTheftReport.tirePhoto`}
        name={`schemaVehicleTheftReport.tirePhoto`}
        imagesType="Agregar foto de un neumatico"
      />
      {/* <FormCheckbox
        register={register(`swornDeclaration`)}
        setChecked={setIsSwornDeclaration}
        id={`swornDeclaration`}
        label={"¿Algun neumatico fue robado?"}
        instructions=""
        trigger={trigger}
      /> */}
    </>
  );
}
export default FormThieftVehicleData;
