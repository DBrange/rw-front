import {
  AllReportValues,
  ChangeEventTextAreaType,
  ChangeEventType,
  ErrorsAllReportValues,
  TouchedAllReportValues,
} from "@/pages";
import { useState } from "react";
import {
  FormCheckbox,
  FormCheckboxOpenClose,
  FormInput,
  FormOptional,
  FormScheduleInput,
  FormTextArea,
} from "..";
import { SectionFormContainer } from "@/styledComponents";

interface Props {
  inputValues: AllReportValues;
  inputTouched: TouchedAllReportValues;
  errorsInputValues: Partial<ErrorsAllReportValues> | undefined;
  changeInputValues: (e: ChangeEventType) => void;
  changeInputForCheckbox: (e: ChangeEventType) => void;
  changeInputForImages: (e: ChangeEventType, images: string[]) => void;
  changeInputForTextArea: (e: ChangeEventTextAreaType) => void;
  changeInputForSchedule: (name: string, schedule: string) => void;
  changeInputValuesNumber: (e: ChangeEventType) => void;
}

function FormCrashVehicle({
  inputValues,
  inputTouched,
  errorsInputValues,
  changeInputValues,
  changeInputForCheckbox,
  changeInputForTextArea,
  changeInputForSchedule,
  changeInputValuesNumber,
}: Props) {
  const [isInjured, setIsInjured] = useState<boolean>(false);
  const [ambulancePresent, setAmbulancePresent] = useState<boolean>(false);
  const [thereAreInjured, setThereAreInjured] = useState<boolean>(false);

  return (
    <SectionFormContainer>
      <FormScheduleInput
        error={errorsInputValues?.crash?.time}
        label="Horario del suceso"
        objectName="crash.time"
        touched={inputTouched?.crash?.time}
        changeInputForSchedule={changeInputForSchedule}
      />
      <FormInput
        label="Fecha del suceso*"
        value={inputValues?.crash.date}
        touched={inputTouched?.crash?.date}
        error={errorsInputValues?.crash?.date}
        handleChange={changeInputValues}
        name="crash.date"
        id="crash.date"
        type="date"
        placeholder="Ingresar fecha"
      />
      <FormInput
        label="Ubicacion del suceso*"
        value={inputValues?.crash?.location}
        touched={inputTouched?.crash?.location}
        error={errorsInputValues?.crash?.location}
        handleChange={changeInputValues}
        name="crash.location"
        id="crash.location"
        type="text"
        placeholder="Ingresar ubicacion"
      />
      <FormTextArea
        label="Detalles del suceso"
        value={inputValues?.crash.details}
        touched={inputTouched.crash.details}
        error={errorsInputValues?.crash?.details}
        handleChange={changeInputForTextArea}
        name={"crash.details"}
        id={"crash.details"}
        placeholder={""}
      />
      <FormCheckboxOpenClose
        label="Tuve lesiones"
        checked={isInjured}
        setChecked={setIsInjured}
        changeInputForCheckbox={changeInputForCheckbox}
        name="crash.injured"
        id="crash.injured"
        instructions=""
      />
      <FormOptional
        children={
          <>
            <FormInput
              label="Tipo de lesion*"
              value={inputValues?.crash.injuries}
              touched={false}
              error={""}
              handleChange={changeInputValues}
              name="crash.injuries"
              id="crash.injuries"
              type="text"
              placeholder="Ingresar lugar dañado"
            />
          </>
        }
        checked={isInjured}
      />
      <FormCheckboxOpenClose
        label="Presencia de ambulancia"
        checked={ambulancePresent}
        setChecked={setAmbulancePresent}
        changeInputForCheckbox={changeInputForCheckbox}
        name="crash.ambulance"
        id="crash.ambulance"
        instructions=""
      />
      <FormOptional
        children={
          <>
            <FormInput
              label="Destino de la ambulancia"
              value={inputValues?.crash.ambulanceTo}
              touched={false}
              error={""}
              handleChange={changeInputValues}
              name="crash.ambulanceTo"
              id="crash.ambulanceTo"
              type="text"
              placeholder="Ingresar destino"
            />
          </>
        }
        checked={ambulancePresent}
      />
      <FormCheckboxOpenClose
        label="Terceros lesionados"
        checked={thereAreInjured}
        setChecked={setThereAreInjured}
        changeInputForCheckbox={changeInputForCheckbox}
        name="crash.thirdInjured"
        id="crash.thirdInjured"
        instructions=""
      />
      <FormOptional
        children={
          <>
            <FormInput
              label="Cantidad*"
              value={inputValues?.crash.amount}
              touched={inputTouched?.crash?.amount}
              error={errorsInputValues?.crash?.amount}
              handleChange={changeInputValuesNumber}
              name="crash.amount"
              id="crash.amount"
              type="text"
              placeholder="Ingresar destino"
            />
          </>
        }
        checked={thereAreInjured}
      />
      <FormInput
        label="Cantidad de vehiculos implicados*"
        value={inputValues?.crash.amountVehicles}
        touched={inputTouched.crash?.amountVehicles}
        error={errorsInputValues?.crash?.amountVehicles}
        handleChange={changeInputValuesNumber}
        name="crash.amountVehicles"
        id="crash.amountVehicles"
        type="text"
        placeholder="Ingresar destino"
      />
      <FormCheckbox
        changeInputForCheckbox={changeInputForCheckbox}
        label="Declaracion amistosa"
        name="crash.friendlyStatement"
        id="crash.friendlyStatement"
        instructions=""
      />
    </SectionFormContainer>
  );
}
export default FormCrashVehicle;
