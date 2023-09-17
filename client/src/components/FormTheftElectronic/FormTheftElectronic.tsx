import {
  AllReportValues,
  ChangeEventType,
  ErrorsAllReportValues,
  TouchedAllReportValues,
} from "@/pages";
import { FormImages, FormInput, FormScheduleInput } from "..";
import { SectionFormContainer } from "@/styledComponents";

interface Props {
  inputValues: AllReportValues;
  inputTouched: TouchedAllReportValues;
  errorsInputValues: Partial<ErrorsAllReportValues> | undefined;
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
      <FormImages
        label="Añadir foto de la denuncia*"
        error={errorsInputValues?.theftElectronic?.reportPhoto}
        id="theftElectronic.reportPhoto"
        name="theftElectronic.reportPhoto"
        changeInputForImages={changeInputForImages}
        instructionsImages={['Frente','Dorso']}
      />
    </SectionFormContainer>
  );
}
export default FormTheftElectronic;
