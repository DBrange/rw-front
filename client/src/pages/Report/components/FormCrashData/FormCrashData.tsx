import { useState } from "react";
import { FormInjuredInfoData, FormTextArea, FormThirdPartyVehicleData, PageButtonReport } from "..";
import { FormInput, FormCheckbox, FormInputOptional, FormEffectOpenClose } from "../../../../components";
import { useReportContext } from "../../context";

function FormCrashData() {
      const {
        register,
        errors,
        touchedFields,
        textaValue,
      } = useReportContext();

      const [isCheckedInjuried, setIsCheckedInjuried] =
        useState<boolean>(false);
      const [isCheckedAmbulance, setIsCheckedAmbulance] =
        useState<boolean>(false);
      const [isCheckedThirdInjuried, setIsCheckedThirdInjuried] =
    useState<boolean>(false);
  


  return (
    <>
      <FormInput
        register={register("schemaVehicleCrashReport.time")}
        error={errors.schemaVehicleCrashReport?.time?.message}
        type="text"
        id="time"
        label="Horario del suceso"
        placeholder="Ingresar horario"
        touched={touchedFields.schemaVehicleCrashReport?.time}
      />
      <FormInput
        register={register("schemaVehicleCrashReport.date")}
        error={errors.schemaVehicleCrashReport?.date?.message}
        type="date"
        id="time"
        label="Horario del suceso"
        placeholder="Ingresar horario"
        touched={touchedFields.schemaVehicleCrashReport?.date}
      />
      <FormInput
        register={register("schemaVehicleCrashReport.location")}
        error={errors.schemaVehicleCrashReport?.location?.message}
        type="text"
        id="location"
        label="Ubicacion del suceso"
        placeholder="Ingresar ubicacion"
        touched={touchedFields.schemaVehicleCrashReport?.location}
      />

      <FormTextArea
        textaValue={textaValue}
        error={errors.details}
        touched={touchedFields.details}
      />

      <FormCheckbox
        register={register("schemaVehicleCrashReport.injured")}
        setChecked={setIsCheckedInjuried}
        id={"injuried"}
        label={"Lesiones"}
      />
      <FormInputOptional
        register={register("schemaVehicleCrashReport.injuries")}
        error={errors.schemaVehicleCrashReport?.injuries?.message}
        checked={isCheckedInjuried}
        type="text"
        id="injuries"
        label="Tipo el de lesion"
        placeholder="Ingrese tipo el de lesion"
        touched={touchedFields.schemaVehicleCrashReport?.injuries}
      />
      <FormCheckbox
        register={register("schemaVehicleCrashReport.ambulance")}
        setChecked={setIsCheckedAmbulance}
        id={"ambulance"}
        label={"Ambulancia"}
      />
      <FormInputOptional
        register={register("schemaVehicleCrashReport.ambulanceTo")}
        error={errors.schemaVehicleCrashReport?.ambulanceTo?.message}
        checked={isCheckedAmbulance}
        type="text"
        id="ambulanceTo"
        label="Destino de la ambulancia"
        placeholder="Ingrese tipo el de lesion"
        touched={touchedFields.schemaVehicleCrashReport?.ambulanceTo}
      />
      <FormCheckbox
        register={register("schemaVehicleCrashReport.thirdInjured")}
        setChecked={setIsCheckedThirdInjuried}
        id={"thirdInjuried"}
        label={"Tercero(s) lesionados"}
      />
      <FormInputOptional
        register={register("schemaVehicleCrashReport.amount")}
        error={errors.schemaVehicleCrashReport?.amount?.message}
        checked={isCheckedThirdInjuried}
        type="number"
        id="amount"
        label="Cantidad"
        placeholder="Ingresar cantidad"
        touched={touchedFields.schemaVehicleCrashReport?.amount}
      />

      {/* <FormThirdPartyVehicleData /> */}
    </>
  );
}
export default FormCrashData