import { useState } from "react";
import {
  FormInputAmount,
  FormInputOptionalAmount,
  FormTextArea,
  FormTimeInput,
} from "..";
import {
  FormInput,
  FormCheckbox,
  FormInputOptional,
} from "../../../../components";
import { useReportContext } from "../../context";

function FormCrashData() {
  const {
    register,
    errors,
    touchedFields,
    setAmountValue,
    setAmountVehicles,
    amountVehicles,
    amountValue,
    trigger,
    setIsCheckedThirdInjuried,
    isCheckedThirdInjuried,
    setIsSwornDeclaration,
  } = useReportContext();

  const [isCheckedThirdVehicle, setIsCheckedThirdVehicle] =
    useState<boolean>(false);
  const [isCheckedInjuried, setIsCheckedInjuried] = useState<boolean>(false);
  const [isCheckedAmbulance, setIsCheckedAmbulance] = useState<boolean>(false);

  return (
    <>
      <FormTimeInput schemaName={"schemaVehicleCrashReport.time"} />
      <FormInput
        register={register("schemaVehicleCrashReport.date")}
        error={errors.schemaVehicleCrashReport?.date?.message}
        type="date"
        id="schemaVehicleCrashReport.date"
        label="Fecha del suceso*"
        placeholder="Ingresar fecha"
        touched={touchedFields.schemaVehicleCrashReport?.date}
      />
      <FormInput
        register={register("schemaVehicleCrashReport.location")}
        error={errors.schemaVehicleCrashReport?.location?.message}
        type="text"
        id="schemaVehicleCrashReport.location"
        label="Ubicacion del suceso*"
        placeholder="Ingresar ubicacion"
        touched={touchedFields.schemaVehicleCrashReport?.location}
      />

      <FormTextArea
        register={register("schemaVehicleCrashReport.details")}
        error={errors.schemaVehicleCrashReport?.details?.message}
        touched={touchedFields.schemaVehicleCrashReport?.details}
        id="schemaVehicleCrashReport.details"
      />

      <FormCheckbox
        register={register("schemaVehicleCrashReport.injured")}
        setChecked={setIsCheckedInjuried}
        id="schemaVehicleCrashReport.injured"
        label={"Lesiones"}
        instructions={"Estable si usted resulto herido"}
        trigger={trigger}
      />
      <FormInputOptional checked={isCheckedInjuried}>
        <FormInput
          register={register("schemaVehicleCrashReport.injuries")}
          error={errors.schemaVehicleCrashReport?.injuries?.message}
          type="text"
          id="schemaVehicleCrashReport.injuries"
          label="Tipo el de lesion"
          placeholder="Ingrese tipo el de lesion"
          touched={touchedFields.schemaVehicleCrashReport?.injuries}
        />
      </FormInputOptional>
      <FormCheckbox
        register={register("schemaVehicleCrashReport.ambulance")}
        setChecked={setIsCheckedAmbulance}
        id="schemaVehicleCrashReport.ambulance"
        label={"Ambulancia"}
        trigger={trigger}
        instructions={"Establece si estuvo la presencia de una ambulancia"}
      />
      <FormInputOptional checked={isCheckedAmbulance}>
        <FormInput
          register={register("schemaVehicleCrashReport.ambulanceTo")}
          error={errors.schemaVehicleCrashReport?.ambulanceTo?.message}
          type="text"
          id="schemaVehicleCrashReport.ambulanceTo"
          label="Destino de la ambulancia"
          placeholder="Ingrese tipo el de lesion"
          touched={touchedFields.schemaVehicleCrashReport?.ambulanceTo}
        />
      </FormInputOptional>
      <FormCheckbox
        register={register("schemaVehicleCrashReport.thirdInjured")}
        setChecked={setIsCheckedThirdInjuried}
        id="schemaVehicleCrashReport.thirdInjured"
        label={"Tercero(s) lesionados"}
        instructions={
          "Establece la cantidad de terceros heridos por el accidente"
        }
        trigger={trigger}
      />
      <FormInputOptionalAmount
        error={errors.schemaThirdInjured?.amount?.message}
        checked={isCheckedThirdInjuried}
        type="text"
        id="schemaThirdInjured.amount"
        label="Cantidad"
        placeholder="Ingresar cantidad"
        touched={touchedFields.schemaThirdInjured?.amount}
        schemaName={"schemaThirdInjured.amount"}
        setAmountValue={setAmountValue}
        amountValue={amountValue}
      />
      <FormInputAmount
        register={register("schemaVehicleCrashReportData.amountVehicles", {
          valueAsNumber: true,
        })}
        error={errors.schemaVehicleCrashReportData?.amountVehicles?.message}
        type="text"
        id="schemaVehicleCrashReportData.amountVehicles"
        label="Cantidad de vehiculos implicados"
        placeholder="Cantidad de terceros"
        touched={touchedFields.schemaVehicleCrashReportData?.amountVehicles}
        schemaName={"schemaVehicleCrashReportData.amountVehicles"}
        setAmountValue={setAmountVehicles}
        amountValue={amountVehicles}
      />
      <FormCheckbox
        register={register("schemaVehicleCrashReport.friendlyStatement")}
        setChecked={setIsCheckedThirdVehicle}
        id="schemaVehicleCrashReport.friendlyStatement"
        label={"Declaracion amistosa"}
        instructions={
          "Establece un acuerdo de palabra con los demas implicados, donde los datos que usted ingrese en la denuncia, seran enviados por mail a cada una de las partes, en donde todos deben estar de acuerdo con lo ingresado"
        }
        trigger={trigger}
      />
      <FormCheckbox
        register={register(`schemaVehicleCrashReport.swornDeclaration`)}
        setChecked={setIsSwornDeclaration}
        id={`swornDeclarationcrash`}
        label="Aceptar declaracion jurada"
        instructions=""
        trigger={trigger}
      />
    </>
  );
}
export default FormCrashData;
