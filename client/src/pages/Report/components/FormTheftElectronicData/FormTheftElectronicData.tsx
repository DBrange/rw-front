import { FormTimeInput, FormUploadImageReport } from "../../..";
import {
  FormCheckbox,
  FormInput,
  FormInputOptional,
  FormInputRange,
} from "../../../../components";
import { useReportContext } from "../../context";

function FormThieftElectronicData() {
  const {
    register,
    errors,
    touchedFields,
    setIsTire,
    activeForm,
    trigger,
  } = useReportContext();

  return (
    <>
      <FormTimeInput schemaName={`schemaElectronicTheftReport.time`} />
      <FormInput
        register={register(`schemaElectronicTheftReport.date`)}
        error={errors[`schemaElectronicTheftReport`]?.date?.message}
        type="date"
        id={`schemaElectronicTheftReport.date`}
        label="Fecha del suceso*"
        placeholder="Ingresar fecha"
        touched={touchedFields[`schemaElectronicTheftReport`]?.date}
      />
      <FormInput
        register={register(`schemaElectronicTheftReport.location`)}
        error={errors[`schemaElectronicTheftReport`]?.location?.message}
        type="text"
        id={`schemaElectronicTheftReport.location`}
        label="Ubicacion del suceso*"
        placeholder="Ingresar ubicacion"
        touched={touchedFields[`schemaElectronicTheftReport`]?.location}
      />

      <div
        className={`${
          activeForm === "vehicle"
            ? "h-auto opacity-1 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        } `}
      >
        <FormCheckbox
          register={register(`schemaElectronicTheftReport.isTire`)}
          setChecked={setIsTire}
          id={`schemaElectronicTheftReport.isTire`}
          label={"¿Algun neumatico fue robado?"}
          instructions=""
          trigger={trigger}
        />
      </div>
      <FormUploadImageReport
        schemaName={`schemaElectronicTheftReport.reportPhoto`}
        error={errors[`schemaElectronicTheftReport`]?.reportPhoto?.message}
        id={`schemaElectronicTheftReport.reportPhoto`}
        name={`schemaElectronicTheftReport.reportPhoto`}
        imagesType="Agregar foto de la denuncia"
      />
    </>
  );
}
export default FormThieftElectronicData;
