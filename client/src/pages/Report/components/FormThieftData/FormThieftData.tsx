import { useState } from "react";
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
          register={register("schemaThirdPartyVehicleReport.isTire")}
          setChecked={setIsTire}
          id="schemaThirdPartyVehicleReport.isTire"
          label={"¿Alguna rueda fue robada?"}
          instructions=""
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
            />
          </>
        </FormInputOptional>
      </div>
      <FormUploadImageReport
        schemaName={`${objectType}.images`}
        error={errors.objectType?.images?.message}
        id={`${objectType}.images`}
        name="imagesFire"
        imagesType={"Agregue imagen de la denuncia"}
      />
    </>
  );
}
export default FormThieftData;
