import { FormTimeInput, FormUploadImageReport } from "../../..";
import {
  FormCheckbox,
  FormInput,
  FormInputOptional,
  FormInputRange,
} from "../../../../components";
import { useReportContext } from "../../context";

function FormThieftData({ objectType }: { objectType: string }) {
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
      <FormTimeInput schemaName={`${objectType}.time`} />
      <FormInput
        register={register(`${objectType}.date`)}
        error={errors[`${objectType}`]?.date?.message}
        type="date"
        id={`${objectType}.date`}
        label="Fecha del suceso*"
        placeholder="Ingresar fecha"
        touched={touchedFields[`${objectType}`]?.date}
      />
      <FormInput
        register={register(`${objectType}.location`)}
        error={errors[`${objectType}`]?.location?.message}
        type="text"
        id={`${objectType}.location`}
        label="Ubicacion del suceso*"
        placeholder="Ingresar ubicacion"
        touched={touchedFields[`${objectType}`]?.location}
      />

      <div
        className={`${
          activeForm === "vehicle"
            ? "h-auto opacity-1 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        } `}
      >
        <FormCheckbox
          register={register(`${objectType}.isTire`)}
          setChecked={setIsTire}
          id={`${objectType}.isTire`}
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
        schemaName={`${objectType}.reportPhoto`}
        error={errors[`${objectType}`]?.reportPhoto?.message}
        id={`${objectType}.reportPhoto`}
        name={`${objectType}.reportPhoto`}
        imagesType="Agregar foto de la denuncia"
      />
    </>
  );
}
export default FormThieftData;
