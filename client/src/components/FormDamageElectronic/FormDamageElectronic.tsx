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
import { FormImages, FormInput, FormScheduleInput } from "..";
import { SectionFormContainer } from "@/styledComponents";

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

function FormDamageElectronic({
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
        error={errorsInputValues?.damageElectronic?.time}
        label="Horario del suceso"
        objectName="damageElectronic.time"
        touched={inputTouched?.damageElectronic?.time}
        changeInputForSchedule={changeInputForSchedule}
      />
      <FormInput
        label="Fecha del suceso*"
        value={inputValues?.damageElectronic?.date}
        touched={inputTouched?.damageElectronic?.date}
        error={errorsInputValues?.damageElectronic?.date}
        handleChange={changeInputValues}
        name="damageElectronic.date"
        id="damageElectronic.date"
        type="date"
        placeholder="Ingresar fecha"
      />
      <FormInput
        label="Ubicacion del suceso*"
        value={inputValues?.damageElectronic?.location}
        touched={inputTouched?.damageElectronic?.location}
        error={errorsInputValues?.damageElectronic?.location}
        handleChange={changeInputValues}
        name="damageElectronic.location"
        id="damageElectronic.location"
        type="text"
        placeholder="Ingresar ubicacion"
      />
      <FormInput
        label="Descripcion del daño*"
        value={inputValues?.damageElectronic?.details}
        touched={inputTouched?.damageElectronic?.details}
        error={errorsInputValues?.damageElectronic?.details}
        handleChange={changeInputValues}
        name="damageElectronic.details"
        id="damageElectronic.details"
        type="text"
        placeholder="Ingresar daño"
      />
      <FormImages
        label="Añadir foto del lugar dañado*"
        error={errorsInputValues?.damageElectronic?.reportPhoto}
        id="damageElectronic.reportPhoto"
        name="damageElectronic.reportPhoto"
        changeInputForImages={changeInputForImages}
        instructionsImages={["Daño"]}
      />
      <FormInput
        label="Monto de reparacion (si lo hubo)"
        value={inputValues?.damageElectronic?.budget}
        touched={inputTouched?.damageElectronic?.budget}
        error={errorsInputValues?.damageElectronic?.budget}
        handleChange={changeInputValues}
        name="damageElectronic.budget"
        id="damageElectronic.budget"
        type="text"
        placeholder="Ingresar monto"
      />
    </SectionFormContainer>
  );
}
export default FormDamageElectronic;
