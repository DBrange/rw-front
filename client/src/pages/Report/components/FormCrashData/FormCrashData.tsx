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
        typeComplaintForm,
        changePage,
        page,
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
        register={register("time")}
        error={errors.time?.message}
        type="text"
        id="time"
        label="Horario del suceso"
        placeholder="Ingresar horario"
        touched={touchedFields.time}
      />
      <FormInput
        register={register("date")}
        error={errors.time?.message}
        type="date"
        id="time"
        label="Horario del suceso"
        placeholder="Ingresar horario"
        touched={touchedFields.time}
      />
      <FormInput
        register={register("location")}
        error={errors.location?.message}
        type="text"
        id="location"
        label="Ubicacion del suceso"
        placeholder="Ingresar ubicacion"
        touched={touchedFields.location}
      />
      
      <FormTextArea textaValue={textaValue} error={errors.details} touched={touchedFields.details} />

      <FormCheckbox
        register={register("injuried")}
        setChecked={setIsCheckedInjuried}
        id={"injuried"}
        label={"Lesiones"}
      />
      <FormInputOptional
        register={register("injuries")}
        error={errors.injuries?.message}
        checked={isCheckedInjuried}
        type="text"
        id="injuries"
        label="Tipo el de lesion"
        placeholder="Ingrese tipo el de lesion"
        touched={touchedFields.injuries}
      />
      <FormCheckbox
        register={register("ambulance")}
        setChecked={setIsCheckedAmbulance}
        id={"ambulance"}
        label={"Ambulancia"}
      />
      <FormInputOptional
        register={register("ambulanceTo")}
        error={errors.ambulanceTo?.message}
        checked={isCheckedAmbulance}
        type="text"
        id="ambulanceTo"
        label="Destino de la ambulancia"
        placeholder="Ingrese tipo el de lesion"
        touched={touchedFields.ambulanceTo}
      />
      <FormCheckbox
        register={register("thirdInjuried")}
        setChecked={setIsCheckedThirdInjuried}
        id={"thirdInjuried"}
        label={"Tercero(s) lesionados"}
      />
      <FormInputOptional
        register={register("amount")}
        error={errors.amount?.message}
        checked={isCheckedThirdInjuried}
        type="number"
        id="amount"
        label="Cantidad"
        placeholder="Ingresar cantidad"
        touched={touchedFields.amount}
      />

      {/* <FormThirdPartyVehicleData /> */}
    </>
  );
}
export default FormCrashData