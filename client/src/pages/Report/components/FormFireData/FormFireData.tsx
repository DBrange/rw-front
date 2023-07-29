import { useState } from "react";
import { FormInputOptionalAmount, FormTextArea } from "..";
import { FormCheckbox, FormInput, FormInputOptional } from "../../../../components";
import { useReportContext } from "../../context";

function FormFireData() {
  const { register, errors, touchedFields } = useReportContext();

        const [isCheckedInjuried, setIsCheckedInjuried] =
          useState<boolean>(false);
        const [isCheckedAmbulance, setIsCheckedAmbulance] =
          useState<boolean>(false);
        const [isCheckedThirdInjuried, setIsCheckedThirdInjuried] =
          useState<boolean>(false);
  return (
    <>
      <FormInput
        register={register("schemaVehicleFireReport.time")}
        error={errors.schemaVehicleFireReport?.time?.message}
        type="text"
        id="time"
        label="Horario del suceso"
        placeholder="Ingresar horario"
        touched={touchedFields.schemaVehicleFireReport?.time}
      />
      <FormInput
        register={register("schemaVehicleFireReport.date")}
        error={errors.schemaVehicleFireReport?.date?.message}
        type="date"
        id="date"
        label="Fecha del suceso"
        placeholder="Ingresar fecha"
        touched={touchedFields.schemaVehicleFireReport?.date}
      />
      <FormInput
        register={register("schemaVehicleFireReport.location")}
        error={errors.schemaVehicleFireReport?.location?.message}
        type="text"
        id="location"
        label="Ubicacion del suceso"
        placeholder="Ingresar ubicacion"
        touched={touchedFields.schemaVehicleFireReport?.location}
      />

      <FormTextArea
        register={register("schemaVehicleFireReport.details")}
        error={errors.schemaVehicleFireReport?.details.message}
        touched={touchedFields.schemaVehicleFireReport?.details}
      />
      <FormCheckbox
        register={register("schemaVehicleFireReport.injured")}
        setChecked={setIsCheckedInjuried}
        id={"injuried"}
        label={"Lesiones"}
      />
      <FormInputOptional
        register={register("schemaVehicleFireReport.injuries")}
        error={errors.schemaVehicleFireReport?.injuries?.message}
        checked={isCheckedInjuried}
        type="text"
        id="injuries"
        label="Tipo el de lesion"
        placeholder="Ingrese tipo el de lesion"
        touched={touchedFields.schemaVehicleFireReport?.injuries}
      />
      <FormCheckbox
        register={register("schemaVehicleFireReport.ambulance")}
        setChecked={setIsCheckedAmbulance}
        id={"ambulance"}
        label={"Ambulancia"}
      />
      <FormInputOptional
        register={register("schemaVehicleFireReport.ambulanceTo")}
        error={errors.schemaVehicleFireReport?.ambulanceTo?.message}
        checked={isCheckedAmbulance}
        type="text"
        id="ambulanceTo"
        label="Destino de la ambulancia"
        placeholder="Ingrese tipo el de lesion"
        touched={touchedFields.schemaVehicleFireReport?.ambulanceTo}
      />
      <FormCheckbox
        register={register("schemaVehicleFireReport.thirdInjured")}
        setChecked={setIsCheckedThirdInjuried}
        id={"thirdInjuried"}
        label={"Tercero(s) lesionados"}
      />
      <FormInputOptionalAmount
        error={errors.schemaVehicleFireReport?.amount?.message}
        checked={isCheckedThirdInjuried}
        type="number"
        id="amount"
        label="Cantidad"
        placeholder="Ingresar cantidad"
        touched={touchedFields.schemaVehicleFireReport?.amount}
        schemaName={"schemaThirdInjured.amount"}
      />
    </>
  );
}
export default FormFireData