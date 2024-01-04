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
import { SectionFormContainer } from "@/styledComponents";
import { objForArrTwo } from "@/utilities/separateImages.utility";
import { FormInput, FormScheduleInput, FormSeparateImages } from "..";

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
}

function FormTheftElectronic({
  inputValues,
  inputTouched,
  errorsInputValues,
  changeInputValues,
  changeInputForImages,
  changeInputForSchedule,
}: Props) {
  return (
    <SectionFormContainer>
      <FormScheduleInput
        error={errorsInputValues?.theftElectronic?.time}
        label="Horario del suceso"
        objectName="theftElectronic.time"
        touched={inputTouched?.theftElectronic?.time}
        changeInputForSchedule={changeInputForSchedule}
      />
      <FormInput
        label="Fecha del suceso*"
        value={inputValues?.theftElectronic?.date}
        touched={inputTouched?.theftElectronic?.date}
        error={errorsInputValues?.theftElectronic?.date}
        handleChange={changeInputValues}
        name="theftElectronic.date"
        id="theftElectronic.date"
        type="date"
        placeholder="Ingresar fecha"
      />
      <FormInput
        label="Ubicacion del suceso*"
        value={inputValues?.theftElectronic?.location}
        touched={inputTouched?.theftElectronic?.location}
        error={errorsInputValues?.theftElectronic?.location}
        handleChange={changeInputValues}
        name="theftElectronic.location"
        id="theftElectronic.location"
        type="text"
        placeholder="Ingresar ubicacion"
      />
      <FormSeparateImages
        label="Añadir foto de la denuncia*"
        error={errorsInputValues?.theftElectronic?.reportPhoto}
        id="theftElectronic.reportPhoto"
        name="theftElectronic.reportPhoto"
        changeInputForImages={changeInputForImages}
        instructionsImages={["Frente", 'Dorso']}
        objForArr={objForArrTwo}
        quantity={2}
      />
    </SectionFormContainer>
  );
}
export default FormTheftElectronic;
