import { useState } from "react";
import { FormInjuredInfoData, FormTextArea, FormThirdPartyVehicleData } from "..";
import { FormInput, FormCheckbox, FormInputOptional } from "../../../../components";
import { useReportContext } from "../../context";

function FormCrashData() {
      const { register, errors, touchedFields, textaValue } =
        useReportContext();

      const [isCheckedInjuried, setIsCheckedInjuried] =
        useState<boolean>(false);
      const [isCheckedAmbulance, setIsCheckedAmbulance] =
        useState<boolean>(false);
      const [isCheckedThirdInjuried, setIsCheckedThirdInjuried] =
    useState<boolean>(false);
  
  const thirdInjuredForm = () => {
    let a = []
    for (let i = 0; i < 3; i++) {
      a.push(<FormInjuredInfoData person={i + 1} />)
    }
    console.log(a)
    return a
  }

  thirdInjuredForm()
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
      <FormTextArea textaValue={textaValue} />
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
        label="Tipo el de lesion"
        placeholder="Ingrese tipo el de lesion"
        touched={touchedFields.ambulanceTo}
      />
      <FormCheckbox
        register={register("thirdInjuried")}
        setChecked={setIsCheckedThirdInjuried}
        id={"thirdInjuried"}
        label={"Tercero(s) con lesiones"}
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
      {thirdInjuredForm()}

      <FormThirdPartyVehicleData />
    </>
  );
}
export default FormCrashData