import {
  AllReportValues,
  ChangeEventType,
  ClientCreateReportValues,
  ClientInspectedCreateReportValues,
  ErrorsAllReportValues,
  ErrorsClientCreateReportValues,
  ErrorsClientInspectedCreateReportValues,
  TouchedAllReportValues,
  TouchedClientCreateReportValues,
  TouchedClientInspectedCreateReportValues,
} from "@/pages";
import {
  FormCheckboxOpenClose,
  FormImages,
  FormInput,
  FormOptional,
  FormRange,
  FormScheduleInput,
  FormSeparateImages,
} from "..";
import { useState } from "react";
import { SectionFormContainer } from "@/styledComponents";
import { objForArrOne } from "@/utilities/separateImages.utility";

interface Props {
  inputValues:
    | AllReportValues
    | ClientCreateReportValues
    | ClientInspectedCreateReportValues;
  inputTouched:
    | TouchedAllReportValues
    | TouchedClientCreateReportValues
    | TouchedClientInspectedCreateReportValues;
  errorsInputValues:
    | Partial<ErrorsAllReportValues>
    | Partial<ErrorsClientCreateReportValues>
    | Partial<ErrorsClientInspectedCreateReportValues>
    | undefined;
  changeInputValues: (e: ChangeEventType) => void;
  changeInputForCheckbox: (e: ChangeEventType) => void;
  changeInputForImages: (e: ChangeEventType, images: string[]) => void;
  changeInputForSchedule: (name: string, schedule: string) => void;
  changeInputValuesNumber: (e: ChangeEventType) => void;
}

function FormTheftVehicle({
  inputValues,
  inputTouched,
  errorsInputValues,
  changeInputValues,
  changeInputForCheckbox,
  changeInputForImages,
  changeInputForSchedule,
  changeInputValuesNumber,
}: Props) {
  const [isTire, setIsTire] = useState<boolean>(false);
  return (
    <SectionFormContainer>
      <FormScheduleInput
        error={errorsInputValues?.theftVehicle?.time}
        label="Horario del suceso"
        objectName="theftVehicle.time"
        touched={inputTouched?.theftVehicle?.time}
        changeInputForSchedule={changeInputForSchedule}
      />
      <FormInput
        label="Fecha del suceso*"
        value={inputValues?.theftVehicle?.date}
        touched={inputTouched?.theftVehicle?.date}
        error={errorsInputValues?.theftVehicle?.date}
        handleChange={changeInputValues}
        name="theftVehicle.date"
        id="theftVehicle.date"
        type="date"
        placeholder="Ingresar fecha"
      />
      <FormInput
        label="Ubicacion del suceso*"
        value={inputValues?.theftVehicle?.location}
        touched={inputTouched?.theftVehicle?.location}
        error={errorsInputValues?.theftVehicle?.location}
        handleChange={changeInputValues}
        name="theftVehicle.location"
        id="theftVehicle.location"
        type="text"
        placeholder="Ingresar ubicacion"
      />
      <FormCheckboxOpenClose
        label="Neumatico robado"
        checked={isTire}
        setChecked={setIsTire}
        changeInputForCheckbox={changeInputForCheckbox}
        name="theftVehicle.isTire"
        id="theftVehicle.isTire"
        instructions=""
      />
      <FormOptional
        children={
          <>
            <FormInput
              label="Cantidad*"
              value={inputValues?.isTire.tireAmount}
              touched={inputTouched?.isTire?.tireAmount}
              error={errorsInputValues?.isTire?.tireAmount}
              handleChange={changeInputValuesNumber}
              name="isTire.tireAmount"
              id="isTire.tireAmount"
              type="text"
              placeholder="Ingresar cantidad"
            />
            <FormRange
              label="Desgaste de neumaticos*"
              id="isTire.tireWear"
              name="isTire.tireWear"
              changeInputValues={changeInputValues}
            />
            <FormSeparateImages
              label="Añadir foto de un neumatico*"
              error={errorsInputValues?.isTire?.tirePhoto}
              id="isTire.tirePhoto"
              name="isTire.tirePhoto"
              changeInputForImages={changeInputForImages}
              instructionsImages={['Donde se visible marca y modelo']}
              objForArr={objForArrOne}
              quantity={1}
            />
            <FormInput
              label="Localidad de reposicion*"
              value={inputValues?.isTire.replacementLocation}
              touched={inputTouched?.isTire?.replacementLocation}
              error={errorsInputValues?.isTire?.replacementLocation}
              handleChange={changeInputValues}
              name="isTire.replacementLocation"
              id="isTire.replacementLocation"
              type="text"
              placeholder="Ingresar localidad"
            />
          </>
        }
        checked={isTire}
      />
      <FormImages
        label="Añadir foto de la denuncia*"
        error={errorsInputValues?.theftVehicle?.reportPhoto}
        id="theftVehicle.reportPhoto"
        name="theftVehicle.reportPhoto"
        changeInputForImages={changeInputForImages}
        instructionsImages={["Frente", "Dorso"]}
      />
    </SectionFormContainer>
  );
}
export default FormTheftVehicle;
