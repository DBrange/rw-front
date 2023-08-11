import { useState } from "react";
import { FormInputOptionalAmount, FormTextArea, FormTimeInput } from "..";
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
    amountValue,
    amountVehicles,
    setIsCheckedThirdInjuried,
isCheckedThirdInjuried
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
        id="time"
        label="Fecha del suceso*"
        placeholder="Ingresar fecha"
        touched={touchedFields.schemaVehicleCrashReport?.date}
      />
      <FormInput
        register={register("schemaVehicleCrashReport.location")}
        error={errors.schemaVehicleCrashReport?.location?.message}
        type="text"
        id="location"
        label="Ubicacion del suceso*"
        placeholder="Ingresar ubicacion"
        touched={touchedFields.schemaVehicleCrashReport?.location}
      />

      <FormTextArea
        register={register("schemaVehicleCrashReport.details")}
        error={errors.schemaVehicleCrashReport?.details?.message}
        touched={touchedFields.schemaVehicleCrashReport?.details}
      />

      <FormCheckbox
        register={register("schemaVehicleCrashReport.injured")}
        setChecked={setIsCheckedInjuried}
        id={"injuried"}
        label={"Lesiones"}
        instructions={"Estable si usted resulto herido"}
      />
      <FormInputOptional checked={isCheckedInjuried}>
        <FormInput
          register={register("schemaVehicleCrashReport.injuries")}
          error={errors.schemaVehicleCrashReport?.injuries?.message}
          type="text"
          id="injuries"
          label="Tipo el de lesion"
          placeholder="Ingrese tipo el de lesion"
          touched={touchedFields.schemaVehicleCrashReport?.injuries}
        />
      </FormInputOptional>
      <FormCheckbox
        register={register("schemaVehicleCrashReport.ambulance")}
        setChecked={setIsCheckedAmbulance}
        id={"ambulance"}
        label={"Ambulancia"}
        instructions={"Establece si estuvo la presencia de una ambulancia"}
      />
      <FormInputOptional checked={isCheckedAmbulance}>
        <FormInput
          register={register("schemaVehicleCrashReport.ambulanceTo")}
          error={errors.schemaVehicleCrashReport?.ambulanceTo?.message}
          type="text"
          id="ambulanceTo"
          label="Destino de la ambulancia"
          placeholder="Ingrese tipo el de lesion"
          touched={touchedFields.schemaVehicleCrashReport?.ambulanceTo}
        />
      </FormInputOptional>
      <FormCheckbox
        register={register("schemaVehicleCrashReport.thirdInjured")}
        setChecked={setIsCheckedThirdInjuried}
        id={"thirdInjuried"}
        label={"Tercero(s) lesionados"}
        instructions={
          "Establece la cantidad de terceros heridos por el accidente"
        }
      />
      <FormInputOptionalAmount
        error={errors.schemaThirdInjured?.amount?.message}
        checked={isCheckedThirdInjuried}
        type="number"
        id="amount"
        label="Cantidad"
        placeholder="Ingresar cantidad"
        touched={touchedFields.schemaThirdInjured?.amount}
        schemaName={"schemaThirdInjured.amount"}
        setAmountValue={setAmountValue}
        amountValue={amountValue}
      />
      <FormCheckbox
        register={register("schemaVehicleCrashReport.friendlyStatement")}
        setChecked={setIsCheckedThirdVehicle}
        id={"thirdInjuried"}
        label={"Declaracion amistosa"}
        instructions={
          "Establece un acuerdo de palabra con los demas implicados, donde los datos que usted ingrese en la denuncia, seran enviados por mail a cada una de las partes, en donde todos deben estar de acuerdo con lo ingresado"
        }
      />
      <FormInputOptionalAmount
        error={errors.schemaVehicleCrashReportData?.amount?.message}
        checked={isCheckedThirdVehicle}
        type="number"
        id="amountThirdPartyVehicle"
        label="Cantidad de terceros"
        placeholder="Ingresar cantidad"
        touched={touchedFields.schemaVehicleCrashReportData?.amount}
        schemaName={"schemaVehicleCrashReportData.amount"}
        setAmountValue={setAmountVehicles}
        amountValue={amountVehicles}
      />
    </>
  );
}
export default FormCrashData;
