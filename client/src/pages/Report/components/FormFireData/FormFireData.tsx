import { useState } from "react";
import { FormInputOptionalAmount, FormTextArea, FormTimeInput } from "..";
import { FormCheckbox, FormInput, FormInputOptional } from "../../../../components";
import { useReportContext } from "../../context";

function FormFireData() {
  const {
    register,
    errors,
    touchedFields,
    setAmountValue,
    amountValue,
    setIsCheckedThirdInjuried,
isCheckedThirdInjuried
  } = useReportContext();

        const [isCheckedInjuried, setIsCheckedInjuried] =
          useState<boolean>(false);
        const [isCheckedAmbulance, setIsCheckedAmbulance] =
          useState<boolean>(false);
        
  return (
    <>
      <FormTimeInput schemaName={"schemaVehicleFireReport.time"} />

      <FormInput
        register={register("schemaVehicleFireReport.date")}
        error={errors.schemaVehicleFireReport?.date?.message}
        type="date"
        id="schemaVehicleFireReport.date"
        label="Fecha del suceso*"
        placeholder="Ingresar fecha"
        touched={touchedFields.schemaVehicleFireReport?.date}
      />
      <FormInput
        register={register("schemaVehicleFireReport.location")}
        error={errors.schemaVehicleFireReport?.location?.message}
        type="text"
        id="schemaVehicleFireReport.location"
        label="Ubicacion del suceso*"
        placeholder="Ingresar ubicacion"
        touched={touchedFields.schemaVehicleFireReport?.location}
      />

      <FormTextArea
        register={register("schemaVehicleFireReport.details")}
        error={errors.schemaVehicleFireReport?.details.message}
        touched={touchedFields.schemaVehicleFireReport?.details}
        id={"schemaVehicleFireReport.details"}
      />

      <FormCheckbox
        register={register("schemaVehicleFireReport.injured")}
        setChecked={setIsCheckedInjuried}
        id="schemaVehicleFireReport.injured"
        label={"Lesiones*"}
        instructions={"Estable si usted resulto herido"}
      />
      <FormInputOptional checked={isCheckedInjuried}>
        <FormInput
          register={register("schemaVehicleFireReport.injuries")}
          error={errors.schemaVehicleFireReport?.injuries?.message}
          type="text"
          id="schemaVehicleFireReport.injuries"
          label="Tipo el de lesion*"
          placeholder="Ingrese tipo el de lesion"
          touched={touchedFields.schemaVehicleFireReport?.injuries}
        />
      </FormInputOptional>
      <FormCheckbox
        register={register("schemaVehicleFireReport.ambulance")}
        setChecked={setIsCheckedAmbulance}
        id="schemaVehicleFireReport.ambulance"
        label={"Ambulancia"}
        instructions={"Establece si estuvo la presencia de una ambulancia"}
      />
      <FormInputOptional checked={isCheckedAmbulance}>
        <FormInput
          register={register("schemaVehicleFireReport.ambulanceTo")}
          error={errors.schemaVehicleFireReport?.ambulanceTo?.message}
          type="text"
          id="schemaVehicleFireReport.ambulanceTo"
          label="Destino de la ambulancia*"
          placeholder="Ingrese tipo el de lesion"
          touched={touchedFields.schemaVehicleFireReport?.ambulanceTo}
        />
      </FormInputOptional>
      <FormCheckbox
        register={register("schemaVehicleFireReport.thirdInjured")}
        setChecked={setIsCheckedThirdInjuried}
        id="schemaVehicleFireReport.thirdInjured"
        label={"Tercero(s) lesionados*"}
        instructions={
          "Establece la cantidad de terceros heridos por el accidente"
        }
      />
      <FormInputOptionalAmount
        error={errors.schemaVehicleFireReport?.amount?.message}
        checked={isCheckedThirdInjuried}
        type="number"
        id="schemaThirdInjured.amount"
        label="Cantidad*"
        placeholder="Ingresar cantidad"
        touched={touchedFields.schemaVehicleFireReport?.amount}
        schemaName={"schemaThirdInjured.amount"}
        setAmountValue={setAmountValue}
        amountValue={amountValue}
      />
    </>
  );
}
export default FormFireData