import {
  AllReportValues,
  ChangeEventTextAreaType,
  ChangeEventType,
  ClientCreateReportValues,
  ErrorsAllReportValues,
  ErrorsClientCreateReportValues,
  TouchedAllReportValues,
  TouchedClientCreateReportValues,
} from "@/pages";
import { useState } from "react";
import {
  FormCheckboxOpenClose,
  FormInput,
  FormOptional,
  FormScheduleInput,
  FormTextArea,
} from "..";
import { SectionFormContainer } from "@/styledComponents";

interface Props {
  inputValues: AllReportValues | ClientCreateReportValues;
  inputTouched: TouchedAllReportValues | TouchedClientCreateReportValues;
  errorsInputValues:
    | Partial<ErrorsAllReportValues>
    | Partial<ErrorsClientCreateReportValues>
    | undefined;
  changeInputValues: (e: ChangeEventType) => void;
  changeInputForCheckbox: (e: ChangeEventType) => void;
  changeInputForImages: (e: ChangeEventType, images: string[]) => void;
  changeInputForTextArea: (e: ChangeEventTextAreaType) => void;
  changeInputForSchedule: (name: string, schedule: string) => void;
  changeInputValuesNumber: (e: ChangeEventType) => void;
}

function FormFireVehicle({
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
        error={errorsInputValues?.fire?.time}
        label="Horario del suceso"
        objectName="fire.time"
        touched={inputTouched?.fire?.time}
        changeInputForSchedule={changeInputForSchedule}
      />
      <FormInput
        label="Fecha del suceso*"
        value={inputValues?.fire.date}
        touched={inputTouched?.fire?.date}
        error={errorsInputValues?.fire?.date}
        handleChange={changeInputValues}
        name="fire.date"
        id="fire.date"
        type="date"
        placeholder="Ingresar fecha"
      />
      <FormInput
        label="Ubicacion del suceso*"
        value={inputValues?.fire?.location}
        touched={inputTouched?.fire?.location}
        error={errorsInputValues?.fire?.location}
        handleChange={changeInputValues}
        name="fire.location"
        id="fire.location"
        type="text"
        placeholder="Ingresar ubicacion"
      />
      <FormTextArea
        label="Detalles del suceso"
        value={inputValues?.fire.details}
        touched={inputTouched.fire.details}
        error={errorsInputValues?.fire?.details}
        handleChange={changeInputForTextArea}
        name={"fire.details"}
        id={"fire.details"}
        placeholder={""}
      />
      <FormCheckboxOpenClose
        label="Tuve lesiones"
        checked={isInjured}
        setChecked={setIsInjured}
        changeInputForCheckbox={changeInputForCheckbox}
        name="fire.injured"
        id="fire.injured"
        instructions=""
      />
      <FormOptional
        children={
          <>
            <FormInput
              label="Tipo de lesion*"
              value={inputValues?.fire.injuries}
              touched={false}
              error={""}
              handleChange={changeInputValues}
              name="fire.injuries"
              id="fire.injuries"
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
        name="fire.ambulance"
        id="fire.ambulance"
        instructions=""
      />
      <FormOptional
        children={
          <>
            <FormInput
              label="Destino de la ambulancia"
              value={inputValues?.fire.ambulanceTo}
              touched={false}
              error={""}
              handleChange={changeInputValues}
              name="fire.ambulanceTo"
              id="fire.ambulanceTo"
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
        name="fire.thirdInjured"
        id="fire.thirdInjured"
        instructions=""
      />
      <FormOptional
        children={
          <>
            <FormInput
              label="Cantidad*"
              value={inputValues?.fire?.amount}
              touched={inputTouched?.fire?.amount}
              error={errorsInputValues?.fire?.amount}
              handleChange={changeInputValuesNumber}
              name="fire.amount"
              id="fire.amount"
              type="text"
              placeholder="Ingresar destino"
            />
          </>
        }
        checked={thereAreInjured}
      />
    </SectionFormContainer>
  );
}
export default FormFireVehicle;
